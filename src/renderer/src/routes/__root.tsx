import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

import { SidebarProvider } from '../components/ui/sidebar'
import { AppSidebar } from '../components/app-sidebar'

export const Route = createRootRoute({
  component: () => (
    <SidebarProvider>
      <AppSidebar />
      <Outlet />
      <TanStackRouterDevtools />
    </SidebarProvider>
  )
})
