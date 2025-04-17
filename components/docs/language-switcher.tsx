"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, ChevronDown, Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useRouter, usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function DocsLanguageSwitcher({ className }: { className?: string }) {
  const router = useRouter()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // Extract current language from pathname
  const currentLang = pathname.split("/")[2] || "en"

  const languages = [
    { code: "en", name: "English" },
    { code: "ru", name: "Русский" },
    { code: "tg", name: "Тоҷикӣ" },
  ]

  const switchLanguage = (langCode: string) => {
    // Get the current path parts
    const pathParts = pathname.split("/")

    // If we're already in a language path, replace it
    if (pathParts[2] === "en" || pathParts[2] === "ru" || pathParts[2] === "tg") {
      pathParts[2] = langCode
    } else {
      // Otherwise, insert the language after /docs
      pathParts.splice(2, 0, langCode)
    }

    // Navigate to the new path
    router.push(pathParts.join("/"))
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className={cn("gap-1", className)}>
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">
            {languages.find((lang) => lang.code === currentLang)?.name || "Language"}
          </span>
          <ChevronDown className="h-3 w-3 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-gray-950 border-gray-800">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => {
              switchLanguage(lang.code)
              setOpen(false)
            }}
            className={cn("flex items-center gap-2 cursor-pointer", currentLang === lang.code && "bg-gray-800")}
          >
            {currentLang === lang.code && <Check className="h-4 w-4" />}
            <span className={currentLang !== lang.code ? "pl-6" : ""}>{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
