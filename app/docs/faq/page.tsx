import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FaqPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-4 text-white">Frequently Asked Questions</h1>
        <p className="text-gray-400 mb-6">Find answers to common questions about Fardo Encryption.</p>
      </div>

      <Card className="bg-gray-950 border-gray-800">
        <CardContent className="p-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="q1">
              <AccordionTrigger>Is Fardo Encryption secure?</AccordionTrigger>
              <AccordionContent>
                <div className="prose prose-invert max-w-none">
                  <p>
                    Fardo Encryption uses industry-standard encryption algorithms (AES-256, RSA, SHA-256) and the Web
                    Cryptography API to perform cryptographic operations directly in your browser. All encryption and
                    decryption happens locally on your device, and your data never leaves your browser unless you
                    explicitly use the sharing feature.
                  </p>
                  <p>
                    However, the security of your encrypted data ultimately depends on how you manage your encryption
                    keys and the security of your device and browser. For highly sensitive data, consider using
                    dedicated encryption software or hardware.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q2">
              <AccordionTrigger>How are my encryption keys stored?</AccordionTrigger>
              <AccordionContent>
                <div className="prose prose-invert max-w-none">
                  <p>
                    Fardo Encryption does not store your encryption keys anywhere. Keys are generated and used entirely
                    within your browser session. When you leave the page or close your browser, the keys are lost unless
                    you've saved them yourself.
                  </p>
                  <p>
                    This is a security feature - it ensures that only you have access to your encryption keys. However,
                    it also means that if you lose your keys, you won't be able to decrypt your data. Always store your
                    encryption keys securely, such as in a password manager.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q3">
              <AccordionTrigger>What happens to my data when I share it?</AccordionTrigger>
              <AccordionContent>
                <div className="prose prose-invert max-w-none">
                  <p>
                    When you share encrypted text, only the already-encrypted data is stored on our servers. The
                    encryption key is never sent to or stored on our servers. The encrypted data is stored with a unique
                    ID and is automatically deleted after 7 days.
                  </p>
                  <p>
                    To ensure security, you should always share the encryption key through a different, secure channel
                    than the one you use to share the link to the encrypted data.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q4">
              <AccordionTrigger>What is the maximum file size for encryption?</AccordionTrigger>
              <AccordionContent>
                <div className="prose prose-invert max-w-none">
                  <p>
                    Since all encryption and decryption happens in your browser, the maximum file size depends on your
                    device's memory and browser capabilities. For optimal performance, we recommend files under 100MB.
                  </p>
                  <p>
                    Larger files may cause your browser to become unresponsive or crash. If you need to encrypt large
                    files, consider splitting them into smaller chunks or using dedicated encryption software.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q5">
              <AccordionTrigger>Can I recover my data if I lose the encryption key?</AccordionTrigger>
              <AccordionContent>
                <div className="prose prose-invert max-w-none">
                  <p>
                    No. If you lose your encryption key, there is no way to recover your encrypted data. This is a
                    fundamental security feature of strong encryption - without the key, the data cannot be decrypted.
                  </p>
                  <p>
                    Always store your encryption keys securely, such as in a password manager, and consider creating
                    backups of important keys.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q6">
              <AccordionTrigger>Which encryption algorithm should I use?</AccordionTrigger>
              <AccordionContent>
                <div className="prose prose-invert max-w-none">
                  <p>
                    For most users, AES-256 is the recommended choice. It's a widely used, strong encryption algorithm
                    that provides excellent security for most use cases.
                  </p>
                  <p>
                    RSA is useful for asymmetric encryption scenarios, but our implementation is simplified for
                    educational purposes. SHA-256 is not an encryption algorithm but a hash function, useful for
                    verifying data integrity but not for encrypting data that needs to be decrypted later.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q7">
              <AccordionTrigger>Is Fardo Encryption open source?</AccordionTrigger>
              <AccordionContent>
                <div className="prose prose-invert max-w-none">
                  <p>
                    Yes, Fardo Encryption is an open-source project. You can view the source code, report issues, or
                    contribute to the project on our{" "}
                    <Link
                      href="https://github.com/advexon/advexon-encryption"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      GitHub repository
                    </Link>
                    .
                  </p>
                  <p>
                    Being open source means that the code can be reviewed by anyone, which helps ensure that there are
                    no hidden backdoors or security vulnerabilities.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q8">
              <AccordionTrigger>How can I customize the application?</AccordionTrigger>
              <AccordionContent>
                <div className="prose prose-invert max-w-none">
                  <p>
                    Fardo Encryption allows you to customize the logo and branding through the Logo Settings page. You
                    can access this by clicking the "Logo Settings" link in the top right corner of the main page.
                  </p>
                  <p>
                    For more advanced customization, you can fork the GitHub repository and modify the code to suit your
                    needs. The application is built with Next.js and React, making it highly customizable.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q9">
              <AccordionTrigger>How long are shared snippets stored?</AccordionTrigger>
              <AccordionContent>
                <div className="prose prose-invert max-w-none">
                  <p>
                    Shared encrypted snippets are stored for 7 days, after which they are automatically deleted from our
                    servers. This time limit helps ensure that sensitive information doesn't remain accessible
                    indefinitely.
                  </p>
                  <p>
                    If you need to share content for a longer period, you'll need to create a new shared snippet after
                    the original expires.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q10">
              <AccordionTrigger>Can I use Fardo Encryption offline?</AccordionTrigger>
              <AccordionContent>
                <div className="prose prose-invert max-w-none">
                  <p>
                    The core encryption and decryption functionality of Fardo Encryption works offline once the page has
                    loaded. However, features that require server communication, such as sharing encrypted content, will
                    not work without an internet connection.
                  </p>
                  <p>
                    For a fully offline experience, you can clone the GitHub repository and run the application locally
                    on your machine.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  )
}
