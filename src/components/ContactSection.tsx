"use client";

import { useState } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
    }, 1000);
  }

  return (
    <div className="contact-grid reveal">
      <div className="contact-form">
        <h3 style={{ fontSize: '1.4rem', marginBottom: '24px' }}>Send a message</h3>
        
        {status === "success" ? (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <h3 style={{ color: 'var(--pink)', marginBottom: '10px' }}>Message Sent</h3>
            <p style={{ color: 'var(--dim)', marginBottom: '20px' }}>I'll review your project details and get back to you shortly.</p>
            <button onClick={() => setStatus("idle")} className="btn btn-ghost">Send Another</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="name">Your name</label>
              <input id="name" name="name" type="text" placeholder="Full name" required />
            </div>
            <div className="field">
              <label htmlFor="email">Email address</label>
              <input id="email" name="email" type="email" placeholder="you@example.com" required />
            </div>
            <div className="field">
              <label htmlFor="service">Project type</label>
              <select id="service" name="service" required>
                <option>App Development</option>
                <option>Web Development</option>
                <option>UI/UX Design</option>
                <option>Other</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="message">Message & details</label>
              <textarea id="message" name="message" placeholder="Tell me about the project" required></textarea>
            </div>
            
            {status === "error" && <p style={{ color: 'var(--pink)', marginBottom: '15px' }}>An error occurred. Please try again.</p>}
            
            <button type="submit" disabled={status === "loading"} className="btn btn-primary submit-btn" style={{ opacity: status === "loading" ? 0.7 : 1 }}>
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
      
      <div className="contact-info">
        <h3 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>Contact info</h3>
        <p style={{ color: 'var(--dim)', fontSize: '0.9rem', marginBottom: '14px' }}>Based in Assam, building for the web and mobile.</p>
        <div className="info-row">
          <span className="ic">◍</span>
          <div>
            <h4>Location</h4>
            <p>Guwahati, Assam</p>
          </div>
        </div>
        <div className="info-row">
          <span className="ic">✉</span>
          <div>
            <h4>Email</h4>
            <p>contact@abusahid.com</p>
          </div>
        </div>
        <div className="info-row">
          <span className="ic">📱</span>
          <div>
            <h4>Socials</h4>
            <p>@abusahid</p>
          </div>
        </div>
        <div className="map-block">
          <div className="map-pin"></div>
          <span className="map-label">GUWAHATI, ASSAM</span>
        </div>
      </div>
    </div>
  );
}
