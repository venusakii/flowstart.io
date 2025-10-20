"use client"

import { Card } from "@/components/ui/card"
import { Users, User } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export function ForTeamsForYou() {
  const [hoveredSide, setHoveredSide] = useState<"individual" | "team" | null>(null)

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#1A1A20] to-[#0E0E12]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-display)] font-extrabold text-4xl md:text-5xl text-[#F5F5F5] mb-4">
            Built for Everyone
          </h2>
          <p className="text-xl text-[#B0B0B0]">Whether you're flying solo or leading a team.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            onHoverStart={() => setHoveredSide("individual")}
            onHoverEnd={() => setHoveredSide(null)}
          >
            <Card className="p-8 bg-[#1A1A20] border-[#2A2A30] hover:border-[#00E5A0] transition-all duration-300 h-full relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00E5A0]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-[#00E5A0]/20 flex items-center justify-center mb-6">
                  <User className="h-8 w-8 text-[#00E5A0]" />
                </div>

                <h3 className="font-[family-name:var(--font-display)] font-bold text-3xl text-[#F5F5F5] mb-4">
                  For You
                </h3>

                <ul className="space-y-3 text-[#B0B0B0]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00E5A0] mt-1">•</span>
                    <span>Focus mode for deep work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00E5A0] mt-1">•</span>
                    <span>Personal streaks and achievements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00E5A0] mt-1">•</span>
                    <span>Smart reminders that adapt to you</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00E5A0] mt-1">•</span>
                    <span>Private progress tracking</span>
                  </li>
                </ul>
              </div>

              {hoveredSide === "individual" && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 2, opacity: 0 }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-[#00E5A0]"
                />
              )}
            </Card>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            onHoverStart={() => setHoveredSide("team")}
            onHoverEnd={() => setHoveredSide(null)}
          >
            <Card className="p-8 bg-[#1A1A20] border-[#2A2A30] hover:border-[#007BFF] transition-all duration-300 h-full relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#007BFF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-[#007BFF]/20 flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-[#007BFF]" />
                </div>

                <h3 className="font-[family-name:var(--font-display)] font-bold text-3xl text-[#F5F5F5] mb-4">
                  For Teams
                </h3>

                <ul className="space-y-3 text-[#B0B0B0]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#007BFF] mt-1">•</span>
                    <span>Collaborative planning tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#007BFF] mt-1">•</span>
                    <span>Shared goals and milestones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#007BFF] mt-1">•</span>
                    <span>Team analytics and insights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#007BFF] mt-1">•</span>
                    <span>Real-time collaboration</span>
                  </li>
                </ul>
              </div>

              {hoveredSide === "team" && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 2, opacity: 0 }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-[#007BFF]"
                />
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
