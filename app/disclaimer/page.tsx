export default function DisclaimerPage() {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6">Disclaimer</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">Important information about the use of Bullseye services.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Data Accuracy</h2>
          <p className="text-gray-600 mb-4">
            While we strive to provide accurate and up-to-date information, we cannot guarantee the accuracy of all data
            provided through our service.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Compliance</h2>
          <p className="text-gray-600 mb-4">
            Users are responsible for ensuring their use of Bullseye complies with all applicable laws and regulations,
            including privacy and telecommunications laws.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Limitation of Liability</h2>
          <p className="text-gray-600 mb-4">
            Bullseye shall not be liable for any indirect, incidental, special, consequential, or punitive damages.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Questions</h2>
          <p className="text-gray-600">
            For any questions regarding this disclaimer, contact us at{" "}
            <a href="mailto:support@bullseyeb2b.com.au" className="text-black font-semibold hover:underline">
              support@bullseyeb2b.com.au
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
