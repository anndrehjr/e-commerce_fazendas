"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const navItems = [
  { id: "inicio", label: "Início", href: "/" },
  { id: "sobre", label: "Sobre", href: "/#sobre" },
  { id: "catalogo", label: "Catálogo", href: "/catalogo" },
  { id: "contato", label: "Contato", href: "/#contato" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const isHomePage = pathname === "/"
  const shouldUseDarkText = !isHomePage || scrolled

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        shouldUseDarkText ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-2">
            <span
              className={`font-serif text-2xl tracking-tight transition-colors duration-300 ${
                shouldUseDarkText ? "text-foreground" : "text-white"
              }`}
            >
              Fazendas Premium
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`text-sm tracking-wide uppercase transition-all duration-300 hover:text-accent relative
                  ${shouldUseDarkText ? "text-foreground" : "text-white"}
                  ${pathname === item.href ? "font-medium" : ""}
                `}
              >
                {item.label}
                {pathname === item.href && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent" />}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 transition-colors duration-300 ${
              shouldUseDarkText ? "text-foreground" : "text-white"
            }`}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-20 left-0 right-0 bg-background border-b border-border overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col py-6 px-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm tracking-wide uppercase text-foreground hover:text-accent transition-colors py-2 ${
                  pathname === item.href ? "text-accent font-medium" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
