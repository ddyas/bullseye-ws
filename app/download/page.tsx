import Image from "next/image"

export default function DownloadPage() {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6">Download Bullseye for Chrome</h1>
        <p className="text-xl text-gray-600 mb-12">Start revealing mobile numbers in seconds.</p>

        <div className="mb-16">
          <div className="flex flex-col items-center space-y-6">
            <button className="inline-flex items-center gap-3 bg-black text-white px-12 py-6 rounded-lg font-semibold text-xl hover:bg-gray-800 transition-all duration-200 hover:scale-105 shadow-lg">
              <Image src="/images/chrome-extension-logo.png" alt="Chrome" width={24} height={24} className="w-6 h-6" />
              Install from Chrome Web Store
            </button>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Installation Steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="font-semibold mb-2">Click the Button</h3>
              <p className="text-gray-600">Click the install button above to go to Chrome Web Store</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="font-semibold mb-2">Pin Bullseye</h3>
              <p className="text-gray-600">Pin Bullseye to Chrome for easy access</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="font-semibold mb-2">Visit LinkedIn</h3>
              <p className="text-gray-600">Visit any LinkedIn profile — sidebar auto-loads</p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gray-100 rounded-2xl p-8 max-w-md mx-auto">
          <img
            src="/images/bullseye-login.png"
            alt="Bullseye Extension Interface"
            className="max-w-full h-auto mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  )
}
