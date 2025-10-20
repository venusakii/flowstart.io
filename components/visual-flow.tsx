"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import { useEffect, useState } from "react"

const steps = [
  { number: 1, title: "Define", description: "Set your goals" },
  { number: 2, title: "Plan", description: "Create your roadmap" },
  { number: 3, title: "Track", description: "Monitor progress" },
  { number: 4, title: "Grow", description: "Achieve results" },
]

export function VisualFlow() {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 px-4 bg-[#0E0E12]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-display)] font-extrabold text-4xl md:text-5xl text-[#F5F5F5] mb-4">
            Your Journey to Success
          </h2>
          <p className="text-xl text-[#B0B0B0]">Four simple steps to transform your goals into reality.</p>
        </div>

        <div className="relative">
          {/* Flow line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#00E5A0] via-[#007BFF] to-[#FF8C42] -translate-y-1/2 hidden md:block" />

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <div
                  className={`w-24 h-24 rounded-full flex items-center justify-center mb-4 transition-all duration-500 ${
                    index <= activeStep
                      ? "bg-gradient-to-br from-[#00E5A0] to-[#007BFF] scale-110"
                      : "bg-[#1A1A20] border-2 border-[#2A2A30]"
                  }`}
                >
                  {index <= activeStep ? (
                    <CheckCircle2 className="h-12 w-12 text-white" />
                  ) : (
                    <span className="font-[family-name:var(--font-display)] font-bold text-3xl text-[#B0B0B0]">
                      {step.number}
                    </span>
                  )}
                </div>

                <h3 className="font-[family-name:var(--font-display)] font-bold text-2xl text-[#F5F5F5] mb-2">
                  {step.title}
                </h3>

                <p className="text-[#B0B0B0]">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
