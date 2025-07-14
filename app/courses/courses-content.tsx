"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Download, BookOpen, Users, Award, Clock, MapPin, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function CoursesContent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="bg-blue-100 text-blue-800 mb-4">HRD Corp Certified</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6" style={{ fontFamily: "Footlight MT Light, serif" }}>
              Our Training Programs
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: "Footlight MT Light, serif" }}>
              Choose from our comprehensive range of HRD Corp certified courses designed to enhance your professional skills and career growth.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="py-10 md:py-20 bg-gradient-to-br from-blue-100 to-blue-200">
        <div className="container mx-auto px-2 sm:px-4">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
            {/* Emotional Intelligence Course */}
            <motion.div whileHover={{ scale: 1.02 }} className="border-blue-300 hover:shadow-lg transition-shadow w-full max-w-full glass bg-white/90 backdrop-blur-sm border border-blue-300 text-blue-900" id="emotional-intelligence">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <Badge className="bg-blue-100 text-blue-800">Popular</Badge>
                  <span className="text-2xl font-bold text-blue-600">RM 700.00</span>
                </div>
                <CardTitle className="text-2xl text-blue-900" style={{ fontFamily: "Footlight MT Light, serif" }}>
                  Emotional Intelligence
                </CardTitle>
                <CardDescription className="text-gray-700 text-base" style={{ fontFamily: "Footlight MT Light, serif" }}>
                  Improve self-awareness, emotional regulation, and workplace empathy through a structured, interactive session.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-sm text-gray-700">1 Day Session</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-sm text-gray-700">Group Training</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-sm text-gray-700">Kota Damansara</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-sm text-gray-700">HRD Corp Claimable</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">What You'll Learn:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Self-awareness development
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Emotional regulation techniques
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Workplace empathy skills
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Conflict resolution strategies
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Leadership communication
                    </li>
                  </ul>
                </div>

                <div className="flex gap-2 flex-col sm:flex-row">
                  <Button className="flex-1 w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Register Now
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="border-blue-600 text-blue-600 bg-transparent w-full sm:w-auto"
                    onClick={() => window.open('/brochures/emotional-intelligence-brochure.pdf', '_blank')}
                    title="Download Brochure"
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </motion.div>

            {/* Train The Trainer Programme */}
            <motion.div whileHover={{ scale: 1.02 }} className="border-blue-300 hover:shadow-lg transition-shadow w-full max-w-full glass bg-white/90 backdrop-blur-sm border border-blue-300 text-blue-900" id="train-the-trainer">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <Badge className="bg-green-100 text-green-800">Flagship Program</Badge>
                  <span className="text-2xl font-bold text-blue-600">RM 2,788.00</span>
                </div>
                <CardTitle className="text-2xl text-blue-900" style={{ fontFamily: "Footlight MT Light, serif" }}>
                  Train The Trainer Programme
                </CardTitle>
                <CardDescription className="text-gray-700 text-base" style={{ fontFamily: "Footlight MT Light, serif" }}>
                  A globally recognized HRD Corp-certified program led by veteran trainer Rita Krishnan. For aspiring and seasoned trainers.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-sm text-gray-700">5 Day Programme</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-sm text-gray-700">Small Groups</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-sm text-gray-700">Kota Damansara</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-sm text-gray-700">Global Certification</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">Program Highlights:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Globally recognized certification
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Led by Rita Krishnan
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Comprehensive training methodology
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Practical hands-on experience
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      HRD Corp claimable
                    </li>
                  </ul>
                </div>

                <div className="flex gap-2 flex-col sm:flex-row">
                  <Button className="flex-1 w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Register Now
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="border-blue-600 text-blue-600 bg-transparent w-full sm:w-auto"
                    onClick={() => window.open('/brochures/train-the-trainer-brochure.pdf', '_blank')}
                    title="Download Brochure"
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* HRD Corp Information */}
      <section className="py-20 bg-gradient-to-br from-blue-200 to-blue-300">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-4" style={{ fontFamily: "Footlight MT Light, serif" }}>
              HRD Corp Claimable Training
            </h2>
            <p className="text-lg text-gray-700 mb-8" style={{ fontFamily: "Footlight MT Light, serif" }}>
              All our programs are claimable under the HRD Corp SBL-Khas scheme for eligible employers in Malaysia.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-blue-900 mb-2" style={{ fontFamily: "Footlight MT Light, serif" }}>
                  Certified Provider
                </h3>
                <p className="text-gray-700" style={{ fontFamily: "Footlight MT Light, serif" }}>
                  We are a registered HRD Corp training provider with proven track record.
                </p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-blue-900 mb-2" style={{ fontFamily: "Footlight MT Light, serif" }}>
                  Easy Claims Process
                </h3>
                <p className="text-gray-700" style={{ fontFamily: "Footlight MT Light, serif" }}>
                  We assist with the claim process to ensure maximum reimbursement.
                </p>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-blue-900 mb-2" style={{ fontFamily: "Footlight MT Light, serif" }}>
                  Corporate Training
                </h3>
                <p className="text-gray-700" style={{ fontFamily: "Footlight MT Light, serif" }}>
                  Customized in-house training available for organizations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="py-20 bg-blue-900">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "Footlight MT Light, serif" }}>
              Ready to Transform Your Career?
            </h2>
            <p className="text-lg text-blue-100 mb-8" style={{ fontFamily: "Footlight MT Light, serif" }}>
              Join hundreds of professionals who have enhanced their skills with our training programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/courses">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Explore Courses
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-blue hover:bg-teal-500 hover:text-white">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
} 