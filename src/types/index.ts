import { ReactNode } from 'react'

export interface NavItem {
  title: string
  url: string
  icon: ReactNode
  isActive?: boolean
  items?: {
    title: string
    url: string
  }[]
}

export interface NavMainProps {
  items: Readonly<NavItem[]>
}
