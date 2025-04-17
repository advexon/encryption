"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import TextEncryption from "./text-encryption"
import FileEncryption from "./file-encryption"
import AlgorithmInfo from "./algorithm-info"
import Link from "next/link"
import { Settings, GithubIcon } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

// GitHub repository URL
const GITHUB_REPO_URL = "https://github.com/advexon/advexon-encryption"

interface EncryptionAppProps {
  sharedParams?: {
    mode?: string
    algorithm?: string
    text?: string
  } | null
}

export default function EncryptionApp({ sharedParams }: EncryptionAppProps) {
  const [activeTab, setActiveTab] = useState<string>("text")
  const { t } = useLanguage()

  // If we have shared parameters, make sure we're on the text tab
  useEffect(() => {
    if (sharedParams) {
      setActiveTab("text")
    }
  }, [sharedParams])

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-2">
        <Link
          href={GITHUB_REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-400 hover:text-white inline-flex items-center"
        >
          <GithubIcon className="mr-1 h-3 w-3" />
          {t("nav.github")}
        </Link>
        <Link href="/settings/logo" className="text-sm text-gray-400 hover:text-white inline-flex items-center">
          <Settings className="mr-1 h-3 w-3" />
          {t("settings.logo.title")}
        </Link>
      </div>

      <Tabs defaultValue="text" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="text">{t("encryption.textEncryption")}</TabsTrigger>
          <TabsTrigger value="file">{t("encryption.fileEncryption")}</TabsTrigger>
        </TabsList>

        <Card className="border border-gray-800 bg-gray-950 shadow-xl">
          <CardContent className="p-6">
            <TabsContent value="text" className="mt-0">
              <TextEncryption sharedParams={sharedParams} />
            </TabsContent>
            <TabsContent value="file" className="mt-0">
              <FileEncryption />
            </TabsContent>
          </CardContent>
        </Card>
      </Tabs>

      <div className="mt-8">
        <AlgorithmInfo />
      </div>
    </div>
  )
}
