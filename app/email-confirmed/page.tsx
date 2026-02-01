import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Email Confirmed - Bullseye",
  description: "Your email has been successfully verified. You can now use Bullseye.",
}

export default function EmailConfirmedPage() {
  return (
    <div className="py-8 lg:py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-10 text-center shadow-sm">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-5">
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <h1 className="text-2xl lg:text-3xl font-bold mb-2">Email Confirmed!</h1>
          
          <p className="text-gray-600 mb-6">
            Your account has been verified. You're ready to use Bullseye.
          </p>

          <div className="bg-gray-50 rounded-xl p-5 lg:p-6 mb-6">
            <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-4">What to do next</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">
                  1
                </div>
                <p className="text-gray-700 text-sm leading-snug">Click the <span className="inline-flex items-center align-middle mx-0.5"><svg viewBox="0 0 32 32" className="w-4 h-4 inline"><circle cx="16" cy="16" r="14" fill="black"/><circle cx="16" cy="16" r="10" fill="none" stroke="white" strokeWidth="2"/><circle cx="16" cy="16" r="6" fill="none" stroke="white" strokeWidth="2"/><circle cx="16" cy="16" r="2.5" fill="white"/></svg></span> icon Bullseye Extension in Chrome toolbar</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">
                  2
                </div>
                <p className="text-gray-700 text-sm leading-snug">Log in with your email & password</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">
                  3
                </div>
                <p className="text-gray-700 text-sm leading-snug">Visit LinkedIn profiles to reveal mobiles</p>
              </div>
            </div>
          </div>

          <Link
            href="https://www.linkedin.com"
            target="_blank"
            className="inline-flex items-center gap-3 bg-[#0A66C2] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#004182] transition-all duration-200 hover:scale-105 shadow-lg"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            Go to LinkedIn
          </Link>
          
          <p className="mt-5 text-gray-400 text-sm">
            You can close this window and open the extension from Chrome toolbar.
          </p>
        </div>
      </div>
    </div>
  )
}
