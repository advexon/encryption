export type Language = "en" | "ru" | "tg"

export type TranslationKey =
  | "app.title"
  | "app.description"
  | "nav.github"
  | "nav.documentation"
  | "nav.starOnGithub"
  | "common.loading"
  | "common.error"
  | "common.success"
  | "common.cancel"
  | "common.save"
  | "common.close"
  | "common.copy"
  | "common.copied"
  | "common.download"
  | "common.upload"
  | "common.processing"
  | "common.generate"
  | "common.share"
  | "common.retrieve"
  | "common.retrieving"
  | "encryption.algorithm"
  | "encryption.aes256"
  | "encryption.rsa"
  | "encryption.sha256"
  | "encryption.encrypt"
  | "encryption.decrypt"
  | "encryption.hash"
  | "encryption.key"
  | "encryption.generateKey"
  | "encryption.keyVisible"
  | "encryption.keyHidden"
  | "encryption.textToEncrypt"
  | "encryption.textToDecrypt"
  | "encryption.textToHash"
  | "encryption.fileToEncrypt"
  | "encryption.fileToDecrypt"
  | "encryption.fileToHash"
  | "encryption.result"
  | "encryption.encryptText"
  | "encryption.decryptText"
  | "encryption.hashText"
  | "encryption.encryptFile"
  | "encryption.decryptFile"
  | "encryption.hashFile"
  | "encryption.selectFile"
  | "encryption.clickToSelectFile"
  | "encryption.textEncryption"
  | "encryption.fileEncryption"
  | "encryption.retrieveShared"
  | "error.emptyText"
  | "error.emptyKey"
  | "error.invalidData"
  | "error.decryptionFailed"
  | "error.fileRequired"
  | "error.keyRequired"
  | "error.processingError"
  | "error.fileTooSmall"
  | "share.title"
  | "share.description"
  | "share.linkWillExpire"
  | "share.shareKeySeparately"
  | "share.retrieveTitle"
  | "share.retrieveDescription"
  | "share.snippetIdOrUrl"
  | "share.sharedEncryptedText"
  | "share.sharedDescription"
  | "share.created"
  | "share.decryptContent"
  | "share.redirectDescription"
  | "share.backToApp"
  | "share.snippetNotFound"
  | "share.snippetExpired"
  | "share.snippetRetrieved"
  | "share.enterKeyToDecrypt"
  | "share.idRequired"
  | "settings.logo.title"
  | "settings.logo.description"
  | "settings.logo.uploadLogo"
  | "settings.logo.chooseFile"
  | "settings.logo.recommendedSize"
  | "settings.logo.altText"
  | "settings.logo.logoWidth"
  | "settings.logo.logoHeight"
  | "settings.logo.showText"
  | "settings.logo.preview"
  | "settings.logo.headerPreview"
  | "settings.logo.lightBackground"
  | "settings.logo.darkBackground"
  | "settings.logo.resetDefaults"
  | "settings.logo.saveConfiguration"
  | "settings.logo.settingsSaved"
  | "settings.logo.saveFailed"
  | "footer.copyright"
  | "footer.viewSource"
  | "language.en"
  | "language.ru"
  | "language.tg"
  | "language.select"

