export default function PrivacyPage() {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6">Privacy Policy – Bullseye B2B</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: 01/01/2026</p>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Bullseye B2B is a Chrome extension designed to assist users with B2B prospect research while browsing
            LinkedIn. This policy explains how data is accessed, used, and stored.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Information Accessed</h2>
          <p className="text-gray-600 mb-4">
            When users browse LinkedIn pages, Bullseye B2B may access publicly visible profile and company information
            for the purpose of displaying contextual insights within the extension interface.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Data Sources</h2>
          <p className="text-gray-600 mb-4">
            Bullseye B2B utilises a proprietary dataset owned and maintained by Bullseye B2B to provide business-related
            insights. Data is used solely to support prospect research and qualification.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Data Storage</h2>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
            <li>User account information and paid subscription data may be stored securely on Bullseye B2B systems.</li>
            <li>
              Any notes, preferences, or settings created by the user may be stored locally in the browser or securely
              on Bullseye B2B servers, depending on the feature.
            </li>
            <li>Bullseye B2B does not sell personal data to third parties.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Use of Information</h2>
          <p className="text-gray-600 mb-2">Information is used only to:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
            <li>Provide and improve the Bullseye B2B service</li>
            <li>Support prospect research workflows</li>
            <li>Manage subscriptions and user access</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Third Parties</h2>
          <p className="text-gray-600 mb-4">
            Bullseye B2B does not share personal data with third parties for marketing purposes.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">User Control</h2>
          <p className="text-gray-600 mb-4">
            Users remain in full control of how they use Bullseye B2B. The extension does not automate interactions,
            messages, or actions on LinkedIn.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Data Security</h2>
          <p className="text-gray-600 mb-4">
            Reasonable technical and organisational safeguards are in place to protect stored information.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Data Removal</h2>
          <p className="text-gray-600 mb-4">
            Users may request deletion of their account or stored data by contacting:{" "}
            <a href="mailto:support@bullseyeb2b.com.au" className="text-black font-semibold hover:underline">
              support@bullseyeb2b.com.au
            </a>
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Contact</h2>
          <p className="text-gray-600">
            If you have questions about this policy, contact:{" "}
            <a href="mailto:support@bullseyeb2b.com.au" className="text-black font-semibold hover:underline">
              support@bullseyeb2b.com.au
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
