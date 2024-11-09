import { IconDots, IconFolder, IconStar, IconStarFilled } from '@tabler/icons-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@renderer/components/ui/tooltip'
import { Badge } from '@renderer/components/ui/badge'
import { cn } from '../../utils'

export const BentoGrid = ({
  className,
  recentProjects,
  projects
}: {
  className?: string
  recentProjects: Array<{
    title: string
    src: string
    header: React.ReactNode
    isFavorite: boolean
  }>
  projects: Array<{
    title: string
    src: string
    header: React.ReactNode
    isFavorite: boolean
  }>
}) => {
  return (
    <div className={cn('mx-auto', className)}>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1">
          <h2 className="mb-4 p-1 text-sm font-medium">Recent Projects</h2>
          {recentProjects.map((project, index) => (
            <BentoGridItem key={index} {...project} />
          ))}
        </div>
        <div className="col-span-2 w-full">
          <h2 className="mb-4 p-1 text-sm font-medium">Projects</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {projects.map((project, index) => (
              <BentoGridItem key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export const BentoGridItem = ({
  className,
  title,
  src,
  header,
  isFavorite
}: {
  className?: string
  title?: string | React.ReactNode
  src?: string
  header?: React.ReactNode
  isFavorite: boolean
}) => {
  const maxLength = 36
  const truncatedSrc = src && src.length > maxLength ? `${src.slice(0, maxLength)}...` : src || ''

  return (
    <div
      className={cn(
        'group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-transparent bg-white p-4 shadow-input transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-primary-foreground',
        className
      )}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-row items-center">
            <div className="group relative hidden h-8 w-8 md:block">{header}</div>
            <div className="transition duration-200 group-hover/bento:translate-x-2">
              <div className="ml-2">
                <div className="text-sm font-bold text-neutral-600 dark:text-neutral-200">
                  {title}
                </div>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <div className="flex gap-2 overflow-hidden font-sans text-xs font-normal text-zinc-600 dark:text-zinc-400">
                        <IconFolder className="h-4 w-4" />
                        <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                          {truncatedSrc}
                        </span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>{src}</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {isFavorite ? (
              <IconStarFilled className="h-4 w-4 text-yellow-400" />
            ) : (
              <IconStar className="h-4 w-4 text-zinc-400" />
            )}
            <IconDots className="h-5 w-5 text-zinc-400" />
          </div>
        </div>
        <div className="flex flex-row items-center gap-2">
          <Badge variant="outline">Test</Badge>
        </div>
      </div>
    </div>
  )
}
