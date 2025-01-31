export default function DataProcessingAgreement() {
  return (
    <article className="space-y-8">
      <header className="border-b pb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Data Processing Agreement</h1>
        <p className="text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
      </header>

      <section className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">1. Parties and Scope</h2>
          
          <div className="pl-4 space-y-4">
            <h3 className="text-xl font-medium text-gray-900">1.1 Parties</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Data Controller: The user uploading content ("You")</li>
              <li>Data Processor: Our platform ("We", "Us")</li>
              <li>Sub-processors: Our service providers</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900">1.2 Purpose and Scope</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>AI-powered CV analysis</li>
              <li>Professional qualification assessment</li>
              <li>Recruitment insight generation</li>
              <li>Secure data storage and management</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">2. Data Processing Details</h2>
          
          <div className="pl-4 space-y-4">
            <h3 className="text-xl font-medium text-gray-900">2.1 Types of Personal Data</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Professional information from CVs</li>
              <li>Contact details</li>
              <li>Educational background</li>
              <li>Work experience</li>
              <li>Skills and qualifications</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900">2.2 Processing Operations</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Collection and storage</li>
              <li>Encryption and security measures</li>
              <li>AI analysis and processing</li>
              <li>Generation of insights</li>
              <li>Controlled sharing with recruiters</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">3. Security Measures</h2>
          
          <div className="pl-4 space-y-4">
            <h3 className="text-xl font-medium text-gray-900">3.1 Technical Measures</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>AES-256-GCM encryption at rest</li>
              <li>TLS 1.3 encryption in transit</li>
              <li>Regular security audits</li>
              <li>Penetration testing</li>
              <li>Access logging and monitoring</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">4. Sub-processing</h2>
          
          <div className="pl-4 space-y-4">
            <h3 className="text-xl font-medium text-gray-900">4.1 Authorized Sub-processors</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Cloud infrastructure providers</li>
              <li>Security service providers</li>
              <li>Authentication service providers</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900">4.2 Sub-processor Requirements</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Equivalent data protection standards</li>
              <li>Regular compliance audits</li>
              <li>Contractual data protection obligations</li>
              <li>Incident reporting requirements</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">5. Data Subject Rights</h2>
          
          <div className="pl-4 space-y-4">
            <h3 className="text-xl font-medium text-gray-900">5.1 Support for Rights Requests</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Access request handling</li>
              <li>Rectification procedures</li>
              <li>Erasure capabilities</li>
              <li>Data portability support</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900">5.2 Response Timeframes</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Initial response within 24 hours</li>
              <li>Request completion within 30 days</li>
              <li>Extension notification if required</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">6. Data Retention and Deletion</h2>
          
          <div className="pl-4 space-y-4">
            <h3 className="text-xl font-medium text-gray-900">6.1 Retention Periods</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Active account data: Until deletion request</li>
              <li>Inactive accounts: 12 months maximum</li>
              <li>Backup retention: 30 days maximum</li>
              <li>Audit logs: 90 days</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900">6.2 Deletion Procedures</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Secure data erasure methods</li>
              <li>Verification of deletion</li>
              <li>Backup removal confirmation</li>
              <li>Sub-processor deletion tracking</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">7. Data Breach Procedures</h2>
          
          <div className="pl-4 space-y-4">
            <h3 className="text-xl font-medium text-gray-900">7.1 Notification Process</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Immediate internal escalation</li>
              <li>72-hour controller notification</li>
              <li>Affected user communication</li>
              <li>Authority reporting if required</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900">7.2 Response Measures</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Incident containment</li>
              <li>Impact assessment</li>
              <li>Remediation actions</li>
              <li>Prevention improvements</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">8. Compliance and Audits</h2>
          
          <div className="pl-4 space-y-4">
            <h3 className="text-xl font-medium text-gray-900">8.1 Documentation</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Processing records</li>
              <li>Security measures</li>
              <li>Impact assessments</li>
              <li>Audit reports</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900">8.2 Audit Rights</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Annual compliance audits</li>
              <li>Controller audit support</li>
              <li>Regulatory inspection support</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">9. Contact Information</h2>
          <p className="leading-relaxed">For data processing queries, contact our Data Protection Officer:</p>
          <div className="pl-4 space-y-2">
            <p>Email: verdyanradik@gmail.com</p>
          </div>
        </div>
      </section>

      <footer className="border-t pt-8 mt-12">
        <nav className="flex justify-center space-x-6 text-sm">
          <a href="/legal/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>
          <a href="/legal/terms" className="text-blue-600 hover:underline">Terms of Service</a>
          <a href="/legal/cookies" className="text-blue-600 hover:underline">Cookie Policy</a>
        </nav>
      </footer>
    </article>
  )
} 