"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "What is Bullseye?",
    answer:
      "Bullseye is a Chrome extension that reveals verified mobile phone numbers behind LinkedIn profiles, helping Australian B2B sales professionals connect directly with decision-makers without waiting for connection requests or InMail responses.",
  },
  {
    question: "Where does the data come from?",
    answer:
      "Our data comes from licensed Australian datasets that are regularly updated and verified. We maintain partnerships with legitimate data providers and ensure all information is sourced legally and ethically.",
  },
  {
    question: "What fields are revealed?",
    answer:
      "Bullseye reveals mobile phone numbers, email addresses, company information, job titles, and other relevant contact details associated with LinkedIn profiles, depending on data availability.",
  },
  {
    question: "Can I use Bullseye with my team?",
    answer:
      "Yes, our Pro and Premium plans support team management features. You can manage multiple users, track usage, and maintain team compliance from a central dashboard.",
  },
  {
    question: "What happens when I run out of credits?",
    answer:
      "When you run out of credits, you can either wait for your monthly renewal or purchase additional credits. We offer top-up packages of 50 credits for $37 AUD that can be purchased anytime.",
  },
  {
    question: "How do I upgrade or cancel my plan?",
    answer:
      "You can upgrade or cancel your plan anytime through your account dashboard. Cancellations take effect at the end of your current billing period, and upgrades are prorated.",
  },
  {
    question: "How often is the data updated?",
    answer:
      "Our database is updated regularly to ensure accuracy. We perform weekly updates on our core dataset and have real-time verification processes to maintain data quality.",
  },
]

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">Everything you need to know about Bullseye</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden">
              <button
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => toggleItem(index)}
              >
                <h3 className="text-xl font-semibold pr-4">{faq.question}</h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-6 h-6 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 flex-shrink-0" />
                )}
              </button>
              {openItems.includes(index) && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
