"use client"

import { useId } from "react"
import { decodeEmail } from "@/utils/string"
import { addQueryParams } from "@/utils/url"
import { MailIcon } from "lucide-react"

import { UTM_PARAMS } from "@/config/site"
import { useIsClient } from "@/hooks/use-is-client"
import { Button } from "@/components/ui/button"
import { LinkedInIcon } from "@/components/icons"
import { PanelTitleCopy } from "@/features/portfolio/components/panel-title-copy"
import {
  Panel,
  PanelContent,
  PanelDescription,
  PanelHeader,
  PanelTitle,
} from "@/features/portfolio/components/panel"
import { RevealEncodedTextScript } from "@/features/portfolio/components/overview/reveal-encoded-text"
import { SOCIAL } from "@/features/portfolio/data/social-links"
import { USER } from "@/features/portfolio/data/user"

const ID = "contact"

export function Contact() {
  const emailId = useId()
  const isClient = useIsClient()
  const email = decodeEmail(USER.emailB64)

  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Contact</a>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
        <PanelDescription>
          Available for work. Open to freelance projects and full-time roles.
          Say hello by email or LinkedIn.
        </PanelDescription>
      </PanelHeader>

      <PanelContent className="flex flex-wrap gap-2">
        <Button
          nativeButton={false}
          render={
            <a href={isClient ? `mailto:${email}` : undefined} />
          }
        >
          <MailIcon />
          <span id={emailId} suppressHydrationWarning>
            {isClient ? email : ""}
          </span>
        </Button>

        <Button
          variant="outline"
          nativeButton={false}
          render={
            <a
              href={addQueryParams(SOCIAL.linkedin.href, UTM_PARAMS)}
              target="_blank"
              rel="noopener"
            />
          }
        >
          <LinkedInIcon />
          LinkedIn
        </Button>

        <RevealEncodedTextScript id={emailId} textB64={USER.emailB64} />
      </PanelContent>
    </Panel>
  )
}
