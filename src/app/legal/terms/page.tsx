export default function TermsOfService() {
  return (
    <article className="space-y-8">
      <header className="border-b pb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms of Service</h1>
        <p className="text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
      </header>

      <section className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">1. Agreement to Terms</h2>
          <p className="leading-relaxed">
            By accessing or using our AI-powered recruitment platform, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the service.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">2. Service Description</h2>
          
          <div className="pl-4 space-y-4">
            <h3 className="text-xl font-medium text-gray-900">2.1 Beta Status</h3>
            <p className="leading-relaxed">
              This platform is currently in closed beta testing. During this phase:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Features and functionality may change without notice</li>
              <li>Service stability and availability may vary</li>
              <li>We actively collect user feedback for improvements</li>
              <li>Some features may be limited or experimental</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900">2.2 Core Services</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>CV and professional content upload capabilities</li>
              <li>AI-powered analysis of professional qualifications</li>
              <li>Secure data storage with encryption</li>
              <li>Recruitment insight generation and sharing</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900">2.3 Service Limitations</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Service availability may vary</li>
              <li>Features may change with or without notice</li>
              <li>AI analysis accuracy is not guaranteed</li>
              <li>Response times may vary based on system load</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">3. User Accounts</h2>
          
          <div className="pl-4 space-y-4">
            <h3 className="text-xl font-medium text-gray-900">3.1 Account Creation</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Must provide accurate registration information</li>
              <li>Must be at least 18 years old</li>
              <li>Responsible for maintaining account security</li>
              <li>One account per user</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">3.2 Account Termination</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Users may delete their account at any time</li>
            <li>We may suspend or terminate accounts for violations</li>
            <li>Termination results in immediate data deletion</li>
            <li>No refunds for paid services upon termination</li>
          </ul>
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">4. User Obligations</h2>
          <div className="pl-4 space-y-4">
            <h3 className="text-xl font-medium text-gray-900">4.1 Acceptable Use</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Provide truthful and accurate information</li>
              <li>Maintain confidentiality of account credentials</li>
              <li>Use the service for legitimate recruitment purposes</li>
              <li>Respect intellectual property rights</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium text-gray-900">4.2 Prohibited Activities</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Unauthorized access or hacking attempts</li>
            <li>Sharing account access with others</li>
            <li>Uploading malicious content or malware</li>
            <li>Using the service for illegal purposes</li>
            <li>Attempting to reverse engineer the AI system</li>
          </ul>
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">5. Data Usage and Privacy</h2>
          <div className="pl-4 space-y-4">
            <h3 className="text-xl font-medium text-gray-900">5.1 Data Processing</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>All data is encrypted using industry standards</li>
              <li>AI processing follows ethical guidelines</li>
              <li>Data sharing limited to authorized recruiters</li>
              <li>User controls over data deletion</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium text-gray-900">5.2 Third-Party Access</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>No data selling to third parties</li>
            <li>Limited access for service providers</li>
            <li>Compliance with legal requirements</li>
          </ul>
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">6. Intellectual Property</h2>
          <div className="pl-4 space-y-4">
            <h3 className="text-xl font-medium text-gray-900">6.1 Our Rights</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Platform and AI technology ownership</li>
              <li>Service branding and trademarks</li>
              <li>AI-generated insights and analysis</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium text-gray-900">6.2 User Rights</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Ownership of uploaded content</li>
            <li>License to use AI-generated insights</li>
            <li>Right to export personal data</li>
          </ul>
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">7. Liability and Disclaimers</h2>
          <div className="pl-4 space-y-4">
            <h3 className="text-xl font-medium text-gray-900">7.1 Service Warranty</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Service provided "as is" without warranties</li>
              <li>No guarantee of continuous availability</li>
              <li>No liability for AI interpretation accuracy</li>
              <li>Not responsible for recruitment decisions</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium text-gray-900">7.2 Limitation of Liability</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>No liability for indirect damages</li>
            <li>Limited liability to service fees paid</li>
            <li>Force majeure exclusions</li>
          </ul>
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">8. Changes to Terms</h2>
          <p className="leading-relaxed">
            We reserve the right to modify these terms at any time. We will notify users of significant changes via:
          </p>
        </div>

        <div className="pl-4 space-y-4">
          <ul className="list-disc space-y-2">
            <li>Email notifications</li>
            <li>Platform announcements</li>
            <li>Service dashboard updates</li>
          </ul>
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">9. Governing Law</h2>
          <p className="leading-relaxed">
            These terms are governed by [Jurisdiction] law. Any disputes shall be resolved in the courts of [Jurisdiction].
          </p>
        </div>
      </section>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">10. Contact Information</h2>
        <p className="leading-relaxed">For any questions about these terms, contact us at:</p>
        <div className="pl-4 space-y-2">
          <p>Email: legal@[your-domain].com</p>
          <p>Address: [Your Company Address]</p>
          <p>Phone: [Contact Number]</p>
        </div>
      </div>

      <footer className="border-t pt-8 mt-12">
        <nav className="flex justify-center space-x-6 text-sm">
          <a href="/legal/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>
          <a href="/legal/cookies" className="text-blue-600 hover:underline">Cookie Policy</a>
          <a href="/legal/dpa" className="text-blue-600 hover:underline">Data Processing</a>
        </nav>
      </footer>
    </article>
  )
} 