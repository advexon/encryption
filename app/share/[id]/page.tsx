"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Header } from "@/components/header"
import { ArrowLeft, GithubIcon } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

// GitHub repository URL
const GITHUB_REPO_URL = "https://github.com/advexon/advexon-encryption"

export default function SharePage() {
  const params = useParams()
  const router = useRouter()
  const { t } = useLanguage()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [snippet, setSnippet] = useState<any>(null)

  useEffect(() => {
    const fetchSnippet = async () => {
      try {
        const snippetId = params.id
        if (!snippetId) {
          throw new Error(t("share.snippetNotFound"))
        }

        const response = await fetch(`/api/snippets/${snippetId}`)
        const data = await response.json()

        if (data.success && data.snippet) {
          setSnippet(data.snippet)
        } else {
          throw new Error(data.error || t("share.snippetExpired"))
        }
      } catch (err: any) {
        console.error("Error fetching snippet:", err)
        setError(err.message || t("share.snippetExpired"))
      } finally {
        setLoading(false)
      }
    }

    fetchSnippet()
  }, [params.id, t])

  const handleDecrypt = () => {
    // Navigate to the main page with the encrypted text loaded
    router.push(`/?mode=decrypt&algorithm=${snippet.algorithm}&text=${encodeURIComponent(snippet.encryptedText)}`)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t("share.backToApp")}
            </Link>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-gray-950 border-gray-800">
              <CardHeader>
                <CardTitle>{t("share.sharedEncryptedText")}</CardTitle>
                <CardDescription>{t("share.sharedDescription")}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {loading ? (
                  <div className="text-center py-8">{t("common.loading")}</div>
                ) : error ? (
                  <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                ) : (
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm text-gray-400 mb-2">{t("encryption.algorithm")}:</p>
                      <p className="font-medium">{snippet.algorithm}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-2">{t("share.created")}:</p>
                      <p className="font-medium">{new Date(snippet.createdAt).toLocaleString()}</p>
                    </div>
                    <Button onClick={handleDecrypt} className="w-full">
                      {t("share.decryptContent")}
                    </Button>
                    <p className="text-xs text-gray-500 text-center">{t("share.redirectDescription")}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

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
