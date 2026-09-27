import { ArrowUpRight, Code2, Mail, Menu, X } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { useState } from 'react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const skills = [
  'JavaScript',
  'React',
  'Node.js',
  'Express',
  'MongoDB',
  'Tailwind CSS',
  'Git & GitHub',
  'REST API Development',
]

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A complete shopping experience with product filtering, secure checkout flow, and admin dashboard analytics.',
    stack: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Task Management Dashboard',
    description:
      'Collaborative productivity app with Kanban boards, team assignments, and real-time progress tracking.',
    stack: ['React', 'Express', 'PostgreSQL'],
  },
  {
    title: 'Personal Finance Tracker',
    description:
      'Budget and expense management web app featuring chart-based reporting and monthly insight summaries.',
    stack: ['React', 'Chart.js', 'Firebase'],
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <div className="app">
      <header className="header">
        <a className="logo" href="#home">
          Abu Sahid
        </a>
        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <p className="eyebrow">Full-Stack Web Developer</p>
          <h1>Building clean, modern, and scalable digital experiences.</h1>
          <p className="lead">
            I am Abu Sahid, a software developer focused on creating fast, user-friendly, and impactful web
            applications.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="#projects">
              View Projects <ArrowUpRight size={16} />
            </a>
            <a className="btn secondary" href="#contact">
              Contact Me
            </a>
          </div>
        </section>

        <section id="about" className="section">
          <h2>About Me</h2>
          <p>
            I craft end-to-end web solutions from polished interfaces to reliable backend services. I enjoy turning
            ideas into products that solve real problems and deliver measurable value.
          </p>
          <p>
            My workflow emphasizes performance, accessibility, and maintainable code so each project is easy to scale
            and improve over time.
          </p>
        </section>

        <section id="skills" className="section">
          <h2>Skills</h2>
          <div className="skills-grid">
            {skills.map((skill) => (
              <span key={skill} className="skill-chip">
                <Code2 size={14} /> {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <h2>Featured Projects</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="stack-list">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact">
          <h2>Let&apos;s Connect</h2>
          <p>I am open to freelance projects, remote opportunities, and meaningful collaborations.</p>
          <div className="contact-links">
            <a href="mailto:abusahid@example.com">
              <Mail size={16} /> abusahid@example.com
            </a>
            <a href="https://github.com/abusahid04" target="_blank" rel="noreferrer">
              <FaGithub size={16} /> github.com/abusahid04
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin size={16} /> LinkedIn Profile
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">© {new Date().getFullYear()} Abu Sahid. All rights reserved.</footer>
    </div>
  )
}

export default App
