// import { DefaultObject } from '@/modules/index'
import type { MenuProps } from 'antd';

interface NavigateInfoModal {
  defaultNav:string
  webLogo: string
  userAvatar:string
  menuList: MenuProps['items']
}

interface NavigateMenuItemModal {
  danger?: boolean,
  disabled?: boolean,
  label?: string | JSX.Element,
  key?: string
  icon?: JSX.Element
  title?: string
}