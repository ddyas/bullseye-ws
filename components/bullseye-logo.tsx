export function BullseyeLogo({
  className = "w-8 h-8",
  variant = "dark",
}: { className?: string; variant?: "dark" | "light" }) {
  return (
    <div className={`${className} flex items-center justify-center`}>
      <svg viewBox="0 0 32 32" className="w-full h-full">
        {variant === "dark" ? (
          <>
            <circle cx="16" cy="16" r="15" fill="black" stroke="none" />
            <circle cx="16" cy="16" r="11" fill="none" stroke="white" strokeWidth="2" />
            <circle cx="16" cy="16" r="7" fill="none" stroke="white" strokeWidth="2" />
            <circle cx="16" cy="16" r="3" fill="white" />
          </>
        ) : (
          <>
            <circle cx="16" cy="16" r="15" fill="white" stroke="black" strokeWidth="1" />
            <circle cx="16" cy="16" r="11" fill="none" stroke="black" strokeWidth="2" />
            <circle cx="16" cy="16" r="7" fill="none" stroke="black" strokeWidth="2" />
            <circle cx="16" cy="16" r="3" fill="black" />
          </>
        )}
      </svg>
    </div>
  )
}
