"use client"

import { useState } from "react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function LanguageToggle() {
  const [language, setLanguage] = useState<"EN" | "HI">("EN")

  const toggleLanguage = () => {
    setLanguage(language === "EN" ? "HI" : "EN")
  }

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="language-mode"
        checked={language === "HI"}
        onCheckedChange={toggleLanguage}
        className="language-toggle"
      />
      <Label htmlFor="language-mode" className="text-sm font-medium">
        {language}
      </Label>
    </div>
  )
}
