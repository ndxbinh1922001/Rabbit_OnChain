import {
  mdiAccountMultiple,
  mdiCartOutline,
  mdiChartPie,
  mdiChartTimelineVariant,
  mdiGithub,
  mdiMonitorCellphone,
  mdiReload,
} from '@mdi/js'
import Head from 'next/head'
import React, { useState } from 'react'
import type { ReactElement } from 'react'
import BaseButton from '../components/ui/BaseButton'
import LayoutAuthenticated from '../layouts/Authenticated'
import SectionMain from '../components/partials/SectionMain'
import SectionTitleLineWithButton from '../components/ui/SectionTitleLineWithButton'
import CardBoxWidget from '../components/ui/CardBoxWidget'
import { useSampleClients, useSampleTransactions } from '../hooks/sampleData'
import CardBoxTransaction from '../components/ui/CardBoxTransaction'
import { Client, Transaction } from '../interfaces'
import CardBoxClient from '../components/ui/CardBoxClient'
import SectionBannerStarOnGitHub from '../components/ui/SectionBannerStarOnGitHub'
import CardBox from '../components/ui/CardBox'
import { sampleChartData } from '../components/ChartLineSample/config'
import ChartLineSample from '../components/ChartLineSample'
import NotificationBar from '../components/ui/NotificationBar'
import TableSampleClients from '../components/partials/TableSampleClients'
import WhaleList from '../components/partials/whales/List'
import { getPageTitle } from '../config'

const Whales = () => {
  return (
    <>
      <Head>
        <title>{getPageTitle('Whales')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton icon={mdiAccountMultiple} title="Whales" />

        <NotificationBar color="info" icon={mdiMonitorCellphone}>
          We've screened out a bunch of whale addresses to help you keep track of all the significant happenings on-chain
        </NotificationBar>

        <CardBox hasTable>
          <WhaleList />
        </CardBox>
      </SectionMain>
    </>
  )
}

Whales.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default Whales
