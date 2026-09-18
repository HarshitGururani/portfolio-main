import { SOCIAL } from "@/features/portfolio/data/social-links"
import { Button } from "@/components/ui/button"
import { GitHubIcon } from "@/components/icons"

export function NavItemGitHub() {
  return (
    <Button
      className="border-none px-1.5"
      variant="ghost"
      size="sm"
      nativeButton={false}
      render={
        <a
          href={SOCIAL.github.href}
          target="_blank"
          rel="noopener"
          aria-label="GitHub profile"
        >
          <GitHubIcon className="size-4" />
        </a>
      }
    />
  )
}
