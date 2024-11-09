import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { SidebarInset, SidebarTrigger } from '../../components/ui/sidebar'
import { Separator } from '../../components/ui/separator'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '../../components/ui/breadcrumb'
import { SharedSidebarLayout } from '../../components/shared-sidebar-layout'

export const Route = createFileRoute('/projects/new')({
  component: RouteComponent
})

function RouteComponent() {
  return (
    <SharedSidebarLayout
      breadcrumbs={[{ href: '/projects', label: 'Projects' }]}
      title="New Project"
    >
      <div>Content for the New Project page</div>
    </SharedSidebarLayout>
  )
}
