import { mdiCog, mdiContentCopy, mdiCheckDecagram } from '@mdi/js'
import React, { Children, ReactNode } from 'react'
import BaseButton from '../../ui/BaseButton'
import BaseIcon from '../../ui/BaseIcon'
import IconRounded from '../../ui/IconRounded'
import PillTag from '../../ui/PillTag'
import TokenAvatar from '../../ui/TokenAvatar'
import UserAvatar from '../../ui/UserAvatar'

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
          
        <TokenAvatar className="w-12 h-12 md:mr-6 mb-6 md:mb-0" src={"https://awesomenear-spaces.fra1.digitaloceanspaces.com/production/projects/ref-finance/ref-finance.jpg"} username={"ref"} />

        <div className='flex flex-col  justify-start'>
            <div className="flex items-center justify-start">
              <h1 className={`leading-tight text-2xl'`}><strong>Ref Finance (REF)</strong></h1>
              <BaseButton icon={mdiContentCopy} className="mr-2" />
            </div>

          <div className="flex items-center justify-start mt-4">
            <div className='mr-4'>
              <span>Multi-purpose DeFi platform built on NEAR Protocol.</span>
            </div>
        </div>
        
        </div>
      </div> 
      {children}
    </section>
  )
}