// English translations
export const en: Record<TranslationKey, string> = {
  "app.title": "Fardo Encryption",
  "app.description": "Secure file & text encryption in your browser",
  "nav.github": "GitHub",
  "nav.documentation": "Documentation",
  "nav.starOnGithub": "Star on GitHub",
  "common.loading": "Loading...",
  "common.error": "Error",
  "common.success": "Success",
  "common.cancel": "Cancel",
  "common.save": "Save",
  "common.close": "Close",
  "common.copy": "Copy",
  "common.copied": "Copied!",
  "common.download": "Download",
  "common.upload": "Upload",
  "common.processing": "Processing...",
  "common.generate": "Generate",
  "common.share": "Share",
  "common.retrieve": "Retrieve",
  "common.retrieving": "Retrieving...",
  "encryption.algorithm": "Encryption Algorithm",
  "encryption.aes256": "AES-256 (Symmetric)",
  "encryption.rsa": "RSA (Asymmetric)",
  "encryption.sha256": "SHA-256 (Hash only)",
  "encryption.encrypt": "Encrypt",
  "encryption.decrypt": "Decrypt",
  "encryption.hash": "Hash",
  "encryption.key": "Encryption Key",
  "encryption.generateKey": "Generate Key",
  "encryption.keyVisible": "Key is visible. Click the eye icon to hide it.",
  "encryption.keyHidden": "Key is hidden. Click the eye icon to view it.",
  "encryption.textToEncrypt": "Text to Encrypt",
  "encryption.textToDecrypt": "Text to Decrypt",
  "encryption.textToHash": "Text to Hash",
  "encryption.fileToEncrypt": "File to Encrypt",
  "encryption.fileToDecrypt": "File to Decrypt",
  "encryption.fileToHash": "File to Hash",
  "encryption.result": "Result",
  "encryption.encryptText": "Encrypt Text",
  "encryption.decryptText": "Decrypt Text",
  "encryption.hashText": "Hash Text",
  "encryption.encryptFile": "Encrypt File",
  "encryption.decryptFile": "Decrypt File",
  "encryption.hashFile": "Hash File",
  "encryption.selectFile": "Select File",
  "encryption.clickToSelectFile": "Click to select a file",
  "encryption.textEncryption": "Text Encryption",
  "encryption.fileEncryption": "File Encryption",
  "encryption.retrieveShared": "Retrieve Shared",
  "error.emptyText": "Please enter text to process",
  "error.emptyKey": "Please enter or generate a key",
  "error.invalidData": "The input doesn't appear to be valid encrypted text. Please check your data.",
  "error.decryptionFailed": "Decryption failed. The key may be incorrect.",
  "error.fileRequired": "Please select a file to process",
  "error.keyRequired": "Please enter or generate a key",
  "error.processingError": "An error occurred during processing",
  "error.fileTooSmall": "The selected file is too small to be valid encrypted data",
  "share.title": "Share Encrypted Text",
  "share.description":
    "Anyone with this link can access your encrypted text, but they'll need the encryption key to decrypt it.",
  "share.linkWillExpire":
    "The link will expire after 7 days. Make sure to share the encryption key separately through a secure channel.",
  "share.shareKeySeparately": "Share the encryption key separately through a secure channel.",
  "share.retrieveTitle": "Retrieve Shared Text",
  "share.retrieveDescription": "Enter the snippet ID or paste the full URL to retrieve the encrypted text.",
  "share.snippetIdOrUrl": "Snippet ID or URL",
  "share.sharedEncryptedText": "Shared Encrypted Text",
  "share.sharedDescription":
    "This text was encrypted and shared with you. You'll need the encryption key to decrypt it.",
  "share.created": "Created",
  "share.decryptContent": "Decrypt This Content",
  "share.redirectDescription": "You'll be redirected to the decryption tool where you can enter the encryption key.",
  "share.backToApp": "Back to Encryption App",
  "share.snippetNotFound": "Snippet not found or expired",
  "share.snippetExpired": "The shared content has expired or was not found",
  "share.snippetRetrieved": "Snippet Retrieved",
  "share.enterKeyToDecrypt": "The encrypted text has been loaded. Enter the key to decrypt it.",
  "share.idRequired": "Please enter a snippet ID.",
  "settings.logo.title": "Logo Settings",
  "settings.logo.description": "Customize how your logo appears in the application",
  "settings.logo.uploadLogo": "Upload Logo",
  "settings.logo.chooseFile": "Choose File",
  "settings.logo.recommendedSize": "Recommended size: 40x40px. Supports PNG, JPG, SVG.",
  "settings.logo.altText": "Alt Text",
  "settings.logo.logoWidth": "Logo Width",
  "settings.logo.logoHeight": "Logo Height",
  "settings.logo.showText": "Show Brand Text",
  "settings.logo.preview": "Logo Preview",
  "settings.logo.headerPreview": "Header Preview",
  "settings.logo.lightBackground": "Light Background",
  "settings.logo.darkBackground": "Dark Background",
  "settings.logo.resetDefaults": "Reset to Defaults",
  "settings.logo.saveConfiguration": "Save Configuration",
  "settings.logo.settingsSaved": "Logo configuration has been updated successfully.",
  "settings.logo.saveFailed": "An error occurred while saving settings",
  "footer.copyright": "© {year} Fardo Encryption. All rights reserved.",
  "footer.viewSource": "View source code on GitHub",
  "language.en": "English",
  "language.ru": "Русский",
  "language.tg": "Тоҷикӣ",
  "language.select": "Language",
}

