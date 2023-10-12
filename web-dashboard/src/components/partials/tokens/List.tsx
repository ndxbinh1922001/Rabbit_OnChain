import { mdiEye, mdiTrashCan } from '@mdi/js'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Client } from '../../../interfaces'
import Pagination from '../../ui/Pagination'
import LoadingBlock from '../../ui/LoadingBlock'
import UserAvatar from '../../ui/UserAvatar'
import WhaleService from '../../../core/service/whale.service'
import NearTokenService from '../../../core/service/near.token.service'
import { truncateAddr, to$ } from '../../../core/util'
import Tooltip from '../../ui/Tooltip'

const TokenList = () => {
  const [tokensData, setTokensData] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [numPages, setNumPages] = useState(0)
  const [loading, setLoading] = useState(true)

  const loadTokens = () => {
    setLoading(true)
    NearTokenService.getTokens({
      page: currentPage
    })
      .then(
        (result) => {
          setLoading(false)
          console.log(result)
          setTokensData(result.data)
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
    loadTokens()
  }, [])

  useEffect(() => {
    // if (currentPage )
    console.log('userEffect change page in list whales now');
    loadTokens()
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
            <th>Token </th>
            <th>Price</th>
            <th>Change(%)</th>
            <th>Volume(24h)</th>
            <th>Market Cap</th>
            <th>Holders</th>
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

          {!loading && tokensData.length > 0 && tokensData.map((token: any) => (
            <tr key={token.id}>
              <td data-label="Addresse">
                <Link href={`/token?adr=${encodeURIComponent(token.symbol)}`}>
                  <img src={token.icon} className="mr-2" style={{'display': 'inline-block', width: '1.25rem', height: '1.25rem', verticalAlign: 'text-top'}} />
                  {token.name}
                </Link>
              </td>
              <td data-label=""><b>{to$(token.price)}</b></td>
              <td data-label="">{token.change_24}%</td>
              <td data-label="">{to$(token.volume_24h)}</td>
              <td data-label="">{to$(token.market_cap)}</td>
              <td data-label="">{token.holders}</td>
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

export default TokenList
