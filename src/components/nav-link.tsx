'use client'

import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

export type NavLinkProps = LinkProps & {
  children: ReactNode
}

export default function NavLink(props: NavLinkProps) {
  const pathName = usePathname()
  return (
    <Link
      data-current={pathName === props.href}
      className="flex items-center gap-1.5  text-sm font-medium text-muted-foreground hover:text-foreground data-[current=true]:text-foreground"
      {...props}
    />
  )
}
