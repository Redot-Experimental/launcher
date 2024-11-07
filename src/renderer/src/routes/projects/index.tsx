import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects/')({
  component: RouteComponent
})

function RouteComponent() {
  return 'Hello /projects/projects!'
}
