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
import React, { useState, useEffect } from 'react'
import type { ReactElement } from 'react'
import BaseButton from '../components/ui/BaseButton'
import LayoutAuthenticated from '../layouts/Authenticated'
import SectionMain from '../components/partials/SectionMain'
import SectionTitleLineWithButton from '../components/ui/SectionTitleLineWithButton'
import CardBoxWidget from '../components/ui/CardBoxWidget'
import CardBoxTransaction from '../components/ui/CardBoxTransaction'
import { Client, Transaction } from '../interfaces'
import CardBoxClient from '../components/ui/CardBoxClient'
import CardBox from '../components/ui/CardBox'
import { getPageTitle } from '../config'
import { getQueryVariable } from '../core/util'

const ProFeatures = () => {

  // use getQueryVariable
  useEffect(() => {
    if (getQueryVariable('transactionHashes')) {
      const url = "/my-profile?transactionHashes=" + getQueryVariable('transactionHashes') + "&action=bought-nft";
      window.location.href = url;
    }
  }, []); 

  const buyNft = async (title, rarity, amount) => {
    const rs = await window['rabbitNft'].mintNft(title, rarity, amount);
    console.log('rs buyNft: ', rs);
  }

  return (
    <>
      <Head>
        <title>{getPageTitle('Pro Features')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton icon={mdiAccountMultiple} title="Pro Features" />
        <CardBox>

          <div className="container mx-auto px-4 py-18">
              <header className="text-center mb-16">
                <h1 className="text-5xl mb-4">Pro Features</h1>
                <p className="leading-normal text-grey-dark md:w-1/2 md:mx-auto">
                  Connect your web3 wallet and verify your account first
                </p>
              </header>
              
              <div className="lg:flex lg:items-center lg:-mx-2">
                
                <div className="mb-4 lg:mb-0 lg:w-1/3 lg:px-2 rounded-md">
                  <div className="text-center border border-grey-light lg:pb-16 rounded">
                    <div><img style={{'display': 'inline'}} src='/static/images/common.png' /> </div>
                    <h2 className="text-lg mb-4 text-5xl mt-4">Common</h2>
                    <div className="mb-6">
                      <span className="block text-5xl pb-2">1 <img className='rounded-full block h-auto w-full max-w-full bg-gray-100 dark:bg-slate-800' style={{'display': 'inline', 'width': '40px'}} src='/static/images/solana.png' /></span>
                      <span className="text-sm text-grey">Monthly</span>
                    </div>
                    <ul className="text-grey leading-loose list-reset mb-6">
                      <li>Overview</li>
                      <li>Fundraising</li>
                      <li>Tokenomics</li>
                      <li>Vesting Schedule</li>
                    </ul>
                    <BaseButton
                      label="Buy Now"
                      color="danger"
                      onClick={() => buyNft("Common", "Common", "1")}
                    />
                  </div>
                </div>
                
                <div className="mb-4 lg:mb-0 lg:w-1/3 lg:px-2 rounded-md">
                  <div className="text-center border border-grey-light lg:pb-16 rounded lg:shadow-lg">
                  <div><img style={{'display': 'inline'}} src='/static/images/rare.png' /> </div>
                    <h2 className="text-lg mb-4 text-5xl mt-4">Rare</h2>
                    <div className="mb-6">
                      <span className="block text-5xl pb-2">5 <img className='rounded-full block h-auto w-full max-w-full bg-gray-100 dark:bg-slate-800' style={{'display': 'inline', 'width': '40px'}} src='/static/images/solana.png' /></span>
                      <span className="text-sm text-grey">Monthly</span>
                    </div>
                    <ul className="text-grey-dark leading-loose list-reset mb-6">
                      <li>Common features</li>
                      <li>Social</li>
                      <li>Financial</li>
                      <li>Developer Activity</li>
                      <li>Network</li>
                      <li>Ownership</li>
                    </ul>
                    <BaseButton
                      label="Buy Now"
                      color="danger"
                      onClick={() => buyNft("Rare", "Rare", "5")}
                    />
                  </div>
                </div>
                
                <div className="mb-4 lg:mb-0 lg:w-1/3 lg:px-2 rounded-md">
                  <div className="text-center border border-grey-light lg:pb-16 rounded">
                  <div> 
                    <img style={{'display': 'inline'}} src='/static/images/mythic.png' />
                    </div>
                    <h2 className="text-lg mb-4 text-5xl mt-4">Mythic</h2>
                    <div className="mb-6">
                      <span className="block text-5xl pb-2">10 <img className='rounded-full block h-auto w-full max-w-full bg-gray-100 dark:bg-slate-800' style={{'display': 'inline', 'width': '40px'}} src='/static/images/solana.png' /></span>
                      <span className="text-sm text-grey">Monthly</span>
                    </div>

                    <ul className="text-grey leading-loose list-reset mb-6">
                      <li>Rare features</li>
                      <li>Whale Tracking</li>
                      <li>Competitor</li>
                      <li>Events</li>
                      <li>Alert</li>
                    </ul>
                    <BaseButton
                      label="Buy Now"
                      color="danger"
                      onClick={() => buyNft("Mythic", "Mythic", "10")}
                    />
                  </div>
                </div>
                
              </div>
            </div>
        </CardBox>
      </SectionMain>
    </>
  )
}

ProFeatures.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default ProFeatures
