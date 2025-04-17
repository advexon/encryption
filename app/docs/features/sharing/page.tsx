import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function SharingPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-4 text-white">Sharing Encrypted Content</h1>
        <p className="text-gray-400 mb-6">Learn how to securely share encrypted text with others.</p>
      </div>

      <Card className="bg-gray-950 border-gray-800">
        <CardContent className="p-6">
          <div className="prose prose-invert max-w-none">
            <h2>Sharing Features</h2>
            <p>Fardo Encryption allows you to share encrypted text with others through:</p>
            <ul>
              <li>Unique, time-limited sharing links</li>
              <li>Secure storage of encrypted content</li>
              <li>Easy retrieval for recipients</li>
            </ul>

            <div className="bg-gray-900 p-4 rounded-md border border-gray-800 my-6">
              <h3 className="text-yellow-400 mt-0">Important Security Note</h3>
              <p className="mb-0">
                When sharing encrypted content, always share the encryption key through a different, secure channel than
                the one used to share the link. This ensures that even if someone intercepts the link, they cannot
                decrypt the content without the key.
              </p>
            </div>

            <h2>How Sharing Works</h2>
            <p>When you share encrypted text:</p>
            <ol>
              <li>The encrypted text is stored temporarily on our servers</li>
              <li>A unique ID is generated for the encrypted content</li>
              <li>A shareable link containing this ID is created</li>
              <li>The encrypted content is automatically deleted after 7 days</li>
              <li>The recipient needs both the link and the encryption key to access and decrypt the content</li>
            </ol>

            <h2>Step-by-Step Guide to Sharing</h2>

            <h3>For the Sender</h3>
            <ol>
              <li>Encrypt your text using your preferred algorithm and key</li>
              <li>Click the "Share" button next to the encrypted result</li>
              <li>A dialog will appear with a shareable link</li>
              <li>Copy the link by clicking the "Copy" button</li>
              <li>Share this link with the recipient through any communication channel (email, messaging app, etc.)</li>
              <li>Share the encryption key separately through a different, secure channel</li>
            </ol>

            <h3>For the Recipient</h3>
            <ol>
              <li>Click the shared link to open the Fardo Encryption application</li>
              <li>You'll see a page with information about the shared encrypted content</li>
              <li>Click the "Decrypt This Content" button</li>
              <li>You'll be redirected to the decryption tool with the encrypted text pre-loaded</li>
              <li>Enter the encryption key provided by the sender</li>
              <li>Click the "Decrypt Text" button to reveal the original message</li>
            </ol>

            <h2>Retrieving Shared Content Manually</h2>
            <p>If you have a snippet ID but not the full link, you can retrieve the shared content manually:</p>
            <ol>
              <li>Go to the Text Encryption tab</li>
              <li>Click the "Retrieve Shared" button</li>
              <li>Enter the snippet ID or paste the full URL in the dialog</li>
              <li>Click "Retrieve"</li>
              <li>The encrypted text will be loaded into the input field</li>
              <li>Enter the encryption key and decrypt as usual</li>
            </ol>

            <h2>Security Considerations</h2>

            <h3>What is Stored on the Server</h3>
            <p>When you share encrypted content, only the following information is stored on our servers:</p>
            <ul>
              <li>The encrypted text (already encrypted in your browser)</li>
              <li>The encryption algorithm used</li>
              <li>The creation timestamp</li>
            </ul>
            <p>We do NOT store:</p>
            <ul>
              <li>The encryption key</li>
              <li>The original, unencrypted text</li>
              <li>Any personal information about the sender or recipient</li>
            </ul>

            <h3>Link Expiration</h3>
            <p>
              Shared links automatically expire after 7 days, at which point the encrypted content is permanently
              deleted from our servers. This helps ensure that sensitive information doesn't remain accessible
              indefinitely.
            </p>

            <h3>Best Practices for Secure Sharing</h3>
            <ul>
              <li>Always share the encryption key through a different channel than the link</li>
              <li>Consider using end-to-end encrypted messaging apps for sharing the encryption key</li>
              <li>Set an expiration time for the encryption key in your message if possible</li>
              <li>Ask the recipient to confirm when they've successfully decrypted the content</li>
              <li>
                For highly sensitive information, consider using one-time sharing links and deleting them after use
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
