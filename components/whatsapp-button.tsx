"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "60193871868" // 019 - 387 1868
    const message = encodeURIComponent(
      "Hi! I'm interested in learning more about your training programs. Could you please provide more information about the Emotional Intelligence and Train The Trainer courses?"
    )
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        size="lg"
        className="rounded-full bg-green-500 hover:bg-green-600 shadow-lg"
        onClick={handleWhatsAppClick}
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  )
} 