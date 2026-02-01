import Image from "next/image"

export function ChromeBadge({ size = "default" }: { size?: "default" | "small" }) {
  const sizeClasses = size === "small" ? "h-10 w-auto" : "h-14 w-auto"

  return (
    <a
      href="https://chromewebstore.google.com/detail/jeckighgbnipkjmcmmdcdglmljekjnno?utm_source=item-share-cb"
      className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-all duration-200 hover:scale-105 shadow-lg border border-gray-700"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image src="/images/chrome-extension-logo.png" alt="Chrome" width={24} height={24} className="w-6 h-6" />
      <div className="flex flex-col items-start">
        <span className="text-xs text-gray-300">Available on</span>
        <span className="text-sm font-semibold">Chrome Web Store</span>
      </div>
    </a>
  )
}
