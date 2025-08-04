"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Check, Phone, Search, Download, RefreshCw } from "lucide-react"
import { PricingCard } from "@/components/pricing-card"
import Image from "next/image"

export default function HomePage() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll(".fade-in")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Reach Decision-Makers
              <br />
              Without the Gatekeepers.
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Bullseye reveals verified mobile numbers behind LinkedIn profiles. Stop waiting for connection requests —
              start calling today.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
              <div className="flex items-center justify-center md:justify-start">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                <span>Access real Australian mobile numbers</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                <span>Skip InMail and filters</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                <span>Export contacts in one click</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                <span>Perfect for founders, agencies, SDRs</span>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <Link
                href="/download"
                className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-all duration-200 hover:scale-105 shadow-lg"
              >
                <Image
                  src="/images/chrome-extension-logo.png"
                  alt="Chrome"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                Download for Chrome
              </Link>
              <p className="text-gray-500 italic">The fastest way to connect with Australia's top B2B prospects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Bullseye Section */}
      <section id="why-bullseye" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Why Bullseye?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We built Bullseye for closers — the ones who don't wait around.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center fade-in">
              <div className="w-16 h-16 bg-gradient-to-br from-black to-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg hover:shadow-xl transition-shadow duration-200">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reveal Mobile Contacts</h3>
              <p className="text-gray-600">Access verified mobile numbers directly via LinkedIn profiles</p>
            </div>

            <div className="text-center fade-in">
              <div className="w-16 h-16 bg-gradient-to-br from-black to-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg hover:shadow-xl transition-shadow duration-200">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Verified Data</h3>
              <p className="text-gray-600">Access verified mobile + firmographic data instantly</p>
            </div>

            <div className="text-center fade-in">
              <div className="w-16 h-16 bg-gradient-to-br from-black to-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg hover:shadow-xl transition-shadow duration-200">
                <Download className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Build Lists Instantly</h3>
              <p className="text-gray-600">Build warm outbound lists in seconds, not hours</p>
            </div>

            <div className="text-center fade-in">
              <div className="w-16 h-16 bg-gradient-to-br from-black to-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg hover:shadow-xl transition-shadow duration-200">
                <RefreshCw className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Export to CRM</h3>
              <p className="text-gray-600">Export to CRM or manual flow (CSV) with one click</p>
            </div>
          </div>

          <div className="text-center fade-in">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 max-w-4xl mx-auto">
              <p className="text-lg font-semibold mb-2">
                Built for Australian sales teams. 3M+ verified mobile numbers. 100% DNCR compliant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Inside the Extension</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how Bullseye fits into your LinkedIn workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="fade-in">
              <div className="bg-gray-100 rounded-2xl p-4 h-80 w-80 mx-auto flex items-center justify-center mb-4 hover:shadow-lg transition-shadow duration-200">
                <img
                  src="/images/bullseye-dashboard-new.png"
                  alt="Dashboard & Credits"
                  className="max-w-full h-auto rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Dashboard & Credits
              </h3>
              <p className="text-gray-600">Track your usage and manage credits from the dashboard</p>
            </div>

            <div className="fade-in">
              <div className="bg-gray-100 rounded-2xl p-4 h-80 w-80 mx-auto flex items-center justify-center mb-4 hover:shadow-lg transition-shadow duration-200">
                <img
                  src="/images/bullseye-linkedin-profile.png"
                  alt="Bullseye LinkedIn Integration"
                  className="max-w-full h-auto rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                LinkedIn Profile Integration
              </h3>
              <p className="text-gray-600">Reveals mobile numbers directly on LinkedIn profiles</p>
            </div>

            <div className="fade-in">
              <div className="bg-gray-100 rounded-2xl p-4 h-80 w-80 mx-auto flex items-center justify-center mb-4 hover:shadow-lg transition-shadow duration-200">
                <img
                  src="/images/bullseye-contacts-export.png"
                  alt="Export Contacts"
                  className="max-w-full h-auto rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                Export & Manage Contacts
              </h3>
              <p className="text-gray-600">Export revealed contacts to CSV or manage your contact list</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Loved by Australia's top outbound teams</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 fade-in">
              <p className="text-lg mb-6 italic">
                "Bullseye has completely transformed our outbound process. We're connecting with decision-makers
                directly instead of waiting for LinkedIn responses."
              </p>
              <div className="flex items-center">
                <img
                  src="/images/testimonial-sarah-chen.png"
                  alt="Sarah Chen"
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <p className="font-semibold">Sarah Chen</p>
                  <p className="text-gray-600">Founder, TechStart Solutions</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 fade-in">
              <p className="text-lg mb-6 italic">
                "Our conversion rates have doubled since using Bullseye. Having direct mobile access is a game-changer
                for B2B sales."
              </p>
              <div className="flex items-center">
                <img
                  src="/images/testimonial-marcus-thompson.png"
                  alt="Marcus Thompson"
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <p className="font-semibold">Marcus Thompson</p>
                  <p className="text-gray-600">Sales Director, Growth Agency</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 fade-in">
              <p className="text-lg mb-6 italic">
                "The data quality is exceptional. Every number we've called has been accurate and up-to-date. Worth
                every penny."
              </p>
              <div className="flex items-center">
                <img
                  src="/images/testimonial-emma-rodriguez.png"
                  alt="Emma Rodriguez"
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <p className="font-semibold">Emma Rodriguez</p>
                  <p className="text-gray-600">Senior SDR, Enterprise Corp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Summary Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Transparent, flexible pricing</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <PricingCard
              title="Basic"
              monthlyPrice={63}
              annualPrice={49}
              credits={100}
              features={["100 credits per month", "LinkedIn integration", "CSV export", "Email support"]}
              isAnnual={true}
            />

            <PricingCard
              title="Pro"
              monthlyPrice={145}
              annualPrice={110}
              credits={250}
              features={["250 credits per month", "LinkedIn integration", "CSV export", "Priority support"]}
              isPopular={true}
              isAnnual={true}
            />

            <PricingCard
              title="Premium"
              monthlyPrice={265}
              annualPrice={195}
              credits={500}
              features={["500 credits per month", "LinkedIn integration", "CSV export", "Priority support"]}
              isAnnual={true}
            />
          </div>

          <div className="text-center fade-in">
            <p className="text-lg text-gray-600 mb-8">Add-on: Top up 50 credits anytime for $37 AUD</p>
            <div className="flex flex-col items-center space-y-4">
              <Link href="/download" className="btn-primary text-lg">
                Download Extension
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6 mb-12">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 fade-in">
              <h3 className="text-xl font-semibold mb-3">What is Bullseye?</h3>
              <p className="text-gray-600">
                Bullseye is a Chrome extension that reveals verified mobile phone numbers behind LinkedIn profiles,
                helping Australian B2B sales professionals connect directly with decision-makers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 fade-in">
              <h3 className="text-xl font-semibold mb-3">Is Bullseye legal and compliant in Australia?</h3>
              <p className="text-gray-600">
                Yes, Bullseye is 100% DNCR compliant and uses licensed Australian datasets. All data is sourced legally
                and stored securely in encrypted AU-based servers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 fade-in">
              <h3 className="text-xl font-semibold mb-3">How accurate is the data?</h3>
              <p className="text-gray-600">
                Our database contains 3M+ verified mobile numbers with regular updates to ensure accuracy. We maintain
                high data quality standards with verification processes.
              </p>
            </div>
          </div>

          <div className="text-center fade-in">
            <Link href="/faq" className="btn-secondary">
              View All FAQs
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold mb-12">Start calling better leads — today.</h2>
          <div className="flex flex-col items-center space-y-4">
            <Link
              href="/download"
              className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105 shadow-lg"
            >
              <Image src="/images/chrome-extension-logo.png" alt="Chrome" width={20} height={20} className="w-5 h-5" />
              Download Bullseye for Chrome
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
