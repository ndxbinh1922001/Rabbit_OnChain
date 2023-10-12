// TradingViewWidget.jsx

import React, { useEffect, useRef } from 'react';
import CardBox from '../../components/ui/CardBox';

export default function TokenTeam() {

  const data = [
    {
      id: 1,
      member: 'Marco',
      position: 'Lead Backend Developer',
      media: '',
    },

    {
      id: 2,
      member: 'Joe',
      position: 'Lead Frontend Developer',
      media: '',
    },

    {
      id: 3,
      member: 'Gordon',
      position: 'Senior Backend Developer',
      media: '',
    },
    {
      id: 4,
      member: 'ZQ',
      position: 'Senior Fullstack Dev',
      media: '',
    },

    {
      id: 5,
      member: 'Dom',
      position: 'Devops',
      media: '',
    },
    {
      id: 6,
      member: 'Max',
      position: 'Frontend Developer',
      media: '',
    },
    {
      id: 7,
      member: 'Nature',
      position: 'Frontend Develope',
      media: '',
    },
    {
      id: 8,
      member: 'Willa',
      position: 'Lead QA Engineer',
      media: '',
    },
    {
      id: 9,
      member: 'Ben',
      position: 'Product & Project Manager',
      media: '',
    },
    {
      id: 10,
      member: 'Fay',
      position: 'Researcher Analyst',
      media: '',
    },
    {
      id: 11,
      member: 'Ray',
      position: 'Researcher Analyst',
      media: '',
    },
    {
      id: 12,
      member: 'Fauve',
      position: 'Lead Marketing',
      media: '',
    },

  ];

  return (
    <CardBox hasTable>
      <table className='border-blue-300'>
          <thead>
              <tr>
                  <th>Member</th>
                  <th>Position</th>
                  <th>Media</th>
              </tr>
          </thead>
          <tbody>
              { data && data.map((d: any) => {
                  return (
                      <tr key={d.id}>
                          <td data-label="Member">
                             {d.member} 
                          </td>
                          <td data-label="Position">
                            {d.position}
                          </td>
                          <td data-label="Media">
                            {d.media}
                          </td>
                      </tr>    
                  )
              }) }
          </tbody>
      </table>
  </CardBox>
  );
}
