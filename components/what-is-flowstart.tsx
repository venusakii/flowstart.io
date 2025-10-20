"use client"

import { Card } from "@/components/ui/card"
import { Briefcase, Dumbbell, Lightbulb } from "lucide-react"
import { motion } from "framer-motion"

const cards = [
  {
    icon: Briefcase,
    title: "For Startups",
    description: "Manage ideas, goals, and growth.",
    color: "#00E5A0",
  },
  {
    icon: Dumbbell,
    title: "For Fitness",
    description: "Track progress and consistency.",
    color: "#007BFF",
  },
  {
    icon: Lightbulb,
    title: "For Creators",
    description: "Turn flow into routine.",
    color: "#FF8C42",
  },
]

export function WhatIsFlowstart() {
  return (
    <section className="py-24 px-4 bg-[#0E0E12]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-display)] font-extrabold text-4xl md:text-5xl text-[#F5F5F5] mb-4">
            A toolkit for forward thinkers.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-[#1A1A20] border-[#2A2A30] hover:border-[#00E5A0] transition-all duration-300 group cursor-pointer relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${card.color} 0%, transparent 100%)`,
                  }}
                />

                <div className="relative z-10">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${card.color}20` }}
                  >
                    <card.icon className="h-8 w-8" style={{ color: card.color }} />
                  </div>

                  <h3 className="font-[family-name:var(--font-display)] font-bold text-2xl text-[#F5F5F5] mb-3">
                    {card.title}
                  </h3>

                  <p className="text-[#B0B0B0] leading-relaxed">{card.description}</p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00E5A0] to-[#007BFF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
