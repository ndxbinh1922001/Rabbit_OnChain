import { mdiEye, mdiTrashCan } from '@mdi/js'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Client } from '../../../interfaces'
import Pagination from '../../ui/Pagination'
import LoadingBlock from '../../ui/LoadingBlock'
import UserAvatar from '../../ui/UserAvatar'
import WhaleService from '../../../core/service/whale.service'
import { truncateAddr, to$ } from '../../../core/util'
import Tooltip from '../../ui/Tooltip'

const WhaleList = () => {
  const [whaleData, setWhaleData] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [numPages, setNumPages] = useState(0)
  const [loading, setLoading] = useState(true)

  const loadWhales = () => {
    setLoading(true)
    WhaleService.getWhales({
      page: currentPage
    })
      .then(
        (result) => {
          setLoading(false)
          setWhaleData(result.whales)
          setNumPages(result.totalPage)
        },
        (error) => {
          setLoading(false)
          console.log(error);
        }
      )
  };

  useEffect(() => {
    console.log('userEffect in list whales now');
    loadWhales()
  }, [])

  useEffect(() => {
    // if (currentPage )
    console.log('userEffect change page in list whales now');
    loadWhales()
  }, [currentPage])

  const [isModalInfoActive, setIsModalInfoActive] = useState(false)
  const [isModalTrashActive, setIsModalTrashActive] = useState(false)

  const handleModalAction = () => {
    setIsModalInfoActive(false)
    setIsModalTrashActive(false)
  }

  const getPercentage = (n, total) => {
    return Math.floor((n / total) * 100);
  }

  return (
    <>
      <table className='border-blue-300'>
        <thead>
          <tr>
            <th>Address</th>
            <th>Net worth</th>
            <th>Top tokens</th>
            <th>Top protocols</th>
            <th>Last Transaction</th>
          </tr>
        </thead>
        <tbody>

          {loading &&
            <>
              <tr>
                <th colSpan={5}>
                  <LoadingBlock />
                </th>
              </tr>
            </>
          }

          {!loading && whaleData.length > 0 && whaleData.map((client: any) => (
            <tr key={client.id}>
              <td data-label="Addresse">
                <Link href={`/profile?adr=${encodeURIComponent(client.adr)}`}>
                  {truncateAddr(client.adr)}
                </Link>
              </td>
              <td data-label="Net worth"><b>{to$(client.usd_value)}</b></td>
              <td data-label="Top tokens">
                <div>
                  {client && client['stats'] && client['stats']['top_coins'] &&
                    client['stats']['top_coins'].map((coin: any, i: number) => {
                      if (i < 4 && getPercentage(coin.usd_value, client.usd_value) > 0) {
                        return (

                          <Tooltip key={coin.id} message={<table>
                            <tbody>
                              <tr>
                                <td>Token</td>
                                <td>{coin.symbol}</td>
                              </tr>
                              <tr>
                                <td>Amount</td>
                                <td>{coin.amount}</td>
                              </tr>
                              <tr>
                                <td>Price</td>
                                <td>{to$(coin.price)}</td>
                              </tr>
                              <tr>
                                <td>Net worth</td>
                                <td>{to$(coin.usd_value)}</td>
                              </tr>
                            </tbody>
                          </table>}>

                            <span key={coin.id} className=" p-1 border border-indigo-600 rounded mr-2">
                              <img className='w-5 inline-block mr-1 align-top' src={coin.logo_url} alt={coin.symbol} />
                              <span>{getPercentage(coin.usd_value, client.usd_value)} %</span>
                            </span>
                          </Tooltip>


                        )
                      }
                    })
                  }
                </div>
              </td>
              <td data-label="Top protocols<"></td>
              <td data-label="Last Transaction<"></td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        totalPages={numPages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  )
}

export default WhaleList
