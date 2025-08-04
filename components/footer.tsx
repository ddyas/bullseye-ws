"use client"

import Link from "next/link"
import { ChromeBadge } from "./chrome-badge"
import { BullseyeLogo } from "./bullseye-logo"

export function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <BullseyeLogo className="w-8 h-8" variant="light" />
              <h3 className="text-2xl font-bold">Bullseye</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Reveal verified mobile numbers behind LinkedIn profiles. The fastest way to connect with Australia's top
              B2B prospects.
            </p>
            <ChromeBadge />
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link
                href="/download"
                className="block text-gray-300 hover:text-white transition-colors"
                onClick={() => window.scrollTo(0, 0)}
              >
                Download
              </Link>
              <Link
                href="/pricing"
                className="block text-gray-300 hover:text-white transition-colors"
                onClick={() => window.scrollTo(0, 0)}
              >
                Pricing
              </Link>
              <Link
                href="/faq"
                className="block text-gray-300 hover:text-white transition-colors"
                onClick={() => window.scrollTo(0, 0)}
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="block text-gray-300 hover:text-white transition-colors"
                onClick={() => window.scrollTo(0, 0)}
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <div className="space-y-2">
              <Link
                href="/privacy"
                className="block text-gray-300 hover:text-white transition-colors"
                onClick={() => window.scrollTo(0, 0)}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="block text-gray-300 hover:text-white transition-colors"
                onClick={() => window.scrollTo(0, 0)}
              >
                Terms of Service
              </Link>
              <Link
                href="/disclaimer"
                className="block text-gray-300 hover:text-white transition-colors"
                onClick={() => window.scrollTo(0, 0)}
              >
                Disclaimer
              </Link>
              <Link
                href="/refund"
                className="block text-gray-300 hover:text-white transition-colors"
                onClick={() => window.scrollTo(0, 0)}
              >
                Refund Policy
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <a href="mailto:support@bullseyeb2b.com.au" className="text-black font-semibold hover:underline">
              support@bullseyeb2b.com.au
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <span>🛡️ Licensed Australian dataset</span>
              <span>✅ 100% DNCR compliant</span>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400 md:justify-end">
              <span>🔒 Secure Stripe billing</span>
              <span>🇦🇺 AU-based encrypted servers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
