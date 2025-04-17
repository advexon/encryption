import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function KeyManagementPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-4 text-white">Key Management</h1>
        <p className="text-gray-400 mb-6">Learn best practices for managing encryption keys securely.</p>
      </div>

      <Card className="bg-gray-950 border-gray-800">
        <CardContent className="p-6">
          <div className="prose prose-invert max-w-none">
            <h2>The Importance of Key Management</h2>
            <p>
              Encryption keys are the foundation of cryptographic security. No matter how strong the encryption
              algorithm, if your keys are compromised, your encrypted data is at risk. Proper key management is
              essential for maintaining the security of your encrypted data.
            </p>

            <div className="bg-gray-900 p-4 rounded-md border border-gray-800 my-6">
              <h3 className="text-yellow-400 mt-0">Critical Security Note</h3>
              <p className="mb-0">
                If you lose your encryption keys, your encrypted data cannot be recovered. There are no backdoors or
                recovery methods in strong encryption. Always store your keys securely and create backups for important
                keys.
              </p>
            </div>

            <h2>Key Generation</h2>

            <h3>Using the Generate Key Feature</h3>
            <p>
              Fardo Encryption provides a "Generate Key" button that creates strong, random encryption keys using the
              Web Cryptography API. This is the recommended way to create keys, as it ensures:
            </p>
            <ul>
              <li>Sufficient key length and entropy</li>
              <li>True randomness (cryptographically secure random number generation)</li>
              <li>Proper formatting for the selected algorithm</li>
            </ul>

            <h3>Manual Key Creation</h3>
            <p>
              While you can enter your own keys manually, this is generally not recommended unless you have a specific
              reason to do so. Human-generated keys are often weaker than machine-generated ones due to:
            </p>
            <ul>
              <li>Lower entropy (randomness)</li>
              <li>Patterns or biases in selection</li>
              <li>Potential for reuse across multiple encryptions</li>
            </ul>
            <p>
              If you must create your own keys, use a password generator or other tool designed for creating random
              strings.
            </p>

            <h2>Key Storage</h2>

            <h3>Password Managers</h3>
            <p>Password managers are an excellent option for storing encryption keys. They provide:</p>
            <ul>
              <li>Encrypted storage with strong master password protection</li>
              <li>Convenient access across devices</li>
              <li>Organization features to keep track of which key is used for what data</li>
              <li>Additional security features like two-factor authentication</li>
            </ul>
            <p>Popular password managers include 1Password, LastPass, Bitwarden, and KeePass.</p>

            <h3>Physical Storage</h3>
            <p>For highly sensitive keys, consider physical storage options:</p>
            <ul>
              <li>Write keys on paper and store in a secure location like a safe</li>
              <li>Use hardware security modules (HSMs) or smart cards</li>
              <li>Store on encrypted USB drives kept in secure locations</li>
            </ul>

            <h3>Key Splitting</h3>
            <p>
              For critical keys, consider splitting them into multiple parts using a technique like Shamir's Secret
              Sharing. This allows you to:
            </p>
            <ul>
              <li>Store different parts of the key in different locations</li>
              <li>Require multiple parts to reconstruct the original key</li>
              <li>Prevent compromise if a single storage location is breached</li>
            </ul>

            <h2>Key Rotation</h2>
            <p>For long-term storage of encrypted data, consider key rotation:</p>
            <ul>
              <li>Periodically re-encrypt data with new keys</li>
              <li>Retire old keys securely after re-encryption</li>
              <li>Maintain a record of which keys were used for which data and when</li>
            </ul>
            <p>
              Key rotation helps limit the impact of a potential key compromise and ensures that your encryption remains
              strong as cryptographic standards evolve.
            </p>

            <h2>Sharing Keys Securely</h2>

            <h3>Separate Channels</h3>
            <p>When sharing encrypted data and keys:</p>
            <ul>
              <li>Never share the key through the same channel as the encrypted data</li>
              <li>Use different communication methods for the key and the data</li>
              <li>Consider time-delaying the key transmission for additional security</li>
            </ul>

            <h3>Secure Communication Channels</h3>
            <p>For sharing keys, use secure communication channels such as:</p>
            <ul>
              <li>End-to-end encrypted messaging apps (Signal, WhatsApp, etc.)</li>
              <li>Encrypted email (PGP/GPG)</li>
              <li>Secure file transfer protocols with authentication</li>
              <li>In-person exchange for highly sensitive keys</li>
            </ul>

            <h3>One-Time Keys</h3>
            <p>For the highest security when sharing encrypted data:</p>
            <ul>
              <li>Use a unique key for each encryption</li>
              <li>Set expiration times for shared keys if possible</li>
              <li>Instruct recipients to delete keys after use</li>
            </ul>

            <h2>Key Destruction</h2>
            <p>When you no longer need a key:</p>
            <ul>
              <li>Securely delete digital copies (using secure deletion tools)</li>
              <li>Physically destroy any physical copies (shred paper, destroy hardware)</li>
              <li>Remove from all backups and password managers</li>
            </ul>
            <p>
              Remember that standard deletion may not completely remove data from storage media. For sensitive keys,
              consider using secure deletion tools or physical destruction.
            </p>

            <h2>Key Management for Different Scenarios</h2>

            <h3>Personal Use</h3>
            <p>For encrypting your own data:</p>
            <ul>
              <li>Use a password manager to store keys</li>
              <li>Create backups of important keys</li>
              <li>Consider physical storage for critical keys</li>
            </ul>

            <h3>Business Use</h3>
            <p>For organizational use:</p>
            <ul>
              <li>Implement formal key management policies and procedures</li>
              <li>Use role-based access control for keys</li>
              <li>Maintain key inventories and audit key usage</li>
              <li>Consider using dedicated key management systems</li>
            </ul>

            <h3>Shared Projects</h3>
            <p>For collaborative projects:</p>
            <ul>
              <li>Establish clear protocols for key sharing and storage</li>
              <li>Document who has access to which keys</li>
              <li>Implement key rotation when team members leave</li>
            </ul>

            <p>
              For more security information, see the{" "}
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
