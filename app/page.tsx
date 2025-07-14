import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import HomeContent from "./home-content"

export const metadata = {
  title: 'Impian Helang Sdn Bhd - HRD Corp Certified Training Provider',
  description: 'Transform your career with our HRD Corp certified training programs. Emotional Intelligence (RM700) and Train The Trainer Programme (RM2788). Expert-led courses in Malaysia.',
  keywords: 'HRD Corp certified training, Emotional Intelligence, Train The Trainer, corporate training Malaysia, professional development',
  openGraph: {
    title: 'Impian Helang Sdn Bhd - HRD Corp Certified Training Provider',
    description: 'Transform your career with our HRD Corp certified training programs. Expert-led courses in Malaysia.',
    type: 'website',
    locale: 'en_MY',
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HomeContent />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
