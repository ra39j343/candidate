export default function CookiePolicy() {
  return (
    <article className="space-y-8">
      <header className="border-b pb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Cookie Policy</h1>
        <p className="text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
      </header>

      <section className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">1. Introduction</h2>
          <p className="leading-relaxed">
            This Cookie Policy explains how we use cookies and similar tracking technologies on our AI-powered recruitment platform. It explains what these technologies are and why we use them, as well as your rights to control their use.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">2. What Are Cookies</h2>
          <p className="leading-relaxed">
            Cookies are small text files that are stored on your device when you visit our website. They help us:
          </p>
          <ul className="list-disc pl-9 space-y-2">
            <li>Keep you signed in</li>
            <li>Remember your preferences</li>
            <li>Understand how you use our service</li>
            <li>Protect your account security</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">3. Types of Cookies We Use</h2>
          
          <div className="pl-4 space-y-4">
            <h3 className="text-xl font-medium text-gray-900">3.1 Essential Cookies</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full mt-4 mb-6">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-4">Cookie Name</th>
                    <th className="text-left p-4">Purpose</th>
                    <th className="text-left p-4">Duration</th>
                    <th className="text-left p-4">Type</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="p-4">next-auth.session-token</td>
                    <td className="p-4">Authentication management</td>
                    <td className="p-4">Session</td>
                    <td className="p-4">Essential</td>
                  </tr>
                  <tr>
                    <td className="p-4">next-auth.csrf-token</td>
                    <td className="p-4">Security protection</td>
                    <td className="p-4">Session</td>
                    <td className="p-4">Essential</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">4. Cookie Management</h2>
          <div className="pl-4 space-y-4">
            <h3 className="text-xl font-medium text-gray-900">4.1 Browser Settings</h3>
            <p>You can control cookies through your browser settings:</p>
            <ul className="list-disc pl-9 space-y-2">
              <li>Chrome: Settings → Privacy and Security → Cookies</li>
              <li>Firefox: Options → Privacy & Security → Cookies</li>
              <li>Safari: Preferences → Privacy → Cookies</li>
              <li>Edge: Settings → Privacy & Security → Cookies</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900">4.2 Impact of Disabling Cookies</h3>
            <p>Please note that disabling essential cookies will:</p>
            <ul className="list-disc pl-9 space-y-2">
              <li>Prevent you from logging in</li>
              <li>Disable security features</li>
              <li>Affect core platform functionality</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">5. Data Collection and Usage</h2>
          <div className="pl-4 space-y-4">
            <h3 className="text-xl font-medium text-gray-900">5.1 Information Collected</h3>
            <ul className="list-disc pl-9 space-y-2">
              <li>Session identifiers</li>
              <li>Authentication status</li>
              <li>Security tokens</li>
              <li>User preferences</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900">5.2 Usage Purposes</h3>
            <ul className="list-disc pl-9 space-y-2">
              <li>Account security</li>
              <li>Service functionality</li>
              <li>User experience improvement</li>
              <li>Platform optimization</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">6. Third-Party Services</h2>
          <p>We do not use:</p>
          <ul className="list-disc pl-9 space-y-2">
            <li>Third-party analytics cookies</li>
            <li>Advertising cookies</li>
            <li>Social media cookies</li>
            <li>Tracking pixels</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">7. Updates to This Policy</h2>
          <p>
            We may update this Cookie Policy to reflect:
          </p>
          <ul className="list-disc pl-9 space-y-2">
            <li>Changes in how we use cookies</li>
            <li>New features or functionality</li>
            <li>Legal or regulatory requirements</li>
            <li>Security improvements</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">8. Contact Information</h2>
          <p className="leading-relaxed">For questions about our cookie practices, contact us at:</p>
          <div className="pl-4 space-y-2">
            <p>Email: verdyanradik@gmail.com</p>
          </div>
        </div>
      </section>

      <footer className="border-t pt-8 mt-12">
        <nav className="flex justify-center space-x-6 text-sm">
          <a href="/legal/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>
          <a href="/legal/terms" className="text-blue-600 hover:underline">Terms of Service</a>
          <a href="/legal/dpa" className="text-blue-600 hover:underline">Data Processing</a>
        </nav>
      </footer>
    </article>
  )
} 