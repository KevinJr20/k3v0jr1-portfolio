'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isLightMode, setIsLightMode] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const basePath = process.env.NODE_ENV === 'production' ? '/k3v0jr1-portfolio' : '';


  useEffect(() => {
    // Apply light-mode class to body (exactly like original)
    if (isLightMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [isLightMode]);

  return (
    <>
      <header>
        <a href="#" className="logo">Kevin Omondi Jr.</a>

        <div className="nav-menu">
          <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        <div className="header-actions">
          <button className="menu-toggle" onClick={() => setIsDropdownOpen(v => !v)}>☰</button>
          <a href={`${basePath}/CV-Kevin.pdf`} download className="resume-btn desktop-only">
            View My Resume
          </a>
          <button id="theme-toggle" onClick={() => setIsLightMode(v => !v)}>
            {isLightMode ? '☀️' : '🌙'}
          </button>
        </div>

        <div className={`dropdown ${isDropdownOpen ? 'active' : ''}`}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href={`${basePath}/CV-Kevin.pdf`} download className="resume-btn">
            View My Resume
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <img src={`${basePath}/CROP_1619300132124.jpg`} alt="Kevin Omondi Jr. portrait" loading="lazy" />
          <div className="intro">
            <p>Hi, I'm Kevin Omondi Jr.<br />A Pro-AI Developer from Kisumu, Kenya.<br />Building inclusive technology for African communities.</p>
          </div>
        </section>

        <section className="bio" id="about">
          <h2>About Me</h2>
          <p style={{ maxWidth: '800px', margin: '20px auto', fontSize: '1.1em' }}>
            I’m a self-taught AI developer from Kisumu, Kenya, passionate about using technology to solve real-world challenges in underserved communities.
            My projects like <strong>SasaMum (Mobile App)</strong> and the <strong>Sheng-Dholuo Translator</strong> focus on maternal health and African language preservation. On the other hand, I have built robust systems like a <strong>Biometric Check-In/Out System</strong> and a <strong>Victoria Marketplace E-commerce Platform</strong> that I envision to ease the operations of local businesses - they have a local-first emphasis and integrate local payment solutions such as M-Pesa.
            Skilled in Python, React Native, Flask, Django, and AI/ML, I’m always open to collaborations and scaling impactful ideas.
          </p>
        </section>

        <section className="skills" id="skills">
          <h2>Skills & Expertise</h2>
          <ul className="skills-list">
            <li><strong>Languages:</strong> Python, JavaScript/TypeScript, Java, PHP</li>
            <li><strong>Frameworks:</strong> React Native, Flask, Django, Tailwind CSS, Gradle/Maven</li>
            <li><strong>AI/ML:</strong> Machine Learning, NLP, Google Colab</li>
            <li><strong>Testing:</strong> Pytest, Mockito, Postman, Playwright, Swagger, Cypress</li>
            <li><strong>Integrations:</strong> M-Pesa, PayPal, Stripe, BoldSign SDK, Spotify API</li>
            <li><strong>Tools:</strong> Git/GitHub, PyPI, OpenAPI, Unit & Integration Testing</li>
          </ul>
        </section>

        <section className="projects" id="projects">
          <h2>Featured Projects</h2>
          <div className="project-grid">
            {[
              { img: 'SasaMum.png', title: 'SasaMum App', desc: 'Pregnancy tracker + AI risk prediction for Kenyan moms', link: 'https://github.com/KevinJr20/sasamum-app' },
              { img: 'logo.png', title: 'Biometric Check-In/Out', desc: 'Flask attendance system with M-Pesa integration', link: 'https://github.com/KevinJr20/K3V0JR1-check-in-out/tree/python-checkin-out' },
              { img: 'victoriamktplc.png', title: 'Victoria Marketplace', desc: 'Django e-commerce with M-Pesa & multilingual support', link: 'https://github.com/KevinJr20/victoria-marketplace' },
              { img: 'SDLtrns.png', title: 'Sheng-Dholuo Translator', desc: 'AI-powered translation tool published on PyPI', link: 'https://github.com/KevinJr20/SDL-translator' },
            ].map((p, i) => (
              <div key={i} className="project-card" style={{ backgroundImage: `url(${basePath}/${p.img})` }}>
                <div className="project-info">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <a href={p.link} target="_blank" rel="noopener noreferrer">View Project →</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact">
          <h2>Get in Touch</h2>
          <p style={{ fontSize: '1.2em', margin: '20px 0' }}>K3V0JR1 is always open to collaborate on the next big idea. Reach out: 👇🏽</p>
          <div className="contact-icons">
            <a href="mailto:kevojr69@gmail.com">
              <img src="https://cdn-icons-png.flaticon.com/512/7469/7469200.png" alt="Email" width={40} height={40} />
            </a>
            <a href="https://github.com/KevinJr20" target="_blank" rel="noopener noreferrer">
              <img
                src={`${basePath}/GitHub-Mark.png`}
                alt="GitHub"
                width={40}
                height={40}
                style={{ filter: isLightMode ? 'invert(1)' : 'none' }}
              />
            </a>
            <a href="https://www.linkedin.com/in/kevin-omondi-jr-a04529362" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" width={40} height={40} />
            </a>
            <a href="https://wa.me/qr/27U6MJNSRVMYG1" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/color/512/whatsapp.png" alt="WhatsApp" width={40} height={40} />
            </a>
            <a href="https://x.com/K3V0JR1" target="_blank" rel="noopener noreferrer">
              <svg width="40" height="40" viewBox="0 0 24 24" fill={isLightMode ? '#000' : '#fff'}>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </section>

        <footer>
          &copy; <span id="year">{new Date().getFullYear()}</span> Kevin Omondi Jr. All rights reserved.
        </footer>
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display&family=Montserrat:wght@400;700&display=swap');

        :root {
          --bg-color: #000000;
          --text-color: #ffffff;
          --section-bg: #000000;
          --header-bg: #000000;
          --nav-bg: rgba(0, 0, 0, 0.8);
          --link-color: #fff;
          --accent-color: #3b82f6;
        }

        body.light-mode {
          --bg-color: #ffffff;
          --text-color: #333;
          --section-bg: #f8f8f8;
          --header-bg: #f8f8f8;
          --nav-bg: rgba(248, 248, 248, 0.8);
          --link-color: #333;
        }

        html { scroll-behavior: smooth; }

        body {
          margin: 0;
          font-family: 'Montserrat', sans-serif;
          background-color: var(--bg-color);
          color: var(--text-color);
          line-height: 1.6;
          transition: background-color 0.3s, color 0.3s;
        }

        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 40px;
          background-color: var(--header-bg);
          position: fixed;
          width: 100%;
          z-index: 10;
          height: 100px;
          box-sizing: border-box;
        }

        header a.logo {
          font-size: 1.5em;
          font-family: 'Playfair Display', serif;
          text-decoration: none;
          color: var(--link-color);
        }

        header a.logo:hover { color: var(--accent-color); }

        .menu-toggle {
          display: none;
          font-size: 1.5em;
          background: none;
          border: none;
          color: var(--link-color);
          cursor: pointer;
        }

        nav a {
          margin: 0 15px;
          text-decoration: none;
          color: var(--link-color);
          font-weight: 700;
        }

        nav a:hover { color: var(--accent-color); }

        .nav-menu { display: flex; }

        .dropdown {
          display: none;
          position: absolute;
          top: 100px;
          right: 20px;
          width: 200px;
          background-color: var(--nav-bg);
          padding: 10px;
          border-radius: 5px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
          flex-direction: column;
        }

        .dropdown.active { display: flex; }

        .dropdown a {
          margin: 10px 0;
          padding: 10px;
          text-align: center;
          color: var(--link-color);
          text-decoration: none;
        }

        .dropdown a:hover { color: var(--accent-color); }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .resume-btn {
          background-color: var(--accent-color);
          border: none;
          padding: 8px 18px;
          color: #fff;
          border-radius: 5px;
          cursor: pointer;
          font-weight: 700;
          text-decoration: none;
          font-size: 0.95em;
          white-space: nowrap;
        }

        .resume-btn:hover { opacity: 0.9; }

        #theme-toggle {
          background: none;
          border: none;
          font-size: 1.5em;
          color: var(--link-color);
          cursor: pointer;
        }

        .hero {
          display: flex;
          flex-wrap: wrap;
          padding: 90px 40px 40px;
          align-items: center;
          justify-content: center;
          background-color: var(--section-bg);
          min-height: 100vh;
          gap: 30px;
        }

        .hero img {
          width: 280px;
          height: 380px;
          object-fit: cover;
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.3);
        }

        .intro {
          text-align: center;
          font-family: 'Playfair Display', serif;
          font-size: 2.2em;
          max-width: 800px;
        }

        .bio, .skills, .projects, #contact, footer {
          padding: 60px 40px;
          text-align: center;
          background-color: var(--section-bg);
        }

        h2 {
          font-family: 'Playfair Display', serif;
          font-size: 2.5em;
          margin-bottom: 40px;
        }

        .skills-list {
          max-width: 800px;
          margin: 0 auto;
          text-align: left;
          columns: 2;
          column-gap: 40px;
        }

        .skills-list li {
          margin: 12px 0;
          font-size: 1.1em;
        }

        .skills-list strong { color: var(--accent-color); }

        .project-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 30px;
        }

        .project-card {
          width: 320px;
          height: 400px;
          background-size: cover;
          background-position: center;
          border-radius: 12px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 8px 20px rgba(0,0,0,0.3);
          transition: transform 0.3s;
        }

        .project-card:hover { transform: translateY(-10px); }

        .project-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.6);
          z-index: 1;
        }

        body.light-mode .project-card::before { background: rgba(0,0,0,0.45); }

        .project-info {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 30px;
          z-index: 2;
          color: white;
        }

        .project-info h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.6em;
          margin-bottom: 10px;
        }

        .project-info a {
          color: var(--accent-color);
          font-weight: bold;
          text-decoration: none;
        }

        .project-info a:hover { text-decoration: underline; }

        .contact-icons {
          display: flex;
          justify-content: center;
          gap: 2em;
          flex-wrap: wrap;
          margin-top: 30px;
        }

        .contact-icons img, .contact-icons svg {
          width: 40px;
          height: 40px;
          transition: transform 0.3s;
        }

        .contact-icons a:hover img, .contact-icons a:hover svg { transform: scale(1.2); }

        @media (max-width: 768px) {
          .menu-toggle { display: block; }
          .nav-menu, .resume-btn.desktop-only { display: none; }
          .dropdown { top: 100px; }
          .hero { flex-direction: column; padding-top: 120px; }
          .hero img { width: 80%; max-width: 300px; height: auto; }
          .intro { font-size: 1.6em; }
          .project-card { width: 90%; height: 380px; }
          .skills-list { columns: 1; }
        }

        @media (min-width: 769px) {
          .menu-toggle, .dropdown { display: none !important; }
        }
      `}</style>
    </>
  );
}