import type { Route } from "next"

export type NavItem<T extends Route = Route> = {
  title: string
  href: T
}
