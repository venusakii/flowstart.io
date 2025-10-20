"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function JoinFlowstart() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#1A1A20] to-[#0E0E12] relative overflow-hidden">
      <div
        className="absolute inset-0 animate-gradient-flow"
        style={{
          background:
            "linear-gradient(135deg, rgba(0, 229, 160, 0.1) 0%, rgba(0, 123, 255, 0.1) 50%, rgba(255, 140, 66, 0.1) 100%)",
        }}
      />

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <h2 className="font-[family-name:var(--font-display)] font-extrabold text-4xl md:text-6xl text-[#F5F5F5] text-balance">
            It's time to get in the zone.
          </h2>

          <p className="text-xl text-[#B0B0B0] max-w-2xl mx-auto">
            Join thousands of forward thinkers who've found their flow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-[#1A1A20] border-[#2A2A30] text-[#F5F5F5] placeholder:text-[#B0B0B0] focus:border-[#00E5A0] h-12"
            />
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#00E5A0] to-[#007BFF] hover:opacity-90 text-white font-semibold group h-12 px-8"
            >
              Start Flow
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <p className="text-sm text-[#B0B0B0]">No credit card required. Start free today.</p>
        </motion.div>
      </div>
    </section>
  )
}
