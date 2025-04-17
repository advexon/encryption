"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronRight, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

// Define the documentation structure with translations
const docsNavigation = {
  en: [
    {
      title: "Getting Started",
      items: [
        { title: "Introduction", href: "/docs/en" },
        { title: "Installation", href: "/docs/en/installation" },
        { title: "Quick Start", href: "/docs/en/quick-start" },
      ],
    },
    {
      title: "Features",
      items: [
        { title: "Text Encryption", href: "/docs/en/features/text-encryption" },
        { title: "File Encryption", href: "/docs/en/features/file-encryption" },
        { title: "Sharing Encrypted Content", href: "/docs/en/features/sharing" },
      ],
    },
    {
      title: "Encryption Algorithms",
      items: [
        { title: "AES-256", href: "/docs/en/algorithms/aes-256" },
        { title: "RSA", href: "/docs/en/algorithms/rsa" },
        { title: "SHA-256", href: "/docs/en/algorithms/sha-256" },
      ],
    },
    {
      title: "API Reference",
      items: [
        { title: "Overview", href: "/docs/en/api/overview" },
        { title: "Snippets API", href: "/docs/en/api/snippets" },
        { title: "Settings API", href: "/docs/en/api/settings" },
      ],
    },
    {
      title: "Security",
      items: [
        { title: "Best Practices", href: "/docs/en/security/best-practices" },
        { title: "Key Management", href: "/docs/en/security/key-management" },
        { title: "Privacy Policy", href: "/docs/en/security/privacy-policy" },
      ],
    },
  ],
  ru: [
    {
      title: "Начало работы",
      items: [
        { title: "Введение", href: "/docs/ru" },
        { title: "Установка", href: "/docs/ru/installation" },
        { title: "Быстрый старт", href: "/docs/ru/quick-start" },
      ],
    },
    {
      title: "Функции",
      items: [
        { title: "Шифрование текста", href: "/docs/ru/features/text-encryption" },
        { title: "Шифрование файлов", href: "/docs/ru/features/file-encryption" },
        { title: "Обмен зашифрованным содержимым", href: "/docs/ru/features/sharing" },
      ],
    },
    {
      title: "Алгоритмы шифрования",
      items: [
        { title: "AES-256", href: "/docs/ru/algorithms/aes-256" },
        { title: "RSA", href: "/docs/ru/algorithms/rsa" },
        { title: "SHA-256", href: "/docs/ru/algorithms/sha-256" },
      ],
    },
    {
      title: "Справочник API",
      items: [
        { title: "Обзор", href: "/docs/ru/api/overview" },
        { title: "API фрагментов", href: "/docs/ru/api/snippets" },
        { title: "API настроек", href: "/docs/ru/api/settings" },
      ],
    },
    {
      title: "Безопасность",
      items: [
        { title: "Лучшие практики", href: "/docs/ru/security/best-practices" },
        { title: "Управление ключами", href: "/docs/ru/security/key-management" },
        { title: "Политика конфиденциальности", href: "/docs/ru/security/privacy-policy" },
      ],
    },
  ],
  tg: [
    {
      title: "Оғози кор",
      items: [
        { title: "Муқаддима", href: "/docs/tg" },
        { title: "Насбкунӣ", href: "/docs/tg/installation" },
        { title: "Оғози зуд", href: "/docs/tg/quick-start" },
      ],
    },
    {
      title: "Хусусиятҳо",
      items: [
        { title: "Рамзгузории матн", href: "/docs/tg/features/text-encryption" },
        { title: "Рамзгузории файл", href: "/docs/tg/features/file-encryption" },
        { title: "Мубодилаи мӯҳтавои рамзгузоришуда", href: "/docs/tg/features/sharing" },
      ],
    },
    {
      title: "Алгоритмҳои рамзгузорӣ",
      items: [
        { title: "AES-256", href: "/docs/tg/algorithms/aes-256" },
        { title: "RSA", href: "/docs/tg/algorithms/rsa" },
        { title: "SHA-256", href: "/docs/tg/algorithms/sha-256" },
      ],
    },
    {
      title: "Маълумотномаи API",
      items: [
        { title: "Шарҳи умумӣ", href: "/docs/tg/api/overview" },
        { title: "API порчаҳо", href: "/docs/tg/api/snippets" },
        { title: "API танзимот", href: "/docs/tg/api/settings" },
      ],
    },
    {
      title: "Амният",
      items: [
        { title: "Таҷрибаҳои беҳтарин", href: "/docs/tg/security/best-practices" },
        { title: "Идоракунии калидҳо", href: "/docs/tg/security/key-management" },
        { title: "Сиёсати махфият", href: "/docs/tg/security/privacy-policy" },
      ],
    },
  ],
}

export function DocsNavigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Determine current language from pathname
  let currentLang = "en"
  if (pathname.startsWith("/docs/ru")) {
    currentLang = "ru"
  } else if (pathname.startsWith("/docs/tg")) {
    currentLang = "tg"
  }

  // Get navigation for current language
  const navigation = docsNavigation[currentLang as keyof typeof docsNavigation] || docsNavigation.en

  const [openSections, setOpenSections] = useState<Record<string, boolean>>(() => {
    // Initialize with all sections open on larger screens, closed on mobile
    const initialState: Record<string, boolean> = {}
    navigation.forEach((section) => {
      // Check if any item in this section is active
      const isActive = section.items.some((item) => item.href === pathname)
      initialState[section.title] = isActive
    })
    return initialState
  })

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }))
  }

  const NavContent = () => (
    <div className="space-y-6">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-white mb-1">
          {currentLang === "en" ? "Documentation" : currentLang === "ru" ? "Документация" : "Ҳуҷҷатҳо"}
        </h2>
        <p className="text-sm text-gray-400">
          {currentLang === "en"
            ? "Learn how to use Fardo Encryption"
            : currentLang === "ru"
              ? "Узнайте, как использовать Fardo Encryption"
              : "Омӯзед, ки чӣ тавр аз Рамзгузории Fardo истифода бурдан мумкин аст"}
        </p>
      </div>
      <nav className="space-y-1">
        {navigation.map((section) => (
          <div key={section.title} className="mb-4">
            <button
              onClick={() => toggleSection(section.title)}
              className="flex items-center justify-between w-full text-left text-sm font-medium text-gray-200 hover:text-white mb-2"
            >
              <span>{section.title}</span>
              {openSections[section.title] ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </button>
            {openSections[section.title] && (
              <ul className="ml-4 space-y-1 border-l border-gray-800 pl-4">
                {section.items.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "block text-sm transition-colors hover:text-white",
                          isActive ? "font-medium text-primary" : "text-gray-400",
                        )}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
        ))}
      </nav>
    </div>
  )

  return (
    <>
      {/* Mobile Navigation */}
      <div className="md:hidden sticky top-20 z-30 mb-8">
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full flex items-center justify-between">
              <span>
                {currentLang === "en"
                  ? "Documentation Navigation"
                  : currentLang === "ru"
                    ? "Навигация по документации"
                    : "Навигатсияи ҳуҷҷатҳо"}
              </span>
              <Menu className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-gray-950 border-gray-800">
            <NavContent />
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block sticky top-20">
        <NavContent />
      </div>
    </>
  )
}
