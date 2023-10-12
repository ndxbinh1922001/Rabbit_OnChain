import { mdiCog, mdiContentCopy, mdiCheckDecagram } from '@mdi/js'
import React, { Children, ReactNode } from 'react'
import BaseButton from '../../ui/BaseButton'
import BaseIcon from '../../ui/BaseIcon'
import IconRounded from '../../ui/IconRounded'
import PillTag from '../../ui/PillTag'

type Props = {
  icon: string
  title: string
  main?: boolean
  children?: ReactNode
}

export default function SectionTitleLine({ icon, title, main = false, children }: Props) {
  const hasChildren = !!Children.count(children)

  return (
    <section className={`${main ? '' : 'pt-6'} mb-6 flex items-center justify-between`}>
      <div className="flex items-center justify-start">
          {icon && main && <IconRounded icon={icon} color="light" className="mr-3" bg />}
          
          {icon && !main && <BaseIcon path={icon} className="mr-2" size="50" />}

          <div className='flex flex-col  justify-start'>
        <div className="flex items-center justify-start">
          
          <h1 className={`leading-tight text-2xl'`}>{title}</h1><BaseButton icon={mdiContentCopy} className="mr-2" />
        </div>

        <div className='mt-2'>
          <PillTag label="50 Days" color='info' icon={mdiCheckDecagram} />
        </div>

        <div className="flex items-center justify-start mt-4">
          <div className='mr-4'>
            <span>Followers: </span>
            <span>100</span>
          </div>
          <div className='mr-4'>
            <span>TVF: </span>
            <span>$ 1000,000</span>
          </div>
          <div className=''>
            <BaseButton
              label="Follow"
              color="info"
              roundedFull
              small
            />
          </div>
        </div>
        
      </div>
      </div> 
      {children}
    </section>
  )
}
