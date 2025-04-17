import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { notFound } from "next/navigation"

// Define the content for each language
const content = {
  en: {
    title: "Quick Start Guide",
    description: "Get up and running with Fardo Encryption in minutes.",
    gettingStartedText: "Getting Started with Text Encryption",
    step1Title: "Step 1: Choose an Encryption Algorithm",
    step1Text: "From the main page, select the encryption algorithm you want to use:",
    algorithms: [
      {
        name: "AES-256",
        description: "A symmetric encryption algorithm that uses the same key for encryption and decryption.",
      },
      {
        name: "RSA",
        description: "An asymmetric encryption algorithm that uses a pair of keys.",
      },
      {
        name: "SHA-256",
        description: "A one-way hash function (not for encryption/decryption).",
      },
    ],
    step2Title: "Step 2: Generate or Enter an Encryption Key",
    step2Text: "For AES-256 and RSA, you'll need an encryption key:",
    step2List: [
      'Click the "Generate Key" button to create a secure random key.',
      "Or enter your own key in the key field.",
      "Make sure to save this key securely, as you'll need it to decrypt your data later.",
    ],
    step3Title: "Step 3: Enter Text and Encrypt",
    step3Text:
      'Enter the text you want to encrypt in the input field and click the "Encrypt Text" button. The encrypted result will appear in the output field.',
    step4Title: "Step 4: Copy or Share the Encrypted Text",
    step4Text: "You can:",
    step4List: [
      'Click the "Copy" button to copy the encrypted text to your clipboard.',
      'Click the "Share" button to generate a shareable link (remember to share the encryption key separately).',
    ],
    decryptingTitle: "Decrypting Text",
    decryptingText: "To decrypt text:",
    decryptingList: [
      'Switch to the "Decrypt" tab.',
      "Paste the encrypted text in the input field.",
      "Enter the same encryption key that was used for encryption.",
      'Click the "Decrypt Text" button.',
    ],
    fileEncryptionTitle: "Getting Started with File Encryption",
    fileStep1Title: "Step 1: Switch to File Encryption",
    fileStep1Text: 'Click on the "File Encryption" tab at the top of the application.',
    fileStep2Title: "Step 2: Choose an Encryption Algorithm and Generate a Key",
    fileStep2Text:
      "Follow the same process as with text encryption to select an algorithm and generate or enter a key.",
    fileStep3Title: "Step 3: Select a File to Encrypt",
    fileStep3Text: "Click the file selection area to choose a file from your device.",
    fileStep4Title: "Step 4: Encrypt the File",
    fileStep4Text:
      'Click the "Encrypt File" button and wait for the encryption process to complete. You can monitor the progress with the progress bar.',
    fileStep5Title: "Step 5: Download the Encrypted File",
    fileStep5Text:
      'Once encryption is complete, click the "Download Encrypted File" button to save the encrypted file to your device.',
    fileDecryptingTitle: "Decrypting Files",
    fileDecryptingText: "To decrypt a file:",
    fileDecryptingList: [
      'Switch to the "Decrypt" tab in the File Encryption section.',
      "Select the encrypted file.",
      "Enter the same encryption key that was used for encryption.",
      'Click the "Decrypt File" button.',
      "Download the decrypted file once the process is complete.",
    ],
    nextStepsTitle: "Next Steps",
    nextStepsText: "Now that you know the basics, explore these additional features:",
    sharingLink: "Sharing Encrypted Content",
    sharingText: "Learn how to securely share encrypted text.",
    securityLink: "Security Best Practices",
    securityText: "Understand how to keep your encrypted data secure.",
    customizationLink: "Customizing the Application",
    customizationText: "Learn how to customize the application's appearance.",
  },
  ru: {
    title: "Руководство по быстрому старту",
    description: "Начните работу с Fardo Encryption за считанные минуты.",
    gettingStartedText: "Начало работы с шифрованием текста",
    step1Title: "Шаг 1: Выберите алгоритм шифрования",
    step1Text: "На главной странице выберите алгоритм шифрования, который вы хотите использовать:",
    algorithms: [
      {
        name: "AES-256",
        description:
          "Симметричный алгоритм шифрования, который использует один и тот же ключ для шифрования и расшифровки.",
      },
      {
        name: "RSA",
        description: "Асимметричный алгоритм шифрования, который использует пару ключей.",
      },
      {
        name: "SHA-256",
        description: "Односторонняя хеш-функция (не для шифрования/расшифровки).",
      },
    ],
    step2Title: "Шаг 2: Сгенерируйте или введите ключ шифрования",
    step2Text: "Для AES-256 и RSA вам понадобится ключ шифрования:",
    step2List: [
      'Нажмите кнопку "Сгенерировать ключ", чтобы создать безопасный случайный ключ.',
      "Или введите свой собственный ключ в поле ключа.",
      "Обязательно сохраните этот ключ в надежном месте, так как он понадобится вам для расшифровки данных позже.",
    ],
    step3Title: "Шаг 3: Введите текст и зашифруйте",
    step3Text:
      'Введите текст, который вы хотите зашифровать, в поле ввода и нажмите кнопку "Зашифровать текст". Зашифрованный результат появится в поле вывода.',
    step4Title: "Шаг 4: Скопируйте или поделитесь зашифрованным текстом",
    step4Text: "Вы можете:",
    step4List: [
      'Нажать кнопку "Копировать", чтобы скопировать зашифрованный текст в буфер обмена.',
      'Нажать кнопку "Поделиться", чтобы сгенерировать ссылку для обмена (не забудьте поделиться ключом шифрования отдельно).',
    ],
    decryptingTitle: "Расшифровка текста",
    decryptingText: "Для расшифровки текста:",
    decryptingList: [
      'Переключитесь на вкладку "Расшифровать".',
      "Вставьте зашифрованный текст в поле ввода.",
      "Введите тот же ключ шифрования, который использовался для шифрования.",
      'Нажмите кнопку "Расшифровать текст".',
    ],
    fileEncryptionTitle: "Начало работы с шифрованием файлов",
    fileStep1Title: "Шаг 1: Переключитесь на шифрование файлов",
    fileStep1Text: 'Нажмите на вкладку "Шифрование файлов" в верхней части приложения.',
    fileStep2Title: "Шаг 2: Выберите алгоритм шифрования и сгенерируйте ключ",
    fileStep2Text:
      "Следуйте тому же процессу, что и при шифровании текста, чтобы выбрать алгоритм и сгенерировать или ввести ключ.",
    fileStep3Title: "Шаг 3: Выберите файл для шифрования",
    fileStep3Text: "Нажмите на область выбора файла, чтобы выбрать файл с вашего устройства.",
    fileStep4Title: "Шаг 4: Зашифруйте файл",
    fileStep4Text:
      'Нажмите кнопку "Зашифровать файл" и дождитесь завершения процесса шифрования. Вы можете следить за прогрессом с помощью индикатора выполнения.',
    fileStep5Title: "Шаг 5: Скачайте зашифрованный файл",
    fileStep5Text:
      'После завершения шифрования нажмите кнопку "Скачать зашифрованный файл", чтобы сохранить зашифрованный файл на ваше устройство.',
    fileDecryptingTitle: "Расшифровка файлов",
    fileDecryptingText: "Для расшифровки файла:",
    fileDecryptingList: [
      'Переключитесь на вкладку "Расшифровать" в разделе шифрования файлов.',
      "Выберите зашифрованный файл.",
      "Введите тот же ключ шифрования, который использовался для шифрования.",
      'Нажмите кнопку "Расшифровать файл".',
      "Скачайте расшифрованный файл после завершения процесса.",
    ],
    nextStepsTitle: "Следующие шаги",
    nextStepsText: "Теперь, когда вы знаете основы, изучите эти дополнительные функции:",
    sharingLink: "Обмен зашифрованным содержимым",
    sharingText: "Узнайте, как безопасно обмениваться зашифрованным текстом.",
    securityLink: "Лучшие практики безопасности",
    securityText: "Поймите, как обеспечить безопасность ваших зашифрованных данных.",
    customizationLink: "Настройка приложения",
    customizationText: "Узнайте, как настроить внешний вид приложения.",
  },
  tg: {
    title: "Дастури оғози зуд",
    description: "Дар якчанд дақиқа бо Рамзгузории Fardo кор кунед.",
    gettingStartedText: "Оғози кор бо рамзгузории матн",
    step1Title: "Қадами 1: Алгоритми рамзгузориро интихоб кунед",
    step1Text: "Аз саҳифаи асосӣ, алгоритми рамзгузориеро, ки мехоҳед истифода баред, интихоб кунед:",
    algorithms: [
      {
        name: "AES-256",
        description: "Алгоритми рамзгузории симметрӣ, ки барои рамзгузорӣ ва рамзкушоӣ як калидро истифода мебарад.",
      },
      {
        name: "RSA",
        description: "Алгоритми рамзгузории ғайрисимметрӣ, ки ҷуфти калидҳоро истифода мебарад.",
      },
      {
        name: "SHA-256",
        description: "Функсияи ҳеши якрӯя (на барои рамзгузорӣ/рамзкушоӣ).",
      },
    ],
    step2Title: "Қадами 2: Калиди рамзгузориро эҷод ё ворид кунед",
    step2Text: "Барои AES-256 ва RSA, ба шумо калиди рамзгузорӣ лозим аст:",
    step2List: [
      'Барои эҷоди калиди тасодуфии бехатар тугмаи "Эҷоди калид"-ро пахш кунед.',
      "Ё калиди худро дар майдони калид ворид кунед.",
      "Ҳатман ин калидро дар ҷои бехатар нигоҳ доред, зеро барои рамзкушоии маълумоти худ дертар ба он ниёз хоҳед дошт.",
    ],
    step3Title: "Қадами 3: Матнро ворид кунед ва рамзгузорӣ кунед",
    step3Text:
      'Матнеро, ки мехоҳед рамзгузорӣ кунед, дар майдони вуруд ворид кунед ва тугмаи "Рамзгузории матн"-ро пахш кунед. Натиҷаи рамзгузоришуда дар майдони натиҷа пайдо мешавад.',
    step4Title: "Қадами 4: Матни рамзгузоришударо нусхабардорӣ ё мубодила кунед",
    step4Text: "Шумо метавонед:",
    step4List: [
      'Барои нусхабардории матни рамзгузоришуда ба ҳофизаи муваққатӣ тугмаи "Нусхабардорӣ"-ро пахш кунед.',
      'Барои тавлиди пайванди мубодила тугмаи "Мубодила"-ро пахш кунед (дар хотир доред, ки калиди рамзгузориро алоҳида мубодила кунед).',
    ],
    decryptingTitle: "Рамзкушоии матн",
    decryptingText: "Барои рамзкушоии матн:",
    decryptingList: [
      'Ба ҷадвали "Рамзкушоӣ" гузаред.',
      "Матни рамзгузоришударо дар майдони вуруд гузоред.",
      "Ҳамон калиди рамзгузориеро, ки барои рамзгузорӣ истифода шуда буд, ворид кунед.",
      'Тугмаи "Рамзкушоии матн"-ро пахш кунед.',
    ],
    fileEncryptionTitle: "Оғози кор бо рамзгузории файл",
    fileStep1Title: "Қадами 1: Ба рамзгузории файл гузаред",
    fileStep1Text: 'Дар болои барнома ба ҷадвали "Рамзгузории файл" пахш кунед.',
    fileStep2Title: "Қадами 2: Алгоритми рамзгузориро интихоб кунед ва калид эҷод кунед",
    fileStep2Text:
      "Барои интихоби алгоритм ва эҷод ё ворид кардани калид ҳамон равандеро, ки бо рамзгузории матн истифода мешавад, пайравӣ кунед.",
    fileStep3Title: "Қадами 3: Файлро барои рамзгузорӣ интихоб кунед",
    fileStep3Text: "Барои интихоби файл аз дастгоҳи худ ба минтақаи интихоби файл пахш кунед.",
    fileStep4Title: "Қадами 4: Файлро рамзгузорӣ кунед",
    fileStep4Text:
      'Тугмаи "Рамзгузории файл"-ро пахш кунед ва то анҷоми раванди рамзгузорӣ интизор шавед. Шумо метавонед пешрафтро бо нишондиҳандаи пешрафт назорат кунед.',
    fileStep5Title: "Қадами 5: Файли рамзгузоришударо боргирӣ кунед",
    fileStep5Text:
      'Пас аз анҷоми рамзгузорӣ, барои нигоҳ доштани файли рамзгузоришуда дар дастгоҳи худ тугмаи "Боргирии файли рамзгузоришуда"-ро пахш кунед.',
    fileDecryptingTitle: "Рамзкушоии файлҳо",
    fileDecryptingText: "Барои рамзкушоии файл:",
    fileDecryptingList: [
      'Дар қисмати рамзгузории файл ба ҷадвали "Рамзкушоӣ" гузаред.',
      "Файли рамзгузоришударо интихоб кунед.",
      "Ҳамон калиди рамзгузориеро, ки барои рамзгузорӣ истифода шуда буд, ворид кунед.",
      'Тугмаи "Рамзкушоии файл"-ро пахш кунед.',
      "Пас аз анҷоми раванд файли рамзкушоишударо боргирӣ кунед.",
    ],
    nextStepsTitle: "Қадамҳои навбатӣ",
    nextStepsText: "Акнун, ки шумо асосҳоро медонед, ин хусусиятҳои иловагиро омӯзед:",
    sharingLink: "Мубодилаи мӯҳтавои рамзгузоришуда",
    sharingText: "Омӯзед, ки чӣ тавр матни рамзгузоришударо бехатар мубодила кунед.",
    securityLink: "Таҷрибаҳои беҳтарини амният",
    securityText: "Фаҳмед, ки чӣ тавр маълумоти рамзгузоришудаи худро бехатар нигоҳ доред.",
    customizationLink: "Танзими барнома",
    customizationText: "Омӯзед, ки чӣ тавр намуди зоҳирии барномаро танзим кунед.",
  },
}

