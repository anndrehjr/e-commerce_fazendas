"use client"

import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  const [fadeIn, setFadeIn] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setFadeIn(true)
    return () => setFadeIn(false)
  }, []) // Removed unnecessary dependency: location.pathname

  return (
    <div className={`transition-opacity duration-300 ${fadeIn ? "opacity-100" : "opacity-0"}`}>
      <Navbar />
      <div className="pt-16">
        {" "}
        {/* Adiciona padding-top para compensar a navbar fixa */}
        {children}
      </div>
    </div>
  )
}

export default Layout

