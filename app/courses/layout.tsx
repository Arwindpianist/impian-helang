import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Training Courses - Impian Helang Sdn Bhd',
  description: 'Explore our HRD Corp certified training programs: Emotional Intelligence (RM700) and Train The Trainer Programme (RM2788).',
}

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 