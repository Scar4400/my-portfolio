// ContactForm.jsximport React, { useState } from 'react';import { motion } from 'framer-motion';const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });  const [formStatus, setFormStatus] = useState(null);  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });  };  const handleSubmit = async (e) => {
    e.preventDefault();    const res = await fetch('https://formspree.io/f/mpwalrzo', {
      method: 'POST',      body: JSON.stringify(formData),      headers: {
        'Content-Type': 'application/json',      },    });    if (res.ok) {
      setFormStatus('Success! Your message has been sent.');      setFormData({ name: '', email: '', message: '' });    } else {
      setFormStatus('Oops! Something went wrong. Please try again.');    }
  };  return (
    <form onSubmit={handleSubmit} className="space-y-6">      <div>        <label htmlFor="name" className="block mb-2">Name</label>        <input          type="text"          id="name"          name="name"          value={formData.name}          onChange={handleChange}          className="w-full p-2 border rounded"          required        />      </div>      <div>        <label htmlFor="email" className="block mb-2">Email</label>        <input          type="email"          id="email"          name="email"          value={formData.email}          onChange={handleChange}          className="w-full p-2 border rounded"          required        />      </div>      <div>        <label htmlFor="message" className="block mb-2">Message</label>        <textarea          id="message"          name="message"          value={formData.message}          onChange={handleChange}          className="w-full p-2 border rounded"          required        />      </div>      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">        Send
      </button>      {formStatus && (
        <motion.p          initial={{ opacity: 0 }}          animate={{ opacity: 1 }}          className="mt-4 text-green-600"        >          {formStatus}        </motion.p>      )}    </form>  );};export default ContactForm;