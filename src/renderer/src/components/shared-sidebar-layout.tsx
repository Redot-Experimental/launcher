import * as React from 'react'
import { SidebarInset, SidebarTrigger } from './ui/sidebar'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from './ui/breadcrumb'
import { Separator } from './ui/separator'

export function SharedSidebarLayout({
  breadcrumbs,
  title,
  children
}: {
  breadcrumbs: Array<{ href: string; label: string }>
  title: string
  children: React.ReactNode
}) {
  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={crumb.label}>
                  {index > 0 && <BreadcrumbSeparator className="hidden md:block" />}
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href={crumb.href}>{crumb.label}</BreadcrumbLink>
                  </BreadcrumbItem>
                </React.Fragment>
              ))}
              <BreadcrumbItem>
                <BreadcrumbPage>{title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      {children}
    </SidebarInset>
  )
}
