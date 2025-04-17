import { Card, CardContent } from "@/components/ui/card"

export default function PrivacyPolicyPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-4 text-white">Privacy Policy</h1>
        <p className="text-gray-400 mb-6">Our commitment to protecting your privacy and data.</p>
      </div>

      <Card className="bg-gray-950 border-gray-800">
        <CardContent className="p-6">
          <div className="prose prose-invert max-w-none">
            <h2>Privacy Policy for Fardo Encryption</h2>
            <p>Last Updated: June 15, 2023</p>

            <h3>Introduction</h3>
            <p>
              At Fardo Encryption, we take your privacy seriously. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you use our encryption service.
            </p>
            <p>
              Please read this Privacy Policy carefully. By using Fardo Encryption, you consent to the practices
              described in this policy.
            </p>

            <h3>Information We Collect</h3>
            <p>We collect minimal information to provide our service:</p>
            <ul>
              <li>
                <strong>Encrypted Content:</strong> When you use our sharing feature, we store the already-encrypted
                content on our servers. We cannot access the unencrypted content as encryption happens in your browser.
              </li>
              <li>
                <strong>Encryption Algorithm:</strong> We store information about which encryption algorithm was used
                for shared content.
              </li>
              <li>
                <strong>Creation Timestamp:</strong> We record when shared content was created to manage expiration.
              </li>
              <li>
                <strong>Logo Settings:</strong> If you customize the application logo, we store these settings.
              </li>
              <li>
                <strong>Usage Data:</strong> We may collect anonymous usage statistics to improve our service.
              </li>
            </ul>

            <h3>Information We Do NOT Collect</h3>
            <p>We do not collect:</p>
            <ul>
              <li>
                <strong>Encryption Keys:</strong> Your encryption keys are never sent to or stored on our servers.
              </li>
              <li>
                <strong>Unencrypted Content:</strong> All encryption and decryption happens in your browser.
              </li>
              <li>
                <strong>Personal Information:</strong> We do not require registration or collect personal information.
              </li>
              <li>
                <strong>Payment Information:</strong> Fardo Encryption is free to use and does not process payments.
              </li>
            </ul>

            <h3>How We Use Your Information</h3>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide the sharing functionality for encrypted content</li>
              <li>Maintain and improve our service</li>
              <li>Customize the application appearance based on your settings</li>
              <li>Monitor and analyze usage patterns to enhance user experience</li>
              <li>Prevent abuse of our service</li>
            </ul>

            <h3>Data Retention</h3>
            <p>We retain data as follows:</p>
            <ul>
              <li>
                <strong>Shared Encrypted Content:</strong> Automatically deleted after 7 days
              </li>
              <li>
                <strong>Logo Settings:</strong> Retained until changed or deleted by you
              </li>
              <li>
                <strong>Usage Data:</strong> Retained in anonymized form for up to 90 days
              </li>
            </ul>

            <h3>Data Security</h3>
            <p>We implement appropriate technical and organizational measures to protect your data:</p>
            <ul>
              <li>All data is transmitted over HTTPS</li>
              <li>Access to our servers is restricted and monitored</li>
              <li>Regular security audits and updates</li>
              <li>Encryption of sensitive configuration data</li>
            </ul>
            <p>
              However, no method of transmission or storage is 100% secure. While we strive to protect your data, we
              cannot guarantee absolute security.
            </p>

            <h3>Third-Party Services</h3>
            <p>We use the following third-party services:</p>
            <ul>
              <li>
                <strong>Vercel:</strong> For hosting our application
              </li>
              <li>
                <strong>Upstash:</strong> For storing shared encrypted content and settings
              </li>
              <li>
                <strong>GitHub:</strong> For source code hosting and issue tracking
              </li>
            </ul>
            <p>These services have their own privacy policies, and we encourage you to review them.</p>

            <h3>Your Rights</h3>
            <p>Depending on your location, you may have rights regarding your data:</p>
            <ul>
              <li>Right to access information we have about you</li>
              <li>Right to request deletion of your data</li>
              <li>Right to object to processing of your data</li>
              <li>Right to data portability</li>
            </ul>
            <p>To exercise these rights, please contact us using the information provided below.</p>

            <h3>Children's Privacy</h3>
            <p>
              Fardo Encryption is not intended for children under 13 years of age. We do not knowingly collect personal
              information from children under 13.
            </p>

            <h3>Changes to This Privacy Policy</h3>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last Updated" date.
            </p>
            <p>We encourage you to review this Privacy Policy periodically for any changes.</p>

            <h3>Contact Us</h3>
            <p>If you have questions or concerns about this Privacy Policy, please contact us:</p>
            <ul>
              <li>By email: privacy@example.com</li>
              <li>
                By visiting our GitHub repository:{" "}
                <a href="https://github.com/advexon/advexon-encryption" target="_blank" rel="noopener noreferrer">
                  https://github.com/advexon/advexon-encryption
                </a>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
