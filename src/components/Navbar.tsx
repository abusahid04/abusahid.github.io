"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      <header className="site-nav">
        <div className="nav-inner">
          <Link href="#top" className="logo" onClick={handleHomeClick}>SAHID<span style={{ color: 'var(--pink)' }}>.</span></Link>
          <nav className="links">
            <Link href="#top" onClick={handleHomeClick}>Home</Link>
            <Link href="#skills">Skills</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#about">About</Link>
            <Link href="#contact">Contact</Link>
          </nav>
          <div className="nav-right">
            <Link href="#contact" className="nav-cta">Let's Talk</Link>
            <button className="mobile-menu-btn" onClick={() => setIsOpen(true)} aria-label="Open Menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${isOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <Link href="#top" className="logo" onClick={handleHomeClick}>SAHID<span style={{ color: 'var(--pink)' }}>.</span></Link>
          <button className="mobile-close-btn" onClick={() => setIsOpen(false)} aria-label="Close Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <nav className="drawer-links">
          <Link href="#top" onClick={handleHomeClick}>Home</Link>
          <Link href="#skills" onClick={() => setIsOpen(false)}>Skills</Link>
          <Link href="#projects" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="#about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </nav>
        <div className="drawer-footer">
          <Link href="#contact" className="btn btn-primary" onClick={() => setIsOpen(false)}>Let's Talk</Link>
        </div>
      </div>
    </>
  );
}
