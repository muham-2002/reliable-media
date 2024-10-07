import { Cpu, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
            document.body.style.paddingRight = ''
        }

        return () => {
            document.body.style.overflow = ''
            document.body.style.paddingRight = ''
        }
    }, [isMenuOpen])

    return (
        <div className="relative">
            <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleMenu}></div>
            <header className="px-4 lg:px-6 h-14 flex items-center relative z-50">
                <a className="flex items-center justify-center" href="#home">
                    <Cpu className="h-6 w-6 text-purple-400" />
                    <span className="ml-2 text-2xl font-bold text-white">Reliable Media</span>
                </a>
                <nav className={`
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          fixed top-14 right-0 bottom-0 w-[70%] 
          bg-white md:bg-transparent
          flex flex-col md:flex-row
          items-center justify-start md:justify-end
          space-y-8 md:space-y-0 md:space-x-6
          transition-transform duration-300 ease-in-out
          md:relative md:top-0 md:translate-x-0 md:ml-auto md:w-auto
          pt-8 md:pt-0 overflow-y-auto
        `}>
                    <a className="text-base font-medium hover:underline text-gray-800 md:text-gray-100" href="#services" onClick={closeMenu}>
                        Services
                    </a>
                    <a className="text-base font-medium hover:underline text-gray-800 md:text-gray-100" href="#about" onClick={closeMenu}>
                        About
                    </a>
                    <a className="text-base font-medium hover:underline text-gray-800 md:text-gray-100" href="#process" onClick={closeMenu}>
                        Process
                    </a>
                    <a className="text-base font-medium hover:underline text-gray-800 md:text-gray-100" href="#metrics" onClick={closeMenu}>
                        Metrics
                    </a>
                    <a className="text-base font-medium hover:underline text-gray-800 md:text-gray-100" href="#contact" onClick={closeMenu}>
                        Contact
                    </a>
                </nav>
                <button
                    className="ml-auto md:hidden text-white z-50"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </header>
        </div>
    )
}