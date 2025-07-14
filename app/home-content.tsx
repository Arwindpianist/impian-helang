"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Award, Users, BookOpen, MessageCircle, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function HomeContent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Hero Section */}
      <motion.section initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="bg-gradient-to-br from-blue-50 to-blue-100 py-10 md:py-20">
        <div className="container mx-auto px-2 sm:px-4">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="grid gap-8 md:gap-12 items-center md:grid-cols-2">
            <div>
              <Badge className="bg-blue-100 text-blue-800 mb-4">HRD Corp Certified</Badge>
              <h1
                className="text-2xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-6"
                style={{ fontFamily: "Footlight MT Light, serif" }}
              >
                Transform Your Career with Professional Training
              </h1>
              <p className="text-base sm:text-lg text-gray-700 mb-8" style={{ fontFamily: "Footlight MT Light, serif" }}>
                Join Malaysia's leading HRD Corp certified training programs. Enhance your skills with our globally
                recognized Train The Trainer Programme and Emotional Intelligence courses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/courses">
                  <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                    <BookOpen className="mr-2 h-5 w-5" />
                    View Courses
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Book Consultation
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative w-full max-w-md mx-auto md:max-w-full">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Professional Training"
                width={500}
                height={400}
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg hidden sm:block">
                <div className="flex items-center space-x-3">
                  <Award className="h-8 w-8 text-blue-600" />
                  <div>
                    <p className="font-semibold text-sm">HRD Corp</p>
                    <p className="text-xs text-gray-600">Certified Provider</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} id="about" className="py-10 md:py-20 bg-gradient-to-br from-blue-100 to-blue-200">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4" style={{ fontFamily: "Footlight MT Light, serif" }}>
              About Impian Helang Sdn Bhd
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: "Footlight MT Light, serif" }}>
              We are a HRD Corp Certified Training Provider committed to delivering world-class professional development
              programs that transform careers and organizations across Malaysia.
            </p>
          </div>

          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="grid gap-6 md:gap-8 md:grid-cols-3">
            <Card className="text-center border-blue-200 w-full max-w-full glass bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-blue-900" style={{ fontFamily: "Footlight MT Light, serif" }}>
                  HRD Corp Certified
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700" style={{ fontFamily: "Footlight MT Light, serif" }}>
                  All our programs are claimable under the HRD Corp SBL-Khas scheme for eligible employers in Malaysia.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-blue-200 w-full max-w-full glass bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-blue-900" style={{ fontFamily: "Footlight MT Light, serif" }}>
                  Expert Trainers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700" style={{ fontFamily: "Footlight MT Light, serif" }}>
                  Led by veteran trainer Rita Krishnan with years of experience in corporate training and development.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-blue-200 w-full max-w-full glass bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-blue-900" style={{ fontFamily: "Footlight MT Light, serif" }}>
                  Proven Results
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700" style={{ fontFamily: "Footlight MT Light, serif" }}>
                  Globally recognized programs with measurable outcomes for personal and professional growth.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Courses Section */}
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} id="courses" className="py-20 bg-gradient-to-br from-blue-200 to-blue-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4" style={{ fontFamily: "Footlight MT Light, serif" }}>
              Our Training Programs
            </h2>
            <p className="text-lg text-gray-700" style={{ fontFamily: "Footlight MT Light, serif" }}>
              Choose from our comprehensive range of HRD Corp certified courses
            </p>
          </div>

          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Emotional Intelligence Course */}
            <Card className="border-blue-300 hover:shadow-lg transition-shadow w-full max-w-full glass bg-white/90 backdrop-blur-sm" id="emotional-intelligence">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <Badge className="bg-blue-100 text-blue-800">Popular</Badge>
                  <span className="text-2xl font-bold text-blue-600">RM 700.00</span>
                </div>
                <CardTitle className="text-xl text-blue-900" style={{ fontFamily: "Footlight MT Light, serif" }}>
                  Emotional Intelligence
                </CardTitle>
                <CardDescription className="text-gray-700" style={{ fontFamily: "Footlight MT Light, serif" }}>
                  Improve self-awareness, emotional regulation, and workplace empathy through a structured, interactive
                  session.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
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
                    HRD Corp claimable
                  </li>
                </ul>
                <div className="flex gap-2">
                  <Link href="/courses#emotional-intelligence" className="flex-1">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Learn More</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Train The Trainer Programme */}
            <Card className="border-blue-300 hover:shadow-lg transition-shadow w-full max-w-full glass bg-white/90 backdrop-blur-sm" id="train-the-trainer">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <Badge className="bg-green-100 text-green-800">Flagship Program</Badge>
                  <span className="text-2xl font-bold text-blue-600">RM 2,788.00</span>
                </div>
                <CardTitle className="text-xl text-blue-900" style={{ fontFamily: "Footlight MT Light, serif" }}>
                  Train The Trainer Programme
                </CardTitle>
                <CardDescription className="text-gray-700" style={{ fontFamily: "Footlight MT Light, serif" }}>
                  A globally recognized HRD Corp-certified program led by veteran trainer Rita Krishnan. For aspiring and
                  seasoned trainers.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
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
                    HRD Corp claimable
                  </li>
                </ul>
                <div className="flex gap-2">
                  <Link href="/courses#train-the-trainer" className="flex-1">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Learn More</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="py-20 bg-gradient-to-br from-blue-100 to-blue-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4" style={{ fontFamily: "Footlight MT Light, serif" }}>
              What Our Participants Say
            </h2>
            <p className="text-lg text-gray-700" style={{ fontFamily: "Footlight MT Light, serif" }}>
              Hear from professionals who have transformed their careers with our training programs
            </p>
          </div>

          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center border-blue-200 glass bg-white/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4" style={{ fontFamily: "Footlight MT Light, serif" }}>
                  "The Emotional Intelligence course completely changed how I approach workplace relationships. The
                  practical techniques are invaluable."
                </p>
                <div className="font-semibold text-blue-900">Sarah Lim</div>
                <div className="text-sm text-gray-600">HR Manager</div>
              </CardContent>
            </Card>

            <Card className="text-center border-blue-200 glass bg-white/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4" style={{ fontFamily: "Footlight MT Light, serif" }}>
                  "Rita's Train The Trainer Programme gave me the confidence and skills to become an effective corporate
                  trainer. Highly recommended!"
                </p>
                <div className="font-semibold text-blue-900">Ahmad Zulkifli</div>
                <div className="text-sm text-gray-600">Training Coordinator</div>
              </CardContent>
            </Card>

            <Card className="text-center border-blue-200 glass bg-white/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4" style={{ fontFamily: "Footlight MT Light, serif" }}>
                  "The HRD Corp claim process was seamless, and the training quality exceeded our expectations. Great
                  value for money."
                </p>
                <div className="font-semibold text-blue-900">Lisa Chen</div>
                <div className="text-sm text-gray-600">Learning & Development</div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="py-20 bg-gradient-to-br from-blue-300 to-blue-400">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4" style={{ fontFamily: "Footlight MT Light, serif" }}>
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-700" style={{ fontFamily: "Footlight MT Light, serif" }}>
              Find answers to common questions about our training programs
            </p>
          </div>

          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="hrd-corp" className="border border-blue-200 rounded-lg px-6 glass bg-white/80 backdrop-blur-sm">
                <AccordionTrigger className="text-blue-900 font-semibold text-left">
                  Are these courses HRD Corp claimable?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Yes, all our training programs are HRD Corp certified and claimable under the SBL-Khas scheme for
                  eligible employers in Malaysia.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="training-format" className="border border-blue-200 rounded-lg px-6 glass bg-white/80 backdrop-blur-sm">
                <AccordionTrigger className="text-blue-900 font-semibold text-left">
                  Do you offer online or physical training?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  We offer both online and physical training sessions to accommodate different learning preferences and
                  organizational needs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="certification" className="border border-blue-200 rounded-lg px-6 glass bg-white/80 backdrop-blur-sm">
                <AccordionTrigger className="text-blue-900 font-semibold text-left">
                  Do participants receive certificates?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Yes, all participants receive certificates upon successful completion of the training programs, which
                  are HRD Corp compliant.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>

          <div className="text-center mt-12">
            <Link href="/faq">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                View All FAQs
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>

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