import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function SecurityBestPracticesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-4 text-white">Security Best Practices</h1>
        <p className="text-gray-400 mb-6">Learn how to keep your encrypted data secure when using Fardo Encryption.</p>
      </div>

      <Card className="bg-gray-950 border-gray-800">
        <CardContent className="p-6">
          <div className="prose prose-invert max-w-none">
            <h2>Security Overview</h2>
            <p>
              Fardo Encryption is designed with security in mind, using industry-standard encryption algorithms and best
              practices. However, the security of your encrypted data ultimately depends on how you use the application
              and manage your encryption keys.
            </p>

            <div className="bg-gray-900 p-4 rounded-md border border-gray-800 my-6">
              <h3 className="text-yellow-400 mt-0">Important</h3>
              <p className="mb-0">
                Remember that encryption is only as secure as your key management. If your encryption keys are
                compromised, your encrypted data can be decrypted by anyone with access to the keys.
              </p>
            </div>

            <h2>Encryption Key Management</h2>

            <h3>Generating Strong Keys</h3>
            <p>
              Always use the "Generate Key" button to create strong, random encryption keys. These keys are generated
              using the Web Cryptography API's secure random number generator and are much stronger than keys you might
              create yourself.
            </p>

            <h3>Storing Keys Securely</h3>
            <ul>
              <li>Never store encryption keys in plain text files on your device</li>
              <li>Use a password manager to store encryption keys</li>
              <li>Consider splitting keys into multiple parts and storing them in different locations</li>
              <li>For highly sensitive data, consider using hardware security modules (HSMs) or smart cards</li>
            </ul>

            <h3>Sharing Keys Securely</h3>
            <ul>
              <li>Never share encryption keys through the same channel as the encrypted data</li>
              <li>Use end-to-end encrypted messaging apps for sharing keys</li>
              <li>Consider using a secure key exchange protocol for sharing keys with trusted parties</li>
              <li>Set an expiration time for shared keys if possible</li>
            </ul>

            <h2>Data Security</h2>

            <h3>Protecting Sensitive Data</h3>
            <ul>
              <li>Encrypt sensitive data before storing it on any device or cloud service</li>
              <li>Use different encryption keys for different types of data</li>
              <li>Regularly rotate encryption keys for long-term storage</li>
              <li>Consider using multiple layers of encryption for highly sensitive data</li>
            </ul>

            <h3>Secure Deletion</h3>
            <p>When you no longer need encrypted data:</p>
            <ul>
              <li>Securely delete both the encrypted data and the encryption keys</li>
              <li>Be aware that standard deletion may not completely remove data from storage media</li>
              <li>Consider using secure deletion tools for sensitive data</li>
            </ul>

            <h2>Application Security</h2>

            <h3>Browser Security</h3>
            <ul>
              <li>Use a modern, up-to-date browser with security features enabled</li>
              <li>Consider using private browsing mode when working with sensitive data</li>
              <li>Clear your browser cache and history after using Fardo Encryption</li>
              <li>Be cautious when using browser extensions, as they may have access to page content</li>
            </ul>

            <h3>Network Security</h3>
            <ul>
              <li>Use Fardo Encryption over HTTPS to prevent man-in-the-middle attacks</li>
              <li>Be cautious when using public Wi-Fi networks</li>
              <li>Consider using a VPN for additional privacy and security</li>
            </ul>

            <h2>Sharing Encrypted Content</h2>

            <h3>Secure Sharing Practices</h3>
            <ul>
              <li>Always share encryption keys through a different channel than the encrypted data</li>
              <li>Use time-limited sharing links when possible</li>
              <li>Verify the recipient's identity before sharing sensitive data</li>
              <li>Ask recipients to confirm when they've successfully decrypted the data</li>
            </ul>

            <h3>Revoking Access</h3>
            <p>If you need to revoke access to shared encrypted content:</p>
            <ul>
              <li>There is no built-in way to revoke access to already shared content</li>
              <li>Consider re-encrypting the data with a new key and sharing it again</li>
              <li>For highly sensitive data, consider using a system with built-in access revocation</li>
            </ul>

            <h2>Security Limitations</h2>
            <p>Be aware of the following limitations of browser-based encryption:</p>
            <ul>
              <li>
                Browser-based encryption is vulnerable to certain types of attacks, such as keyloggers or malicious
                browser extensions
              </li>
              <li>The security of your data depends on the security of your device and browser</li>
              <li>For extremely sensitive data, consider using dedicated encryption software or hardware</li>
            </ul>

            <h2>Reporting Security Issues</h2>
            <p>If you discover a security vulnerability in Fardo Encryption, please report it responsibly:</p>
            <ol>
              <li>Do not disclose the vulnerability publicly until it has been addressed</li>
              <li>Report the issue through our GitHub repository's security reporting feature</li>
              <li>Provide detailed information about the vulnerability and steps to reproduce it</li>
            </ol>

            <p>
              For more information on key management, see the{" "}
              <Link href="/docs/security/key-management" className="text-primary hover:underline">
                Key Management
              </Link>{" "}
              documentation.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
