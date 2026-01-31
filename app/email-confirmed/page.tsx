import Link from "next/link"
import { CheckCircle, Linkedin } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Email Confirmed - Bullseye",
  description: "Your email has been successfully verified. You can now use Bullseye.",
}

export default function EmailConfirmedPage() {
  return (
    <div className="py-20 lg:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle className="w-10 h-10 text-white" />
        </div>

        <h1 className="text-4xl lg:text-5xl font-bold mb-4">Email Confirmed!</h1>
        
        <p className="text-xl text-gray-600 mb-12">
          Your account has been successfully verified.<br />
          You're all set to start using Bullseye.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
            <span className="text-gray-700">Open the Bullseye extension</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
            <span className="text-gray-700">Log in with your credentials</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
            <span className="text-gray-700">Start finding mobiles!</span>
          </div>
        </div>

        <Link
          href="https://www.linkedin.com"
          target="_blank"
          className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-all duration-200 hover:scale-105 shadow-lg"
        >
          <Linkedin className="w-5 h-5" />
          Go to LinkedIn
        </Link>
        
        <p className="mt-6 text-gray-500 italic">
          You can now close this window and open the extension.
        </p>
      </div>
    </div>
  )
}
