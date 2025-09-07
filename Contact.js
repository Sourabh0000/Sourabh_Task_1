import React from 'react';

export default function Contact(){
  const [form, setForm] = React.useState({ name:'', email:'', message:'' });
  const [status, setStatus] = React.useState(null);

  const handleChange = e => setForm({...form, [e.target.name]: e.target.value});

  const handleSubmit = async (e) =>{
    e.preventDefault();
    setStatus('sending');
    try{
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if(res.ok){
        setStatus('sent');
        setForm({ name:'', email:'', message:'' });
      } else {
        const body = await res.json();
        setStatus('error: ' + (body.error || 'unknown'));
      }
    } catch(err){
      setStatus('error: network');
    }
  }

  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>Name</label>
        <input name="name" value={form.name} onChange={handleChange} required />

        <label>Email</label>
        <input name="email" value={form.email} onChange={handleChange} required type="email" />

        <label>Message</label>
        <textarea name="message" value={form.message} onChange={handleChange} required />

        <button type="submit">Send</button>
      </form>
      {status && <p className="status">{status}</p>}
    </section>
  );
}