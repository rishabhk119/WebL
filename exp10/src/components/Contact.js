import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-form-container">
          <div>
            <h2>Terminal Access</h2>
            <p style={{color: 'var(--text-secondary)', marginBottom: '30px'}}>
              Initialize a secure connection to our core engineering team. 
              Feedback loop latency: &lt; 24h.
            </p>
          </div>
          
          <div className="glass-panel" style={{
            padding: '40px',
            background: 'var(--glass-bg)',
            border: '1px solid var(--glass-border)',
            backdropFilter: 'blur(20px)'
          }}>
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <input
                  name="name"
                  placeholder="IDENTIFIER (NAME)"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <input
                  name="email"
                  type="email"
                  placeholder="PROTOCOL (EMAIL)"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  rows="4"
                  placeholder="ENCRYPTED MESSAGE"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'ENCRYPTING...' : 'INITIATE BROADCAST'}
                </button>
              </form>
            ) : (
              <div className="success-msg">
                <h3>CONNECTION ESTABLISHED</h3>
                <p>Telemetry received, {form.name}. Awaiting decryption.</p>
                <button 
                  onClick={() => setSubmitted(false)} 
                  style={{
                    marginTop: '20px', 
                    background: 'transparent', 
                    border: '1px solid #00ff80',
                    color: '#00ff80',
                    padding: '10px 20px',
                    cursor: 'pointer'
                  }}
                >
                  NEW PROTOCOL
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