// Russian translations
export const ru: Record<TranslationKey, string> = {
  "app.title": "Шифрование Fardo",
  "app.description": "Безопасное шифрование файлов и текста в вашем браузере",
  "nav.github": "GitHub",
  "nav.documentation": "Документация",
  "nav.starOnGithub": "Звезда на GitHub",
  "common.loading": "Загрузка...",
  "common.error": "Ошибка",
  "common.success": "Успех",
  "common.cancel": "Отмена",
  "common.save": "Сохранить",
  "common.close": "Закрыть",
  "common.copy": "Копировать",
  "common.copied": "Скопировано!",
  "common.download": "Скачать",
  "common.upload": "Загрузить",
  "common.processing": "Обработка...",
  "common.generate": "Сгенерировать",
  "common.share": "Поделиться",
  "common.retrieve": "Получить",
  "common.retrieving": "Получение...",
  "encryption.algorithm": "Алгоритм шифрования",
  "encryption.aes256": "AES-256 (Симметричный)",
  "encryption.rsa": "RSA (Асимметричный)",
  "encryption.sha256": "SHA-256 (Только хеширование)",
  "encryption.encrypt": "Зашифровать",
  "encryption.decrypt": "Расшифровать",
  "encryption.hash": "Хешировать",
  "encryption.key": "Ключ шифрования",
  "encryption.generateKey": "Сгенерировать ключ",
  "encryption.keyVisible": "Ключ виден. Нажмите на значок глаза, чтобы скрыть его.",
  "encryption.keyHidden": "Ключ скрыт. Нажмите на значок глаза, чтобы показать его.",
  "encryption.textToEncrypt": "Текст для шифрования",
  "encryption.textToDecrypt": "Текст для расшифровки",
  "encryption.textToHash": "Текст для хеширования",
  "encryption.fileToEncrypt": "Файл для шифрования",
  "encryption.fileToDecrypt": "Файл для расшифровки",
  "encryption.fileToHash": "Файл для хеширования",
  "encryption.result": "Результат",
  "encryption.encryptText": "Зашифровать текст",
  "encryption.decryptText": "Расшифровать текст",
  "encryption.hashText": "Хешировать текст",
  "encryption.encryptFile": "Зашифровать файл",
  "encryption.decryptFile": "Расшифровать файл",
  "encryption.hashFile": "Хешировать файл",
  "encryption.selectFile": "Выбрать файл",
  "encryption.clickToSelectFile": "Нажмите, чтобы выбрать файл",
  "encryption.textEncryption": "Шифрование текста",
  "encryption.fileEncryption": "Шифрование файлов",
  "encryption.retrieveShared": "Получить общий",
  "error.emptyText": "Пожалуйста, введите текст для обработки",
  "error.emptyKey": "Пожалуйста, введите или сгенерируйте ключ",
  "error.invalidData": "Введенные данные не похожи на зашифрованный текст. Пожалуйста, проверьте данные.",
  "error.decryptionFailed": "Расшифровка не удалась. Возможно, ключ неверный.",
  "error.fileRequired": "Пожалуйста, выберите файл для обработки",
  "error.keyRequired": "Пожалуйста, введите или сгенерируйте ключ",
  "error.processingError": "Произошла ошибка во время обработки",
  "error.fileTooSmall": "Выбранный файл слишком мал для действительных зашифрованных данных",
  "share.title": "Поделиться зашифрованным текстом",
  "share.description":
    "Любой, у кого есть эта ссылка, может получить доступ к вашему зашифрованному тексту, но им понадобится ключ шифрования для расшифровки.",
  "share.linkWillExpire":
    "Срок действия ссылки истекает через 7 дней. Обязательно поделитесь ключом шифрования отдельно через безопасный канал.",
  "share.shareKeySeparately": "Поделитесь ключом шифрования отдельно через безопасный канал.",
  "share.retrieveTitle": "Получить общий текст",
  "share.retrieveDescription": "Введите ID фрагмента или вставьте полный URL для получения зашифрованного текста.",
  "share.snippetIdOrUrl": "ID фрагмента или URL",
  "share.sharedEncryptedText": "Общий зашифрованный текст",
  "share.sharedDescription":
    "Этот текст был зашифрован и поделен с вами. Вам понадобится ключ шифрования для расшифровки.",
  "share.created": "Создано",
  "share.decryptContent": "Расшифровать этот контент",
  "share.redirectDescription":
    "Вы будете перенаправлены на инструмент расшифровки, где сможете ввести ключ шифрования.",
  "share.backToApp": "Вернуться к приложению шифрования",
  "share.snippetNotFound": "Фрагмент не найден или срок его действия истек",
  "share.snippetExpired": "Срок действия общего контента истек или он не был найден",
  "share.snippetRetrieved": "Фрагмент получен",
  "share.enterKeyToDecrypt": "Зашифрованный текст загружен. Введите ключ для расшифровки.",
  "share.idRequired": "Пожалуйста, введите ID фрагмента.",
  "settings.logo.title": "Настройки логотипа",
  "settings.logo.description": "Настройте отображение логотипа в приложении",
  "settings.logo.uploadLogo": "Загрузить логотип",
  "settings.logo.chooseFile": "Выбрать файл",
  "settings.logo.recommendedSize": "Рекомендуемый размер: 40x40px. Поддерживает PNG, JPG, SVG.",
  "settings.logo.altText": "Альтернативный текст",
  "settings.logo.logoWidth": "Ширина логотипа",
  "settings.logo.logoHeight": "Высота логотипа",
  "settings.logo.showText": "Показать текст бренда",
  "settings.logo.preview": "Предпросмотр логотипа",
  "settings.logo.headerPreview": "Предпросмотр заголовка",
  "settings.logo.lightBackground": "Светлый фон",
  "settings.logo.darkBackground": "Темный фон",
  "settings.logo.resetDefaults": "Сбросить настройки",
  "settings.logo.saveConfiguration": "Сохранить конфигурацию",
  "settings.logo.settingsSaved": "Конфигурация логотипа успешно обновлена.",
  "settings.logo.saveFailed": "Произошла ошибка при сохранении настроек",
  "footer.copyright": "© {year} Шифрование Fardo. Все права защищены.",
  "footer.viewSource": "Посмотреть исходный код на GitHub",
  "language.en": "English",
  "language.ru": "Русский",
  "language.tg": "Тоҷикӣ",
  "language.select": "Язык",
}

