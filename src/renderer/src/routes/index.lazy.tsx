import { createLazyFileRoute } from '@tanstack/react-router'
import * as React from 'react'

export const Route = createLazyFileRoute('/')({
  component: Index
})

function Index(): JSX.Element {
  return (
    <>
      <div className="text-2xl">Hello</div>
    </>
  )
}
