import { Check } from "lucide-react"
import Link from "next/link"

interface PricingCardProps {
  title: string
  monthlyPrice: number
  annualPrice: number
  credits: number
  features: string[]
  isPopular?: boolean
  isAnnual: boolean
}

export function PricingCard({
  title,
  monthlyPrice,
  annualPrice,
  credits,
  features,
  isPopular = false,
  isAnnual,
}: PricingCardProps) {
  const price = isAnnual ? annualPrice : monthlyPrice

  return (
    <div
      className={`relative p-8 rounded-2xl border-2 transition-all duration-200 hover:shadow-lg ${
        isPopular ? "border-black bg-black text-white shadow-xl" : "border-gray-200 bg-white hover:border-gray-300"
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-green-400 to-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
            ⭐ Most Popular
          </span>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
          {isPopular && <div className="w-2 h-2 bg-green-400 rounded-full"></div>}
          {title}
        </h3>
        <div className="mb-4">
          <span className="text-4xl font-bold">${price}</span>
          <span className={`text-lg ${isPopular ? "text-gray-300" : "text-gray-600"}`}>/month</span>
        </div>
        <p className={`${isPopular ? "text-gray-300" : "text-gray-600"}`}>{credits} credits per month</p>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className={`w-5 h-5 mr-3 ${isPopular ? "text-white" : "text-green-500"}`} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href="https://chromewebstore.google.com/detail/jeckighgbnipkjmcmmdcdglmljekjnno?utm_source=item-share-cb"
        target="_blank"
        className={`block w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors ${
          isPopular ? "bg-white text-black hover:bg-gray-100" : "bg-black text-white hover:bg-gray-800"
        }`}
      >
        Start Free Trial
      </Link>
    </div>
  )
}
