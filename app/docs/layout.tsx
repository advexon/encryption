import type React from "react"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { DocsNavigation } from "@/components/docs/docs-navigation"
import { DocsLanguageSwitcher } from "@/components/docs/language-switcher"
import "./docs.css"

export const metadata: Metadata = {
  title: "Documentation - Fardo Encryption",
  description: "Comprehensive documentation for the Fardo Encryption application",
}

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-white">Documentation</h1>
            <DocsLanguageSwitcher />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <DocsNavigation />
            </div>
            <main className="md:col-span-3">{children}</main>
          </div>
        </div>
      </div>
    </>
  )
}
