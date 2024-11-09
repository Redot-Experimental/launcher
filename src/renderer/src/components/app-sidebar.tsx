import * as React from 'react'

import { NavMain } from './nav-main'
import { NavProjects } from './nav-projects'
import { NavSecondary } from './nav-secondary'
import { NavUser } from './nav-user'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from './ui/sidebar'
import {
  IconAppWindow,
  IconBrandDiscord,
  IconCube,
  IconDownload,
  IconSettings2
} from '@tabler/icons-react'
import { Link } from '@tanstack/react-router'
import redotLogo from '@renderer/assets/logo.svg'

const data = {
  user: {
    name: 'Charlotte',
    email: 'redotengine@gmail.com',
    avatar: '/avatars/charlotte.webp'
  },
  navMain: [
    {
      title: 'Projects',
      url: '/',
      icon: IconCube,
      isActive: true,
      items: [
        {
          title: 'New Project',
          url: '/projects/new'
        },
        {
          title: 'Import Project',
          url: '/projects/import'
        }
      ]
    },
    {
      title: 'Asset Library',
      url: '#',
      icon: IconDownload,
      items: [
        {
          title: 'Templates',
          url: '#'
        },
        {
          title: 'Projects',
          url: '#'
        },
        {
          title: 'Demos',
          url: '#'
        }
      ]
    },
    {
      title: 'Settings',
      url: '#',
      icon: IconSettings2,
      items: [
        {
          title: 'General',
          url: '#'
        }
      ]
    }
  ],
  navSecondary: [
    {
      title: 'Discord',
      url: 'https://discord.gg/redot',
      icon: IconBrandDiscord
    },
    {
      title: 'Website',
      url: 'https://www.redotengine.org/',
      icon: IconAppWindow
    }
  ],
  projects: [
    {
      name: 'New Game Project',
      url: '#',
      icon: '/banner.webp'
    },
    {
      name: 'New Game Project',
      url: '#',
      icon: '/banner.webp'
    },
    {
      name: 'New Game Project',
      url: '#',
      icon: '/banner.webp'
    }
  ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-orange-600 text-sidebar-primary-foreground">
                  <img alt="logo" src={redotLogo} width="16" height="16" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Redot Engine</span>
                  <span className="truncate text-xs">v4.4-alpha.1</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
