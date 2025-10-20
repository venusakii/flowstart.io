"use client"

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Flowstart keeps me consistent. It's like having discipline on autopilot.",
    author: "Mark R.",
    role: "Startup Founder",
  },
  {
    quote: "Our fitness team tracks daily progress here. It's visual, motivating, and sleek.",
    author: "Elena T.",
    role: "Coach",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#0E0E12] to-[#1A1A20]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-display)] font-extrabold text-4xl md:text-5xl text-[#F5F5F5] mb-4">
            What People Say
          </h2>
          <p className="text-xl text-[#B0B0B0]">Join thousands who've found their flow.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-[#1A1A20] border-[#2A2A30] hover:border-[#00E5A0] transition-all duration-300 h-full relative overflow-hidden group">
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="h-16 w-16 text-[#00E5A0]" />
                </div>

                <div className="relative z-10">
                  <p className="text-lg text-[#F5F5F5] mb-6 leading-relaxed italic">"{testimonial.quote}"</p>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00E5A0] to-[#007BFF] flex items-center justify-center">
                      <span className="font-[family-name:var(--font-display)] font-bold text-white">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>

                    <div>
                      <p className="font-semibold text-[#F5F5F5]">{testimonial.author}</p>
                      <p className="text-sm text-[#B0B0B0]">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
