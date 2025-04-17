"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, ChevronDown, Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/contexts/language-context"
import { cn } from "@/lib/utils"

export function LanguageSelector({ className }: { className?: string }) {
  const { language, setLanguage, t } = useLanguage()
  const [open, setOpen] = useState(false)

  const languages = [
    { code: "en", name: t("language.en") },
    { code: "ru", name: t("language.ru") },
    { code: "tg", name: t("language.tg") },
  ]

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className={cn("gap-1", className)}>
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{t("language.select")}</span>
          <ChevronDown className="h-3 w-3 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-gray-950 border-gray-800">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => {
              setLanguage(lang.code as "en" | "ru" | "tg")
              setOpen(false)
            }}
            className={cn("flex items-center gap-2 cursor-pointer", language === lang.code && "bg-gray-800")}
          >
            {language === lang.code && <Check className="h-4 w-4" />}
            <span className={language !== lang.code ? "pl-6" : ""}>{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
