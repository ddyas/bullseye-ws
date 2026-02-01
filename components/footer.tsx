"use client"

import Link from "next/link"
import { ChromeBadge } from "./chrome-badge"
import { BullseyeLogo } from "./bullseye-logo"

const ShieldIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 1L2 3.5V7.5C2 11.1 4.5 14.4 8 15C11.5 14.4 14 11.1 14 7.5V3.5L8 1Z" fill="#3b82f6" stroke="#3b82f6" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M5.5 8L7 9.5L10.5 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const CheckBadgeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="14" height="14" rx="3" fill="#22c55e"/>
    <path d="M4.5 8L6.5 10L11.5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const LockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="7" width="12" height="8" rx="2" fill="#eab308"/>
    <path d="M4.5 7V5C4.5 3.067 6.067 1.5 8 1.5C9.933 1.5 11.5 3.067 11.5 5V7" stroke="#eab308" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="8" cy="11" r="1.5" fill="#854d0e"/>
  </svg>
)

const AUFlagIcon = () => (
  <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="20" height="14" fill="#00008B"/>
    <rect x="0" y="0" width="10" height="7" fill="#00008B"/>
    <path d="M0 0L10 7M10 0L0 7" stroke="white" strokeWidth="1.5"/>
    <path d="M0 0L10 7M10 0L0 7" stroke="#C8102E" strokeWidth="0.8"/>
    <path d="M5 0V7M0 3.5H10" stroke="white" strokeWidth="2"/>
    <path d="M5 0V7M0 3.5H10" stroke="#C8102E" strokeWidth="1"/>
    <circle cx="5" cy="11" r="1.5" fill="white"/>
    <circle cx="15" cy="3" r="0.8" fill="white"/>
    <circle cx="17" cy="5.5" r="0.8" fill="white"/>
    <circle cx="15" cy="8" r="0.8" fill="white"/>
    <circle cx="13" cy="6" r="0.8" fill="white"/>
    <circle cx="15.5" cy="5.5" r="0.5" fill="white"/>
  </svg>
)

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
                href="https://chromewebstore.google.com/detail/jeckighgbnipkjmcmmdcdglmljekjnno?utm_source=item-share-cb"
                target="_blank"
                className="block text-gray-300 hover:text-white transition-colors"
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
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <ShieldIcon />
                Licensed Australian dataset
              </span>
              <span className="flex items-center gap-2">
                <CheckBadgeIcon />
                100% DNCR compliant
              </span>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-gray-400 md:justify-end">
              <span className="flex items-center gap-2">
                <LockIcon />
                Secure Stripe billing
              </span>
              <span className="flex items-center gap-2">
                <AUFlagIcon />
                AU-based encrypted servers
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
