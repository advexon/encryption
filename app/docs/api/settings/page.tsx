import { Card, CardContent } from "@/components/ui/card"

export default function SettingsApiPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-4 text-white">Settings API</h1>
        <p className="text-gray-400 mb-6">Detailed documentation for the Settings API endpoints.</p>
      </div>

      <Card className="bg-gray-950 border-gray-800">
        <CardContent className="p-6">
          <div className="prose prose-invert max-w-none">
            <h2>Settings API</h2>
            <p>
              The Settings API allows you to manage application settings, such as logo configuration. These settings are
              stored persistently and are used to customize the application's appearance and behavior.
            </p>

            <h2>Logo Settings</h2>
            <p>The Logo Settings API allows you to retrieve and update the application's logo configuration.</p>

            <h3>Get Logo Settings</h3>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code>{`GET /api/settings/logo`}</code>
            </pre>

            <h3>Response</h3>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code>{`// Success (200 OK)
{
  "success": true,
  "settings": {
    "logoSrc": "string",      // URL or data URI of the logo image
    "logoAlt": "string",      // Alt text for the logo
    "logoWidth": number,      // Width of the logo in pixels
    "logoHeight": number,     // Height of the logo in pixels
    "showText": boolean,      // Whether to show text next to the logo
    "updatedAt": "string"     // ISO timestamp of when the settings were last updated
  }
}

// Error (500 Internal Server Error)
{
  "error": "Failed to retrieve logo settings"
}`}</code>
            </pre>

            <h3>Example</h3>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code>{`// Request
fetch('/api/settings/logo')

// Response
{
  "success": true,
  "settings": {
    "logoSrc": "/logo.png",
    "logoAlt": "Fardo Encryption",
    "logoWidth": 40,
    "logoHeight": 40,
    "showText": true,
    "updatedAt": "2023-06-15T12:34:56.789Z"
  }
}`}</code>
            </pre>

            <h3>Update Logo Settings</h3>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code>{`POST /api/settings/logo`}</code>
            </pre>

            <h3>Request Body</h3>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code>{`{
  "logoSrc": "string",      // Optional: URL or data URI of the logo image
  "logoAlt": "string",      // Required: Alt text for the logo
  "logoWidth": number,      // Required: Width of the logo in pixels
  "logoHeight": number,     // Required: Height of the logo in pixels
  "showText": boolean       // Required: Whether to show text next to the logo
}`}</code>
            </pre>

            <h3>Response</h3>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code>{`// Success (200 OK)
{
  "success": true,
  "settings": {
    "logoSrc": "string",
    "logoAlt": "string",
    "logoWidth": number,
    "logoHeight": number,
    "showText": boolean,
    "updatedAt": "string"
  }
}

// Error (400 Bad Request)
{
  "error": "Missing required fields"
}

// Error (500 Internal Server Error)
{
  "error": "Failed to save logo settings"
}`}</code>
            </pre>

            <h3>Example</h3>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code>{`// Request
fetch('/api/settings/logo', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "logoSrc": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...",
    "logoAlt": "Custom Logo",
    "logoWidth": 50,
    "logoHeight": 50,
    "showText": false
  })
})

// Response
{
  "success": true,
  "settings": {
    "logoSrc": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...",
    "logoAlt": "Custom Logo",
    "logoWidth": 50,
    "logoHeight": 50,
    "showText": false,
    "updatedAt": "2023-06-15T12:34:56.789Z"
  }
}`}</code>
            </pre>

            <h2>Implementation Details</h2>
            <p>The Settings API is implemented using:</p>
            <ul>
              <li>Next.js API routes</li>
              <li>Upstash Redis for persistent storage</li>
            </ul>

            <h3>Storage</h3>
            <p>Logo settings are stored in Redis with the following key:</p>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code>{`settings:logo`}</code>
            </pre>
            <p>Unlike snippets, settings do not have a TTL and are stored indefinitely until updated or deleted.</p>

            <h2>Default Settings</h2>
            <p>If no logo settings have been saved, the API returns the following default settings:</p>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code>{`{
  "logoSrc": "/logo.png",
  "logoAlt": "Fardo Encryption",
  "logoWidth": 40,
  "logoHeight": 40,
  "showText": true,
  "updatedAt": "2023-06-15T12:34:56.789Z"
}`}</code>
            </pre>

            <h2>Security Considerations</h2>
            <p>When updating logo settings:</p>
            <ul>
              <li>If using a data URI for the logo, be aware that it may increase the size of the settings object</li>
              <li>Consider implementing authentication for production deployments to prevent unauthorized changes</li>
              <li>Validate input to prevent injection attacks or storage of malicious content</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
