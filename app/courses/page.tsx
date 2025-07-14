import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import CoursesContent from "./courses-content"

export const metadata = {
  title: 'Training Courses - Impian Helang Sdn Bhd',
  description: 'Explore our HRD Corp certified training programs: Emotional Intelligence (RM700) and Train The Trainer Programme (RM2788). Expert-led courses in Malaysia.',
  keywords: 'HRD Corp training courses, Emotional Intelligence course, Train The Trainer Programme, corporate training Malaysia',
  openGraph: {
    title: 'Training Courses - Impian Helang Sdn Bhd',
    description: 'Explore our HRD Corp certified training programs: Emotional Intelligence (RM700) and Train The Trainer Programme (RM2788).',
    type: 'website',
    locale: 'en_MY',
  },
}

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <CoursesContent />
      <Footer />
      <WhatsAppButton />
    </div>
  )
} 