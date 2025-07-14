import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import FAQContent from "./faq-content"

export const metadata = {
  title: 'FAQ - Impian Helang Sdn Bhd',
  description: 'Frequently asked questions about our HRD Corp certified training programs, registration process, payment policies, and training formats.',
  keywords: 'training FAQ, HRD Corp training questions, corporate training Malaysia FAQ, training registration',
  openGraph: {
    title: 'FAQ - Impian Helang Sdn Bhd',
    description: 'Frequently asked questions about our HRD Corp certified training programs.',
    type: 'website',
    locale: 'en_MY',
  },
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <FAQContent />
      <Footer />
      <WhatsAppButton />
    </div>
  )
} 