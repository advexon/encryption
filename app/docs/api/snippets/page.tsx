import { Card, CardContent } from "@/components/ui/card"

export default function SnippetsApiPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-4 text-white">Snippets API</h1>
        <p className="text-gray-400 mb-6">Detailed documentation for the Snippets API endpoints.</p>
      </div>

      <Card className="bg-gray-950 border-gray-800">
        <CardContent className="p-6">
          <div className="prose prose-invert max-w-none">
            <h2>Snippets API</h2>
            <p>
              The Snippets API allows you to create and retrieve encrypted text snippets for sharing. All snippets are
              stored with a time-to-live (TTL) of 7 days, after which they are automatically deleted.
            </p>

            <h2>Create a Snippet</h2>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code>{`POST /api/snippets`}</code>
            </pre>

            <h3>Request Body</h3>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code>{`{
  "encryptedText": "string", // Required: The encrypted text to store
  "algorithm": "string"      // Required: The encryption algorithm used (e.g., "AES-256", "RSA")
}`}</code>
            </pre>

            <h3>Response</h3>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code>{`// Success (200 OK)
{
  "success": true,
  "snippetId": "string",  // The unique ID for the snippet
  "expiresIn": number     // Time-to-live in seconds (7 days = 604800 seconds)
}

// Error (400 Bad Request)
{
  "error": "Encrypted text is required"
}

// Error (500 Internal Server Error)
{
  "error": "Failed to save encrypted text"
}`}</code>
            </pre>

            <h3>Example</h3>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code>{`// Request
fetch('/api/snippets', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    encryptedText: "a1b2c3d4e5f6...", // Encrypted text
    algorithm: "AES-256"
  })
})

// Response
{
  "success": true,
  "snippetId": "abcdef1234",
  "expiresIn": 604800
}`}</code>
            </pre>

            <h2>Retrieve a Snippet</h2>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code>{`GET /api/snippets/:id`}</code>
            </pre>

            <h3>URL Parameters</h3>
            <ul>
              <li>
                <code>id</code> (string, required): The unique ID of the snippet to retrieve
              </li>
            </ul>

            <h3>Response</h3>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code>{`// Success (200 OK)
{
  "success": true,
  "snippet": {
    "encryptedText": "string",  // The encrypted text
    "algorithm": "string",      // The encryption algorithm used
    "createdAt": "string"       // ISO timestamp of when the snippet was created
  }
}

// Error (400 Bad Request)
{
  "error": "Snippet ID is required"
}

// Error (404 Not Found)
{
  "error": "Snippet not found or expired"
}

// Error (500 Internal Server Error)
{
  "error": "Failed to retrieve encrypted text"
}`}</code>
            </pre>

            <h3>Example</h3>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code>{`// Request
fetch('/api/snippets/abcdef1234')

// Response
{
  "success": true,
  "snippet": {
    "encryptedText": "a1b2c3d4e5f6...",
    "algorithm": "AES-256",
    "createdAt": "2023-06-15T12:34:56.789Z"
  }
}`}</code>
            </pre>

            <h2>Implementation Details</h2>
            <p>The Snippets API is implemented using:</p>
            <ul>
              <li>Next.js API routes</li>
              <li>Upstash Redis for storage with automatic TTL</li>
              <li>nanoid for generating unique, URL-safe IDs</li>
            </ul>

            <h3>Storage</h3>
            <p>Snippets are stored in Redis with the following key structure:</p>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code>{`snippet:{snippetId}`}</code>
            </pre>
            <p>
              Each snippet is stored with a TTL of 7 days (604800 seconds), after which it is automatically deleted from
              Redis.
            </p>

            <h2>Security Considerations</h2>
            <ul>
              <li>Only encrypted data is stored on the server</li>
              <li>Encryption keys are never sent to or stored on the server</li>
              <li>Snippet IDs are randomly generated and difficult to guess</li>
              <li>All snippets are automatically deleted after 7 days</li>
            </ul>

            <h2>Rate Limiting</h2>
            <p>
              To prevent abuse, the Snippets API may implement rate limiting. If you exceed the rate limit, you may
              receive a 429 Too Many Requests response. In this case, you should wait before making additional requests.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
