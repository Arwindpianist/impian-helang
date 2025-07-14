"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Award, Users, BookOpen, CheckCircle, MessageCircle, Calendar, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function TrainerContent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Veteran Trainer</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6" style={{ fontFamily: "Footlight MT Light, serif" }}>
              Meet Rita Krishnan
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: "Footlight MT Light, serif" }}>
              Leading our globally recognized Train The Trainer Programme with years of experience in corporate training and development.
            </p>
          </div>
        </div>
      </section>

      {/* Trainer Profile */}
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="py-10 md:py-20 bg-gradient-to-br from-blue-100 to-blue-200">
        <div className="container mx-auto px-2 sm:px-4">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="max-w-6xl mx-auto">
            <motion.div whileHover={{ scale: 1.02 }} className="border-blue-300 w-full max-w-full glass bg-white/90 backdrop-blur-sm border border-blue-300 text-blue-900">
              <CardContent className="p-4 md:p-8">
                <div className="grid gap-8 lg:grid-cols-3 items-start">
                  {/* Trainer Image and Basic Info */}
                  <div className="text-center lg:text-left">
                    <Image
                      src="/placeholder-user.jpg"
                      alt="Rita Krishnan - Veteran Trainer"
                      width={200}
                      height={200}
                      className="rounded-full mx-auto lg:mx-0 mb-4 md:mb-6 shadow-lg w-32 h-32 md:w-48 md:h-48"
                    />
                    <div className="flex justify-center lg:justify-start space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <Badge className="bg-blue-100 text-blue-800 mb-4">Veteran Trainer</Badge>
                    <h3 className="text-2xl font-bold text-blue-900 mb-2" style={{ fontFamily: "Footlight MT Light, serif" }}>
                      Rita Krishnan
                    </h3>
                    <p className="text-gray-600 mb-4">Lead Trainer & Programme Director</p>
                    
                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">15+</div>
                        <div className="text-sm text-gray-600">Years Experience</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">500+</div>
                        <div className="text-sm text-gray-600">Trainees</div>
                      </div>
                    </div>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700 mt-4 md:mt-0">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Book a Session
                    </Button>
                  </div>

                  {/* Trainer Details */}
                  <div className="lg:col-span-2 space-y-8">
                    {/* About Section */}
                    <div>
                      <h4 className="text-xl font-bold text-blue-900 mb-4" style={{ fontFamily: "Footlight MT Light, serif" }}>
                        About Rita
                      </h4>
                      <p className="text-gray-700 mb-4" style={{ fontFamily: "Footlight MT Light, serif" }}>
                        Rita Krishnan is a veteran trainer with extensive experience in corporate training and development. 
                        She has dedicated over 15 years to helping professionals enhance their training capabilities and 
                        leadership skills through structured, interactive learning experiences.
                      </p>
                      <p className="text-gray-700" style={{ fontFamily: "Footlight MT Light, serif" }}>
                        As the lead trainer for our globally recognized Train The Trainer Programme, Rita brings a unique 
                        blend of theoretical knowledge and practical experience, ensuring that every participant gains 
                        valuable insights and actionable skills for their professional development.
                      </p>
                    </div>

                    {/* Credentials */}
                    <div>
                      <h4 className="text-xl font-bold text-blue-900 mb-4" style={{ fontFamily: "Footlight MT Light, serif" }}>
                        Credentials & Certifications
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="flex items-center">
                          <Award className="h-5 w-5 text-blue-600 mr-3" />
                          <span className="text-sm">HRD Corp Certified Trainer</span>
                        </div>
                        <div className="flex items-center">
                          <Award className="h-5 w-5 text-blue-600 mr-3" />
                          <span className="text-sm">Global TTT Certification</span>
                        </div>
                        <div className="flex items-center">
                          <Award className="h-5 w-5 text-blue-600 mr-3" />
                          <span className="text-sm">Corporate Training Expert</span>
                        </div>
                        <div className="flex items-center">
                          <Award className="h-5 w-5 text-blue-600 mr-3" />
                          <span className="text-sm">Leadership Development</span>
                        </div>
                      </div>
                    </div>

                    {/* Specializations */}
                    <div>
                      <h4 className="text-xl font-bold text-blue-900 mb-4" style={{ fontFamily: "Footlight MT Light, serif" }}>
                        Areas of Expertise
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                          <span className="text-sm">Train The Trainer Methodology</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                          <span className="text-sm">Emotional Intelligence</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                          <span className="text-sm">Corporate Leadership</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                          <span className="text-sm">Team Building</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                          <span className="text-sm">Communication Skills</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                          <span className="text-sm">Conflict Resolution</span>
                        </div>
                      </div>
                    </div>

                    {/* Training Approach */}
                    <div>
                      <h4 className="text-xl font-bold text-blue-900 mb-4" style={{ fontFamily: "Footlight MT Light, serif" }}>
                        Training Approach
                      </h4>
                      <p className="text-gray-700 mb-4" style={{ fontFamily: "Footlight MT Light, serif" }}>
                        Rita believes in creating an engaging, interactive learning environment where participants can 
                        practice and refine their skills in real-time. Her training sessions combine theoretical 
                        frameworks with practical exercises, ensuring immediate application of learned concepts.
                      </p>
                      <div className="grid sm:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                          <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                          <p className="font-semibold text-blue-900">Interactive Learning</p>
                          <p className="text-sm text-gray-600">Hands-on practical sessions</p>
                        </div>
                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                          <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                          <p className="font-semibold text-blue-900">Small Groups</p>
                          <p className="text-sm text-gray-600">Personalized attention</p>
                        </div>
                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                          <CheckCircle className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                          <p className="font-semibold text-blue-900">Proven Results</p>
                          <p className="text-sm text-gray-600">Measurable outcomes</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </motion.div>
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