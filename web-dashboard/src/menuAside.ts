import {
  mdiAccountCircle,
  mdiMonitor,
  mdiGithub,
  mdiLock,
  mdiAlertCircle,
  mdiSquareEditOutline,
  mdiTable,
  mdiViewList,
  mdiTelevisionGuide,
  mdiResponsive,
  mdiPalette,
  mdiVuejs,
  mdiAccount,
} from '@mdi/js'
import { MenuAsideItem } from './interfaces'

const menuAside: MenuAsideItem[] = [
  {
    href: '/dashboard',
    icon: mdiMonitor,
    label: 'Home',
  },
  {
    href: '/tokens',
    label: 'Tokens',
    icon: mdiPalette,
  },
  {
    href: '/whales',
    label: 'Whales',
    icon: mdiTable,
  },
  // {
  //   href: '/tables',
  //   label: 'Tables',
  //   icon: mdiTable,
  // },
  // {
  //   href: '/forms',
  //   label: 'Forms',
  //   icon: mdiSquareEditOutline,
  // },
  // {
  //   href: '/ui',
  //   label: 'UI',
  //   icon: mdiTelevisionGuide,
  // },
  // {
  //   href: '/responsive',
  //   label: 'Responsive',
  //   icon: mdiResponsive,
  // },
  // {
  //   href: '/',
  //   label: 'Styles',
  //   icon: mdiPalette,
  // },
  // {
  //    href: '/profile',
  //    label: 'Profile',
  //    icon: mdiAccountCircle,
  // },
  // {
  //   href: '/login',
  //   label: 'Login',
  //   icon: mdiLock,
  // },
  // {
  //   href: '/error',
  //   label: 'Error',
  //   icon: mdiAlertCircle,
  // },
  {
     href: '/pro-features',
     label: 'Pro Features',
     icon: mdiResponsive,
  },
  {
    href: '/my-profile',
    label: 'My Profile',
    icon: mdiAccount,
 },
  // {
  //   label: 'Settings',
  //   icon: mdiViewList,
  //   menu: [
  //     {
  //       label: 'Item One',
  //     },
  //     {
  //       label: 'Item Two',
  //     },
  //   ],
  // },
]

export default menuAside
