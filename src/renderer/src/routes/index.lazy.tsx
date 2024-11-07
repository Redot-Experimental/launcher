import { createLazyFileRoute } from '@tanstack/react-router'

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
