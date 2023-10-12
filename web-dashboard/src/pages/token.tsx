import {
  mdiSharkFin,
  mdiChartTimelineVariant,
  mdiAccount,
  mdiMail,
} from '@mdi/js'
import Head from 'next/head'
import type { ReactElement } from 'react'
import React, { useState, useEffect } from 'react'
import LayoutAuthenticated from '../layouts/Authenticated'
import SectionMain from '../components/partials/SectionMain'
import SectionTitleLine from '../components/partials/token/SectionTitleLine'
import CardBoxWidget from '../components/ui/CardBoxWidget'
import Tabs from './token/tokentabs'
import { getPageTitle } from '../config'
import { useRouter } from 'next/router'
import WhaleService from '../core/service/whale.service'
import LoadingBlock from '../components/ui/LoadingBlock'
import BaseButton from '../components/ui/BaseButton'
import { getQueryVariable } from '../core/util'

const TokenPage = () => {
  const router = useRouter()
  const [whaleData, setWhaleData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [adr, setAdr] = useState('')
  
  const loadWhale = () => {
    setLoading(true)
    WhaleService.getWhale({
      adr: adr
    })
      .then(
        (result) => {
          setLoading(false)
          console.log(result)
          setWhaleData(result.whale) 
        },
        (error) => {
          setLoading(false)
          console.log(error);
        }
      )
  };

  useEffect(() => {
    console.log('userEffect in list whales now');
    if (getQueryVariable('adr')) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setAdr(getQueryVariable('adr'));
    }
    setTimeout(() => {
      // loadWhale()
      setLoading(false)
    }, 500);
  }, [])

  return (
    <>
      <Head>
        <title>{getPageTitle('Token')}</title>
      </Head>

      {loading && <LoadingBlock /> }

      {!loading && 

        <SectionMain>
          <SectionTitleLine icon={mdiSharkFin} title={adr.toString()} main>
            <div className='w-32'>
              <div>
                  <BaseButton
                      label="Buy Now"
                      color="success"
                      className=''
                    />

                  <BaseButton
                      label="Share"
                      color="info"
                      className='ml-2'
                    />
              </div>
            </div>
          </SectionTitleLine>

            <Tabs color="pink" />
        </SectionMain>
      }
    </>
  )
}

TokenPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default TokenPage
