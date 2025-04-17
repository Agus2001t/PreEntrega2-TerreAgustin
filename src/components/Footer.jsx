import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        <a href="https://www.instagram.com/villapino_muebleria?igsh=MXBqanBnZjF2anc1Ng==" target='blank'><FaInstagram/></a>
        <a href="https://www.facebook.com/share/1CLbEsKxFj/" target='blank'><FaFacebook/></a>
        <a href="http://wa.me/5493471594453" target='blank'><FaWhatsappSquare/></a>
        <p className="mb-1">© {new Date().getFullYear()} Villa Pino Furniture Store</p>
      </div>
    </footer>
  )
}

export default Footer
