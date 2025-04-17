import { redirect } from "next/navigation"
import { headers } from "next/headers"

export default function DefaultDocsPage() {
  // Get the Accept-Language header
  const headersList = headers()
  const acceptLanguage = headersList.get("accept-language") || ""

  // Simple language detection
  let lang = "en"

  if (acceptLanguage.includes("ru")) {
    lang = "ru"
  } else if (acceptLanguage.includes("tg")) {
    lang = "tg"
  }

  // Redirect to the appropriate language page
  redirect(`/docs/${lang}`)
}
