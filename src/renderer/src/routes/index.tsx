import { createFileRoute } from '@tanstack/react-router'
import { SharedSidebarLayout } from '@/components/shared-sidebar-layout'

export const Route = createFileRoute('/')({
  component: RouteComponent
})

function RouteComponent() {
  return (
    <SharedSidebarLayout breadcrumbs={[{ href: '/', label: 'Projects' }]} title="Overview">
      asdasdas
    </SharedSidebarLayout>
  )
}
