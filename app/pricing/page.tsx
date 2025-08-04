"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { PricingCard } from "@/components/pricing-card"

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true)

  const features = [
    { name: "LinkedIn Integration", basic: true, pro: true, premium: true },
    { name: "Mobile Number Reveal", basic: true, pro: true, premium: true },
    { name: "CSV Export", basic: true, pro: true, premium: true },
    { name: "Email Support", basic: true, pro: true, premium: true },
    { name: "Priority Support", basic: false, pro: true, premium: true },
    { name: "CRM Integrations", basic: false, pro: true, premium: true },
    { name: "Team Management", basic: false, pro: false, premium: true },
    { name: "Advanced Analytics", basic: false, pro: false, premium: true },
  ]

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Transparent, flexible pricing</h1>
          <p className="text-xl text-gray-600 mb-8">Choose the plan that fits your outbound strategy</p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-12">
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

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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

        {/* Feature Comparison Table */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden mb-12">
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <h3 className="text-xl font-semibold">Feature Comparison</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-6">Features</th>
                  <th className="text-center py-4 px-6">Basic</th>
                  <th className="text-center py-4 px-6">Pro</th>
                  <th className="text-center py-4 px-6">Premium</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-4 px-6">{feature.name}</td>
                    <td className="text-center py-4 px-6">
                      {feature.basic ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <span className="text-gray-300">—</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-6">
                      {feature.pro ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <span className="text-gray-300">—</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-6">
                      {feature.premium ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <span className="text-gray-300">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-600 mb-8">Add-on: Top up 50 credits anytime for $37 AUD</p>
          <div className="flex flex-col items-center space-y-4">
            <button className="btn-primary text-lg">Download Extension</button>
          </div>
        </div>
      </div>
    </div>
  )
}
