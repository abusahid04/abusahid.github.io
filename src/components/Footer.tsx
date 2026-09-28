import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="#top" className="logo">SAHID<span style={{ color: 'var(--pink)' }}>.</span></Link>
            <p>Vibe coder building modern apps, websites, and creative digital products from Assam to the world.</p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="#skills">Skills</Link></li>
              <li><Link href="#projects">Projects</Link></li>
              <li><Link href="#about">About</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <ul>
              <li><a href="https://instagram.com/sahid.io" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://github.com/abusahid04" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="mailto:contact@abusahid.com">Email</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Abu Sahid. All rights reserved.</span>
          <span>Made with Code & Curiosity</span>
        </div>
      </div>
    </footer>
  );
}
