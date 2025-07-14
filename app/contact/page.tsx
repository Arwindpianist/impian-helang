import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import ContactContent from "./contact-content"

export const metadata = {
  title: 'Contact Us - Impian Helang Sdn Bhd',
  description: 'Get in touch with Impian Helang Sdn Bhd. Contact us for HRD Corp certified training programs, course inquiries, and professional development opportunities.',
  keywords: 'contact Impian Helang, training inquiry, HRD Corp training contact, corporate training Malaysia',
  openGraph: {
    title: 'Contact Us - Impian Helang Sdn Bhd',
    description: 'Get in touch with Impian Helang Sdn Bhd for HRD Corp certified training programs.',
    type: 'website',
    locale: 'en_MY',
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <ContactContent />
      <Footer />
      <WhatsAppButton />
    </div>
  )
} 