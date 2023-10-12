import React from 'react'
import { mdiLogout, mdiClose } from '@mdi/js'
import BaseIcon from '../ui/BaseIcon'
import AsideMenuItem from './AsideMenuItem'
import AsideMenuList from './AsideMenuList'
import { MenuAsideItem } from '../../interfaces'
import { useAppSelector } from '../../stores/hooks'

type Props = {
  menu: MenuAsideItem[]
  className?: string
  onAsideLgCloseClick: () => void
}

export default function AsideMenuLayer({ menu, className = '', ...props }: Props) {
  const userName = useAppSelector((state) => state.main.userName)
  const asideStyle = useAppSelector((state) => state.style.asideStyle)
  const asideBrandStyle = useAppSelector((state) => state.style.asideBrandStyle)
  const asideScrollbarsStyle = useAppSelector((state) => state.style.asideScrollbarsStyle)
  const darkMode = useAppSelector((state) => state.style.darkMode)

  const logoutItem: MenuAsideItem = {
    label: 'Logout',
    icon: mdiLogout,
    color: 'info',
    isLogout: true,
  }

  const handleAsideLgCloseClick = (e: React.MouseEvent) => {
    e.preventDefault()
    props.onAsideLgCloseClick()
  }

  return (
    <aside
      className={`${className} zzz w-60 fixed flex z-40 top-0 h-screen transition-position overflow-hidden`}
    >
      <div
        className={`flex-1 flex flex-col overflow-hidden dark:bg-slate-900 ${asideStyle}`}
      >
        <div
          className={`flex flex-row h-14 items-center justify-between dark:bg-slate-900 ${asideBrandStyle}`}
        >
          <div className="text-center flex justify-center flex-1 lg:text-left lg:pl-6 xl:text-center xl:pl-0 mt-4">
            <img style={{maxWidth: "60%"}} src="/static/images/RO_logo_nensang.png" />
          </div>
          <button
            className="hidden lg:inline-block xl:hidden p-3"
            onClick={handleAsideLgCloseClick}
          >
            <BaseIcon path={mdiClose} />
          </button>
        </div>
        
        <div
          className={`flex-1 overflow-y-auto overflow-x-hidden mt-10 ${
            darkMode ? 'aside-scrollbars-[slate]' : asideScrollbarsStyle
          }`}
        >
          <AsideMenuList menu={menu} />
        </div>
        {/* {userName &&  <ul>
          <AsideMenuItem item={logoutItem} />
        </ul> } */}
        
      </div>
    </aside>
  )
}
