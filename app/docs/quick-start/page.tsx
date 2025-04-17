import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function QuickStartPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-4 text-white">Quick Start Guide</h1>
        <p className="text-gray-400 mb-6">Get up and running with Fardo Encryption in minutes.</p>
      </div>

      <Card className="bg-gray-950 border-gray-800">
        <CardContent className="p-6">
          <div className="prose prose-invert max-w-none">
            <h2>Getting Started with Text Encryption</h2>

            <h3>Step 1: Choose an Encryption Algorithm</h3>
            <p>From the main page, select the encryption algorithm you want to use:</p>
            <ul>
              <li>
                <strong>AES-256</strong> - A symmetric encryption algorithm that uses the same key for encryption and
                decryption.
              </li>
              <li>
                <strong>RSA</strong> - An asymmetric encryption algorithm that uses a pair of keys.
              </li>
              <li>
                <strong>SHA-256</strong> - A one-way hash function (not for encryption/decryption).
              </li>
            </ul>

            <h3>Step 2: Generate or Enter an Encryption Key</h3>
            <p>For AES-256 and RSA, you'll need an encryption key:</p>
            <ul>
              <li>Click the "Generate Key" button to create a secure random key.</li>
              <li>Or enter your own key in the key field.</li>
              <li>Make sure to save this key securely, as you'll need it to decrypt your data later.</li>
            </ul>

            <h3>Step 3: Enter Text and Encrypt</h3>
            <p>
              Enter the text you want to encrypt in the input field and click the "Encrypt Text" button. The encrypted
              result will appear in the output field.
            </p>

            <h3>Step 4: Copy or Share the Encrypted Text</h3>
            <p>You can:</p>
            <ul>
              <li>Click the "Copy" button to copy the encrypted text to your clipboard.</li>
              <li>
                Click the "Share" button to generate a shareable link (remember to share the encryption key separately).
              </li>
            </ul>

            <h3>Decrypting Text</h3>
            <p>To decrypt text:</p>
            <ol>
              <li>Switch to the "Decrypt" tab.</li>
              <li>Paste the encrypted text in the input field.</li>
              <li>Enter the same encryption key that was used for encryption.</li>
              <li>Click the "Decrypt Text" button.</li>
            </ol>

            <h2>Getting Started with File Encryption</h2>

            <h3>Step 1: Switch to File Encryption</h3>
            <p>Click on the "File Encryption" tab at the top of the application.</p>

            <h3>Step 2: Choose an Encryption Algorithm and Generate a Key</h3>
            <p>Follow the same process as with text encryption to select an algorithm and generate or enter a key.</p>

            <h3>Step 3: Select a File to Encrypt</h3>
            <p>Click the file selection area to choose a file from your device.</p>

            <h3>Step 4: Encrypt the File</h3>
            <p>
              Click the "Encrypt File" button and wait for the encryption process to complete. You can monitor the
              progress with the progress bar.
            </p>

            <h3>Step 5: Download the Encrypted File</h3>
            <p>
              Once encryption is complete, click the "Download Encrypted File" button to save the encrypted file to your
              device.
            </p>

            <h3>Decrypting Files</h3>
            <p>To decrypt a file:</p>
            <ol>
              <li>Switch to the "Decrypt" tab in the File Encryption section.</li>
              <li>Select the encrypted file.</li>
              <li>Enter the same encryption key that was used for encryption.</li>
              <li>Click the "Decrypt File" button.</li>
              <li>Download the decrypted file once the process is complete.</li>
            </ol>

            <h2>Next Steps</h2>
            <p>Now that you know the basics, explore these additional features:</p>
            <ul>
              <li>
                <Link href="/docs/features/sharing" className="text-primary hover:underline">
                  Sharing Encrypted Content
                </Link>{" "}
                - Learn how to securely share encrypted text.
              </li>
              <li>
                <Link href="/docs/security/best-practices" className="text-primary hover:underline">
                  Security Best Practices
                </Link>{" "}
                - Understand how to keep your encrypted data secure.
              </li>
              <li>
                <Link href="/docs/customization/logo" className="text-primary hover:underline">
                  Customizing the Application
                </Link>{" "}
                - Learn how to customize the application's appearance.
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
