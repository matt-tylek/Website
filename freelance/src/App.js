import './App.css';
import ServiceCard from './components/ServiceCard';

function App() {
  return (
    <main>
      {/* Hero */}
      <section className="section hero">
        <h1>Hi, I'm Matt</h1>
        <p>I design and build clean, responsive websites for modern businesses.</p>
        <a href="mailto:your@email.com" className="button">Let’s Work Together</a>
      </section>

      {/* About */}
      <section className="section">
        <h2>About Me</h2>
        <p>I'm a freelance web developer who focuses on performance, accessibility, and great user experience. Whether you're launching your first product or need a website refresh, I'm here to help you succeed online.</p>
      </section>

      {/* Services */}
      <section className="section">
        <h2>What I Do</h2>
        <div className="services-grid">
          <ServiceCard title="Web Design" description="Beautiful, fast, and responsive designs that work on any device." />
          <ServiceCard title="Frontend Development" description="Modern UIs built with React, HTML, CSS, and JavaScript." />
          <ServiceCard title="Landing Pages" description="High-converting pages for startups, products, and online campaigns." />
          <ServiceCard title="Site Optimization" description="Speed, SEO, accessibility, and all the little things that matter." />
          <ServiceCard title="Tech Consulting" description="Advice on choosing platforms, building MVPs, and shipping faster." />
          <ServiceCard title="Portfolio Sites" description="Custom personal or business sites that look sharp and load fast." />
        </div>
      </section>

      {/* Contact */}
      <section className="section contact">
        <h2>Contact Me</h2>
        <p>If you’re looking for a dependable developer to bring your vision to life — let’s talk.</p>
        <a href="mailto:your@email.com" className="button">Send Me an Email</a>
      </section>

      {/* Footer */}
      <footer className="section footer">
        <p>&copy; {new Date().getFullYear()} Matt — Built with React</p>
      </footer>
    </main>
  );
}

export default App;
