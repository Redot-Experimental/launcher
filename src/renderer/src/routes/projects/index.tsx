import { createFileRoute } from '@tanstack/react-router'
import { SharedSidebarLayout } from '../../components/shared-sidebar-layout'

export const Route = createFileRoute('/projects/')({
  component: RouteComponent
})

function RouteComponent() {
  return (
    <SharedSidebarLayout breadcrumbs={[{ href: '/projects/', label: 'Projects' }]} title="Overview">
      asdasdas
    </SharedSidebarLayout>
  )
}
