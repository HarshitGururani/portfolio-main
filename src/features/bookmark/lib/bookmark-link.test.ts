import { describe, expect, it } from "vitest"

import { getBookmarkExternalHref } from "./bookmark-link"

describe("getBookmarkExternalHref", () => {
  it("returns the original href", () => {
    expect(getBookmarkExternalHref("https://example.com/page")).toBe(
      "https://example.com/page"
    )
  })

  it("preserves params already on the url", () => {
    const href = getBookmarkExternalHref("https://example.com?atp=ncdai")

    expect(href).toContain("atp=ncdai")
    expect(href).not.toContain("utm_source")
  })

  it("returns invalid urls unchanged", () => {
    expect(getBookmarkExternalHref("not a url")).toBe("not a url")
  })
})