export default function QuickStartPage({ params }: { params: { lang: string } }) {
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
          <div className="prose prose-invert max-w-none">
            <h2>{t.gettingStartedText}</h2>

            <h3>{t.step1Title}</h3>
            <p>{t.step1Text}</p>
            <ul>
              {t.algorithms.map((algorithm, index) => (
                <li key={index}>
                  <strong>{algorithm.name}</strong> - {algorithm.description}
                </li>
              ))}
            </ul>

            <h3>{t.step2Title}</h3>
            <p>{t.step2Text}</p>
            <ul>
              {t.step2List.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3>{t.step3Title}</h3>
            <p>{t.step3Text}</p>

            <h3>{t.step4Title}</h3>
            <p>{t.step4Text}</p>
            <ul>
              {t.step4List.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3>{t.decryptingTitle}</h3>
            <p>{t.decryptingText}</p>
            <ol>
              {t.decryptingList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>

            <h2>{t.fileEncryptionTitle}</h2>

            <h3>{t.fileStep1Title}</h3>
            <p>{t.fileStep1Text}</p>

            <h3>{t.fileStep2Title}</h3>
            <p>{t.fileStep2Text}</p>

            <h3>{t.fileStep3Title}</h3>
            <p>{t.fileStep3Text}</p>

            <h3>{t.fileStep4Title}</h3>
            <p>{t.fileStep4Text}</p>

            <h3>{t.fileStep5Title}</h3>
            <p>{t.fileStep5Text}</p>

            <h3>{t.fileDecryptingTitle}</h3>
            <p>{t.fileDecryptingText}</p>
            <ol>
              {t.fileDecryptingList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>

            <h2>{t.nextStepsTitle}</h2>
            <p>{t.nextStepsText}</p>
            <ul>
              <li>
                <Link href={`/docs/${lang}/features/sharing`} className="text-primary hover:underline">
                  {t.sharingLink}
                </Link>{" "}
                - {t.sharingText}
              </li>
              <li>
                <Link href={`/docs/${lang}/security/best-practices`} className="text-primary hover:underline">
                  {t.securityLink}
                </Link>{" "}
                - {t.securityText}
              </li>
              <li>
                <Link href={`/docs/${lang}/customization/logo`} className="text-primary hover:underline">
                  {t.customizationLink}
                </Link>{" "}
                - {t.customizationText}
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
