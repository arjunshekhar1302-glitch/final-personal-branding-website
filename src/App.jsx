const strengths = [
  {
    title: 'Creative Problem Solving',
    text: 'I transform complex challenges into decisive strategic moves.',
  },
  {
    title: 'Strategic Thinking',
    text: 'Every decision is rooted in long-term growth and market clarity.',
  },
  {
    title: 'Leadership Mindset',
    text: 'I guide teams with confidence, clarity, and relentless drive.',
  },
  {
    title: 'Strong Work Ethic',
    text: 'Discipline and consistency are the foundation of every achievement.',
  },
  {
    title: 'Adaptability',
    text: 'I remain nimble in changing markets and emerging opportunities.',
  },
  {
    title: 'Innovation-Driven Thinking',
    text: 'I build tomorrow’s ideas with a practical business compass.',
  },
  {
    title: 'Dedication & Consistency',
    text: 'Progress is earned through daily focus, accountability, and resilience.',
  },
  {
    title: 'Thinking Outside the Box',
    text: 'I pursue bold solutions that stand apart from convention.',
  },
];

const values = [
  'Excellence',
  'Growth',
  'Leadership',
  'Vision',
  'Discipline',
  'Responsibility',
];

const statistics = [
  { label: '100% Commitment', description: 'Every initiative receives full focus and ownership.' },
  { label: 'Growth-Oriented Mindset', description: 'I pursue continuous improvement and strategic momentum.' },
  { label: 'Continuous Learning', description: 'I stay sharp through research, reflection, and execution.' },
  { label: 'Leadership Focused', description: 'I aim to influence with integrity, clarity, and vision.' },
];

function App() {
  return (
    <div className="page-shell">
      <main className="page-grid">
        <section className="section hero-section">
          <div className="hero-copy">
            <p className="eyebrow">Executive Profile</p>
            <h1>Your Name</h1>
            <p className="hero-subtitle">Business Strategist | Innovator | Creative Thinker</p>
            <p className="hero-text">
              Turning ideas into strategy and strategy into impact. I am ambitious, disciplined, and focused on building clear, future-ready leadership.
            </p>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame">
              <div className="portrait-inner">
                <span>Profile</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section about-section">
          <div className="section-intro">
            <p className="section-number">01</p>
            <h2>About Me</h2>
          </div>
          <p className="section-description">
            I am passionate about innovation, leadership, business growth, and solving real-world problems. I approach every opportunity with strategic discipline, intellectual curiosity, and a relentless commitment to progress.
          </p>
          <p className="section-description">
            My strengths lie in translating ambitious vision into practical execution, leading with authority, and staying consistent through hard work and intentional momentum.
          </p>
        </section>

        <section className="section strengths-section">
          <div className="section-intro">
            <p className="section-number">02</p>
            <h2>Core Strengths</h2>
          </div>
          <div className="strengths-grid">
            {strengths.map((item) => (
              <article key={item.title} className="strength-card">
                <div className="strength-badge" aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section mindset-section">
          <div className="mindset-panel">
            <p className="section-number">03</p>
            <h2>Mindset & Philosophy</h2>
            <blockquote>
              “I believe success is built through discipline, innovation, and the courage to think differently.”
            </blockquote>
            <p>
              This is the foundation for a professional identity that values clarity, ambition, and meaningful leadership.
            </p>
          </div>
        </section>

        <section className="section values-section">
          <div className="section-intro">
            <p className="section-number">04</p>
            <h2>Personal Values</h2>
          </div>
          <div className="values-grid">
            {values.map((value) => (
              <div key={value} className="value-pill">
                <span className="value-icon">•</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section stats-section">
          <div className="section-intro">
            <p className="section-number">05</p>
            <h2>Professional Focus</h2>
          </div>
          <div className="stats-grid">
            {statistics.map((stat) => (
              <article key={stat.label} className="stat-card">
                <h3>{stat.label}</h3>
                <p>{stat.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer-bar">
        <p>Your Name</p>
        <p>Built with vision. Driven by purpose.</p>
      </footer>
    </div>
  );
}

export default App;
