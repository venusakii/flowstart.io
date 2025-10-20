"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"
import { motion } from "framer-motion"

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for personal projects",
    features: ["Up to 5 active goals", "Basic analytics", "Mobile app access", "Email support"],
    color: "#B0B0B0",
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "/mo",
    description: "Ideal for creators & small teams",
    features: [
      "Unlimited goals",
      "Advanced analytics",
      "Priority support",
      "Team collaboration (up to 5)",
      "Custom integrations",
    ],
    color: "#00E5A0",
    popular: true,
  },
  {
    name: "Flow+",
    price: "$29.99",
    period: "/mo",
    description: "For companies & coaches",
    features: [
      "Everything in Pro",
      "Unlimited team members",
      "White-label options",
      "Dedicated account manager",
      "Custom workflows",
      "API access",
    ],
    color: "#007BFF",
  },
]

export function PricingPlans() {
  return (
    <section className="py-24 px-4 bg-[#0E0E12]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-display)] font-extrabold text-4xl md:text-5xl text-[#F5F5F5] mb-4">
            Pricing Plans
          </h2>
          <p className="text-xl text-[#B0B0B0]">Choose the plan that fits your flow.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className={`p-8 bg-[#1A1A20] border-2 transition-all duration-300 h-full relative overflow-hidden group ${
                  plan.popular ? "border-[#00E5A0] scale-105 md:scale-110" : "border-[#2A2A30] hover:border-[#00E5A0]"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-br from-[#00E5A0] to-[#007BFF] text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                    POPULAR
                  </div>
                )}

                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${plan.color} 0%, transparent 100%)`,
                  }}
                />

                <div className="relative z-10">
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-2xl text-[#F5F5F5] mb-2">
                    {plan.name}
                  </h3>

                  <p className="text-[#B0B0B0] mb-6">{plan.description}</p>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="font-[family-name:var(--font-display)] font-extrabold text-5xl text-[#F5F5F5]">
                        {plan.price}
                      </span>
                      {plan.period && <span className="text-[#B0B0B0] text-xl">{plan.period}</span>}
                    </div>
                  </div>

                  <Button
                    className={`w-full mb-6 ${
                      plan.popular
                        ? "bg-gradient-to-r from-[#00E5A0] to-[#007BFF] hover:opacity-90"
                        : "bg-[#2A2A30] hover:bg-[#3A3A40]"
                    } text-white font-semibold`}
                  >
                    Get Started
                  </Button>

                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: plan.color }} />
                        <span className="text-[#B0B0B0]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{
                    background: `linear-gradient(to right, ${plan.color}, ${plan.color}80)`,
                  }}
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
