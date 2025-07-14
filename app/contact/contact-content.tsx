"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle, Award, Users } from "lucide-react"
import { motion } from "framer-motion"

export default function ContactContent() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, course: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - can be connected to email service later
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      course: "",
      message: "",
    })
    alert("Thank you for your message! We'll get back to you within 24 hours.")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6" style={{ fontFamily: "Footlight MT Light, serif" }}>
              Get In Touch
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: "Footlight MT Light, serif" }}>
              Ready to transform your career? Contact us today to learn more about our training programs and schedule your session.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="py-10 md:py-20 bg-white">
        <div className="container mx-auto px-2 sm:px-4">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div whileHover={{ scale: 1.02 }} className="border-blue-200 w-full max-w-full glass bg-white/80 border border-blue-200 text-blue-900">
              <CardHeader>
                <CardTitle className="text-blue-900" style={{ fontFamily: "Footlight MT Light, serif" }}>
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold text-blue-900">Address</p>
                    <p className="text-gray-700">
                      L1-05, Level 1, Cova Square
                      <br />
                      Kota Damansara, 47810
                      <br />
                      Petaling Jaya, Selangor, Malaysia
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-semibold text-blue-900">Phone</p>
                    <p className="text-gray-700">019 - 387 1868</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-semibold text-blue-900">Email</p>
                    <p className="text-gray-700">info@impianhelang.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold text-blue-900">Business Hours</p>
                    <div className="text-gray-700">
                      <p>Monday–Thursday: 9:00 am – 6:00 pm</p>
                      <p>Friday: 9:00 am – 5:00 pm</p>
                      <p>Saturday–Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </motion.div>

            {/* Quick Contact Options */}
            <motion.div whileHover={{ scale: 1.02 }} className="border-blue-200 glass">
              <CardHeader>
                <CardTitle className="text-blue-900" style={{ fontFamily: "Footlight MT Light, serif" }}>
                  Quick Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  className="w-full bg-green-500 hover:bg-green-600"
                  onClick={() => {
                    const phoneNumber = "60193871868"
                    const message = encodeURIComponent("Hi! I'm interested in your training programs.")
                    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
                    window.open(whatsappUrl, "_blank")
                  }}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp Us
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
                  onClick={() => window.open("tel:0193871868", "_self")}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
              </CardContent>
            </motion.div>

            {/* Google Maps */}
            <motion.div whileHover={{ scale: 1.02 }} className="border-blue-200 glass">
              <CardHeader>
                <CardTitle className="text-blue-900" style={{ fontFamily: "Footlight MT Light, serif" }}>
                  Our Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg overflow-hidden mb-4 aspect-video max-h-64">
                  <iframe
                    title="Cova Square, Kota Damansara"
                    src="https://www.google.com/maps?q=Cova+Square,+Kota+Damansara&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="text-center">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50 w-full sm:w-auto"
                    onClick={() => window.open("https://maps.google.com/?q=Cova+Square+Kota+Damansara", "_blank")}
                  >
                    Open in Maps
                  </Button>
                </div>
              </CardContent>
            </motion.div>

            {/* Contact Form */}
            <motion.div whileHover={{ scale: 1.02 }} className="border-blue-200 glass">
              <CardHeader>
                <CardTitle className="text-blue-900" style={{ fontFamily: "Footlight MT Light, serif" }}>
                  Send Us a Message
                </CardTitle>
                <CardDescription className="text-gray-700" style={{ fontFamily: "Footlight MT Light, serif" }}>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-blue-900">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="border-blue-200 focus:border-blue-600"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-blue-900">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="border-blue-200 focus:border-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-blue-900">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="border-blue-200 focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-blue-900">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="border-blue-200 focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <Label htmlFor="course" className="text-blue-900">Course of Interest</Label>
                    <Select value={formData.course} onValueChange={handleSelectChange}>
                      <SelectTrigger className="border-blue-200 focus:border-blue-600">
                        <SelectValue placeholder="Select a course" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="emotional-intelligence">Emotional Intelligence (RM 700)</SelectItem>
                        <SelectItem value="train-the-trainer">Train The Trainer Programme (RM 2,788)</SelectItem>
                        <SelectItem value="both">Both Courses</SelectItem>
                        <SelectItem value="other">Other/Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-blue-900">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="border-blue-200 focus:border-blue-600"
                      placeholder="Tell us about your training needs..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Additional Information */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-4" style={{ fontFamily: "Footlight MT Light, serif" }}>
                Why Choose Impian Helang?
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-blue-900 mb-2" style={{ fontFamily: "Footlight MT Light, serif" }}>
                  HRD Corp Certified
                </h3>
                <p className="text-gray-700" style={{ fontFamily: "Footlight MT Light, serif" }}>
                  All our programs are claimable under the HRD Corp SBL-Khas scheme for eligible employers.
                </p>
              </div>
              
              <div className="text-center">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-blue-900 mb-2" style={{ fontFamily: "Footlight MT Light, serif" }}>
                  Expert Trainers
                </h3>
                <p className="text-gray-700" style={{ fontFamily: "Footlight MT Light, serif" }}>
                  Led by veteran trainer Rita Krishnan with years of experience in corporate training.
                </p>
              </div>
              
              <div className="text-center">
                <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-blue-900 mb-2" style={{ fontFamily: "Footlight MT Light, serif" }}>
                  Proven Results
                </h3>
                <p className="text-gray-700" style={{ fontFamily: "Footlight MT Light, serif" }}>
                  Globally recognized programs with measurable outcomes for professional growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 