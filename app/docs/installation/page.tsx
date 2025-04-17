import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function InstallationPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-4 text-white">Installation</h1>
        <p className="text-gray-400 mb-6">Learn how to install and deploy Fardo Encryption.</p>
      </div>

      <Card className="bg-gray-950 border-gray-800">
        <CardContent className="p-6">
          <div className="prose prose-invert max-w-none">
            <h2>Installation Options</h2>
            <p>There are several ways to install and use Fardo Encryption:</p>
            <ul>
              <li>Use the hosted version (simplest option)</li>
              <li>Deploy your own instance to Vercel</li>
              <li>Run locally for development</li>
              <li>Self-host on your own server</li>
            </ul>

            <h2>Using the Hosted Version</h2>
            <p>The simplest way to use Fardo Encryption is to access the hosted version:</p>
            <ol>
              <li>
                Visit{" "}
                <Link href="https://fardo-encryption.vercel.app" className="text-primary hover:underline">
                  https://fardo-encryption.vercel.app
                </Link>{" "}
                (or your deployment URL)
              </li>
              <li>No installation or setup required</li>
              <li>All encryption and decryption happens in your browser</li>
            </ol>

            <h2>Deploying to Vercel</h2>
            <p>To deploy your own instance to Vercel:</p>
            <ol>
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
              <li>
                Sign up for a Vercel account if you don&apos;t have one:{" "}
                <Link
                  href="https://vercel.com/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://vercel.com/signup
                </Link>
              </li>
              <li>Import your forked repository in the Vercel dashboard</li>
              <li>Add the Upstash Redis integration for storing shared snippets and settings</li>
              <li>Deploy the application</li>
            </ol>
            <p>Detailed Vercel deployment steps:</p>
            <ol>
              <li>Go to the Vercel dashboard and click &quot;Add New&quot; &gt; &quot;Project&quot;</li>
              <li>Select your forked repository from the list</li>
              <li>Configure the project settings (the defaults should work fine)</li>
              <li>Click &quot;Deploy&quot;</li>
              <li>Once deployed, go to the &quot;Integrations&quot; tab and add the Upstash Redis integration</li>
              <li>Follow the prompts to set up the Redis database</li>
            </ol>

            <h2>Running Locally for Development</h2>
            <p>To run Fardo Encryption locally for development:</p>
            <ol>
              <li>
                Clone the repository:
                <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
                  <code>{`git clone https://github.com/advexon/advexon-encryption.git
cd advexon-encryption`}</code>
                </pre>
              </li>
              <li>
                Install dependencies:
                <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
                  <code>{`npm install
# or
yarn install
# or
pnpm install`}</code>
                </pre>
              </li>
              <li>
                Set up environment variables:
                <p>
                  Create a <code>.env.local</code> file in the root directory with the following variables:
                </p>
                <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
                  <code>{`KV_URL=your_upstash_redis_url
KV_REST_API_TOKEN=your_upstash_redis_token
KV_REST_API_READ_ONLY_TOKEN=your_upstash_redis_read_only_token`}</code>
                </pre>
                <p>
                  You can get these values by signing up for Upstash Redis:{" "}
                  <Link
                    href="https://upstash.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    https://upstash.com/
                  </Link>
                </p>
              </li>
              <li>
                Start the development server:
                <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
                  <code>{`npm run dev
# or
yarn dev
# or
pnpm dev`}</code>
                </pre>
              </li>
              <li>
                Open{" "}
                <Link href="http://localhost:3000" className="text-primary hover:underline">
                  http://localhost:3000
                </Link>{" "}
                in your browser
              </li>
            </ol>

            <h2>Self-Hosting</h2>
            <p>To self-host Fardo Encryption on your own server:</p>
            <ol>
              <li>Clone the repository as described above</li>
              <li>Install dependencies as described above</li>
              <li>Set up environment variables as described above</li>
              <li>
                Build the application:
                <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
                  <code>{`npm run build
# or
yarn build
# or
pnpm build`}</code>
                </pre>
              </li>
              <li>
                Start the production server:
                <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
                  <code>{`npm start
# or
yarn start
# or
pnpm start`}</code>
                </pre>
              </li>
              <li>Configure your web server (Nginx, Apache, etc.) to proxy requests to the Node.js server</li>
              <li>Set up HTTPS for secure connections</li>
            </ol>

            <h2>Docker Deployment</h2>
            <p>For Docker-based deployment:</p>
            <ol>
              <li>
                Create a Dockerfile in the root directory:
                <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
                  <code>{`FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

ENV NODE_ENV=production

EXPOSE 3000

CMD ["npm", "start"]`}</code>
                </pre>
              </li>
              <li>
                Build the Docker image:
                <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
                  <code>{`docker build -t fardo-encryption .`}</code>
                </pre>
              </li>
              <li>
                Run the Docker container:
                <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
                  <code>{`docker run -p 3000:3000 --env-file .env.local fardo-encryption`}</code>
                </pre>
              </li>
            </ol>

            <h2>Requirements</h2>
            <p>Fardo Encryption has the following requirements:</p>
            <ul>
              <li>Node.js 18.x or later</li>
              <li>Upstash Redis for storing shared snippets and settings</li>
              <li>Modern web browser with Web Cryptography API support (Chrome, Firefox, Safari, Edge)</li>
            </ul>

            <h2>Next Steps</h2>
            <p>After installation, you may want to:</p>
            <ul>
              <li>
                Customize the logo and branding (see{" "}
                <Link href="/docs/customization/logo" className="text-primary hover:underline">
                  Logo Customization
                </Link>
                )
              </li>
              <li>
                Learn how to use the application (see{" "}
                <Link href="/docs/quick-start" className="text-primary hover:underline">
                  Quick Start Guide
                </Link>
                )
              </li>
              <li>
                Explore the API documentation (see{" "}
                <Link href="/docs/api/overview" className="text-primary hover:underline">
                  API Reference
                </Link>
                )
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
