import { Card, CardContent } from "@/components/ui/card"
import { GithubIcon } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

// GitHub repository URL
const GITHUB_REPO_URL = "https://github.com/advexon/advexon-encryption"

// Define the content for each language
const content = {
  en: {
    title: "Fardo Encryption Documentation",
    description:
      "Welcome to the official documentation for Fardo Encryption, a secure browser-based encryption tool for text and files.",
    introduction: "Introduction",
    introText:
      "Fardo Encryption is an open-source encryption tool that allows you to securely encrypt and decrypt text and files directly in your browser. All encryption and decryption operations are performed locally, ensuring your sensitive data never leaves your device.",
    keyFeatures: "Key Features",
    keyFeaturesList: [
      "Text encryption and decryption using industry-standard algorithms",
      "File encryption and decryption with progress tracking",
      "Secure sharing of encrypted content via unique links",
      "Support for multiple encryption algorithms (AES-256, RSA, SHA-256)",
      "Customizable interface with logo settings",
      "Comprehensive documentation and security best practices",
    ],
    howItWorks: "How It Works",
    howItWorksText1:
      "Fardo Encryption uses the Web Cryptography API to perform cryptographic operations directly in your browser. This means your data is processed locally on your device, and neither the plaintext nor the encryption keys are ever sent to any server.",
    howItWorksText2:
      "For sharing encrypted content, only the encrypted data is stored temporarily on our servers, and a unique link is generated. The recipient needs both the link and the encryption key (which you should share separately through a secure channel) to decrypt the content.",
    gettingStarted: "Getting Started",
    gettingStartedText: "To get started with Fardo Encryption, navigate to the sections below:",
    quickStart: "Quick Start Guide",
    quickStartDesc: "Learn the basics of using Fardo Encryption",
    textEncryption: "Text Encryption",
    textEncryptionDesc: "Encrypt and decrypt text messages",
    fileEncryption: "File Encryption",
    fileEncryptionDesc: "Encrypt and decrypt files",
    sharing: "Sharing",
    sharingDesc: "Share encrypted content securely",
    openSource: "Open Source",
    openSourceText:
      "Fardo Encryption is an open-source project. You can view the source code, report issues, or contribute to the project on GitHub:",
    viewOnGitHub: "View on GitHub",
  },
  ru: {
    title: "Документация Fardo Encryption",
    description:
      "Добро пожаловать в официальную документацию Fardo Encryption, безопасного браузерного инструмента шифрования для текста и файлов.",
    introduction: "Введение",
    introText:
      "Fardo Encryption — это инструмент шифрования с открытым исходным кодом, который позволяет безопасно шифровать и расшифровывать текст и файлы прямо в вашем браузере. Все операции шифрования и расшифровки выполняются локально, гарантируя, что ваши конфиденциальные данные никогда не покидают ваше устройство.",
    keyFeatures: "Ключевые особенности",
    keyFeaturesList: [
      "Шифрование и расшифровка текста с использованием стандартных алгоритмов",
      "Шифрование и расшифровка файлов с отслеживанием прогресса",
      "Безопасный обмен зашифрованным содержимым через уникальные ссылки",
      "Поддержка нескольких алгоритмов шифрования (AES-256, RSA, SHA-256)",
      "Настраиваемый интерфейс с настройками логотипа",
      "Исчерпывающая документация и лучшие практики безопасности",
    ],
    howItWorks: "Как это работает",
    howItWorksText1:
      "Fardo Encryption использует Web Cryptography API для выполнения криптографических операций непосредственно в вашем браузере. Это означает, что ваши данные обрабатываются локально на вашем устройстве, и ни открытый текст, ни ключи шифрования никогда не отправляются на какой-либо сервер.",
    howItWorksText2:
      "Для обмена зашифрованным содержимым только зашифрованные данные временно хранятся на наших серверах, и генерируется уникальная ссылка. Получателю нужны и ссылка, и ключ шифрования (которым вы должны поделиться отдельно через безопасный канал) для расшифровки содержимого.",
    gettingStarted: "Начало работы",
    gettingStartedText: "Чтобы начать работу с Fardo Encryption, перейдите к разделам ниже:",
    quickStart: "Руководство по быстрому старту",
    quickStartDesc: "Изучите основы использования Fardo Encryption",
    textEncryption: "Шифрование текста",
    textEncryptionDesc: "Шифрование и расшифровка текстовых сообщений",
    fileEncryption: "Шифрование файлов",
    fileEncryptionDesc: "Шифрование и расшифровка файлов",
    sharing: "Обмен",
    sharingDesc: "Безопасный обмен зашифрованным содержимым",
    openSource: "Открытый исходный код",
    openSourceText:
      "Fardo Encryption — это проект с открытым исходным кодом. Вы можете просмотреть исходный код, сообщить о проблемах или внести свой вклад в проект на GitHub:",
    viewOnGitHub: "Просмотреть на GitHub",
  },
  tg: {
    title: "Ҳуҷҷатҳои Рамзгузории Fardo",
    description:
      "Хуш омадед ба ҳуҷҷатҳои расмии Рамзгузории Fardo, абзори бехатари рамзгузории матн ва файлҳо дар браузер.",
    introduction: "Муқаддима",
    introText:
      "Рамзгузории Fardo як абзори рамзгузории кушодаасос аст, ки ба шумо имкон медиҳад матн ва файлҳоро мустақиман дар браузери худ бехатар рамзгузорӣ ва рамзкушоӣ кунед. Ҳамаи амалиётҳои рамзгузорӣ ва рамзкушоӣ дар дастгоҳи шумо иҷро мешаванд, ки маълумоти ҳассоси шумо ҳеҷ гоҳ аз дастгоҳи шумо берун намешавад.",
    keyFeatures: "Хусусиятҳои асосӣ",
    keyFeaturesList: [
      "Рамзгузорӣ ва рамзкушоии матн бо истифода аз алгоритмҳои стандартии саноатӣ",
      "Рамзгузорӣ ва рамзкушоии файлҳо бо пайгирии пешрафт",
      "Мубодилаи бехатари мӯҳтавои рамзгузоришуда тавассути пайвандҳои беназир",
      "Дастгирии алгоритмҳои гуногуни рамзгузорӣ (AES-256, RSA, SHA-256)",
      "Интерфейси танзимшаванда бо танзимоти логотип",
      "Ҳуҷҷатҳои ҷомеъ ва таҷрибаҳои беҳтарини амният",
    ],
    howItWorks: "Чӣ тавр кор мекунад",
    howItWorksText1:
      "Рамзгузории Fardo аз Web Cryptography API барои иҷрои амалиётҳои криптографӣ мустақиман дар браузери шумо истифода мебарад. Ин маънои онро дорад, ки маълумоти шумо дар дастгоҳи шумо коркард мешавад ва на матни оддӣ ва на калидҳои рамзгузорӣ ҳеҷ гоҳ ба ягон сервер фиристода намешаванд.",
    howItWorksText2:
      "Барои мубодилаи мӯҳтавои рамзгузоришуда, танҳо маълумоти рамзгузоришуда муваққатан дар серверҳои мо нигоҳ дошта мешавад ва пайванди беназир тавлид мешавад. Гиранда ҳам ба пайванд ва ҳам ба калиди рамзгузорӣ (ки шумо бояд онро тавассути канали бехатар алоҳида мубодила кунед) барои рамзкушоии мӯҳтаво ниёз дорад.",
    gettingStarted: "Оғози кор",
    gettingStartedText: "Барои оғози кор бо Рамзгузории Fardo, ба бахшҳои зерин гузаред:",
    quickStart: "Дастури оғози зуд",
    quickStartDesc: "Асосҳои истифодаи Рамзгузории Fardo-ро омӯзед",
    textEncryption: "Рамзгузории матн",
    textEncryptionDesc: "Рамзгузорӣ ва рамзкушоии паёмҳои матнӣ",
    fileEncryption: "Рамзгузории файл",
    fileEncryptionDesc: "Рамзгузорӣ ва рамзкушоии файлҳо",
    sharing: "Мубодила",
    sharingDesc: "Мубодилаи бехатари мӯҳтавои рамзгузоришуда",
    openSource: "Кушодаасос",
    openSourceText:
      "Рамзгузории Fardo як лоиҳаи кушодаасос аст. Шумо метавонед рамзи манбаъро бубинед, дар бораи мушкилот хабар диҳед ё ба лоиҳа дар GitHub саҳм гузоред:",
    viewOnGitHub: "Дидан дар GitHub",
  },
}

