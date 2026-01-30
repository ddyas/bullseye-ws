"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { BullseyeLogo } from "./bullseye-logo"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <BullseyeLogo />
            <span className="text-2xl font-bold">Bullseye</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/#why-bullseye"
              className="text-gray-700 hover:text-black transition-colors"
              onClick={() => window.scrollTo(0, 0)}
            >
              Why Bullseye
            </Link>
            <Link
              href="/pricing"
              className="text-gray-700 hover:text-black transition-colors"
              onClick={() => window.scrollTo(0, 0)}
            >
              Pricing
            </Link>
            <Link
              href="/faq"
              className="text-gray-700 hover:text-black transition-colors"
              onClick={() => window.scrollTo(0, 0)}
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-black transition-colors"
              onClick={() => window.scrollTo(0, 0)}
            >
              Contact
            </Link>
            <Link
              href="https://chromewebstore.google.com/detail/jeckighgbnipkjmcmmdcdglmljekjnno?utm_source=item-share-cb"
              target="_blank"
              className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-800 transition-all duration-200 hover:scale-105 shadow-md"
            >
              <Image src="/images/chrome-extension-logo.png" alt="Chrome" width={16} height={16} className="w-4 h-4" />
              Download
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                href="/#why-bullseye"
                className="text-gray-700 hover:text-black transition-colors"
                onClick={() => window.scrollTo(0, 0)}
              >
                Why Bullseye
              </Link>
              <Link
                href="/pricing"
                className="text-gray-700 hover:text-black transition-colors"
                onClick={() => window.scrollTo(0, 0)}
              >
                Pricing
              </Link>
              <Link
                href="/faq"
                className="text-gray-700 hover:text-black transition-colors"
                onClick={() => window.scrollTo(0, 0)}
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-black transition-colors"
                onClick={() => window.scrollTo(0, 0)}
              >
                Contact
              </Link>
              <Link
                href="https://chromewebstore.google.com/detail/jeckighgbnipkjmcmmdcdglmljekjnno?utm_source=item-share-cb"
                target="_blank"
                className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-800 transition-all duration-200 hover:scale-105 shadow-md"
              >
                <Image
                  src="/images/chrome-extension-logo.png"
                  alt="Chrome"
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
                Download
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
