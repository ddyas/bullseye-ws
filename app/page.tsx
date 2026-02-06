"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Phone, Search, Download, RefreshCw, X, ChevronLeft, ChevronRight, ShieldCheck, CreditCard, Gift, BadgeCheck, Rocket } from "lucide-react"
import { PricingCard } from "@/components/pricing-card"
import Image from "next/image"

const CheckIcon = () => (
  <svg 
    width="22" 
    height="22" 
    viewBox="0 0 22 22" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5 flex-shrink-0 mt-0.5"
    style={{ filter: 'drop-shadow(0 1px 2px rgba(34, 197, 94, 0.3))' }}
  >
    <circle cx="11" cy="11" r="11" fill="#22c55e" />
    <path 
      d="M6.5 11.5L9.5 14.5L15.5 8" 
      stroke="white" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
)

const screenshots = [
  { src: "/images/bullseye-dashboard-new.png", alt: "Dashboard & Credits" },
  { src: "/images/bullseye-linkedin-profile.png", alt: "LinkedIn Profile Integration" },
  { src: "/images/bullseye-contacts-export.png", alt: "Export & Manage Contacts" },
]

export default function HomePage() {
  const [isAnnual, setIsAnnual] = useState(true)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentImage(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImage((prev) => (prev + 1) % screenshots.length)
  }

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImage((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowRight") setCurrentImage((prev) => (prev + 1) % screenshots.length)
      if (e.key === "ArrowLeft") setCurrentImage((prev) => (prev - 1 + screenshots.length) % screenshots.length)
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [lightboxOpen])

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
      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center cursor-pointer"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={closeLightbox}
          >
            <X className="w-8 h-8" />
          </button>
          
          {/* Previous arrow */}
          <button 
            className="absolute left-4 text-white hover:text-gray-300 transition-colors p-2 hover:bg-white/10 rounded-full"
            onClick={prevImage}
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          
          {/* Image */}
          <div className="max-w-[90vw] max-h-[80vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={screenshots[currentImage].src}
              alt={screenshots[currentImage].alt}
              className="max-w-full max-h-[70vh] object-contain rounded-lg"
            />
          </div>
          
          {/* Next arrow */}
          <button 
            className="absolute right-4 text-white hover:text-gray-300 transition-colors p-2 hover:bg-white/10 rounded-full"
            onClick={nextImage}
          >
            <ChevronRight className="w-10 h-10" />
          </button>
          
          {/* Title and Dots indicator */}
          <div className="absolute bottom-6 flex flex-col items-center gap-3">
            <p className="text-white text-lg font-medium">{screenshots[currentImage].alt}</p>
            <div className="flex gap-2">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentImage ? "bg-white" : "bg-white/40 hover:bg-white/60"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation()
                    setCurrentImage(index)
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-white/85" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
              Connect directly with<br />
              <span className="text-gray-900">decision-makers.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-900 mb-8 max-w-4xl mx-auto font-semibold tracking-tight">
              Stop waiting. <span className="text-gray-500">Start calling.</span>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto">
              <div className="flex items-start space-x-3 p-4">
                <CheckIcon />
                <span className="text-sm font-medium text-gray-800 leading-relaxed">
                  Access to 3M+ verified mobiles
                </span>
              </div>
              <div className="flex items-start space-x-3 p-4">
                <CheckIcon />
                <span className="text-sm font-medium text-gray-800 leading-relaxed">
                  Bypass InMail and Catch-all email firewalls
                </span>
              </div>
              <div className="flex items-start space-x-3 p-4">
                <CheckIcon />
                <span className="text-sm font-medium text-gray-800 leading-relaxed">
                  Share key contacts with your team
                </span>
              </div>
              <div className="flex items-start space-x-3 p-4">
                <CheckIcon />
                <span className="text-sm font-medium text-gray-800 leading-relaxed">
                  Built for Sales Managers, BDMs and Growth
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-5">
              <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 uppercase tracking-wide">
                  <ShieldCheck className="w-4 h-4 text-gray-500" />
                  Obligation free
                </span>
                <span className="text-gray-300" aria-hidden="true">|</span>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 uppercase tracking-wide">
                  <CreditCard className="w-4 h-4 text-gray-500" />
                  No credit card required
                </span>
                <span className="text-gray-300" aria-hidden="true">|</span>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 uppercase tracking-wide">
                  <Gift className="w-4 h-4 text-gray-500" />
                  Free credits on sign up
                </span>
              </div>
              <Link
                href="https://chromewebstore.google.com/detail/jeckighgbnipkjmcmmdcdglmljekjnno?utm_source=item-share-cb"
                target="_blank"
                className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-all duration-200 hover:scale-105 shadow-lg uppercase tracking-wider"
              >
                <Rocket className="w-5 h-5" />
                START FREE TRIAL
              </Link>
              <p className="text-sm text-gray-500 font-medium tracking-wide">The most time efficient way to prospect Australian B2B.</p>
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
              <h3 className="text-xl font-semibold mb-2">Access verified data</h3>
              <p className="text-gray-600">Access verified mobile + position data instantly</p>
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

          <div className="fade-in max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-2xl border border-gray-200 overflow-hidden bg-gray-50">
              <div className="flex items-center gap-2.5 px-5 py-4 border-b md:border-b-0 md:border-r border-gray-200">
                <ShieldCheck className="w-4 h-4 text-gray-400 shrink-0" />
                <p className="text-sm font-semibold text-gray-900">Built for Australian sales teams</p>
              </div>
              <div className="flex items-center gap-2.5 px-5 py-4 border-b md:border-b-0 md:border-r border-gray-200">
                <Phone className="w-4 h-4 text-gray-400 shrink-0" />
                <p className="text-sm font-semibold text-gray-900">3M+ verified mobile numbers</p>
              </div>
              <div className="flex items-center gap-2.5 px-5 py-4">
                <BadgeCheck className="w-4 h-4 text-gray-400 shrink-0" />
                <p className="text-sm font-semibold text-gray-900">Trusted by sales teams Australia-wide</p>
              </div>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="fade-in text-center">
              <button 
                onClick={() => openLightbox(0)}
                className="bg-gray-100 rounded-2xl p-4 mx-auto mb-4 hover:shadow-lg transition-all duration-200 inline-block cursor-pointer hover:scale-105"
              >
                <img
                  src="/images/bullseye-dashboard-new.png"
                  alt="Dashboard & Credits"
                  className="max-w-[280px] h-auto rounded-lg"
                />
              </button>
              <h3 className="text-xl font-semibold mb-2 flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Dashboard & Credits
              </h3>
              <p className="text-gray-600">Track your usage and manage credits from the dashboard</p>
            </div>

            <div className="fade-in text-center">
              <button 
                onClick={() => openLightbox(1)}
                className="bg-gray-100 rounded-2xl p-4 mx-auto mb-4 hover:shadow-lg transition-all duration-200 inline-block cursor-pointer hover:scale-105"
              >
                <img
                  src="/images/bullseye-linkedin-profile.png"
                  alt="Bullseye LinkedIn Integration"
                  className="max-w-[280px] h-auto rounded-lg"
                />
              </button>
              <h3 className="text-xl font-semibold mb-2 flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                LinkedIn Profile Integration
              </h3>
              <p className="text-gray-600">Reveals mobile numbers directly on LinkedIn profiles</p>
            </div>

            <div className="fade-in text-center">
              <button 
                onClick={() => openLightbox(2)}
                className="bg-gray-100 rounded-2xl p-4 mx-auto mb-4 hover:shadow-lg transition-all duration-200 inline-block cursor-pointer hover:scale-105"
              >
                <img
                  src="/images/bullseye-contacts-export.png"
                  alt="Export Contacts"
                  className="max-w-[280px] h-auto rounded-lg"
                />
              </button>
              <h3 className="text-xl font-semibold mb-2 flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
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
            <div className="flex items-center justify-center mb-8">
              <span className={`mr-3 ${!isAnnual ? "font-semibold" : "text-gray-600"}`}>Monthly</span>
              <button
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                onClick={() => setIsAnnual(!isAnnual)}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-black transition-transform ${
                    isAnnual ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
              <span className={`ml-3 ${isAnnual ? "font-semibold" : "text-gray-600"}`}>Annual</span>
              {isAnnual && (
                <span className="ml-2 bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">Save 25%</span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <PricingCard
              title="Basic"
              monthlyPrice={63}
              annualPrice={49}
              credits={100}
              features={["100 credits per month", "LinkedIn integration", "CSV export", "Email support"]}
              isAnnual={isAnnual}
            />

            <PricingCard
              title="Pro"
              monthlyPrice={145}
              annualPrice={110}
              credits={250}
              features={["250 credits per month", "LinkedIn integration", "CSV export", "Priority support"]}
              isPopular={true}
              isAnnual={isAnnual}
            />

            <PricingCard
              title="Premium"
              monthlyPrice={265}
              annualPrice={195}
              credits={500}
              features={["500 credits per month", "LinkedIn integration", "CSV export", "Priority support"]}
              isAnnual={isAnnual}
            />
          </div>

          <div className="text-center fade-in">
            <p className="text-lg text-gray-600 mb-4">Add-on: Top up 50 credits anytime for $37 AUD</p>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mb-8">
              <span className="inline-flex items-center gap-1.5 text-sm text-gray-500">
                <ShieldCheck className="w-4 h-4" />
                Obligation free
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm text-gray-500">
                <CreditCard className="w-4 h-4" />
                No credit card required
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm text-gray-500">
                <Gift className="w-4 h-4" />
                Free credits on sign up
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm text-gray-500">
                <BadgeCheck className="w-4 h-4" />
                Try before you buy
              </span>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <Link href="https://chromewebstore.google.com/detail/jeckighgbnipkjmcmmdcdglmljekjnno?utm_source=item-share-cb" target="_blank" className="btn-primary text-lg inline-flex items-center gap-2">
                <Image src="/images/chrome-extension-logo.png" alt="Chrome" width={20} height={20} className="w-5 h-5" />
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
          <h2 className="text-3xl lg:text-5xl font-bold mb-12 flex flex-wrap items-center justify-center gap-x-3">
            <span>The perfect companion for</span>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-qvyIeaQSuW8t8OpDGGfnfZbzwc3Pcs.webp"
              alt="LinkedIn"
              width={200}
              height={50}
              className="inline-block h-9 lg:h-12 w-auto"
            />
            <span>prospecting</span>
          </h2>
          <div className="flex flex-col items-center space-y-4">
            <Link
              href="https://chromewebstore.google.com/detail/jeckighgbnipkjmcmmdcdglmljekjnno?utm_source=item-share-cb"
              target="_blank"
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
