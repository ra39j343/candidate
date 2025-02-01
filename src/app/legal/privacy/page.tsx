export default function PrivacyPolicy() {
  return (
    <article className="space-y-8">
      <header className="border-b pb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
      </header>

      <section className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">1. Introduction</h2>
          <p className="leading-relaxed">
            This Privacy Policy explains how we collect, use, process, and protect your personal data when you use our AI-powered recruitment platform. We are committed to protecting your privacy and handling your data in an open and transparent manner.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">2. Data We Collect</h2>
          
          <div className="pl-4 space-y-4">
            <h3 className="text-xl font-medium text-gray-900">2.1 Information You Provide</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>CV content and professional information</li>
              <li>Text content you upload or input</li>
              <li>Account registration information</li>
              <li>Communication preferences</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900">2.2 Automatically Collected Information</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Login timestamps and session information</li>
              <li>Device and browser information for security</li>
              <li>Usage patterns for service improvement</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">3. How We Use Your Data</h2>
          
          <div className="pl-4 space-y-4">
            <h3 className="text-xl font-medium text-gray-900">3.1 Primary Purposes</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>AI analysis of professional qualifications</li>
              <li>Generation of recruitment insights</li>
              <li>Account management and security</li>
              <li>Service optimization and improvement</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900">3.2 Legal Basis for Processing</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Consent: When you explicitly agree to data processing</li>
              <li>Contract: To provide our services to you</li>
              <li>Legal Obligations: To comply with applicable laws</li>
              <li>Legitimate Interests: To improve and secure our services</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">4. Data Protection Measures</h2>
          
          <div className="pl-4 space-y-4">
            <h3 className="text-xl font-medium text-gray-900">4.1 Technical Security</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>AES-256-GCM encryption for all stored data</li>
              <li>Secure key management and rotation</li>
              <li>Regular security audits and penetration testing</li>
              <li>Access controls and authentication mechanisms</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900">4.2 Organizational Measures</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Staff training on data protection</li>
              <li>Access restriction on a need-to-know basis</li>
              <li>Regular security assessments</li>
              <li>Incident response procedures</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">5. Your Rights</h2>
          
          <div className="pl-4 space-y-4">
            <h3 className="text-xl font-medium text-gray-900">5.1 Data Subject Rights</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Right to access your personal data</li>
              <li>Right to rectification of inaccurate data</li>
              <li>Right to erasure ("right to be forgotten")</li>
              <li>Right to restrict processing</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900">5.2 How to Exercise Your Rights</h3>
            <p className="leading-relaxed">
              You can exercise your rights by:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Using the dashboard controls for immediate data deletion</li>
              <li>Contacting our Data Protection Officer</li>
              <li>Submitting a formal request through our support channels</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">6. Data Retention</h2>
          <p className="leading-relaxed">We retain your data for as long as necessary to provide our services or until you delete your account. Specifically:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Active account data: Retained while account is active</li>
            <li>Deleted content: Immediately removed from active systems</li>
            <li>Backup data: Removed within 30 days of deletion</li>
            <li>Usage logs: Retained for 90 days for security</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">7. International Data Transfers</h2>
          <p className="leading-relaxed">
            All data is processed and stored within the European Economic Area (EEA). If any future transfers outside the EEA become necessary, we will implement appropriate safeguards and notify users.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">8. Changes to This Policy</h2>
          <p className="leading-relaxed">
            We may update this policy to reflect changes in our practices or legal requirements. We will notify you of any material changes through our platform or via email.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">9. Contact Information</h2>
          <p className="leading-relaxed">
            For any privacy-related queries contact:
          </p>
          <div className="pl-4 space-y-2">
            <p>Email: radiktest4@gmail.com</p>
          </div>
        </div>
      </section>

      <footer className="border-t pt-8 mt-12">
        <nav className="flex justify-center space-x-6 text-sm">
          <a href="/legal/terms" className="text-blue-600 hover:underline">Terms of Service</a>
          <a href="/legal/cookies" className="text-blue-600 hover:underline">Cookie Policy</a>
          <a href="/legal/dpa" className="text-blue-600 hover:underline">Data Processing</a>
        </nav>
      </footer>
    </article>
  )
} 