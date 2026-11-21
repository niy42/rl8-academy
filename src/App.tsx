import { useState } from 'react'
import { ArrowDownRight, ArrowRight, ArrowUpRight, BookOpen, Check, Code2, GraduationCap, Menu, MessageCircle, Monitor, Rocket, Sparkles, X } from 'lucide-react'

const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined

function WhatsAppLink({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const message = encodeURIComponent("Hello RL8 Academy! I'm interested in the Frontend Development for Beginners course. Please share more information.")
  const href = whatsappNumber?.trim()
    ? `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${message}`
    : '#contact'
  return <a className={className} href={href} target={whatsappNumber?.trim() ? '_blank' : undefined} rel="noreferrer">{children}</a>
}

const outcomes = [
  'Create responsive websites with HTML and CSS',
  'Use JavaScript to build interactive experiences',
  'Develop modern interfaces with React',
  'Understand TypeScript and professional workflows',
  'Build and deploy portfolio-ready projects',
]

const faqs = [
  { q: 'Do I need prior coding experience?', a: 'No. This course is being designed for beginners. We will start with the foundations and build your skills progressively.' },
  { q: 'How are classes delivered?', a: 'RL8 Academy focuses on live, instructor-led learning, with guided practice, project work, and opportunities to ask questions.' },
  { q: 'Will I build real projects?', a: 'Yes. Practical exercises and projects are central to the learning experience, helping you apply each concept as you progress.' },
  { q: 'When does the first cohort start?', a: 'We are preparing the first cohort now. Contact us to register your interest and receive schedule and enrolment updates.' },
  { q: 'How much does the course cost?', a: 'Our goal is to make quality training accessible. Course fees and payment details will be shared with interested students before enrolment.' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const closeMenu = () => setMenuOpen(false)

  return (
    <main>
      <div className="announcement"><span className="announcement-dot" /> FIRST COHORT COMING SOON <span className="announcement-divider">·</span> <a href="#course">Explore the flagship course <ArrowUpRight size={13} /></a></div>
      <header className="site-header">
        <a className="brand" href="#" aria-label="RL8 Academy home">
          <span className="brand-mark"><span>RL</span><b>8</b></span>
          <span className="brand-name">RL8 <strong>ACADEMY</strong></span>
        </a>
        <button className="mobile-menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          <a href="#why" onClick={closeMenu}>Why RL8</a>
          <a href="#course" onClick={closeMenu}>Our course</a>
          <a href="#approach" onClick={closeMenu}>How you’ll learn</a>
          <a href="#faq" onClick={closeMenu}>FAQs</a>
          <WhatsAppLink className="button button-nav">Get course updates <ArrowUpRight size={15} /></WhatsAppLink>
        </nav>
      </header>

      <section className="hero section-shell">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> PRACTICAL TECH EDUCATION, BUILT AROUND YOU</div>
          <h1>Turn your curiosity into <span className="text-gradient">real-world</span> tech skills.</h1>
          <p className="hero-description">Learn software development through live instruction, hands-on projects, and guidance that helps you keep growing.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#course">Explore the first course <ArrowUpRight size={17} /></a>
            <a className="button button-quiet" href="#approach">Discover how we teach <ArrowDownRight size={17} /></a>
          </div>
          <div className="hero-proof"><div className="proof-icon"><GraduationCap size={18} /></div><p><strong>Start from the foundations.</strong><span>No prior coding experience required for our beginner pathway.</span></p></div>
        </div>
        <div className="hero-visual" aria-label="Abstract illustration of code and a learning journey">
          <div className="visual-glow" />
          <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
          <div className="code-window">
            <div className="window-top"><div className="window-dots"><i /><i /><i /></div><span>your-first-project.tsx</span><span className="window-live">● LIVE</span></div>
            <div className="code-content">
              <div className="code-line"><span className="line-no">01</span><span><i className="syntax-purple">const</i> <i className="syntax-blue">future</i> = {'{'}</span></div>
              <div className="code-line indent"><span className="line-no">02</span><span><i className="syntax-orange">skills</i>: <i className="syntax-green">'in progress'</i>,</span></div>
              <div className="code-line indent"><span className="line-no">03</span><span><i className="syntax-orange">mindset</i>: <i className="syntax-green">'keep building'</i>,</span></div>
              <div className="code-line indent"><span className="line-no">04</span><span><i className="syntax-orange">potential</i>: <i className="syntax-green">'unlimited'</i></span></div>
              <div className="code-line"><span className="line-no">05</span><span>{'}'}</span></div>
              <div className="code-line code-spacer"><span className="line-no">06</span><span /></div>
              <div className="code-line"><span className="line-no">07</span><span><i className="syntax-purple">while</i> (learning) {'{'}</span></div>
              <div className="code-line indent"><span className="line-no">08</span><span>buildSomethingNew()</span></div>
              <div className="code-line"><span className="line-no">09</span><span>{'}'}</span></div>
              <div className="code-cursor" />
            </div>
            <div className="window-footer"><span><span className="status-dot" /> Ready to build</span><span>UTF-8&nbsp;&nbsp; TypeScript</span></div>
          </div>
          <div className="floating-card float-top"><span className="float-icon"><Code2 size={17} /></span><span><strong>Learn by doing</strong><small>Not just watching</small></span></div>
          <div className="floating-card float-bottom"><span className="float-icon float-icon-gold"><Rocket size={17} /></span><span><strong>Build real projects</strong><small>Grow your portfolio</small></span></div>
          <div className="visual-caption">YOUR NEXT CHAPTER STARTS WITH A LINE OF CODE.</div>
        </div>
        <div className="hero-bottom"><span>LEARN. BUILD. GROW.</span><span>MADE FOR THE NEXT GENERATION OF BUILDERS <ArrowDownRight size={14} /></span></div>
      </section>

      <section className="value-strip"><div className="value-inner"><span><Monitor /> Live instructor-led classes</span><i /><span><Code2 /> Hands-on projects</span><i /><span><Sparkles /> Beginner-friendly learning</span><i /><span><GraduationCap /> Accessible, quality education</span></div></section>

      <section className="section section-light" id="why">
        <div className="section-shell">
          <div className="section-heading"><div><div className="eyebrow eyebrow-dark"><span className="eyebrow-line" /> THE RL8 APPROACH</div><h2>Learn with purpose.<br /><span className="muted-heading">Build with confidence.</span></h2></div><p className="section-intro">Technology should be something you can create with, not just something you consume. We make the learning journey practical, supportive, and accessible.</p></div>
          <div className="feature-grid">
            <article className="feature-card"><span className="feature-number">01 / GUIDED</span><div className="feature-icon"><BookOpen /></div><h3>Learn with real guidance</h3><p>Get structure, explanations, and the chance to ask questions as you learn directly with an instructor.</p><span className="feature-arrow"><ArrowUpRight /></span></article>
            <article className="feature-card feature-card-dark"><span className="feature-number">02 / PRACTICAL</span><div className="feature-icon"><Code2 /></div><h3>Put knowledge into practice</h3><p>Work through exercises and projects that turn new concepts into skills you can actually use.</p><span className="feature-arrow"><ArrowUpRight /></span></article>
            <article className="feature-card"><span className="feature-number">03 / ACCESSIBLE</span><div className="feature-icon"><Sparkles /></div><h3>Quality within reach</h3><p>Build valuable technology skills through thoughtfully structured training designed to remain affordable.</p><span className="feature-arrow"><ArrowUpRight /></span></article>
          </div>
        </div>
      </section>

      <section className="section course-section" id="course">
        <div className="section-shell course-layout">
          <div className="course-copy"><div className="eyebrow"><span className="eyebrow-line" /> YOUR FIRST STEP INTO DEVELOPMENT</div><div className="course-label">FLAGSHIP COURSE <span>01</span></div><h2>Frontend Development <span className="text-gradient">for Beginners.</span></h2><p className="course-description">Go from understanding how websites work to building responsive, interactive web experiences of your own. No previous coding experience needed.</p><div className="course-meta"><span><Monitor size={16} /> Live online classes</span><span><GraduationCap size={16} /> Beginner-friendly</span><span><Code2 size={16} /> Project-based</span></div><WhatsAppLink className="button button-primary">Register your interest <ArrowUpRight size={17} /></WhatsAppLink><p className="course-note">First cohort details and schedule will be announced soon.</p></div>
          <div className="curriculum-card"><div className="curriculum-top"><span>WHAT YOU’LL EXPLORE</span><span className="curriculum-mark"><Code2 size={17} /></span></div><h3>From first tag to full project.</h3><p>A guided progression through the building blocks of modern frontend development.</p><div className="curriculum-list">{['HTML & semantic structure','CSS & responsive design','JavaScript fundamentals','Modern JavaScript & APIs','React & component-based UI','TypeScript & deployment'].map((item, i) => <div className="curriculum-item" key={item}><span className="curriculum-index">0{i + 1}</span><span>{item}</span><Check size={15} /></div>)}</div><div className="curriculum-foot"><span>LEARN IT. APPLY IT. BUILD IT.</span><ArrowUpRight size={17} /></div></div>
        </div>
      </section>

      <section className="section approach-section" id="approach"><div className="section-shell"><div className="center-heading"><div className="eyebrow"><span className="eyebrow-line" /> A BETTER WAY TO LEARN</div><h2>Less passive watching.<br /><span className="muted-heading">More actual building.</span></h2><p>Every stage is designed to help you understand a concept, apply it, and grow your confidence.</p></div><div className="steps-grid"><div className="step"><span className="step-number">01</span><div className="step-icon"><MessageCircle /></div><h3>Learn together</h3><p>Join live, instructor-led sessions with clear explanations and room for questions.</p></div><div className="step-connector" /><div className="step"><span className="step-number">02</span><div className="step-icon"><Code2 /></div><h3>Practise as you go</h3><p>Reinforce what you learn with guided exercises and practical challenges.</p></div><div className="step-connector" /><div className="step"><span className="step-number">03</span><div className="step-icon"><Rocket /></div><h3>Build and grow</h3><p>Bring your skills together in projects you can keep improving and share.</p></div></div></div></section>

      <section className="section outcomes-section"><div className="section-shell outcomes-layout"><div><div className="eyebrow eyebrow-dark"><span className="eyebrow-line" /> YOUR LEARNING JOURNEY</div><h2>Build skills you can <span className="muted-heading">put to work.</span></h2><p className="outcomes-intro">Our first course is structured to take you from the fundamentals towards building and deploying your own frontend projects.</p></div><div className="outcomes-list">{outcomes.map((outcome) => <div className="outcome" key={outcome}><span><Check size={15} /></span>{outcome}</div>)}</div></div></section>

      <section className="section faq-section" id="faq"><div className="section-shell faq-layout"><div><div className="eyebrow"><span className="eyebrow-line" /> GOOD QUESTIONS</div><h2>Before you<br /><span className="muted-heading">get started.</span></h2><p>Still figuring things out? Here are a few things you might want to know.</p><WhatsAppLink className="text-link">Have another question? Talk to us <ArrowUpRight size={15} /></WhatsAppLink></div><div className="faq-list">{faqs.map((faq, i) => <div className={openFaq === i ? 'faq-item faq-open' : 'faq-item'} key={faq.q}><button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}><span>{faq.q}</span><span className="faq-toggle">{openFaq === i ? '−' : '+'}</span></button>{openFaq === i && <p>{faq.a}</p>}</div>)}</div></div></section>

      <section className="final-cta" id="contact"><div className="cta-glow" /><div className="section-shell cta-inner"><div className="eyebrow"><span className="eyebrow-line" /> YOUR NEXT CHAPTER STARTS HERE</div><h2>Ready to turn ideas<br />into <span className="text-gradient">something real?</span></h2><p>Be among the first to hear when RL8 Academy opens its doors for the first cohort.</p><WhatsAppLink className="button button-primary">Get first-cohort updates <ArrowUpRight size={17} /></WhatsAppLink><span className="cta-footnote">No pressure. Just the details when they’re ready.</span></div></section>

      <footer className="footer"><div className="section-shell"><div className="footer-main"><a className="brand" href="#" aria-label="RL8 Academy home"><span className="brand-mark"><span>RL</span><b>8</b></span><span className="brand-name">RL8 <strong>ACADEMY</strong></span></a><p>Practical technology education for curious minds and future builders.</p><a className="footer-top" href="#">BACK TO TOP <ArrowUpRight size={14} /></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} RL8 Academy. All rights reserved.</span><span>LEARN. BUILD. GROW.</span><span>Powered by curiosity. Built for what’s next.</span></div></div></footer>
    </main>
  )
}

export default App