// TradingViewWidget.jsx

import { mdiAccount, mdiMail } from '@mdi/js';
import { Field, Form, Formik } from 'formik';
import React, { useEffect, useRef } from 'react';
import TradingViewWidget from '../../components/partials/token/ChartTradingview';
import CardBox from '../../components/ui/CardBox';
import FormField from '../../components/ui/FormField';

export default function TokenOverview() {

  return (
    <div className="flex flex-col w-full mb-2 lg:flex-row lg:space-x-2 space-y-2 lg:space-y-0 lg:mb-4">
            <CardBox className="w-full lg:w-2/3">
              <TradingViewWidget />

              <div className="content-widget markdown mt-3">
                <h2 className='mb-3 text-stone-800'><strong>About Ref Finance</strong></h2>
                
                <h3 className="text-assistive">What is Ref Finance and how does it work? What is Ref Finance token REF how is it used? Where can I get Ref Finance REF tokens?  What are the key features and benefits of Ref Finance? How can I learn more about Ref Finance and stay up-to-date?</h3>
                <p>Ref Finance is a community-led, multi-purpose DeFi platform built on NEAR Protocol. Ref Finance takes full advantage of Near’s low fees, one-to-two second finality, and WebAssembly-based runtime (hello, Rust smart contracts!).</p>
                <p>In addition to the advantages of being built on top of NEAR, Ref Finance provides:</p>
                <ul>
                  <li>Multiple pools in one contract</li>
                  <li>Atomic transactions</li>
                  <li>Customisable pool fee</li>
                </ul>
                <div className="content-grants">
                  <span className="content-grants-title mr-2"><strong>Grants</strong>:</span>
                  <div className="tooltip label-grants near" data-tooltip="Received NEAR Grant"><svg className="icon icon-grants" height="20" width="20"></svg>NEAR Grant</div><div className="tooltip label-grants proximity" data-tooltip="Received Proximity Grant"><svg className="icon icon-grants" height="20" width="20"></svg>Proximity Grant</div></div>
                  <h3 className="text-assistive">Who invested in Ref Finance? Ref Finance Funding, Financials, Valuation &amp; Investors</h3><p><strong>Investors</strong>: <small>Alameda Research, D1 Ventures, KuCoin, Jump Crypto, Dragonfly Capital Partners, Block Dream Fund, Move Capital, SevenX Ventures,  WOO Network, Puzzle Ventures</small></p>
              </div>

              <div className="content-widget article-widget">
                <h2 className="content-title">Ref Finance News</h2>
                <h3 className="text-assistive">Ref Finance funding news, strategic partnership news, announcements, product updates, tutorials articles, how-to, and guides</h3>
                <div className="articles-container">
                  <a className="article-item" target="_blank" href="/articles/ref-quarterly-update-q4-2022" title="Ref Quarterly Update: Q4 2022"><img className="article-image" src="https://awesomenear-spaces.fra1.digitaloceanspaces.com/production/articles/ref-quarterly-update-q4-2022/1*1LdtIZSKL4Jtp7Y4glefWw.jpeg" alt="Ref Quarterly Update: Q4 2022" loading="lazy" />
                  <div className="article-detail"><h3 className="article-title">Ref Quarterly Update: Q4 2022</h3><div className="article-info">January 6, 2023</div></div></a><a className="article-item" target="_blank" href="/articles/why-ref-v2-is-better-than-uni-v3" title="Why Ref v2 is Better than Uni v3"><img className="article-image" src="https://awesomenear-spaces.fra1.digitaloceanspaces.com/production/articles/why-ref-v2-is-better-than-uni-v3/1*CnNL-ikKniBm9F0kAM93uQ.jpeg" alt="Why Ref v2 is Better than Uni v3" loading="lazy" /><div className="article-detail"><h3 className="article-title">Why Ref v2 is Better than Uni v3</h3><div className="article-info">December 13, 2022</div></div></a><a className="article-item" target="_blank" href="/articles/why-ref-finance-v2-is-better-than-uniswap-v3" title="Why Ref Finance v2 is Better than Uniswap v3"><img className="article-image" src="https://awesomenear-spaces.fra1.digitaloceanspaces.com/production/articles/why-ref-finance-v2-is-better-than-uniswap-v3/why-ref-finance-v2-is-better-than-uniswap-v3.jpg" alt="Why Ref Finance v2 is Better than Uniswap v3" loading="lazy" />
                  <div className="article-detail"><h3 className="article-title">Why Ref Finance v2 is Better than Uniswap v3</h3><div className="article-info">December 11, 2022</div></div></a><a className="article-item" target="_blank" href="/articles/not-so-stable-coin-an-analysis-of-the-market-and-the-us-stablecoin-bill" title="Not So Stable-coin: An Analysis of the Market and the US Stablecoin Bill">
                    <img className="article-image" src="https://awesomenear-spaces.fra1.digitaloceanspaces.com/production/articles/not-so-stable-coin-an-analysis-of-the-market-and-the-us-stablecoin-bill/1*cd93HTenfyDPwltGplO5sw.jpeg" alt="Not So Stable-coin: An Analysis of the Market and the US Stablecoin Bill" loading="lazy" /><div className="article-detail"><h3 className="article-title">Not So Stable-coin: An Analysis of the Market and the US Stablecoin Bill</h3><div className="article-info">November 3, 2022</div></div></a><a className="article-item" target="_blank" href="/articles/ref-quarterly-update-q3-2022" title="Ref Quarterly Update: Q3 2022"><img className="article-image" src="https://awesomenear-spaces.fra1.digitaloceanspaces.com/production/articles/ref-quarterly-update-q3-2022/1*sGsqGieatbOV8eznOn8xUg.jpeg" alt="Ref Quarterly Update: Q3 2022" loading="lazy" />
                    <div className="article-detail"><h3 className="article-title">Ref Quarterly Update: Q3 2022</h3><div className="article-info">October 11, 2022</div></div></a><a className="article-item" target="_blank" href="/articles/sweat-x-ref-finance-the-comprehensive-bridging-staking-user-guide" title="SWEAT x Ref Finance: The comprehensive bridging &amp; staking user guide"><img className="article-image" src="https://awesomenear-spaces.fra1.digitaloceanspaces.com/production/articles/sweat-x-ref-finance-the-comprehensive-bridging-staking-user-guide/1*ysxI96HDKSMGua3NkSrPIw.jpeg" alt="SWEAT x Ref Finance: The comprehensive bridging &amp; staking user guide" loading="lazy" />
                    <div className="article-detail"><h3 className="article-title">SWEAT x Ref Finance: The comprehensive bridging &amp; staking user guide</h3><div className="article-info">September 30, 2022</div></div></a><a className="article-item" target="_blank" href="/articles/ref-v2-unlock-concentrated-liquidity-for-better-capital-efficiency" title="Ref V2 — Unlock concentrated liquidity for better capital efficiency"><img className="article-image" src="https://awesomenear-spaces.fra1.digitaloceanspaces.com/production/articles/ref-v2-unlock-concentrated-liquidity-for-better-capital-efficiency/ref-v2-unlock-concentrated-liquidity-for-better-capital-efficiency.jpg" alt="Ref V2 — Unlock concentrated liquidity for better capital efficiency" loading="lazy" /><div className="article-detail"><h3 className="article-title">Ref V2 — Unlock concentrated liquidity for better capital efficiency</h3>
                  <div className="article-info">September 13, 2022</div></div></a>
                  </div>
                </div>
            </CardBox>
            {/* <div className="w-full lg:w-2/3" style={{'height': '600px'}}>
              <TradingViewWidget />
            </div> */}

            <CardBox className="w-full lg:w-1/3">
              <div>
                <Formik
                initialValues={{
                  fullname: 'John Doe',
                  email: 'john.doe@example.com',
                  phone: '',
                  color: 'green',
                  textarea: 'Hello',
                }}
                onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
              >
                <Form>
                  <FormField label="REF Token Contract" icons={[mdiAccount, mdiMail]}>
                  </FormField>

                  <FormField
                    label="NEAR Chain (NEP-141)"
                    labelFor="phone"
                    help="See more on near explorer"
                  >
                    <Field name="phone" placeholder="token.v2.ref-finance.near" id="phone" />
                  </FormField>

                  <FormField
                    label="Aurora Chain"
                    labelFor="phone"
                    help="See more on near explorer"
                  >
                    <Field name="phone" placeholder="0x221292443758f63563a1ed04b547278b05845fcb" id="phone" />
                  </FormField> 
                </Form>
              </Formik>
              </div>

              <div className="near-content">
                <div className="content-widget chart-widget">
                  <h2 className="content-title">Ref Finance Token Stats<span className="text-assistive"> Token tracker, NEAR and Aurora Explorer</span></h2>
                  <div className="stats-widget">
                    <h3 className="stats-widget-symbol h4"><span className="text-assistive">Ref Finance Token Symbol is </span>REF</h3>
                    <h3><span className="text-assistive">REF Price Today</span></h3>
                    <div className="stats-widget-value h4">$0.136976</div>
                  </div>
                  <div className="stats-widget">
                    <h3 className="stats-widget-label tooltip" data-tooltip="Price All Time High / All Time Low"><span className="text-assistive">REF Price All Time High / All Time Low - </span>Price ATH / ATL ⓘ</h3>
                    <div className="stats-widget-value">$10.64 / $0.089722</div>
                  </div>
                  <div className="stats-widget">
                    <h3 className="stats-widget-label"><span className="text-assistive">REF </span>Market Cap</h3>
                    <div className="stats-widget-value">$3,317,145</div>
                  </div>
                  <div className="stats-widget">
                    <h3 className="stats-widget-label"><span className="text-assistive">REF </span>Market Cap Rank</h3>
                    <div className="stats-widget-value">#1480</div>
                  </div>
                  <div className="stats-widget">
                    <h3 className="stats-widget-label"><span className="text-assistive">REF </span>24H Volume</h3>
                    <div className="stats-widget-value">$172,415</div>
                  </div>
                  <div className="stats-widget">
                    <h3 className="stats-widget-label tooltip" data-tooltip="Total Value Locked"><span className="text-assistive">REF Total Value Locked - </span>TVL ⓘ</h3>
                    <div className="stats-widget-value">$60,084,598</div>
                  </div>
                  <div className="stats-widget">
                    <h3 className="stats-widget-label tooltip" data-tooltip="Fully Diluted Valuation"><span className="text-assistive">REF Fully Diluted Valuation - </span>FDV ⓘ</h3>
                    <div className="stats-widget-value">-</div>
                  </div>
                  <div className="stats-widget">
                    <h3 className="stats-widget-label"><span className="text-assistive">REF </span>Circulating Supply</h3>
                    <div className="stats-widget-value">24,101,343</div>
                  </div>
                  <div className="stats-widget">
                    <h3 className="stats-widget-label"><span className="text-assistive">REF </span>Total Supply</h3>
                    <div className="stats-widget-value">100,000,000</div>
                  </div>
                  <div className="stats-widget">
                    <div className="stats-widget-source">Data Source: <a href="https://www.coingecko.com/coins/ref-finance" target="_blank" rel="noopener noreferrer" className="text-gray">CoinGecko</a></div>
                  </div>
                </div>
              </div>
            </CardBox>
          </div>
  );
}
