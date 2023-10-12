import { mdiTrendingUp, mdiTrendingNeutral, mdiTrendingDown, mdiReceipt } from '@mdi/js'
import React from 'react'
import { Transaction } from '../../../interfaces'
import CardBox from '../../ui/CardBox'
import PillTag from '../../ui/PillTag'
import TokenAvatar from '../../ui/TokenAvatar'

type Props = {
  transaction: Transaction
}

const CardBoxWhaleAsset = ({token}) => {
  const pillColor = () => {
    if (token.percent >= 60) {
      return 'success'
    }

    if (token.percent >= 40) {
      return 'warning'
    }

    return 'danger'
  }

  const pillIcon = {
    success: mdiTrendingUp,
    warning: mdiTrendingNeutral,
    danger: mdiTrendingDown,
  }[pillColor()] 

  return (
    <CardBox className="mb-6 last:mb-0">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col md:flex-row items-center justify-start mb-6 md:mb-0">
          <TokenAvatar className="w-12 h-12 md:mr-6 mb-6 md:mb-0" src={token.logo_url} username={token.symbol} />
          <div className="text-center md:text-left overflow-hidden">
            <h4 className="text-xl text-ellipsis">{token.id}</h4>
            <p className="text-gray-500 dark:text-slate-400">
              {token.chain_id} - {token.usd_value}
            </p>
          </div>
        </div>

        <PillTag color={'success'} label={`${token.percent.toFixed(2)}%`} />
      </div>
    </CardBox>
  )
}

export default CardBoxWhaleAsset
