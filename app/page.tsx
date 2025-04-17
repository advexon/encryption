"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import EncryptionApp from "@/components/encryption-app"
import { Header } from "@/components/header"
import { GithubIcon } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

// GitHub repository URL
const GITHUB_REPO_URL = "https://github.com/advexon/advexon-encryption"

export default function Home() {
  const searchParams = useSearchParams()
  const { t } = useLanguage()
  const [sharedParams, setSharedParams] = useState<{
    mode?: string
    algorithm?: string
    text?: string
  } | null>(null)

  useEffect(() => {
    // Check if we have parameters from a shared snippet
    const mode = searchParams.get("mode")
    const algorithm = searchParams.get("algorithm")
    const text = searchParams.get("text")

    if (mode && algorithm && text) {
      setSharedParams({
        mode,
        algorithm,
        text: decodeURIComponent(text),
      })
    }
  }, [searchParams])

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-2">{t("app.title")}</h1>
          <p className="text-center text-gray-400 mb-8">{t("app.description")}</p>
          <EncryptionApp sharedParams={sharedParams} />

          <footer className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <div className="flex flex-col items-center justify-center gap-2">
              <p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
              <Link
                href={GITHUB_REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-400 hover:text-white"
              >
                <GithubIcon className="mr-2 h-4 w-4" />
                {t("footer.viewSource")}
              </Link>
            </div>
          </footer>
        </div>
      </main>
    </>
  )
}