// Tajik translations
export const tg: Record<TranslationKey, string> = {
  "app.title": "Рамзгузории Fardo",
  "app.description": "Рамзгузории бехатари файлҳо ва матн дар браузери шумо",
  "nav.github": "GitHub",
  "nav.documentation": "Ҳуҷҷатҳо",
  "nav.starOnGithub": "Ситора дар GitHub",
  "common.loading": "Боргирӣ...",
  "common.error": "Хато",
  "common.success": "Муваффақият",
  "common.cancel": "Бекор кардан",
  "common.save": "Нигоҳ доштан",
  "common.close": "Пӯшидан",
  "common.copy": "Нусхабардорӣ",
  "common.copied": "Нусхабардорӣ шуд!",
  "common.download": "Боргирӣ",
  "common.upload": "Боркунӣ",
  "common.processing": "Коркард...",
  "common.generate": "Эҷод кардан",
  "common.share": "Мубодила",
  "common.retrieve": "Гирифтан",
  "common.retrieving": "Гирифтан...",
  "encryption.algorithm": "Алгоритми рамзгузорӣ",
  "encryption.aes256": "AES-256 (Симметрӣ)",
  "encryption.rsa": "RSA (Ғайрисимметрӣ)",
  "encryption.sha256": "SHA-256 (Танҳо ҳеш)",
  "encryption.encrypt": "Рамзгузорӣ",
  "encryption.decrypt": "Рамзкушоӣ",
  "encryption.hash": "Ҳеш",
  "encryption.key": "Калиди рамзгузорӣ",
  "encryption.generateKey": "Эҷоди калид",
  "encryption.keyVisible": "Калид намоён аст. Барои пинҳон кардан ба нишонаи чашм пахш кунед.",
  "encryption.keyHidden": "Калид пинҳон аст. Барои намоиш ба нишонаи чашм пахш кунед.",
  "encryption.textToEncrypt": "Матн барои рамзгузорӣ",
  "encryption.textToDecrypt": "Матн барои рамзкушоӣ",
  "encryption.textToHash": "Матн барои ҳеш",
  "encryption.fileToEncrypt": "Файл барои рамзгузорӣ",
  "encryption.fileToDecrypt": "Файл барои рамзкушоӣ",
  "encryption.fileToHash": "Файл барои ҳеш",
  "encryption.result": "Натиҷа",
  "encryption.encryptText": "Рамзгузории матн",
  "encryption.decryptText": "Рамзкушоии матн",
  "encryption.hashText": "Ҳеши матн",
  "encryption.encryptFile": "Рамзгузории файл",
  "encryption.decryptFile": "Рамзкушоии файл",
  "encryption.hashFile": "Ҳеши файл",
  "encryption.selectFile": "Интихоби файл",
  "encryption.clickToSelectFile": "Барои интихоби файл пахш кунед",
  "encryption.textEncryption": "Рамзгузории матн",
  "encryption.fileEncryption": "Рамзгузории файл",
  "encryption.retrieveShared": "Гирифтани мубодилашуда",
  "error.emptyText": "Лутфан, матнро барои коркард ворид кунед",
  "error.emptyKey": "Лутфан, калидро ворид ё эҷод кунед",
  "error.invalidData": "Маълумоти воридшуда ба матни рамзгузоришуда монанд нест. Лутфан, маълумотро тафтиш кунед.",
  "error.decryptionFailed": "Рамзкушоӣ ноком шуд. Эҳтимол, калид нодуруст аст.",
  "error.fileRequired": "Лутфан, файлро барои коркард интихоб кунед",
  "error.keyRequired": "Лутфан, калидро ворид ё эҷод кунед",
  "error.processingError": "Ҳангоми коркард хато рӯй дод",
  "error.fileTooSmall": "Файли интихобшуда барои маълумоти рамзгузоришудаи дуруст хеле хурд аст",
  "share.title": "Мубодилаи матни рамзгузоришуда",
  "share.description":
    "Ҳар кас, ки ин пайвандро дорад, метавонад ба матни рамзгузоришудаи шумо дастрасӣ пайдо кунад, аммо барои рамзкушоӣ ба онҳо калиди рамзгузорӣ лозим аст.",
  "share.linkWillExpire":
    "Пайванд пас аз 7 рӯз гузашта мешавад. Ҳатман калиди рамзгузориро тавассути канали бехатар алоҳида мубодила кунед.",
  "share.shareKeySeparately": "Калиди рамзгузориро тавассути канали бехатар алоҳида мубодила кунед.",
  "share.retrieveTitle": "Гирифтани матни мубодилашуда",
  "share.retrieveDescription": "ID-и порчаро ворид кунед ё URL-и пурраро часпонед, то матни рамзгузоришударо гиред.",
  "share.snippetIdOrUrl": "ID-и порча ё URL",
  "share.sharedEncryptedText": "Матни рамзгузоришудаи мубодилашуда",
  "share.sharedDescription":
    "Ин матн рамзгузорӣ шуда, бо шумо мубодила шудааст. Барои рамзкушоӣ ба шумо калиди рамзгузорӣ лозим аст.",
  "share.created": "Эҷод шуд",
  "share.decryptContent": "Рамзкушоии ин мӯҳтаво",
  "share.redirectDescription":
    "Шумо ба абзори рамзкушоӣ равона мешавед, ки дар он ҷо метавонед калиди рамзгузориро ворид кунед.",
  "share.backToApp": "Бозгашт ба барномаи рамзгузорӣ",
  "share.snippetNotFound": "Порча ёфт нашуд ё мӯҳлаташ гузаштааст",
  "share.snippetExpired": "Мӯҳлати мӯҳтавои мубодилашуда гузаштааст ё он ёфт нашуд",
  "share.snippetRetrieved": "Порча гирифта шуд",
  "share.enterKeyToDecrypt": "Матни рамзгузоришуда боргирӣ шуд. Барои рамзкушоӣ калидро ворид кунед.",
  "share.idRequired": "Лутфан, ID-и порчаро ворид кунед.",
  "settings.logo.title": "Танзимоти логотип",
  "settings.logo.description": "Намоиши логотипро дар барнома танзим кунед",
  "settings.logo.uploadLogo": "Боркунии логотип",
  "settings.logo.chooseFile": "Интихоби файл",
  "settings.logo.recommendedSize": "Андозаи тавсияшуда: 40x40px. PNG, JPG, SVG дастгирӣ мешаванд.",
  "settings.logo.altText": "Матни алтернативӣ",
  "settings.logo.logoWidth": "Бари логотип",
  "settings.logo.logoHeight": "Баландии логотип",
  "settings.logo.showText": "Намоиши матни тамға",
  "settings.logo.preview": "Пешнамоиши логотип",
  "settings.logo.headerPreview": "Пешнамоиши сарлавҳа",
  "settings.logo.lightBackground": "Пасзаминаи равшан",
  "settings.logo.darkBackground": "Пасзаминаи торик",
  "settings.logo.resetDefaults": "Барқарор кардани танзимоти пешфарз",
  "settings.logo.saveConfiguration": "Нигоҳ доштани танзимот",
  "settings.logo.settingsSaved": "Танзимоти логотип бомуваффақият нав карда шуд.",
  "settings.logo.saveFailed": "Ҳангоми нигоҳ доштани танзимот хато рӯй дод",
  "footer.copyright": "© {year} Рамзгузории Fardo. Ҳамаи ҳуқуқҳо ҳифз шудаанд.",
  "footer.viewSource": "Дидани рамзи манбаъ дар GitHub",
  "language.en": "English",
  "language.ru": "Русский",
  "language.tg": "Тоҷикӣ",
  "language.select": "Забон",
}

// Helper function to get a translation
export function getTranslation(
  language: Language,
  key: TranslationKey,
  params?: Record<string, string | number>,
): string {
  let translations: Record<TranslationKey, string>

  switch (language) {
    case "ru":
      translations = ru
      break
    case "tg":
      translations = tg
      break
    default:
      translations = en
  }

  let text = translations[key] || en[key] || key

  // Replace parameters in the text
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      text = text.replace(`{${key}}`, String(value))
    })
  }

  return text
}
