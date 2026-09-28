"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { config, stats, projects, skills, timeline } from './data';
import meImg from "@/assets/me.webp";

export default function Home() {
  // Initialize scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const featuredProjects = projects.slice(0, 6);

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="hero" id="top">
        <div className="wrap hero-inner">
          <div className="hero-copy">
            <span className="eyebrow">{config.role}</span>
            <h1>Digital ideas.<br/><span className="pink">Vibe coded.</span></h1>
            <p className="sub">I'm a {config.year} {config.major} student at {config.university}, building modern apps, websites, and creative digital products.</p>
            <div className="hero-ctas">
              <Link href="#contact" className="btn btn-primary">Let's Talk</Link>
              <Link href="#projects" className="btn btn-ghost">View My Work</Link>
            </div>
            <div className="trust-row">
              <span>App Development</span>
              <span>Web Design</span>
              <span>Creative UI/UX</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="rec-badge"><span className="dot"></span>LIVE — SAHID</div>
              <div className="stat-badge"><span className="n">{stats.projects}</span><span className="l">Projects Built</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee-strip">
        <div className="marquee-track">
          {skills.development.map(s => <span key={s}>{s}</span>)}
          {skills.tools.map(s => <span key={s}>{s}</span>)}
          {skills.creative.map(s => <span key={s}>{s}</span>)}
          {/* duplicate for seamless scroll */}
          {skills.development.map(s => <span key={s + '-2'}>{s}</span>)}
          {skills.tools.map(s => <span key={s + '-2'}>{s}</span>)}
        </div>
      </div>

      {/* Stats Bar */}
      <div className="wrap stat-bar">
        <div className="stat-grid reveal">
          <div className="stat-cell"><span className="n">{stats.years}</span><span className="l">Years Learning</span></div>
          <div className="stat-cell"><span className="n">{stats.projects}</span><span className="l">Projects Built</span></div>
          <div className="stat-cell"><span className="n">{stats.products}</span><span className="l">Published Products</span></div>
          <div className="stat-cell"><span className="n">{stats.ideas}</span><span className="l">Creative Ideas</span></div>
        </div>
      </div>

      {/* Skills Overview */}
      <div className="wrap" id="skills">
        <section style={{ paddingTop: 0 }}>
          <div className="section-head reveal">
            <span className="eyebrow">Skills overview</span>
            <h2>Tools that craft<br/>the experience.</h2>
          </div>
          <div className="svc-grid reveal">
            <div className="svc-card">
              <div className="icon">💻</div>
              <h3>Development</h3>
              <p>{skills.development.join(", ")}</p>
            </div>
            <div className="svc-card">
              <div className="icon">🛠️</div>
              <h3>Tools</h3>
              <p>{skills.tools.join(", ")}</p>
            </div>
            <div className="svc-card">
              <div className="icon">🎨</div>
              <h3>Creative</h3>
              <p>{skills.creative.join(", ")}</p>
            </div>
          </div>
        </section>
      </div>

      {/* Projects Grid */}
      <section id="projects" className="wrap" style={{ paddingTop: '20px' }}>
        <div className="section-head center reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>Featured Work</span>
          <h2>The projects worth<br/>hitting play on.</h2>
        </div>
        <div className="reel-grid reveal">
          {featuredProjects.map((project, i) => {
            return (
              <a href={project.url || '#'} target="_blank" rel="noopener noreferrer" key={project.id} className="reel-card">
                <div className="grade" style={{ backgroundImage: `url('${project.image}')` }}></div>
                <div className="play-btn"></div>
                <div className="reel-meta">
                  <span className="reel-cat">{project.category} • {project.status}</span>
                  <h3>{project.name}</h3>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      <section className="wrap" id="about" style={{ paddingTop: '80px' }}>
        <div className="process-grid reveal">
          <div className="process-copy" style={{ alignSelf: 'center' }}>
            <span className="eyebrow">About Me</span>
            <h2>Vibe Coder. Builder. Creator.</h2>
            <p style={{ marginTop: '20px', fontSize: '1.05rem', color: 'var(--dim)', maxWidth: '480px' }}>
              Hey, I'm Abu Sahid—but you can call me Sahid. I'm a passionate vibe coder from Assam, India, currently pursuing my B.Tech in Civil Engineering at Assam down town University. 
              <br/><br/>
              While my formal studies are in civil engineering, my true passion lies in building digital products. I specialize in Android app development and modern web development. Whether it's crafting an intuitive UI/UX, experimenting with new frameworks, or launching an app to production, I love turning creative ideas into reality.
              <br/><br/>
              When I'm not coding, I'm likely exploring the latest tech trends or figuring out how to build my next big idea.
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="team-card" style={{ width: '100%', maxWidth: '400px' }}>
              <div className="team-img" style={{ backgroundImage: `url('${meImg.src}')` }}></div>
              <div className="team-info">
                <h3>{config.name}</h3>
                <span className="team-role">Vibe Coder</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="wrap" style={{ paddingTop: '50px', paddingBottom: '80px' }}>
        <div className="section-head center reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>Get in touch</span>
          <h2>Start a project.</h2>
        </div>
        <ContactSection />
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-ghost">SAHID</div>
        <div className="wrap inner">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>Available for creative projects</span>
          <h2 className="reveal">Your idea.<br/><span className="pink">Turned into reality.</span></h2>
          <p className="sub reveal">Have an idea, project, or collaboration in mind? Let's turn it into something real.</p>
          <div className="reveal">
            <Link href="#contact" className="btn btn-primary">Let's Connect</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
