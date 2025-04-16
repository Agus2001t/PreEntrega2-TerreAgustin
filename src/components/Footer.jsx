import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        <a href=""><FaInstagram/></a>
        <a href=""><FaFacebook/></a>
        <a href=""><FaWhatsappSquare/></a>
        <p className="mb-1">© {new Date().getFullYear()} Villa Pino Furniture Store</p>
      </div>
    </footer>
  )
}

export default Footer
