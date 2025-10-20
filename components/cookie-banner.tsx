"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasAccepted = localStorage.getItem("cookies-accepted")
    if (!hasAccepted) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookies-accepted", "true")
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50"
        >
          <div className="bg-[#1A1A20] border border-[#2A2A30] rounded-lg p-6 shadow-2xl">
            <p className="text-[#F5F5F5] mb-4 leading-relaxed">We use cookies to enhance your flow experience 🍪</p>
            <Button
              onClick={handleAccept}
              className="w-full bg-gradient-to-r from-[#00E5A0] to-[#007BFF] hover:opacity-90 text-white font-semibold"
            >
              Accept Flow →
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
