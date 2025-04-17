import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function ApiOverviewPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-4 text-white">API Reference</h1>
        <p className="text-gray-400 mb-6">Overview of the Fardo Encryption API endpoints and usage.</p>
      </div>

      <Card className="bg-gray-950 border-gray-800">
        <CardContent className="p-6">
          <div className="prose prose-invert max-w-none">
            <h2>API Overview</h2>
            <p>
              Fardo Encryption provides a set of API endpoints for managing encrypted snippets and application settings.
              These APIs are primarily used by the frontend application but can also be accessed directly if needed.
            </p>

            <h2>Base URL</h2>
            <p>All API endpoints are relative to the application's base URL:</p>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code>{`https://your-deployment-url.vercel.app/api`}</code>
            </pre>

            <h2>Available APIs</h2>

            <h3>Snippets API</h3>
            <p>The Snippets API allows you to create, retrieve, and manage encrypted text snippets for sharing.</p>
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-2 border border-gray-800">Endpoint</th>
                  <th className="text-left p-2 border border-gray-800">Method</th>
                  <th className="text-left p-2 border border-gray-800">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border border-gray-800">
                    <code>/api/snippets</code>
                  </td>
                  <td className="p-2 border border-gray-800">POST</td>
                  <td className="p-2 border border-gray-800">Create a new encrypted snippet</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-800">
                    <code>/api/snippets/:id</code>
                  </td>
                  <td className="p-2 border border-gray-800">GET</td>
                  <td className="p-2 border border-gray-800">Retrieve an encrypted snippet by ID</td>
                </tr>
              </tbody>
            </table>
            <p>
              For detailed information on the Snippets API, see the{" "}
              <Link href="/docs/api/snippets" className="text-primary hover:underline">
                Snippets API
              </Link>{" "}
              documentation.
            </p>

            <h3>Settings API</h3>
            <p>The Settings API allows you to manage application settings, such as logo configuration.</p>
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-2 border border-gray-800">Endpoint</th>
                  <th className="text-left p-2 border border-gray-800">Method</th>
                  <th className="text-left p-2 border border-gray-800">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border border-gray-800">
                    <code>/api/settings/logo</code>
                  </td>
                  <td className="p-2 border border-gray-800">GET</td>
                  <td className="p-2 border border-gray-800">Retrieve logo settings</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-800">
                    <code>/api/settings/logo</code>
                  </td>
                  <td className="p-2 border border-gray-800">POST</td>
                  <td className="p-2 border border-gray-800">Update logo settings</td>
                </tr>
              </tbody>
            </table>
            <p>
              For detailed information on the Settings API, see the{" "}
              <Link href="/docs/api/settings" className="text-primary hover:underline">
                Settings API
              </Link>{" "}
              documentation.
            </p>

            <h2>Authentication</h2>
            <p>Currently, the Fardo Encryption API does not require authentication. This is because:</p>
            <ul>
              <li>The application is designed for client-side encryption and decryption</li>
              <li>No sensitive data is stored on the server (only already-encrypted content)</li>
              <li>Snippet IDs are randomly generated and difficult to guess</li>
            </ul>
            <p>
              However, for production deployments with sensitive data, you may want to implement authentication to
              protect your API endpoints.
            </p>

            <h2>Rate Limiting</h2>
            <p>
              To prevent abuse, the API may implement rate limiting. If you exceed the rate limit, you may receive a 429
              Too Many Requests response. In this case, you should wait before making additional requests.
            </p>

            <h2>Error Handling</h2>
            <p>All API endpoints return JSON responses with the following structure:</p>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code>{`// Success response
{
  "success": true,
  // Additional data specific to the endpoint
}

// Error response
{
  "error": "Error message describing what went wrong"
}`}</code>
            </pre>
            <p>Common HTTP status codes:</p>
            <ul>
              <li>
                <strong>200 OK</strong>: The request was successful
              </li>
              <li>
                <strong>400 Bad Request</strong>: The request was invalid or missing required parameters
              </li>
              <li>
                <strong>404 Not Found</strong>: The requested resource was not found
              </li>
              <li>
                <strong>429 Too Many Requests</strong>: Rate limit exceeded
              </li>
              <li>
                <strong>500 Internal Server Error</strong>: An error occurred on the server
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
