"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MessageSquare, AlertCircle, Loader2 } from "lucide-react"

const SuccessIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#22c55e"/>
    <path d="M8 12.5L10.5 15L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Let's Talk</h1>
          <p className="text-xl text-gray-600">Have questions? We'd love to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  required
                />
              </div>

              <button 
                type="submit" 
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>

              {status === 'success' && (
                <div className="flex items-center gap-3 text-green-700 bg-green-50 border border-green-200 p-4 rounded-xl">
                  <SuccessIcon />
                  <div>
                    <p className="font-semibold">Message sent successfully!</p>
                    <p className="text-sm text-green-600">We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-3 text-red-700 bg-red-50 border border-red-200 p-4 rounded-xl">
                  <AlertCircle className="w-6 h-6 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Failed to send message</p>
                    <p className="text-sm text-red-600">{errorMessage}</p>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="lg:pl-8">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                  <p className="text-gray-600 mb-2">For general inquiries and support</p>
                  <a href="mailto:support@bullseyeb2b.com.au" className="text-black font-semibold hover:underline">
                    support@bullseyeb2b.com.au
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Partnership Opportunities</h3>
                  <p className="text-gray-600">
                    Want to partner with Bullseye? We'd love to explore opportunities to work together.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
              <h3 className="text-lg font-semibold mb-4">Quick Response Times</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• General inquiries: Within 24 hours</li>
                <li>• Technical support: Within 12 hours</li>
                <li>• Partnership inquiries: Within 48 hours</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
