import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'JDX Software LLC Privacy Policy - Learn how we collect, use, and protect your personal information and data.',
  openGraph: {
    title: 'Privacy Policy | JDX Software LLC',
    description: 'JDX Software LLC Privacy Policy - Learn how we collect, use, and protect your personal information and data.',
    url: 'https://jdxsoftware.com/privacy',
  },
  alternates: {
    canonical: '/privacy',
  },
}

export default function PrivacyPolicyPage() {
  const lastUpdated = "July 9, 2025";

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-600">
          Last updated: {lastUpdated}
        </p>
      </header>

      <div className="prose prose-lg max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p>
            JDX Software LLC (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at jdxsoftware.com (the &quot;Service&quot;) or engage with our software development services.
          </p>
          <p>
            Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the Service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
          
          <h3 className="text-xl font-medium mb-3">2.1 Personal Information</h3>
          <p>We may collect personal information that you voluntarily provide to us when you:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Contact us through our website forms</li>
            <li>Subscribe to our newsletter</li>
            <li>Request a consultation or quote</li>
            <li>Engage our services</li>
            <li>Communicate with us via email or other channels</li>
          </ul>
          
          <p>This information may include:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name and contact information (email address, phone number)</li>
            <li>Company information</li>
            <li>Project requirements and specifications</li>
            <li>Payment information (processed through secure third-party processors)</li>
          </ul>

          <h3 className="text-xl font-medium mb-3 mt-6">2.2 Automatically Collected Information</h3>
          <p>When you visit our Service, we may automatically collect certain information about your device and usage, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>IP address and general location information</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Referring website</li>
            <li>Pages viewed and time spent on our site</li>
            <li>Device information</li>
          </ul>

          <h3 className="text-xl font-medium mb-3 mt-6">2.3 Cookies and Tracking Technologies</h3>
          <p>
            We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie preferences through your browser settings. Some analytics services we may use include privacy-focused options that do not collect personal information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
          <p>We use the information we collect for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide, operate, and maintain our services</li>
            <li>To communicate with you about our services</li>
            <li>To respond to your inquiries and provide customer support</li>
            <li>To process transactions and send related information</li>
            <li>To send newsletters and marketing communications (with your consent)</li>
            <li>To improve our website and services</li>
            <li>To analyze usage trends and optimize user experience</li>
            <li>To comply with legal obligations</li>
            <li>To protect our rights and prevent fraud</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Information Sharing and Disclosure</h2>
          <p>We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:</p>
          
          <h3 className="text-xl font-medium mb-3">4.1 Service Providers</h3>
          <p>
            We may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or serving our users. These parties are contractually obligated to keep your information confidential.
          </p>

          <h3 className="text-xl font-medium mb-3 mt-6">4.2 Legal Requirements</h3>
          <p>We may disclose your information when required by law or to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Comply with legal process or government requests</li>
            <li>Protect our rights, property, or safety</li>
            <li>Protect the rights, property, or safety of our users or others</li>
            <li>Prevent fraud or illegal activities</li>
          </ul>

          <h3 className="text-xl font-medium mb-3 mt-6">4.3 Business Transfers</h3>
          <p>
            In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
          <p>
            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
          </p>
          <p>
            We use industry-standard encryption for sensitive data transmission and secure hosting providers for our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
          <p>
            We retain your personal information only as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. We will delete or anonymize your information when it is no longer needed.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Your Rights and Choices</h2>
          <p>Depending on your location, you may have the following rights regarding your personal information:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
            <li><strong>Correction:</strong> Request that we correct any inaccurate or incomplete information</li>
            <li><strong>Deletion:</strong> Request that we delete your personal information</li>
            <li><strong>Portability:</strong> Request that we provide your information in a portable format</li>
            <li><strong>Objection:</strong> Object to our processing of your information</li>
            <li><strong>Restriction:</strong> Request that we restrict our processing of your information</li>
          </ul>
          <p>
            To exercise these rights, please contact us using the information provided in the &quot;Contact Us&quot; section below.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Third-Party Links</h2>
          <p>
            Our Service may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party websites you visit.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">9. Children&apos;s Privacy</h2>
          <p>
            Our Service is not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have collected personal information from a child under 18, we will take steps to delete such information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">10. International Data Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries other than your own. We ensure that appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">11. Analytics and Marketing</h2>
          <p>
            We may use privacy-focused analytics services to understand how our website is used and to improve our services. We may also use your contact information to send you newsletters and marketing communications, which you can opt out of at any time.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">12. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. We encourage you to review this Privacy Policy periodically for any changes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">13. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mt-4">
            <p><strong>JDX Software LLC</strong></p>
            <p>Email: hello@jdxsoftware.com</p>
            <p>Website: <a href="https://jdxsoftware.com" className="text-blue-600 hover:text-blue-800">https://jdxsoftware.com</a></p>
          </div>
        </section>
      </div>
    </div>
  )
}