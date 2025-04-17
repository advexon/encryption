import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function FileEncryptionPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-4 text-white">File Encryption</h1>
        <p className="text-gray-400 mb-6">Learn how to encrypt and decrypt files using Fardo Encryption.</p>
      </div>

      <Card className="bg-gray-950 border-gray-800">
        <CardContent className="p-6">
          <div className="prose prose-invert max-w-none">
            <h2>File Encryption Features</h2>
            <p>The File Encryption module allows you to:</p>
            <ul>
              <li>Encrypt files of any type using AES-256 or RSA algorithms</li>
              <li>Generate secure encryption keys</li>
              <li>Hash files using SHA-256</li>
              <li>Track encryption and decryption progress</li>
              <li>Decrypt files that were encrypted with the same algorithm and key</li>
            </ul>

            <h2>Supported File Types</h2>
            <p>Fardo Encryption can encrypt and decrypt any file type, including:</p>
            <ul>
              <li>Documents (PDF, DOCX, TXT, etc.)</li>
              <li>Images (JPG, PNG, GIF, etc.)</li>
              <li>Videos (MP4, MOV, etc.)</li>
              <li>Audio files (MP3, WAV, etc.)</li>
              <li>Archives (ZIP, RAR, etc.)</li>
              <li>And any other file type</li>
            </ul>

            <h2>File Size Limitations</h2>
            <p>Since all encryption and decryption happens in your browser, there are some limitations on file size:</p>
            <ul>
              <li>For optimal performance, we recommend files under 100MB</li>
              <li>Larger files may cause your browser to become unresponsive or crash</li>
              <li>The maximum file size depends on your device's memory and browser capabilities</li>
            </ul>

            <h2>Step-by-Step Guide</h2>

            <h3>Encrypting a File</h3>
            <ol>
              <li>Navigate to the "File Encryption" tab</li>
              <li>Select the encryption algorithm (AES-256 or RSA)</li>
              <li>Ensure the "Encrypt" tab is selected</li>
              <li>Click the file selection area to choose a file from your device</li>
              <li>Generate a new encryption key or enter your own key</li>
              <li>Click the "Encrypt File" button</li>
              <li>Wait for the encryption process to complete (you can monitor the progress with the progress bar)</li>
              <li>
                Once complete, click the "Download Encrypted File" button to save the encrypted file to your device
              </li>
            </ol>

            <h3>Decrypting a File</h3>
            <ol>
              <li>Navigate to the "File Encryption" tab</li>
              <li>Select the same encryption algorithm that was used for encryption</li>
              <li>Switch to the "Decrypt" tab</li>
              <li>Click the file selection area to choose the encrypted file</li>
              <li>Enter the same encryption key that was used for encryption</li>
              <li>Click the "Decrypt File" button</li>
              <li>Wait for the decryption process to complete</li>
              <li>
                Once complete, click the "Download Decrypted File" button to save the decrypted file to your device
              </li>
            </ol>

            <h3>Hashing a File</h3>
            <ol>
              <li>Navigate to the "File Encryption" tab</li>
              <li>Select the SHA-256 algorithm</li>
              <li>Click the file selection area to choose a file from your device</li>
              <li>Click the "Hash File" button</li>
              <li>Wait for the hashing process to complete</li>
              <li>Once complete, the hash value will be displayed and can be downloaded as a text file</li>
            </ol>

            <h2>File Naming Conventions</h2>
            <p>When encrypting and decrypting files, Fardo Encryption follows these naming conventions:</p>
            <ul>
              <li>
                Encrypted files: <code>[original-filename].encrypted</code>
              </li>
              <li>
                Decrypted files: If the file ends with <code>.encrypted</code>, that extension is removed. Otherwise,{" "}
                <code>decrypted-[original-filename]</code>
              </li>
              <li>
                Hash files: <code>[original-filename].sha256</code>
              </li>
            </ul>

            <h2>Security Considerations</h2>
            <ul>
              <li>Always use strong, random encryption keys</li>
              <li>Store your encryption keys securely, separate from the encrypted files</li>
              <li>For highly sensitive files, consider using multiple layers of encryption</li>
              <li>
                Remember that all encryption and decryption happens in your browser - no data is sent to our servers
              </li>
              <li>After downloading encrypted or decrypted files, verify their integrity</li>
            </ul>

            <p>
              For more security best practices, see the{" "}
              <Link href="/docs/security/best-practices" className="text-primary hover:underline">
                Security Best Practices
              </Link>{" "}
              documentation.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
