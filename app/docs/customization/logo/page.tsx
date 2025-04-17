import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function LogoCustomizationPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-4 text-white">Logo Customization</h1>
        <p className="text-gray-400 mb-6">Learn how to customize the logo and branding of Fardo Encryption.</p>
      </div>

      <Card className="bg-gray-950 border-gray-800">
        <CardContent className="p-6">
          <div className="prose prose-invert max-w-none">
            <h2>Logo Settings Overview</h2>
            <p>
              Fardo Encryption allows you to customize the application's logo and branding through the Logo Settings
              page. This feature is useful for:
            </p>
            <ul>
              <li>Organizations that want to use their own branding</li>
              <li>Developers who fork the project and want to customize it</li>
              <li>Users who prefer a different visual appearance</li>
            </ul>

            <h2>Accessing Logo Settings</h2>
            <p>To access the Logo Settings page:</p>
            <ol>
              <li>Navigate to the main page of Fardo Encryption</li>
              <li>Click the "Logo Settings" link in the top right corner</li>
              <li>You'll be taken to the Logo Settings page where you can customize the logo</li>
            </ol>

            <h2>Customization Options</h2>

            <h3>Logo Image</h3>
            <p>You can upload a custom logo image:</p>
            <ul>
              <li>Click the "Choose File" button in the "Upload Logo" section</li>
              <li>Select an image file from your device (PNG, JPG, SVG recommended)</li>
              <li>The recommended size is 40x40 pixels, but you can adjust the dimensions</li>
              <li>The uploaded image will be converted to a data URI and stored in the application settings</li>
            </ul>

            <h3>Alt Text</h3>
            <p>The alt text is used for accessibility and is displayed when the logo image cannot be loaded:</p>
            <ul>
              <li>Enter descriptive text in the "Alt Text" field</li>
              <li>Keep it concise but informative</li>
              <li>Include your brand or organization name if applicable</li>
            </ul>

            <h3>Logo Dimensions</h3>
            <p>You can adjust the size of the logo:</p>
            <ul>
              <li>Use the "Logo Width" slider to set the width in pixels (20-100px)</li>
              <li>Use the "Logo Height" slider to set the height in pixels (20-100px)</li>
              <li>The preview will update in real-time to show how the logo will appear</li>
            </ul>

            <h3>Brand Text</h3>
            <p>You can choose whether to display text next to the logo:</p>
            <ul>
              <li>Toggle the "Show Brand Text" switch to show or hide the text</li>
              <li>When enabled, "Fardo Encryption" will be displayed next to the logo</li>
              <li>This text cannot be customized without modifying the code</li>
            </ul>

            <h2>Preview</h2>
            <p>The Logo Settings page provides real-time previews of how your logo will appear:</p>
            <ul>
              <li>Header Preview: Shows how the logo will look in the application header</li>
              <li>Light Background: Shows the logo on a white background</li>
              <li>Dark Background: Shows the logo on a dark background</li>
            </ul>
            <p>These previews help you ensure that your logo looks good in different contexts.</p>

            <h2>Saving Changes</h2>
            <p>To save your logo customization:</p>
            <ol>
              <li>Make your desired changes to the logo settings</li>
              <li>Click the "Save Configuration" button at the bottom of the form</li>
              <li>Your settings will be saved and applied immediately</li>
              <li>The settings are stored persistently and will be retained across sessions</li>
            </ol>

            <h2>Resetting to Defaults</h2>
            <p>If you want to revert to the default logo settings:</p>
            <ol>
              <li>Click the "Reset to Defaults" button</li>
              <li>The default settings will be applied</li>
              <li>Click "Save Configuration" to save the default settings</li>
            </ol>

            <h2>Technical Details</h2>

            <h3>Storage</h3>
            <p>Logo settings are stored in Redis using the Upstash Redis integration:</p>
            <ul>
              <li>
                The settings are stored under the key <code>settings:logo</code>
              </li>
              <li>The settings include logoSrc, logoAlt, logoWidth, logoHeight, showText, and updatedAt</li>
              <li>For uploaded images, the logoSrc is stored as a data URI</li>
            </ul>

            <h3>API</h3>
            <p>The logo settings are managed through the Settings API:</p>
            <ul>
              <li>GET /api/settings/logo: Retrieves the current logo settings</li>
              <li>POST /api/settings/logo: Updates the logo settings</li>
            </ul>
            <p>
              For more information on the Settings API, see the{" "}
              <Link href="/docs/api/settings" className="text-primary hover:underline">
                Settings API
              </Link>{" "}
              documentation.
            </p>

            <h2>Advanced Customization</h2>
            <p>For more advanced customization beyond what the Logo Settings page offers:</p>
            <ul>
              <li>
                Fork the GitHub repository:{" "}
                <Link
                  href="https://github.com/advexon/advexon-encryption"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://github.com/advexon/advexon-encryption
                </Link>
              </li>
              <li>Modify the code to suit your needs</li>
              <li>
                The logo component is defined in <code>components/logo.tsx</code>
              </li>
              <li>
                The header component is defined in <code>components/header.tsx</code>
              </li>
              <li>
                The logo settings page is defined in <code>app/settings/logo/page.tsx</code>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
