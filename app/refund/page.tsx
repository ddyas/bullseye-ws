export default function RefundPage() {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6">Refund Policy</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">Our refund policy is designed to be fair and transparent.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Refund Eligibility</h2>
          <p className="text-gray-600 mb-4">
            Refunds may be requested within 30 days of purchase for unused credits or subscription cancellations.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Refund Process</h2>
          <p className="text-gray-600 mb-4">
            To request a refund, please contact our support team with your account details and reason for the refund
            request.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Processing Time</h2>
          <p className="text-gray-600 mb-4">
            Approved refunds will be processed within 5-10 business days and credited back to your original payment
            method.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Contact Support</h2>
          <p className="text-gray-600">
            For refund requests or questions, please email us at{" "}
            <a href="mailto:support@bullseyeb2b.com.au" className="text-black font-semibold hover:underline">
              support@bullseyeb2b.com.au
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
