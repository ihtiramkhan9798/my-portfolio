import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { profile } from '../data'
import './WhatsAppButton.css'

export default function WhatsAppButton() {
  const message = encodeURIComponent("Hi Ihtiram! I saw your portfolio and I'd like to chat.")
  const href = `https://wa.me/${profile.whatsappNumber}?text=${message}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-fab"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <FaWhatsapp size={26} />
    </a>
  )
}
