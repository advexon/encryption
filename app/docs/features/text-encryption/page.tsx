import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function TextEncryptionPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-4 text-white">Text Encryption</h1>
        <p className="text-gray-400 mb-6">Learn how to encrypt and decrypt text messages using Fardo Encryption.</p>
      </div>

      <Card className="bg-gray-950 border-gray-800">
        <CardContent className="p-6">
          <div className="prose prose-invert max-w-none">
            <h2>Text Encryption Features</h2>
            <p>The Text Encryption module allows you to:</p>
            <ul>
              <li>Encrypt text messages using AES-256 or RSA algorithms</li>
              <li>Generate secure encryption keys</li>
              <li>Hash text using SHA-256</li>
              <li>Share encrypted text via secure links</li>
              <li>Decrypt text that was encrypted with the same algorithm and key</li>
            </ul>

            <h2>Encryption Algorithms</h2>

            <h3>AES-256</h3>
            <p>
              AES-256 (Advanced Encryption Standard with 256-bit key) is a symmetric encryption algorithm, which means
              the same key is used for both encryption and decryption. It's widely used and considered highly secure for
              most applications.
            </p>
            <p>When using AES-256:</p>
            <ul>
              <li>The key must be kept secret and shared securely with anyone who needs to decrypt the message</li>
              <li>The encrypted output will be significantly longer than the input text</li>
              <li>
                The encryption is deterministic, meaning the same input with the same key will always produce the same
                output
              </li>
            </ul>

            <h3>RSA</h3>
            <p>
              RSA is an asymmetric encryption algorithm that uses a pair of keys: a public key for encryption and a
              private key for decryption. In Fardo Encryption, we use a simplified implementation for educational
              purposes.
            </p>
            <p>
              Note: For production use cases requiring asymmetric encryption, consider using a dedicated cryptography
              library or service.
            </p>

            <h3>SHA-256</h3>
            <p>
              SHA-256 is not an encryption algorithm but a cryptographic hash function. It generates a fixed-size
              (256-bit) hash value from any input text. This process is one-way, meaning you cannot decrypt or reverse
              the hash to get the original text.
            </p>
            <p>Common uses for SHA-256 include:</p>
            <ul>
              <li>Verifying data integrity</li>
              <li>Storing password hashes (with additional security measures like salting)</li>
              <li>Creating digital signatures</li>
            </ul>

            <h2>Step-by-Step Guide</h2>

            <h3>Encrypting Text</h3>
            <ol>
              <li>Select the encryption algorithm (AES-256 or RSA)</li>
              <li>Ensure the "Encrypt" tab is selected</li>
              <li>Enter the text you want to encrypt in the input field</li>
              <li>Generate a new encryption key or enter your own key</li>
              <li>Click the "Encrypt Text" button</li>
              <li>The encrypted text will appear in the result field</li>
              <li>Copy the encrypted text or share it using the "Share" button</li>
            </ol>

            <h3>Decrypting Text</h3>
            <ol>
              <li>Select the same encryption algorithm that was used for encryption</li>
              <li>Switch to the "Decrypt" tab</li>
              <li>Paste the encrypted text in the input field</li>
              <li>Enter the same encryption key that was used for encryption</li>
              <li>Click the "Decrypt Text" button</li>
              <li>The decrypted text will appear in the result field</li>
            </ol>

            <h3>Hashing Text</h3>
            <ol>
              <li>Select the SHA-256 algorithm</li>
              <li>Enter the text you want to hash in the input field</li>
              <li>Click the "Hash Text" button</li>
              <li>The hash value will appear in the result field</li>
            </ol>

            <h2>Sharing Encrypted Text</h2>
            <p>Fardo Encryption allows you to share encrypted text via a unique link:</p>
            <ol>
              <li>After encrypting text, click the "Share" button</li>
              <li>A dialog will appear with a shareable link</li>
              <li>Copy the link and share it with the recipient</li>
              <li>Share the encryption key separately through a secure channel</li>
              <li>
                The recipient can access the encrypted text by visiting the link and then decrypt it using the key you
                provided
              </li>
            </ol>
            <p>
              For more details on sharing, see the{" "}
              <Link href="/docs/features/sharing" className="text-primary hover:underline">
                Sharing Encrypted Content
              </Link>{" "}
              documentation.
            </p>

            <h2>Security Considerations</h2>
            <ul>
              <li>Always use strong, random encryption keys</li>
              <li>Never share the encryption key through the same channel as the encrypted text</li>
              <li>For highly sensitive information, consider using multiple layers of encryption</li>
              <li>
                Remember that all encryption and decryption happens in your browser - no data is sent to our servers
                except when using the sharing feature
              </li>
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
