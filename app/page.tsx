"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Linkedin, Twitter, Github } from "lucide-react"

export default function ComingSoonPage() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* Main Content */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-light text-slate-900 tracking-tight">Kamran Ali Baig</h1>
            <div className="w-24 h-px bg-slate-300 mx-auto"></div>
            <p className="text-xl md:text-2xl text-slate-600 font-light">Coming Soon</p>
          </div>

          <p className="text-slate-500 text-lg max-w-md mx-auto leading-relaxed">
            Something beautiful is in the works. Stay tuned for updates on my latest projects and insights.
          </p>
        </div>

        {/* Email Subscription */}
        <div className="space-y-4">
          <p className="text-slate-600 font-medium">Get notified when I launch</p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 border-slate-200 focus:border-slate-400 focus:ring-slate-400"
              required
            />
            <Button type="submit" className="bg-slate-900 hover:bg-slate-800 text-white px-6" disabled={isSubscribed}>
              {isSubscribed ? (
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Subscribed!
                </span>
              ) : (
                "Notify Me"
              )}
            </Button>
          </form>
          {isSubscribed && (
            <p className="text-green-600 text-sm animate-fade-in">
              Thank you! You'll be the first to know when I launch.
            </p>
          )}
        </div>

        {/* Social Links */}
        <div className="space-y-4">
          <p className="text-slate-500 text-sm">Connect with me</p>
          <div className="flex justify-center gap-4">
            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-600">
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-600">
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </Button>
            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-600">
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-600">
              <Mail className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-8 border-t border-slate-200">
          <p className="text-slate-400 text-sm">© 2024 Kamran Ali Baig. All rights reserved.</p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-slate-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-300 rounded-full opacity-10 blur-3xl"></div>
      </div>
    </div>
  )
}
