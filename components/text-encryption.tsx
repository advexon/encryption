"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { encryptText, decryptText, hashText, generateKey } from "@/lib/crypto-utils"
import { CopyIcon, KeyIcon, LockIcon, UnlockIcon, EyeIcon, EyeOffIcon, Share2Icon, LinkIcon } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useLanguage } from "@/contexts/language-context"

interface TextEncryptionProps {
  sharedParams?: {
    mode?: string
    algorithm?: string
    text?: string
  } | null
}

export default function TextEncryption({ sharedParams }: TextEncryptionProps) {
  const { toast } = useToast()
  const { t } = useLanguage()
  const [inputText, setInputText] = useState("")
  const [outputText, setOutputText] = useState("")
  const [algorithm, setAlgorithm] = useState("AES-256")
  const [key, setKey] = useState("")
  const [mode, setMode] = useState("encrypt")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [showKey, setShowKey] = useState(false)
  const [shareDialogOpen, setShareDialogOpen] = useState(false)
  const [shareLink, setShareLink] = useState("")
  const [shareLinkCopied, setShareLinkCopied] = useState(false)
  const [retrieveDialogOpen, setRetrieveDialogOpen] = useState(false)
  const [snippetId, setSnippetId] = useState("")
  const [retrieveLoading, setRetrieveLoading] = useState(false)

  useEffect(() => {
    if (sharedParams?.text && sharedParams?.algorithm && sharedParams?.mode) {
      setInputText(sharedParams.text)
      setAlgorithm(sharedParams.algorithm)
      setMode(sharedParams.mode)

      toast({
        title: t("share.snippetRetrieved"),
        description: t("share.enterKeyToDecrypt"),
      })
    }
  }, [sharedParams, t, toast])

  const handleGenerateKey = async () => {
    try {
      const newKey = await generateKey(algorithm)
      setKey(newKey)
      toast({
        title: t("common.success"),
        description: t("encryption.generateKey"),
      })
    } catch (err) {
      setError(t("error.keyRequired"))
      console.error("Key generation error:", err)
    }
  }

  const handleProcess = async () => {
    if (!inputText) {
      setError(t("error.emptyText"))
      return
    }

    if (algorithm !== "SHA-256" && !key) {
      setError(t("error.emptyKey"))
      return
    }

    setError(null)
    setLoading(true)

    try {
      let result = ""

      if (algorithm === "SHA-256") {
        // For SHA-256, we only hash (one-way)
        result = await hashText(inputText)
      } else if (mode === "encrypt") {
        result = await encryptText(inputText, key, algorithm)
      } else {
        // Validate input for decryption
        if (inputText.length < 24) {
          // Minimum length for valid hex-encoded encrypted data
          throw new Error(t("error.invalidData"))
        }

        result = await decryptText(inputText, key, algorithm)
      }

      setOutputText(result)
    } catch (err: any) {
      console.error("Processing error:", err)
      setError(err.message || t("error.processingError"))
    } finally {
      setLoading(false)
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(outputText)
    toast({
      title: t("common.copied"),
      description: t("common.copy"),
    })
  }

  const handleShareEncrypted = async () => {
    if (!outputText || mode !== "encrypt") {
      toast({
        title: t("common.error"),
        description: t("encryption.textToEncrypt"),
        variant: "destructive",
      })
      return
    }

    try {
      const response = await fetch("/api/snippets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          encryptedText: outputText,
          algorithm,
        }),
      })

      const data = await response.json()

      if (data.success) {
        // Create a shareable link
        const baseUrl = window.location.origin
        const link = `${baseUrl}/share/${data.snippetId}`
        setShareLink(link)
        setShareDialogOpen(true)
      } else {
        throw new Error(data.error || t("share.snippetNotFound"))
      }
    } catch (err: any) {
      console.error("Sharing error:", err)
      toast({
        title: t("common.error"),
        description: err.message || t("error.processingError"),
        variant: "destructive",
      })
    }
  }

  const copyShareLink = () => {
    navigator.clipboard.writeText(shareLink)
    setShareLinkCopied(true)
    setTimeout(() => setShareLinkCopied(false), 2000)
  }

  const handleRetrieveSnippet = async () => {
    if (!snippetId) {
      toast({
        title: t("common.error"),
        description: t("share.idRequired"),
        variant: "destructive",
      })
      return
    }

    setRetrieveLoading(true)
    try {
      const response = await fetch(`/api/snippets/${snippetId}`)
      const data = await response.json()

      if (data.success && data.snippet) {
        setInputText(data.snippet.encryptedText)
        setAlgorithm(data.snippet.algorithm)
        setMode("decrypt")
        setRetrieveDialogOpen(false)
        toast({
          title: t("share.snippetRetrieved"),
          description: t("share.enterKeyToDecrypt"),
        })
      } else {
        throw new Error(data.error || t("share.snippetNotFound"))
      }
    } catch (err: any) {
      console.error("Retrieval error:", err)
      toast({
        title: t("common.error"),
        description: err.message || t("share.snippetExpired"),
        variant: "destructive",
      })
    } finally {
      setRetrieveLoading(false)
    }
  }

  const getInputLabel = () => {
    if (algorithm === "SHA-256") return t("encryption.textToHash")
    return mode === "encrypt" ? t("encryption.textToEncrypt") : t("encryption.textToDecrypt")
  }

  const getButtonLabel = () => {
    if (loading) return t("common.processing")
    if (algorithm === "SHA-256") return t("encryption.hashText")
    return mode === "encrypt" ? t("encryption.encryptText") : t("encryption.decryptText")
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="space-y-2">
          <Label htmlFor="algorithm">{t("encryption.algorithm")}</Label>
          <Select value={algorithm} onValueChange={setAlgorithm}>
            <SelectTrigger>
              <SelectValue placeholder={t("encryption.algorithm")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="AES-256">{t("encryption.aes256")}</SelectItem>
              <SelectItem value="RSA">{t("encryption.rsa")}</SelectItem>
              <SelectItem value="SHA-256">{t("encryption.sha256")}</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => setRetrieveDialogOpen(true)} className="text-xs">
            <LinkIcon className="mr-1 h-3 w-3" /> {t("encryption.retrieveShared")}
          </Button>
        </div>
      </div>

      {algorithm !== "SHA-256" && (
        <Tabs defaultValue="encrypt" value={mode} onValueChange={setMode}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="encrypt">{t("encryption.encrypt")}</TabsTrigger>
            <TabsTrigger value="decrypt">{t("encryption.decrypt")}</TabsTrigger>
          </TabsList>
        </Tabs>
      )}

      <div className="space-y-2">
        <Label htmlFor="inputText">{getInputLabel()}</Label>
        <Textarea
          id="inputText"
          placeholder={getInputLabel()}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="min-h-[120px] bg-gray-900 border-gray-800"
        />
      </div>

      {algorithm !== "SHA-256" && (
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label htmlFor="key">{t("encryption.key")}</Label>
            <Button variant="outline" size="sm" onClick={handleGenerateKey} className="text-xs">
              <KeyIcon className="mr-1 h-3 w-3" /> {t("encryption.generateKey")}
            </Button>
          </div>
          <div className="relative">
            <Input
              id="key"
              type={showKey ? "text" : "password"}
              placeholder={t("encryption.key")}
              value={key}
              onChange={(e) => setKey(e.target.value)}
              className="bg-gray-900 border-gray-800 pr-10"
              aria-describedby="key-visibility-toggle"
            />
            {key && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 text-gray-400 hover:text-white"
                onClick={() => setShowKey(!showKey)}
                aria-label={showKey ? t("encryption.keyHidden") : t("encryption.keyVisible")}
                id="key-visibility-toggle"
              >
                {showKey ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
              </Button>
            )}
          </div>
          {key && (
            <p className="text-xs text-gray-500 mt-1">
              {showKey ? t("encryption.keyVisible") : t("encryption.keyHidden")}
            </p>
          )}
        </div>
      )}

      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Button onClick={handleProcess} disabled={loading} className="w-full">
        {loading ? (
          t("common.processing")
        ) : (
          <>
            {algorithm === "SHA-256" ? (
              <>{t("encryption.hashText")}</>
            ) : mode === "encrypt" ? (
              <>
                <LockIcon className="mr-2 h-4 w-4" /> {t("encryption.encryptText")}
              </>
            ) : (
              <>
                <UnlockIcon className="mr-2 h-4 w-4" /> {t("encryption.decryptText")}
              </>
            )}
          </>
        )}
      </Button>

      {outputText && (
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label htmlFor="outputText">{t("encryption.result")}</Label>
            <div className="flex gap-2">
              {mode === "encrypt" && algorithm !== "SHA-256" && (
                <Button variant="outline" size="sm" onClick={handleShareEncrypted} className="text-xs">
                  <Share2Icon className="mr-1 h-3 w-3" /> {t("common.share")}
                </Button>
              )}
              <Button variant="ghost" size="sm" onClick={copyToClipboard} className="text-xs">
                <CopyIcon className="mr-1 h-3 w-3" /> {t("common.copy")}
              </Button>
            </div>
          </div>
          <Textarea id="outputText" value={outputText} readOnly className="min-h-[120px] bg-gray-900 border-gray-800" />
        </div>
      )}

      {/* Share Dialog */}
      <Dialog open={shareDialogOpen} onOpenChange={setShareDialogOpen}>
        <DialogContent className="bg-gray-950 border-gray-800">
          <DialogHeader>
            <DialogTitle>{t("share.title")}</DialogTitle>
            <DialogDescription>{t("share.description")}</DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <Input value={shareLink} readOnly className="bg-gray-900 border-gray-800" />
            <Button size="sm" onClick={copyShareLink}>
              {shareLinkCopied ? t("common.copied") : t("common.copy")}
            </Button>
          </div>
          <p className="text-xs text-gray-400">{t("share.linkWillExpire")}</p>
          <DialogFooter>
            <Button onClick={() => setShareDialogOpen(false)}>{t("common.close")}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Retrieve Dialog */}
      <Dialog open={retrieveDialogOpen} onOpenChange={setRetrieveDialogOpen}>
        <DialogContent className="bg-gray-950 border-gray-800">
          <DialogHeader>
            <DialogTitle>{t("share.retrieveTitle")}</DialogTitle>
            <DialogDescription>{t("share.retrieveDescription")}</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="snippetId">{t("share.snippetIdOrUrl")}</Label>
              <Input
                id="snippetId"
                placeholder={t("share.snippetIdOrUrl")}
                value={snippetId}
                onChange={(e) => {
                  // Extract ID if full URL is pasted
                  const input = e.target.value
                  if (input.includes("/share/")) {
                    const id = input.split("/share/")[1]
                    setSnippetId(id)
                  } else {
                    setSnippetId(input)
                  }
                }}
                className="bg-gray-900 border-gray-800"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setRetrieveDialogOpen(false)}>
              {t("common.cancel")}
            </Button>
            <Button onClick={handleRetrieveSnippet} disabled={retrieveLoading}>
              {retrieveLoading ? t("common.retrieving") : t("common.retrieve")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
