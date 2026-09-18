import type { NavItem } from "@/types/nav"
import { SOCIAL } from "@/features/portfolio/data/social-links"
import { USER } from "@/features/portfolio/data/user"

function getSiteUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_APP_URL
  const raw =
    fromEnv && !fromEnv.includes("chanhdai.com") ? fromEnv : USER.website
  try {
    const url = new URL(raw)
    const isLocal =
      url.hostname === "localhost" || url.hostname.endsWith(".localhost")
    if (!isLocal && url.protocol === "http:") {
      url.protocol = "https:"
    }
    return url.origin
  } catch {
    return USER.website
  }
}

export const SITE_INFO = {
  name: USER.displayName,
  url: getSiteUrl(),
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
}

export const LICENSE = {
  name: "MIT License",
  url: "",
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}

export const MAIN_NAV: NavItem[] = [
  {
    title: "About",
    href: "/#hello",
  },
  {
    title: "Experience",
    href: "/#experience",
  },
  {
    title: "Education",
    href: "/#education",
  },
  {
    title: "Stack",
    href: "/#stack",
  },
  {
    title: "Projects",
    href: "/#projects",
  },
  {
    title: "Contact",
    href: "/#contact",
  },
]

export const MOBILE_NAV: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  ...MAIN_NAV,
]

export const X_HANDLE = `@${SOCIAL.github.handle}`
export const GITHUB_USERNAME = SOCIAL.github.handle
export const SOURCE_CODE_GITHUB_REPO = "ncdai/chanhdai.com"
export const SOURCE_CODE_GITHUB_URL = "https://github.com/ncdai/chanhdai.com"

export const SPONSORSHIP_URL = "https://github.com/sponsors/ncdai"

export const UTM_PARAMS: Record<string, string> = {}
