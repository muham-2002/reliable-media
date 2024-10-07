import { Cpu, MapPin, Mail } from "lucide-react"

export default function Footer() {
  return (
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
  )
}