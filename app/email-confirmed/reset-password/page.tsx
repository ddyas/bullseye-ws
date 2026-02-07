"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { createClient } from "@supabase/supabase-js"
import { Eye, EyeOff, Loader2, AlertCircle } from "lucide-react"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [initializing, setInitializing] = useState(true)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [tokenError, setTokenError] = useState(false)
  const [sessionReady, setSessionReady] = useState(false)

  useEffect(() => {
    // Listen for auth state changes - Supabase automatically handles the hash tokens
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'PASSWORD_RECOVERY') {
        // Session is ready for password reset
        setSessionReady(true)
        setInitializing(false)
        // Clean up URL hash
        window.history.replaceState(null, '', window.location.pathname)
      } else if (event === 'SIGNED_IN' && session) {
        // Also valid - user might have a session
        setSessionReady(true)
        setInitializing(false)
      }
    })

    // Check URL hash manually as fallback
    const hash = window.location.hash
    if (!hash.includes('access_token=') && !hash.includes('token=')) {
      // No tokens in URL, check if we already have a session
      supabase.auth.getSession().then(({ data: { session } }) => {
        if (!session) {
          setTokenError(true)
        } else {
          setSessionReady(true)
        }
        setInitializing(false)
      })
    } else {
      // Give Supabase time to process the hash
      setTimeout(() => {
        if (initializing) {
          // If still initializing after 3s, try manual approach
          setInitializing(false)
        }
      }, 3000)
    }

    return () => subscription.unsubscribe()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    // Validation
    if (password.length < 6) {
      setError("Password must be at least 6 characters")
      return
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    setLoading(true)

    try {
      // If session not ready via event, try manual session setup
      if (!sessionReady) {
        const hash = window.location.hash.substring(1)
        const params = new URLSearchParams(hash)
        const accessToken = params.get('access_token')
        const refreshToken = params.get('refresh_token')

        if (accessToken) {
          const { error: sessionError } = await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: refreshToken || accessToken // Use access_token as fallback
          })

          if (sessionError) {
            setError("Invalid or expired reset link. Please request a new password reset.")
            setLoading(false)
            return
          }
        }
      }

      // Update the password
      const { error: updateError } = await supabase.auth.updateUser({
        password: password
      })

      if (updateError) {
        setError(updateError.message)
        setLoading(false)
        return
      }

      // Success!
      setSuccess(true)
      
      // Clean up URL
      window.history.replaceState(null, '', window.location.pathname)
      
      // Sign out to force re-login with new password
      await supabase.auth.signOut()
      
    } catch (err) {
      setError("An unexpected error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  // Loading state while checking auth
  if (initializing) {
    return (
      <div className="py-8 lg:py-12">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-10 text-center shadow-sm">
            <Loader2 className="w-10 h-10 animate-spin text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">Verifying reset link...</p>
          </div>
        </div>
      </div>
    )
  }

  // Token error state
  if (tokenError) {
    return (
      <div className="py-8 lg:py-12">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-10 text-center shadow-sm">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-5">
              <AlertCircle className="w-8 h-8 text-red-500" />
            </div>
            <h1 className="text-2xl font-bold mb-2">Invalid Reset Link</h1>
            <p className="text-gray-600 mb-6">
              This password reset link is invalid or has expired. Please request a new password reset from the Bullseye extension.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200"
            >
              Go to Homepage
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // Success state
  if (success) {
    return (
      <div className="py-8 lg:py-12">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-10 text-center shadow-sm">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-5">
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold mb-2">Password Updated!</h1>
            <p className="text-gray-600 mb-6">
              Your password has been successfully changed. You can now log in to the Bullseye extension with your new password.
            </p>
            <div className="bg-gray-50 rounded-xl p-5 mb-6">
              <p className="text-sm text-gray-700">
                Click the <span className="inline-flex items-center align-middle mx-0.5">
                  <svg viewBox="0 0 32 32" className="w-4 h-4 inline">
                    <circle cx="16" cy="16" r="14" fill="black"/>
                    <circle cx="16" cy="16" r="10" fill="none" stroke="white" strokeWidth="2"/>
                    <circle cx="16" cy="16" r="6" fill="none" stroke="white" strokeWidth="2"/>
                    <circle cx="16" cy="16" r="2.5" fill="white"/>
                  </svg>
                </span> Bullseye icon in your Chrome toolbar to log in.
              </p>
            </div>
            <p className="text-gray-400 text-sm">
              You can close this window now.
            </p>
          </div>
        </div>
      </div>
    )
  }

  // Form state
  return (
    <div className="py-8 lg:py-12">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-10 shadow-sm">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold mb-2">Reset Your Password</h1>
            <p className="text-gray-600">Enter your new password below.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                New Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                  placeholder="Enter new password"
                  required
                  minLength={6}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                  placeholder="Confirm new password"
                  required
                  minLength={6}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Updating...
                </>
              ) : (
                "Update Password"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
