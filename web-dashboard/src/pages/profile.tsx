import {
  mdiSharkFin,
  mdiChartTimelineVariant,
} from '@mdi/js'
import Head from 'next/head'
import type { ReactElement } from 'react'
import React, { useState, useEffect } from 'react'
import LayoutAuthenticated from '../layouts/Authenticated'
import SectionMain from '../components/partials/SectionMain'
import SectionTitleLine from '../components/partials/profile/SectionTitleLine'
import CardBoxWidget from '../components/ui/CardBoxWidget'
import Tabs from '../components/ui/Tabs'
import { getPageTitle } from '../config'
import { useAppSelector } from '../stores/hooks'
import { useRouter } from 'next/router'
import WhaleService from '../core/service/whale.service'
import LoadingBlock from '../components/ui/LoadingBlock'
import { truncateAddr, to$, getQueryVariable } from '../core/util'

const ProfilePage = () => {
  const [whaleData, setWhaleData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [adr, setAdr] = useState('')
  
  const loadWhale = (whaleAdr) => {
    setLoading(true)
    WhaleService.getWhale({
      adr: whaleAdr
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
      loadWhale(getQueryVariable('adr'));
    }
  }, [])

  return (
    <>
      <Head>
        <title>{getPageTitle('Profile')}</title>
      </Head>

      {loading && <LoadingBlock /> }

      {!loading && whaleData && 

        <SectionMain>
          <SectionTitleLine icon={mdiSharkFin} title={adr.toString()} main>
            <div className='w-32'>
              <CardBoxWidget
                trendLabel="12%"
                trendType="up"
                trendColor="success"
                icon={mdiChartTimelineVariant}
                iconColor="danger"
                number={parseFloat(whaleData.usd_value)}
                //number={5268888}
                numberPrefix="$"
                label=""
              />
            </div>
          </SectionTitleLine>

          <Tabs color="pink" data={whaleData} />

        </SectionMain>

      }
    </>
  )
}

ProfilePage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default ProfilePage
