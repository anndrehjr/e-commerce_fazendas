"use client"

import { useState, useEffect } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { FaBars, FaTimes, FaUser, FaHome, FaList, FaEnvelope } from "react-icons/fa"

const navItems = [
  { id: "inicio", icon: FaHome, label: "Início" },
  { id: "sobre", icon: FaUser, label: "Sobre" },
  { id: "catalogo", icon: FaList, label: "Catálogo" },
  { id: "contato", icon: FaEnvelope, label: "Contato" },
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "")
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 0)
    }
  }, [location])

  const handleNavClick = (id) => {
    setIsMenuOpen(false)
    if (id === "inicio") {
      if (location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" })
      } else {
        navigate("/", { state: { fadeIn: true } })
      }
    } else if (id === "catalogo") {
      navigate("/catalogo", { state: { fadeIn: true } })
    } else if (id === "sobre" || id === "contato") {
      if (location.pathname !== "/") {
        navigate(`/#${id}`, { state: { fadeIn: true } })
      } else {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-green-800/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-white text-2xl font-bold">
            Fazendas Premium
          </Link>

          {/* Botão do menu mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Menu desktop */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="flex items-center text-white hover:text-yellow-200 transition-colors"
              >
                <item.icon className="mr-2" size={18} />
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="flex items-center text-white hover:text-yellow-200 transition-colors"
                >
                  <item.icon className="mr-2" size={18} />
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

