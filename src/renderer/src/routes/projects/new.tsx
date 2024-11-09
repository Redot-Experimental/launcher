import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { SharedSidebarLayout } from '../../components/shared-sidebar-layout'

export const Route = createFileRoute('/projects/new')({
  component: RouteComponent
})

function RouteComponent() {
  return (
    <SharedSidebarLayout breadcrumbs={[{ href: '/', label: 'Projects' }]} title="New Project">
      <div>Content for the New Project page</div>
    </SharedSidebarLayout>
  )
}
