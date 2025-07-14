import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export function Footer() {
  return (
    <footer className="bg-blue-900/80 glass text-white py-12 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-blue-900 font-bold">IH</span>
              </div>
              <span className="font-bold text-lg" style={{ fontFamily: "Footlight MT Light, serif" }}>
                Impian Helang
              </span>
            </div>
            <p className="text-blue-200 text-sm mb-4 font-medium">
              HRD Corp Certified Training Provider committed to professional excellence.
            </p>
            <Badge className="bg-blue-700 text-white font-semibold">HRD Corp Certified</Badge>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Courses</h4>
            <ul className="space-y-2 text-sm text-blue-200">
              <li>
                <Link href="/courses#emotional-intelligence" className="hover:text-white transition-colors font-medium">
                  Emotional Intelligence
                </Link>
              </li>
              <li>
                <Link href="/courses#train-the-trainer" className="hover:text-white transition-colors font-medium">
                  Train The Trainer
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-white transition-colors font-medium">
                  Custom Training
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors font-medium">
                  In-house Programs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-sm text-blue-200">
              <li>
                <Link href="/#about" className="hover:text-white transition-colors font-medium">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/trainer" className="hover:text-white transition-colors font-medium">
                  Our Trainer
                </Link>
              </li>
              <li>
                <Link href="/#hrd-corp" className="hover:text-white transition-colors font-medium">
                  HRD Corp Claims
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors font-medium">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-2 text-sm text-blue-200 font-medium">
              <p>L1-05, Level 1, Cova Square</p>
              <p>Kota Damansara, 47810</p>
              <p>Petaling Jaya, Selangor</p>
              <p className="pt-2">Phone: 019 - 387 1868</p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-200 text-sm font-medium">
            © {new Date().getFullYear()} Impian Helang Sdn Bhd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 