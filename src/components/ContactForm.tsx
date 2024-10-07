'use client'

import { useState } from "react"
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight } from "lucide-react"

const ContactForm = () => {
  const [user_name, setUserName] = useState('')
  const [user_email, setUserEmail] = useState('')
  const [user_company, setUserCompany] = useState('')
  const [user_message, setUserMessage] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (user_name === '' || user_email === '' || user_company === '' || user_message === '') {
      toast.error('Please complete all form fields first.')
    } else {
      emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        {
          user_name,
          user_email,
          user_company,
          user_message
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      ).then(function (response) {
        toast.success('Form submitted successfully!')
      }, function (error) {
        toast.error('Failed to submit form. Please try again.')
      });
      setUserName("")
      setUserEmail("")
      setUserCompany("")
      setUserMessage("")
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <Input 
        className="bg-white text-purple-900" 
        placeholder="Your Name" 
        type="text" 
        required 
        value={user_name}
        onChange={(e) => setUserName(e.target.value)}
      />
      <Input 
        className="bg-white text-purple-900" 
        placeholder="Your Email" 
        type="email" 
        required 
        value={user_email}
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <Input 
        className="bg-white text-purple-900" 
        placeholder="Your Company" 
        type="text" 
        required 
        value={user_company}
        onChange={(e) => setUserCompany(e.target.value)}
      />
      <Textarea 
        className="bg-white text-purple-900" 
        placeholder="Your Message" 
        required 
        value={user_message}
        onChange={(e) => setUserMessage(e.target.value)}
      />
      <Button type="submit" className="w-full bg-purple-600 text-white hover:bg-purple-700">
        Send Message
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </form>
  )
}

export default ContactForm;