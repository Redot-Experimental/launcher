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

export interface Project {
  name: string
  url: string
  icon: string
}

export interface NavProjectsProps {
  projects: Readonly<Project[]>
}
