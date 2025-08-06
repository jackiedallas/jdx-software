import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AlphaWick Privacy Policy',
  description: 'AlphaWick Privacy Policy - Learn how we collect, use, and protect your personal information in our stock analysis mobile app.',
  openGraph: {
    title: 'AlphaWick Privacy Policy | JDX Software',
    description: 'AlphaWick Privacy Policy - Learn how we collect, use, and protect your personal information in our stock analysis mobile app.',
    url: 'https://jdxsoftware.com/privacy/alphawick',
  },
  alternates: {
    canonical: '/privacy/alphawick',
  },
}

export default function AlphaWickPrivacyPolicyPage() {
  const lastUpdated = "August 6, 2024";

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <header className="mb-12">
        <div className="flex items-center space-x-4 mb-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AlphaWick
          </h1>
          <span className="text-2xl font-light text-gray-500">Privacy Policy</span>
        </div>
        <p className="text-gray-600">
          Last updated: {lastUpdated}
        </p>
      </header>

      <div className="prose prose-lg max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p>
            AlphaWick (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application AlphaWick (the &quot;App&quot;), developed by JDX Software.
          </p>
          <p>
            AlphaWick is an educational stock analysis app designed for learning purposes only and does not provide financial advice or facilitate actual trading.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          
          <h3 className="text-xl font-medium mb-3">Personal Information</h3>
          <p>We collect only the following personal information that you voluntarily provide:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Email address</strong> (required for account creation and authentication)</li>
            <li><strong>Password</strong> (encrypted and securely stored through Firebase Authentication)</li>
          </ul>

          <h3 className="text-xl font-medium mb-3 mt-6">Usage Information</h3>
          <p>We may collect non-personal information about how you use the App, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Stock symbols you search for and analyze</li>
            <li>Your favorite stocks list</li>
            <li>App usage patterns and preferences (theme settings, timeframe preferences)</li>
            <li>Technical information such as device type and operating system version</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <p>We use the information we collect solely to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide and maintain your account</li>
            <li>Authenticate your identity and secure your account</li>
            <li>Save your preferences and favorite stocks</li>
            <li>Improve the App&apos;s functionality and user experience</li>
            <li>Provide customer support when requested</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Information Sharing and Disclosure</h2>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
            <p className="font-semibold text-blue-800">
              We do not sell, trade, or share your personal information with third parties.
            </p>
          </div>
          
          <h3 className="text-xl font-medium mb-3">Service Providers</h3>
          <p>We use the following trusted service providers to operate our App:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Firebase (Google)</strong> - for user authentication and data storage</li>
            <li><strong>Yahoo Finance API</strong> - for stock market data (no personal data shared)</li>
            <li><strong>OpenAI</strong> - for AI-powered analysis (no personal data shared)</li>
          </ul>
          <p>These services are bound by their own privacy policies and security measures.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <p>We implement appropriate security measures to protect your information:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Passwords are encrypted using industry-standard methods</li>
            <li>Data is transmitted using secure HTTPS connections</li>
            <li>Firebase provides enterprise-grade security and compliance</li>
            <li>Regular security updates and monitoring</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
          <p>
            We retain your account information as long as your account is active. When you delete your account, we will delete your personal information within 30 days, except where we are required to retain certain information for legal or security purposes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access your personal information</li>
            <li>Update or correct your information</li>
            <li>Delete your account and associated data</li>
            <li>Export your data in a readable format</li>
          </ul>
          <p>
            To exercise these rights, please contact us at privacy@jdxsoftware.com or use the delete account feature in the app settings.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Children&apos;s Privacy</h2>
          <p>
            AlphaWick is an educational app suitable for users of all ages. We collect the same minimal information (email and password) from all users regardless of age. Parents and guardians are encouraged to supervise their children&apos;s use of the app and help them understand stock market concepts and financial literacy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Educational Purpose Disclaimer</h2>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p className="font-semibold text-yellow-800 mb-2">Important Notice:</p>
            <p className="text-yellow-700">
              AlphaWick is designed for educational and informational purposes only. The app does not provide financial advice, investment recommendations, or facilitate actual trading. All analysis and insights are for learning purposes to help users understand stock market concepts and technical analysis.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy in the App and updating the &quot;Last Updated&quot; date. Your continued use of the App after such changes constitutes your acceptance of the new Privacy Policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our data practices, please contact us:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg mt-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-gray-800 mb-2">General Inquiries:</p>
                <p>Email: privacy@jdxsoftware.com</p>
                <p>Website: <a href="https://jdxsoftware.com" className="text-blue-600 hover:text-blue-800">https://jdxsoftware.com</a></p>
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-2">AlphaWick Support:</p>
                <p>Email: support@jdxsoftware.com</p>
                <p>App Website: <a href="https://jdxsoftware.com/software" className="text-blue-600 hover:text-blue-800">https://jdxsoftware.com/software</a></p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="font-semibold text-gray-800">JDX Software LLC</p>
              <p className="text-gray-600">Developer of AlphaWick</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}