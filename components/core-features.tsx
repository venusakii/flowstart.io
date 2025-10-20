"use client"

import { Activity, Clock, TrendingUp, Zap } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Activity,
    title: "Smart Flow Tracker",
    description: "Visualize your progress daily with intuitive tracking that adapts to your workflow.",
  },
  {
    icon: Clock,
    title: "Goal Automation",
    description: "Reminders that adapt to you, learning your patterns and optimizing your schedule.",
  },
  {
    icon: TrendingUp,
    title: "Analytics Dashboard",
    description: "Measure habits or performance with detailed insights and actionable metrics.",
  },
  {
    icon: Zap,
    title: "Integrations",
    description: "Connect with Notion, Google Fit, Slack, and more to centralize your workflow.",
  },
]

export function CoreFeatures() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#0E0E12] to-[#1A1A20]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-display)] font-extrabold text-4xl md:text-5xl text-[#F5F5F5] mb-4">
            Core Features
          </h2>
          <p className="text-xl text-[#B0B0B0] max-w-2xl mx-auto">
            Everything you need to stay in flow and achieve your goals.
          </p>
        </div>

        <div className="space-y-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-12 items-center`}
            >
              <div className="flex-1 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00E5A0] to-[#007BFF] flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="font-[family-name:var(--font-display)] font-bold text-3xl text-[#F5F5F5]">
                  {feature.title}
                </h3>

                <p className="text-lg text-[#B0B0B0] leading-relaxed">{feature.description}</p>
              </div>

              <div className="flex-1 relative">
                <div className="aspect-video rounded-2xl bg-gradient-to-br from-[#00E5A0]/20 to-[#007BFF]/20 border border-[#00E5A0]/30 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/abstract-tech-visualization.png')] bg-cover bg-center opacity-30" />
                  <div className="relative z-10 w-32 h-32 rounded-full bg-gradient-to-br from-[#00E5A0] to-[#007BFF] animate-pulse-glow" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
