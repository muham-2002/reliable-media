import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Cpu, Zap, Target, ArrowRight, Brain, Database, Star, Users, Rocket, Award, Filter, Send, MapPin, Mail, BarChart, PieChart, TrendingUp } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#home">
          <Cpu className="h-6 w-6 text-purple-400" />
          <span className="ml-2 text-2xl font-bold text-white">Reliable Media</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline text-gray-100" href="#services">
            Services
          </a>
          <a className="text-sm font-medium hover:underline text-gray-100" href="#about">
            About
          </a>
          <a className="text-sm font-medium hover:underline text-gray-100" href="#process">
            Process
          </a>
          <a className="text-sm font-medium hover:underline text-gray-100" href="#metrics">
            Metrics
          </a>
          <a className="text-sm font-medium hover:underline text-gray-100" href="#contact">
            Contact
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section id="home" className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Supercharge Your Lead Generation with AI
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                  Unlock high-quality leads in Fintech, Mass Torts, and FemTech with our cutting-edge AI technology. Experience up to 300% increase in conversion rates.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-purple-600 text-white hover:bg-purple-700">
                  Start Your AI Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="bg-white text-purple-900 hover:bg-gray-100">
                  See How It Works
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-purple-900">Our Services</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <Zap className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Fintech</h3>
                <p className="text-gray-600">Innovative lead generation solutions for the financial technology sector.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Target className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Mass Torts</h3>
                <p className="text-gray-600">Efficient lead acquisition for large-scale legal cases and class actions.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Cpu className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">FemTech</h3>
                <p className="text-gray-600">Targeted lead generation for women's health and wellness technology.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-purple-50">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-purple-900">About Reliable Media</h2>
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 items-start">
              <div className="flex flex-col items-center text-center">
                <Users className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Our Team</h3>
                <p className="text-gray-600">
                  We're a diverse group of AI experts, data scientists, and industry specialists committed to revolutionizing lead generation.
                  Our team brings together decades of experience in Fintech, Mass Torts, and FemTech.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Rocket className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                <p className="text-gray-600">
                  At Reliable Media, we're on a mission to transform lead generation through the power of AI.
                  We aim to provide our clients with the most accurate, efficient, and ethical lead generation solutions in the industry.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Award className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Our Achievements</h3>
                <p className="text-gray-600">
                  Since our founding in 2018, we've helped over 500 companies increase their lead quality by an average of 200%.
                  We're proud to be recognized as industry leaders in AI-driven lead generation.
                </p>
              </div>
            </div>
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold mb-4 text-purple-900">Our Values</h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-3xl mx-auto">
                {["Innovation", "Integrity", "Collaboration", "Excellence"].map((value, index) => (
                  <div key={index} className="bg-purple-100 rounded-lg p-4">
                    <p className="font-semibold text-purple-800">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id="process" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-indigo-900 to-purple-900">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-white">Our AI-Driven Process</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: <Database className="h-10 w-10 text-purple-400" />,
                  title: "Data Collection",
                  description: "We gather diverse, high-quality data from multiple sources to ensure comprehensive insights."
                },
                {
                  icon: <Brain className="h-10 w-10 text-purple-400" />,
                  title: "AI Analysis",
                  description: "Our advanced AI algorithms analyze and interpret the data to identify potential leads."
                },
                {
                  icon: <Filter className="h-10 w-10 text-purple-400" />,
                  title: "Lead Qualification",
                  description: "Leads are scored and ranked based on their likelihood to convert, optimizing your efforts."
                },
                {
                  icon: <Send className="h-10 w-10 text-purple-400" />,
                  title: "Targeted Delivery",
                  description: "Qualified leads are delivered to you through our secure, user-friendly platform."
                }
              ].map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                  {step.icon}
                  <h3 className="text-xl font-bold mt-4 mb-2 text-white">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                  {index < 3 && <ArrowRight className="h-6 w-6 text-purple-400 mt-4 hidden lg:block" />}
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="metrics" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-purple-900">Our Proven Results</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center bg-purple-50 rounded-lg p-6">
                <BarChart className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-2xl font-bold mb-2 text-purple-900">300%</h3>
                <p className="text-gray-600">Average increase in lead conversion rates</p>
              </div>
              <div className="flex flex-col items-center text-center bg-purple-50 rounded-lg p-6">
                <PieChart className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-2xl font-bold mb-2 text-purple-900">85%</h3>
                <p className="text-gray-600">Improvement in lead quality</p>
              </div>
              <div className="flex flex-col items-center text-center bg-purple-50 rounded-lg p-6">
                <TrendingUp className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-2xl font-bold mb-2 text-purple-900">50%</h3>
                <p className="text-gray-600">Reduction in cost per acquisition</p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <p className="text-lg text-gray-600 mb-6">Our AI-driven approach has consistently delivered outstanding results across industries:</p>
              <ul className="inline-block text-left text-gray-600">
                <li className="mb-2 flex items-center">
                  <ArrowRight className="h-4 w-4 text-purple-600 mr-2" />
                  Fintech: 250% increase in qualified leads for investment platforms
                </li>
                <li className="mb-2 flex items-center">
                  <ArrowRight className="h-4 w-4 text-purple-600 mr-2" />
                  Mass Torts: 400% growth in potential claimant identification
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-purple-600 mr-2" />
                  FemTech: 200% boost in engagement for women's health apps
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-50">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-purple-900">What Our Clients Say</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote: "Reliable Media's AI-powered lead generation has transformed our Fintech marketing strategy. We've seen a 300% increase in qualified leads!",
                  author: "Sarah Johnson",
                  company: "FinovateX",
                  rating: 5
                },
                {
                  quote: "As a Mass Torts law firm, we needed a partner who understood our unique challenges. Reliable Media delivered beyond our expectations.",
                  author: "Michael Chen",
                  company: "Chen & Associates",
                  rating: 5
                },
                {
                  quote: "The leads we receive are so well-targeted to our FemTech products. It's clear that their AI really understands our market.",
                  author: "Emily Rodriguez",
                  company: "HerHealth Technologies",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <div key={index} className="flex flex-col items-center text-center bg-white rounded-lg p-6 shadow-md">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-600 italic mb-4">"{testimonial.quote}"</blockquote>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-900 to-indigo-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Ready to Transform Your Lead Generation?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contact us today to learn how our AI-powered solutions can supercharge your business growth.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="space-y-4">
                  <Input className="bg-white text-purple-900" placeholder="Your Name" type="text" required />
                  <Input className="bg-white text-purple-900" placeholder="Your Email" type="email" required />
                  <Input className="bg-white text-purple-900" placeholder="Your Company" type="text" required />
                  <Textarea className="bg-white text-purple-900" placeholder="Your Message" required />
                  <Button className="w-full bg-purple-600 text-white hover:bg-purple-700">
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                <p className="text-xs text-gray-300">
                  By contacting us, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 px-4 md:px-6 border-t border-purple-300 bg-indigo-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="flex flex-col space-y-2">
              <p className="text-sm text-gray-300">© 2024 Reliable Media. All rights reserved.</p>
              <nav className="flex gap-4">
                <a className="text-xs hover:underline underline-offset-4 text-gray-300" href="#terms">
                  Terms of Service
                </a>
                <a className="text-xs hover:underline underline-offset-4 text-gray-300" href="#privacy">
                  Privacy Policy
                </a>
              </nav>
            </div>
            <div className="flex flex-col space-y-2 text-sm text-gray-300">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-purple-400" />
                <p>15021 Ventura Blvd., #789, Sherman Oaks, CA 91403</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-purple-400" />
                <a href="mailto:info@reliablemedia.co" className="hover:underline">info@reliablemedia.co</a>
              </div>
            </div>
            <div className="flex justify-start md:justify-end">
              <a className="flex items-center justify-center" href="#home">
                <Cpu className="h-6 w-6 text-purple-400" />
                <span className="ml-2 text-xl font-bold text-white">Reliable Media</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}