"use client"

import { motion } from "framer-motion"

const integrations = [
  { name: "Slack", color: "#E01E5A" },
  { name: "Notion", color: "#000000" },
  { name: "Google Fit", color: "#4285F4" },
  { name: "Zapier", color: "#FF4A00" },
  { name: "Trello", color: "#0079BF" },
  { name: "Asana", color: "#F06A6A" },
]

export function Integrations() {
  return (
    <section className="py-24 px-4 bg-[#0E0E12]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-display)] font-extrabold text-4xl md:text-5xl text-[#F5F5F5] mb-4">
            Integrations
          </h2>
          <p className="text-xl text-[#B0B0B0]">Connect with your favorite tools and services.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center gap-4"
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center border-2 transition-all duration-300 hover:shadow-lg animate-pulse-glow"
                style={{
                  borderColor: integration.color,
                  backgroundColor: `${integration.color}20`,
                  boxShadow: `0 0 20px ${integration.color}40`,
                }}
              >
                <span className="font-[family-name:var(--font-display)] font-bold text-lg text-[#F5F5F5]">
                  {integration.name.charAt(0)}
                </span>
              </div>
              <span className="text-sm text-[#B0B0B0] font-medium">{integration.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
