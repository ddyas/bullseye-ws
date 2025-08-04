export default function PrivacyPage() {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
          <p className="text-gray-600 mb-4">
            We collect information you provide directly to us, such as when you create an account, use our services, or
            contact us for support.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
          <p className="text-gray-600 mb-4">
            We use the information we collect to provide, maintain, and improve our services, process transactions, and
            communicate with you.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Data Security</h2>
          <p className="text-gray-600 mb-4">
            We implement appropriate security measures to protect your personal information against unauthorized access,
            alteration, disclosure, or destruction.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions about this Privacy Policy, please contact us at{" "}
            <a href="mailto:support@bullseyeb2b.com.au" className="text-black font-semibold hover:underline">
              support@bullseyeb2b.com.au
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
