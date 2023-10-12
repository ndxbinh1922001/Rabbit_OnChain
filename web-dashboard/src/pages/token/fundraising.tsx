// TradingViewWidget.jsx

import { mdiAccount, mdiMail } from '@mdi/js';
import { Field, Form, Formik } from 'formik';
import React, { useEffect, useRef } from 'react';
import TradingViewWidget from '../../components/partials/token/ChartTradingview';
import CardBox from '../../components/ui/CardBox';
import FormField from '../../components/ui/FormField';

export default function TokenFundraising() {

  const data = [
    {
      id: 1,
      investor: 'Jump Crypto',
      type: 'Fund	',
      location: 'Unknown',
      year_found: '--',
      portfolio_comp: 59,
      email: '--',
    },

    {
      id: 2,
      investor: 'Alameda Research',
      type: 'Fund	',
      location: 'Hong Kong',
      year_found: '2017',
      portfolio_comp: 150,
      email: 'info@alameda-research.com',
    },

    {
      id: 3,
      investor: 'Dragonfly Capital',
      type: 'Fund	',
      location: 'United States of America',
      year_found: '2018',
      portfolio_comp: 101,
      email: 'info@dragonflycapitalpartners.com',
    },

    {
      id: 4,
      investor: 'D1 Ventures',
      type: 'Fund	',
      location: 'China',
      year_found: '2019	',
      portfolio_comp: 47,
      email: 'hello@d1.ventures',
    },

  ];

  return (
    <CardBox hasTable>
      <table className='border-blue-300'>
          <thead>
              <tr>
                  <th>Investors</th>
                  <th>Type</th>
                  <th>Location</th>
                  <th>Year Founded</th>
                  <th>Portfolio Companies</th>
                  <th>Email Address</th>
              </tr>
          </thead>
          <tbody>
              { data && data.map((d: any) => {
                  return (
                      <tr key={d.id}>
                          <td data-label="Investors">
                             {d.investor} 
                          </td>
                          <td data-label="Type">
                            {d.type}
                          </td>
                          <td data-label="Location">
                            {d.location}
                          </td>
                          <td data-label="year">
                            {d.year_found}
                          </td>
                          <td data-label="portfolio_comp">
                            {d.portfolio_comp}
                          </td>
                          <td data-label="email">
                            {d.email}
                          </td>
                      </tr>    
                  )
              }) }
          </tbody>
      </table>
  </CardBox>
  );
}