export default function DocsPage({ params }: { params: { lang: string } }) {
  const lang = (params.lang as keyof typeof content) || "en"

  // Check if the language is supported
  if (!content[lang]) {
    notFound()
  }

  const t = content[lang]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-4 text-white">{t.title}</h1>
        <p className="text-gray-400 mb-6">{t.description}</p>
      </div>

      <Card className="bg-gray-950 border-gray-800">
        <CardContent className="p-6">
          <h2 className="text-xl font-bold mb-4 text-white">{t.introduction}</h2>
          <div className="prose prose-invert max-w-none">
            <p>{t.introText}</p>

            <h3>{t.keyFeatures}</h3>
            <ul>
              {t.keyFeaturesList.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            <h3>{t.howItWorks}</h3>
            <p>{t.howItWorksText1}</p>
            <p>{t.howItWorksText2}</p>

            <h3>{t.gettingStarted}</h3>
            <p>{t.gettingStartedText}</p>
            <ul>
              <li>
                <Link href={`/docs/${lang}/quick-start`} className="text-primary hover:underline">
                  {t.quickStart}
                </Link>{" "}
                - {t.quickStartDesc}
              </li>
              <li>
                <Link href={`/docs/${lang}/features/text-encryption`} className="text-primary hover:underline">
                  {t.textEncryption}
                </Link>{" "}
                - {t.textEncryptionDesc}
              </li>
              <li>
                <Link href={`/docs/${lang}/features/file-encryption`} className="text-primary hover:underline">
                  {t.fileEncryption}
                </Link>{" "}
                - {t.fileEncryptionDesc}
              </li>
              <li>
                <Link href={`/docs/${lang}/features/sharing`} className="text-primary hover:underline">
                  {t.sharing}
                </Link>{" "}
                - {t.sharingDesc}
              </li>
            </ul>

            <h3>{t.openSource}</h3>
            <p>{t.openSourceText}</p>
            <div className="mt-4">
              <Link
                href={GITHUB_REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:underline"
              >
                <GithubIcon className="mr-2 h-4 w-4" />
                {t.viewOnGitHub}
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
