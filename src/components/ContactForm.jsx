import { useState } from 'react'
import emailjs from 'emailjs-com'

function ContactForm() {

  const sendEmail = e => {
    e.preventDefault()
    console.log(contactForm);

    emailjs.sendForm('service_ed03xzb', 'template_g6lnbry', '#contactForm', 'vQNZnKX0nIU7rwEGq')
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      })
  }

  return (
    <form onSubmit={sendEmail} id='contactForm'>
      <div className="mb-5">
      <label htmlFor="name">Nombre</label>
        <input
          type="text"
          placeholder="Nombre"
          required
          className="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
          name="name"
        />
        <div className="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
          Este campo es obligatorio.
        </div>
      </div>
      <div className="mb-5">
        <label htmlFor="subject">Asunto</label>
        <input
          type="text"
          placeholder="I want more info about pet plans ..."
          required
          className="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
          name="subject"
        />
        <div className="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
          Este campo es obligatorio.
        </div>
      </div>
      <div className="mb-5">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          name="email"
          required
          className="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
        />
        <div className="empty-feedback text-red-400 text-sm mt-1">
          Este campo es obligatorio.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="email">Mensaje</label>
        <textarea
          name="message"
          required
          placeholder="Escribe tu mensaje"
          className="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none h-36 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
        />
        <div className="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
          Este campo es obligatorio.
        </div>
      </div>
      <button type='submit'>Enviar</button>
    </form>
  )
}

export default ContactForm