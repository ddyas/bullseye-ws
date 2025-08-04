export default function TermsPage() {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6">Terms of Service</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">These terms govern your use of Bullseye and our services.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Acceptance of Terms</h2>
          <p className="text-gray-600 mb-4">
            By accessing and using Bullseye, you accept and agree to be bound by the terms and provision of this
            agreement.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Use License</h2>
          <p className="text-gray-600 mb-4">
            Permission is granted to temporarily use Bullseye for personal, non-commercial transitory viewing only.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Disclaimer</h2>
          <p className="text-gray-600 mb-4">
            The materials on Bullseye are provided on an 'as is' basis. Bullseye makes no warranties, expressed or
            implied.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Contact Information</h2>
          <p className="text-gray-600">
            Questions about the Terms of Service should be sent to us at{" "}
            <a href="mailto:support@bullseyeb2b.com.au" className="text-black font-semibold hover:underline">
              support@bullseyeb2b.com.au
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
