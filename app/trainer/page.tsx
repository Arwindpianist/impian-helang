import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import TrainerContent from "./trainer-content"

export const metadata = {
  title: 'Meet Rita Krishnan - Veteran Trainer - Impian Helang Sdn Bhd',
  description: 'Learn about Rita Krishnan, veteran trainer and leader of our globally recognized Train The Trainer Programme. HRD Corp certified training expert.',
}

export default function TrainerPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <TrainerContent />
      <Footer />
      <WhatsAppButton />
    </div>
  )
} 