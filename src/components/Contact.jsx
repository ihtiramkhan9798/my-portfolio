import React, { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import {
  FiSend,
  FiMapPin,
  FiMail,
  FiPhone,
} from 'react-icons/fi'
import { profile } from '../data'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    location: '',
    budget: '',
    subject: '',
    message: '',
  })

  const [status, setStatus] = useState(null)
  const sectionRef = useRef(null)

  const location = profile.location || 'Islamabad, Pakistan'
  const phone = profile.phone || '+923140076077'

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-layout > *', {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.contact-layout',
          start: 'top 85%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!form.name || !form.email || !form.message) return

    const body = encodeURIComponent(
      `Name: ${form.name}
Email: ${form.email}
Location: ${form.location}
Budget: ${form.budget}

Message:
${form.message}`
    )

    const subject = encodeURIComponent(
      form.subject || `Portfolio contact from ${form.name}`
    )

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`

    setStatus('sent')
    setForm({
      name: '',
      email: '',
      location: '',
      budget: '',
      subject: '',
      message: '',
    })

    setTimeout(() => setStatus(null), 4000)
  }

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="contact-container">
        <div className="contact-layout">
          <div className="contact-intro">
            <h2>Let&apos;s discuss your project</h2>

            <p className="contact-description">
              I&apos;m available for freelance work. Drop me a message if you
              have a project you think I&apos;d be a good fit for.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <FiMapPin />
                </div>

                <div>
                  <span>Address:</span>
                  <strong>{"Islamabad, Pakistan"}</strong>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <FiMail />
                </div>

                <div>
                  <span>My Email:</span>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <FiPhone />
                </div>

                <div>
                  <span>Call Me:</span>
                  <a href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <p className="contact-form-text">
              I&apos;m always open to discussing websites, web applications,
              and freelance opportunities.
            </p>

            <label>
              Name*
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Email*
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Location*
              <input
                type="text"
                name="location"
                value={form.location}
                onChange={handleChange}
              />
            </label>

            <div className="form-row">
              <label>
                Budget*
                <input
                  type="text"
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                />
              </label>

              <label>
                Subject*
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <label>
              Message*
              <textarea
                name="message"
                rows={3}
                value={form.message}
                onChange={handleChange}
                required
              />
            </label>

            <button type="submit" className="contact-submit">
              Submit <FiSend />
            </button>

            {status === 'sent' && (
              <p className="form-status">Opening your email client…</p>
            )}
          </form>
        </div>
      </div>

      <footer className="site-footer">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </footer>
    </section>
  )
}



// import React, { useLayoutEffect, useRef, useState } from 'react'
// import gsap from 'gsap'
// import { FiSend } from 'react-icons/fi'
// import { profile } from '../data'
// import './Contact.css'

// export default function Contact() {
//   const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
//   const [status, setStatus] = useState(null) // null | 'sent'
//   const sectionRef = useRef(null)

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from('.contact-layout > *', {
//         opacity: 0,
//         y: 30,
//         duration: 0.7,
//         stagger: 0.15,
//         ease: 'power3.out',
//         scrollTrigger: { trigger: '.contact-layout', start: 'top 85%' },
//       })
//     }, sectionRef)
//     return () => ctx.revert()
//   }, [])

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     if (!form.name || !form.email || !form.message) return

//     // Opens the visitor's email client pre-filled with the message.
//     // Swap this for a real backend/email API (e.g. EmailJS, Formspree) when you deploy.
//     const body = encodeURIComponent(
//       `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
//     )
//     const subject = encodeURIComponent(form.subject || `Portfolio contact from ${form.name}`)
//     window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`

//     setStatus('sent')
//     setForm({ name: '', email: '', subject: '', message: '' })
//     setTimeout(() => setStatus(null), 4000)
//   }

//   return (
//     <section id="contact" className="section contact-section" ref={sectionRef}>
//       <div className="section-inner">
//         <h2 className="eyebrow-heading">Get In Touch</h2>

//         <div className="contact-layout">
//           <div className="contact-intro">
//             <h3>Let's talk about everything!</h3>
//             <p>
//               Don't like forms? Send me an email at{' '}
//               <a href={`mailto:${profile.email}`}>{profile.email}</a>
//             </p>
//           </div>

//           <form className="contact-form" onSubmit={handleSubmit}>
//             <div className="form-row">
//               <input
//                 type="text" name="name" placeholder="Insert your name"
//                 value={form.name} onChange={handleChange} required
//               />
//               <input
//                 type="email" name="email" placeholder="Insert your email"
//                 value={form.email} onChange={handleChange} required
//               />
//             </div>
//             <input
//               type="text" name="subject" placeholder="Insert your subject"
//               value={form.subject} onChange={handleChange}
//             />
//             <textarea
//               name="message" placeholder="Write your message"
//               rows={5} value={form.message} onChange={handleChange} required
//             />
//             <button type="submit" className="btn-primary">
//               <FiSend /> Send Message
//             </button>
//             {status === 'sent' && <p className="form-status">Opening your email client…</p>}
//           </form>
//         </div>
//       </div>

//       <footer className="site-footer">
//         <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
//       </footer>
//     </section>
//   )
// }
