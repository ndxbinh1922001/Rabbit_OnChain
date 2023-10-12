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
import { useSampleClients, useSampleTransactions } from '../hooks/sampleData'
import CardBox from '../components/ui/CardBox'
import { sampleChartData } from '../components/ChartLineSample/config'
import NotificationBar from '../components/ui/NotificationBar'
import TokenList from '../components/partials/tokens/List'
import { getPageTitle } from '../config'

const Tokens = () => {
  const { clients } = useSampleClients()
  const { transactions } = useSampleTransactions()

  const clientsListed = clients.slice(0, 4)

  const [chartData, setChartData] = useState(sampleChartData())

  const fillChartData = (e: React.MouseEvent) => {
    e.preventDefault()

    setChartData(sampleChartData())
  }

  return (
    <>
      <Head>
        <title>{getPageTitle('Tokens')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton icon={mdiAccountMultiple} title="Tokens" />

        <NotificationBar color="info" icon={mdiMonitorCellphone}>
          We've screened out a bunch of token addresses to help you keep track of all the significant happenings on-chain
        </NotificationBar>

        <CardBox hasTable>
          <TokenList />
        </CardBox>
      </SectionMain>
    </>
  )
}

Tokens.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default Tokens
