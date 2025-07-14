"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Award, Users, Clock, MapPin, BookOpen, MessageCircle } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function FAQContent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Hero Section */}
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="bg-gradient-to-br from-blue-50 to-blue-100 py-10 md:py-20">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="text-center">
            <Badge className="bg-blue-100 text-blue-800 mb-4">FAQ</Badge>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-6" style={{ fontFamily: "Footlight MT Light, serif" }}>
              Frequently Asked Questions
            </h1>
            <p className="text-base sm:text-lg text-gray-800 max-w-3xl mx-auto" style={{ fontFamily: "Footlight MT Light, serif" }}>
              Find answers to common questions about our training programs, registration process, and HRD Corp claims.
            </p>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="py-10 md:py-20 bg-gradient-to-br from-blue-100 to-blue-200">
        <div className="container mx-auto px-2 sm:px-4">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {/* HRD Corp Related Questions */}
              <AccordionItem value="hrd-corp" className="border border-blue-200 rounded-lg px-6 glass bg-white/80 backdrop-blur-sm">
                <AccordionTrigger className="text-blue-900 font-semibold text-left">
                  Are these courses HRD Corp claimable?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  <p className="mb-3">Yes, all our training programs are HRD Corp certified and claimable under the SBL-Khas scheme for eligible employers in Malaysia.</p>
                  <p className="mb-3">We assist with the claim process to ensure maximum reimbursement for your organization.</p>
                  <div className="flex items-center mt-4">
                    <Award className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-sm text-blue-600">HRD Corp Certified Training Provider</span>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="training-format" className="border border-blue-200 rounded-lg px-6 glass bg-white/80 backdrop-blur-sm">
                <AccordionTrigger className="text-blue-900 font-semibold text-left">
                  Do you offer online or physical training?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  <p className="mb-3">We offer both online and physical training sessions to accommodate different learning preferences and organizational needs.</p>
                  <p className="mb-3">Our physical sessions are conducted at our Kota Damansara location or at your premises for in-house training.</p>
                  <div className="grid sm:grid-cols-2 gap-4 mt-4">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-blue-600 mr-2" />
                      <span className="text-sm">Physical: Kota Damansara</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-blue-600 mr-2" />
                      <span className="text-sm">Online: Virtual Sessions</span>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="in-house" className="border border-blue-200 rounded-lg px-6 glass bg-white/80 backdrop-blur-sm">
                <AccordionTrigger className="text-blue-900 font-semibold text-left">
                  Can we request in-house or private sessions?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  <p className="mb-3">Absolutely! We provide customized in-house training sessions tailored to your organization's specific needs.</p>
                  <p className="mb-3">Private sessions can be arranged for individuals or small groups with flexible scheduling.</p>
                  <div className="bg-blue-50 p-4 rounded-lg mt-4">
                    <p className="text-sm text-blue-800 font-semibold">Benefits of In-house Training:</p>
                    <ul className="text-sm text-blue-700 mt-2 space-y-1">
                      <li>• Customized content for your organization</li>
                      <li>• Convenient location at your premises</li>
                      <li>• Flexible scheduling</li>
                      <li>• Cost-effective for larger groups</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="payment" className="border border-blue-200 rounded-lg px-6 glass bg-white/80 backdrop-blur-sm">
                <AccordionTrigger className="text-blue-900 font-semibold text-left">
                  What is the payment and refund policy?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  <p className="mb-3">Payment is required upon registration to secure your spot in the training program.</p>
                  <div className="space-y-2 mt-4">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Full refund if cancellation is made 7 days before training</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">50% refund for cancellations within 7 days</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">No refund for no-shows (except medical emergencies with documentation)</span>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="course-duration" className="border border-blue-200 rounded-lg px-6 glass bg-white/80 backdrop-blur-sm">
                <AccordionTrigger className="text-blue-900 font-semibold text-left">
                  How long are the training sessions?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-600 pl-4">
                      <h4 className="font-semibold text-blue-900">Emotional Intelligence</h4>
                      <p className="text-sm text-gray-600">1 Day Session (8 hours)</p>
                      <p className="text-sm text-gray-600">Group training format</p>
                    </div>
                    <div className="border-l-4 border-green-600 pl-4">
                      <h4 className="font-semibold text-blue-900">Train The Trainer Programme</h4>
                      <p className="text-sm text-gray-600">5 Day Programme (40 hours)</p>
                      <p className="text-sm text-gray-600">Small group format with hands-on practice</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="certification" className="border border-blue-200 rounded-lg px-6 glass bg-white/80 backdrop-blur-sm">
                <AccordionTrigger className="text-blue-900 font-semibold text-left">
                  Do participants receive certificates?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  <p className="mb-3">Yes, all participants receive certificates upon successful completion of the training programs.</p>
                  <div className="space-y-2 mt-4">
                    <div className="flex items-center">
                      <Award className="h-4 w-4 text-blue-600 mr-2" />
                      <span className="text-sm">Emotional Intelligence: Certificate of Completion</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="h-4 w-4 text-blue-600 mr-2" />
                      <span className="text-sm">Train The Trainer: Globally recognized certification</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="h-4 w-4 text-blue-600 mr-2" />
                      <span className="text-sm">All certificates are HRD Corp compliant</span>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="registration" className="border border-blue-200 rounded-lg px-6 glass bg-white/80 backdrop-blur-sm">
                <AccordionTrigger className="text-blue-900 font-semibold text-left">
                  How do I register for a training program?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  <p className="mb-3">You can register for our training programs through multiple channels:</p>
                  <div className="space-y-2 mt-4">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Contact us via phone: 019 - 387 1868</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Fill out our contact form on the website</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">WhatsApp us for quick registration</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Email us at info@impianhelang.com</span>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="group-size" className="border border-blue-200 rounded-lg px-6 glass bg-white/80 backdrop-blur-sm">
                <AccordionTrigger className="text-blue-900 font-semibold text-left">
                  What is the typical group size for training sessions?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-600 pl-4">
                      <h4 className="font-semibold text-blue-900">Emotional Intelligence</h4>
                      <p className="text-sm text-gray-600">Group sessions: 10-20 participants</p>
                      <p className="text-sm text-gray-600">Private sessions: 1-5 participants</p>
                    </div>
                    <div className="border-l-4 border-green-600 pl-4">
                      <h4 className="font-semibold text-blue-900">Train The Trainer Programme</h4>
                      <p className="text-sm text-gray-600">Small groups: 5-12 participants</p>
                      <p className="text-sm text-gray-600">Ensures personalized attention and hands-on practice</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="materials" className="border border-blue-200 rounded-lg px-6 glass bg-white/80 backdrop-blur-sm">
                <AccordionTrigger className="text-blue-900 font-semibold text-left">
                  Are training materials provided?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  <p className="mb-3">Yes, all participants receive comprehensive training materials including:</p>
                  <div className="space-y-2 mt-4">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Training manuals and workbooks</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Digital resources and templates</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Certificate of completion</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Post-training support materials</span>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="follow-up" className="border border-blue-200 rounded-lg px-6 glass bg-white/80 backdrop-blur-sm">
                <AccordionTrigger className="text-blue-900 font-semibold text-left">
                  Is there follow-up support after training?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  <p className="mb-3">Yes, we provide ongoing support to ensure you get the most from your training investment:</p>
                  <div className="space-y-2 mt-4">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">30-day post-training consultation</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Email support for questions</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Access to training resources</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Networking opportunities with alumni</span>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
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