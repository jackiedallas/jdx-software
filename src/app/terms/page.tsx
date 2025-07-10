import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'JDX Software LLC Terms of Service - Legal terms and conditions for using our software development services and website.',
  openGraph: {
    title: 'Terms of Service | JDX Software LLC',
    description: 'JDX Software LLC Terms of Service - Legal terms and conditions for using our software development services and website.',
    url: 'https://jdxsoftware.com/terms',
  },
  alternates: {
    canonical: '/terms',
  },
}

export default function TermsOfServicePage() {
  const lastUpdated = "January 10, 2025";

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
        <p className="text-gray-600">
          Last updated: {lastUpdated}
        </p>
      </header>

      <div className="prose prose-lg max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
          <p>
            These Terms of Service ("Terms") constitute a legally binding agreement between you and JDX Software LLC ("Company," "we," "our," or "us") concerning your access to and use of our website at jdxsoftware.com (the "Service") and our software development services.
          </p>
          <p>
            By accessing or using our Service, you agree that you have read, understood, and agree to be bound by all of these Terms. If you do not agree with all of these Terms, you are expressly prohibited from using the Service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Acceptance of Terms</h2>
          <p>
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. Additionally, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Description of Service</h2>
          <p>
            JDX Software LLC provides custom software development services, including but not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Web application development</li>
            <li>Mobile application development</li>
            <li>Custom software solutions</li>
            <li>Business automation tools</li>
            <li>Software consulting services</li>
            <li>Digital transformation solutions</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. User Obligations</h2>
          
          <h3 className="text-xl font-medium mb-3">4.1 Acceptable Use</h3>
          <p>You agree to use our Service only for lawful purposes and in accordance with these Terms. You agree not to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use the Service in any way that violates any applicable federal, state, local, or international law or regulation</li>
            <li>Attempt to gain unauthorized access to any part of the Service</li>
            <li>Interfere with or disrupt the Service or servers or networks connected to the Service</li>
            <li>Use the Service to transmit any harmful, offensive, or illegal content</li>
            <li>Impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity</li>
          </ul>

          <h3 className="text-xl font-medium mb-3 mt-6">4.2 Account Information</h3>
          <p>
            When you provide information to us, you agree to provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of any account information and for all activities that occur under your account.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property Rights</h2>
          
          <h3 className="text-xl font-medium mb-3">5.1 Our Content</h3>
          <p>
            The Service and its original content, features, and functionality are and will remain the exclusive property of JDX Software LLC and its licensors. The Service is protected by copyright, trademark, and other laws.
          </p>

          <h3 className="text-xl font-medium mb-3 mt-6">5.2 Custom Development Work</h3>
          <p>
            For custom software development projects, intellectual property ownership will be specified in separate project agreements. Unless otherwise agreed in writing, the Client will own the custom software developed specifically for them, while JDX Software LLC retains rights to general methodologies, know-how, and any pre-existing intellectual property.
          </p>

          <h3 className="text-xl font-medium mb-3 mt-6">5.3 Client Content</h3>
          <p>
            You retain ownership of any intellectual property rights that you hold in content that you provide to us. By providing content, you grant us a limited license to use such content solely for the purpose of providing our services to you.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Service Terms</h2>
          
          <h3 className="text-xl font-medium mb-3">6.1 Project Agreements</h3>
          <p>
            Specific software development projects will be governed by separate project agreements that will include detailed scope, timeline, and payment terms. These Terms of Service apply to all interactions unless superseded by specific project agreements.
          </p>

          <h3 className="text-xl font-medium mb-3 mt-6">6.2 Payment Terms</h3>
          <p>
            Payment terms for services will be specified in project agreements. Generally, payments are due according to the agreed schedule. Late payments may result in project delays or suspension of services.
          </p>

          <h3 className="text-xl font-medium mb-3 mt-6">6.3 Changes to Projects</h3>
          <p>
            Any changes to the agreed project scope may result in additional charges and timeline adjustments. All changes must be agreed upon in writing.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Privacy Policy</h2>
          <p>
            Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Disclaimers</h2>
          <p>
            THE INFORMATION ON THIS WEBSITE IS PROVIDED ON AN "AS IS" BASIS. TO THE FULLEST EXTENT PERMITTED BY LAW, JDX SOFTWARE LLC EXCLUDES ALL REPRESENTATIONS, WARRANTIES, CONDITIONS AND TERMS (EXPRESS OR IMPLIED, STATUTORY OR OTHERWISE) OTHER THAN THOSE EXPRESSLY SET OUT IN THESE TERMS.
          </p>
          <p>
            We do not warrant that the Service will be uninterrupted, timely, secure, or error-free. We do not warrant the results that may be obtained from the use of the Service or the accuracy or reliability of any information obtained through the Service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">9. Limitation of Liability</h2>
          <p>
            TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL JDX SOFTWARE LLC, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES.
          </p>
          <p>
            IN NO EVENT SHALL JDX SOFTWARE LLC'S TOTAL LIABILITY TO YOU FOR ALL DAMAGES, LOSSES, AND CAUSES OF ACTION EXCEED THE AMOUNT PAID BY YOU TO JDX SOFTWARE LLC IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">10. Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless JDX Software LLC and its officers, directors, employees, and agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">11. Termination</h2>
          <p>
            We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will cease immediately.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">12. Governing Law</h2>
          <p>
            These Terms shall be interpreted and governed by the laws of the state in which JDX Software LLC is incorporated, without regard to conflict of law provisions. Any disputes arising from these Terms will be subject to the exclusive jurisdiction of the courts in that state.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">13. Severability</h2>
          <p>
            If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law, and the remaining provisions will continue in full force and effect.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">14. Waiver</h2>
          <p>
            No waiver by JDX Software LLC of any term or condition set forth in these Terms shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">15. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
          </p>
          <p>
            By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">16. Contact Information</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mt-4">
            <p><strong>JDX Software LLC</strong></p>
            <p>Email: hello@jdxsoftware.com</p>
            <p>Website: <a href="https://jdxsoftware.com" className="text-blue-600 hover:text-blue-800">https://jdxsoftware.com</a></p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">17. Entire Agreement</h2>
          <p>
            These Terms of Service, together with our Privacy Policy and any project-specific agreements, constitute the sole and entire agreement between you and JDX Software LLC regarding the Service and supersede all prior and contemporaneous understandings, agreements, representations, and warranties.
          </p>
        </section>
      </div>
    </div>
  )
}