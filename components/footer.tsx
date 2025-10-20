import { Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-4 bg-gradient-to-b from-[#0E0E12] to-black">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-[#B0B0B0]">
            <a href="#" className="hover:text-[#00E5A0] transition-colors">
              About
            </a>
            <a href="#" className="hover:text-[#00E5A0] transition-colors">
              Blog
            </a>
            <a href="#" className="hover:text-[#00E5A0] transition-colors">
              Pricing
            </a>
            <a href="#" className="hover:text-[#00E5A0] transition-colors">
              Contact
            </a>
            <a href="#" className="hover:text-[#00E5A0] transition-colors">
              Privacy
            </a>
          </div>

          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-[#1A1A20] border border-[#2A2A30] flex items-center justify-center hover:border-[#00E5A0] transition-colors"
            >
              <Twitter className="h-5 w-5 text-[#B0B0B0]" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-[#1A1A20] border border-[#2A2A30] flex items-center justify-center hover:border-[#00E5A0] transition-colors"
            >
              <Linkedin className="h-5 w-5 text-[#B0B0B0]" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#2A2A30] text-center">
          <p className="text-[#B0B0B0] text-sm">© 2025 Flowstart.io — Build Momentum. Stay in Flow.</p>
        </div>
      </div>
    </footer>
  )
}
