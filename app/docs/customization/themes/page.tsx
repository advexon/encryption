import { Card, CardContent } from "@/components/ui/card"

export default function ThemesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-4 text-white">Themes</h1>
        <p className="text-gray-400 mb-6">
          Learn about the theming system in Fardo Encryption and how to customize it.
        </p>
      </div>

      <Card className="bg-gray-950 border-gray-800">
        <CardContent className="p-6">
          <div className="prose prose-invert max-w-none">
            <h2>Theming Overview</h2>
            <p>
              Fardo Encryption uses a dark theme by default, optimized for security and encryption applications. The
              theme is built using Tailwind CSS and CSS variables, making it highly customizable.
            </p>

            <h3>Current Theme</h3>
            <p>The current theme features:</p>
            <ul>
              <li>Dark background with blue accents</li>
              <li>High contrast for readability</li>
              <li>Subtle gradients and shadows for depth</li>
              <li>Responsive design for all screen sizes</li>
            </ul>

            <h2>Customizing the Theme</h2>
            <p>To customize the theme, you'll need to modify the source code. Here's how:</p>

            <h3>Basic Customization</h3>
            <p>
              The easiest way to customize the theme is by modifying the CSS variables in <code>app/globals.css</code>:
            </p>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code>{`@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 221.2 83.2% 53.3%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 221.2 83.2% 53.3%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 217.2 91.2% 59.8%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 224.3 76.3% 48%;
  }
}`}</code>
            </pre>
            <p>
              These variables control the colors used throughout the application. You can modify them to create your own
              color scheme.
            </p>

            <h3>Creating a Custom Theme</h3>
            <p>To create a completely custom theme:</p>
            <ol>
              <li>
                Fork the GitHub repository:{" "}
                <a
                  href="https://github.com/advexon/advexon-encryption"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://github.com/advexon/advexon-encryption
                </a>
              </li>
              <li>
                Modify the CSS variables in <code>app/globals.css</code>
              </li>
              <li>
                Update the Tailwind configuration in <code>tailwind.config.ts</code> if needed
              </li>
              <li>Customize component styles in their respective files</li>
              <li>Deploy your customized version</li>
            </ol>

            <h3>Theme Variables Explained</h3>
            <p>Here's what each CSS variable controls:</p>
            <ul>
              <li>
                <code>--background</code>: Main background color
              </li>
              <li>
                <code>--foreground</code>: Main text color
              </li>
              <li>
                <code>--card</code>: Background color for card components
              </li>
              <li>
                <code>--card-foreground</code>: Text color for card components
              </li>
              <li>
                <code>--popover</code>: Background color for popovers and dropdowns
              </li>
              <li>
                <code>--popover-foreground</code>: Text color for popovers and dropdowns
              </li>
              <li>
                <code>--primary</code>: Primary accent color (buttons, links, etc.)
              </li>
              <li>
                <code>--primary-foreground</code>: Text color on primary-colored elements
              </li>
              <li>
                <code>--secondary</code>: Secondary accent color
              </li>
              <li>
                <code>--secondary-foreground</code>: Text color on secondary-colored elements
              </li>
              <li>
                <code>--muted</code>: Background color for muted elements
              </li>
              <li>
                <code>--muted-foreground</code>: Text color for muted elements
              </li>
              <li>
                <code>--accent</code>: Background color for accented elements
              </li>
              <li>
                <code>--accent-foreground</code>: Text color for accented elements
              </li>
              <li>
                <code>--destructive</code>: Color for destructive actions (delete, etc.)
              </li>
              <li>
                <code>--destructive-foreground</code>: Text color on destructive elements
              </li>
              <li>
                <code>--border</code>: Border color
              </li>
              <li>
                <code>--input</code>: Border color for input elements
              </li>
              <li>
                <code>--ring</code>: Focus ring color
              </li>
              <li>
                <code>--radius</code>: Border radius for rounded corners
              </li>
            </ul>

            <h3>Example: Creating a Light Theme</h3>
            <p>
              To create a light theme, you could modify the <code>.dark</code> class variables:
            </p>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code>{`  .light {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 221.2 83.2% 53.3%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 221.2 83.2% 53.3%;
  }`}</code>
            </pre>
            <p>
              Then you would need to modify the <code>ThemeProvider</code> in <code>app/layout.tsx</code> to use the
              light theme by default:
            </p>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code>{`<ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
  {children}
</ThemeProvider>`}</code>
            </pre>

            <h2>Advanced Theming</h2>

            <h3>Component-Level Styling</h3>
            <p>For more advanced customization, you can modify the individual component styles:</p>
            <ul>
              <li>
                UI components are located in <code>components/ui/</code>
              </li>
              <li>
                Application-specific components are in <code>components/</code>
              </li>
              <li>Each component has its own styling using Tailwind CSS classes</li>
              <li>You can modify these styles to match your theme</li>
            </ul>

            <h3>Tailwind Configuration</h3>
            <p>
              The Tailwind configuration is located in <code>tailwind.config.ts</code>. You can modify this file to:
            </p>
            <ul>
              <li>Add custom colors</li>
              <li>Extend the default theme</li>
              <li>Configure plugins</li>
              <li>Adjust the responsive breakpoints</li>
            </ul>

            <h3>Adding Theme Switching</h3>
            <p>If you want to allow users to switch between themes:</p>
            <ol>
              <li>
                Create multiple theme classes in <code>globals.css</code>
              </li>
              <li>Implement a theme switcher component</li>
              <li>
                Use the <code>useTheme</code> hook from <code>next-themes</code> to toggle between themes
              </li>
            </ol>
            <p>Example theme switcher component:</p>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code>{`"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { SunIcon, MoonIcon } from 'lucide-react'

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <MoonIcon className="h-5 w-5" />
      ) : (
        <SunIcon className="h-5 w-5" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}`}</code>
            </pre>

            <h2>Theme Best Practices</h2>

            <h3>Accessibility</h3>
            <p>When customizing the theme, ensure:</p>
            <ul>
              <li>Sufficient color contrast for readability (WCAG AA or AAA compliance)</li>
              <li>Consistent focus indicators for keyboard navigation</li>
              <li>Text remains readable at all sizes</li>
              <li>Interactive elements are clearly distinguishable</li>
            </ul>

            <h3>Performance</h3>
            <p>To maintain good performance:</p>
            <ul>
              <li>Minimize the use of complex gradients and shadows</li>
              <li>Use Tailwind's utility classes instead of custom CSS when possible</li>
              <li>Optimize images and icons</li>
              <li>Test your theme on various devices and browsers</li>
            </ul>

            <h2>Getting Help</h2>
            <p>If you need help with theming:</p>
            <ul>
              <li>
                Check the{" "}
                <a
                  href="https://tailwindcss.com/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Tailwind CSS documentation
                </a>
              </li>
              <li>
                Explore the{" "}
                <a
                  href="https://ui.shadcn.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  shadcn/ui documentation
                </a>{" "}
                for component styling
              </li>
              <li>
                Ask questions on our{" "}
                <a
                  href="https://github.com/advexon/advexon-encryption/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  GitHub Discussions
                </a>{" "}
                page
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
