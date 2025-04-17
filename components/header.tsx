"use client"

import { useState } from "react"
import { Logo } from "./logo"
import { Button } from "@/components/ui/button"
import { GithubIcon, MenuIcon } from "lucide-react"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useLogoSettings } from "@/contexts/logo-settings-context"
import { useLanguage } from "@/contexts/language-context"
import { LanguageSelector } from "./language-selector"

// GitHub repository URL
const GITHUB_REPO_URL = "https://github.com/advexon/advexon-encryption"

interface HeaderProps {
  logoSrc?: string
  logoAlt?: string
  logoWidth?: number
  logoHeight?: number
}

export function Header({ logoSrc, logoAlt, logoWidth, logoHeight }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { settings } = useLogoSettings()
  const { t } = useLanguage()

  // Use provided props or fall back to settings from context
  const finalLogoSrc = logoSrc || settings.logoSrc
  const finalLogoAlt = logoAlt || settings.logoAlt
  const finalLogoWidth = logoWidth || settings.logoWidth
  const finalLogoHeight = logoHeight || settings.logoHeight
  const finalShowText = settings.showText

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Logo
          src={finalLogoSrc}
          alt={finalLogoAlt}
          width={finalLogoWidth}
          height={finalLogoHeight}
          showText={finalShowText}
        />

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href={GITHUB_REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
          >
            {t("nav.github")}
          </Link>
          <Link href="/docs" className="text-sm font-medium text-gray-400 transition-colors hover:text-white">
            {t("nav.documentation")}
          </Link>
          <LanguageSelector />
          <Button variant="outline" size="sm" asChild>
            <Link href={GITHUB_REPO_URL} target="_blank" rel="noopener noreferrer">
              <GithubIcon className="mr-2 h-4 w-4" />
              {t("nav.starOnGithub")}
            </Link>
          </Button>
        </nav>

        {/* Mobile navigation */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-gray-950 border-gray-800">
            <nav className="flex flex-col gap-4 mt-8">
              <Link
                href={GITHUB_REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-gray-400 transition-colors hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.github")}
              </Link>
              <Link
                href="/docs"
                className="text-lg font-medium text-gray-400 transition-colors hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.documentation")}
              </Link>
              <div className="py-2">
                <LanguageSelector />
              </div>
              <Button variant="outline" className="justify-start mt-4" asChild>
                <Link href={GITHUB_REPO_URL} target="_blank" rel="noopener noreferrer">
                  <GithubIcon className="mr-2 h-4 w-4" />
                  {t("nav.starOnGithub")}
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
