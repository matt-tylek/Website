// src/App.js
import './App.css';
import ServiceCard from './components/ServiceCard';

function App() {
  return (
    <main>
      {/* Hero Section */}
      <section className="section hero bg-dark">
        <img src="/avatar.jpg" alt="Matt Tylek" className="avatar" />
        <h1><span className="hero-highlight">Matt Tylek</span></h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Vivamus euismod, nunc et tincidunt efficitur, nisl nisl dapibus erat, sed aliquet lorem sapien in nulla.
        </p>
        <a href="mailto:your@email.com" className="button">Work With Me</a>
      </section>

      {/* About Section */}
      <section className="section bg-light">
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Vivamus euismod, nunc et tincidunt efficitur, nisl nisl dapibus erat, sed aliquet lorem sapien in nulla.
        </p>
      </section>

      {/* Services Section */}
      <section className="section bg-highlight">
        <h2>Services</h2>
        <div className="services-grid">
          <ServiceCard emoji="🖥️" title="Web Design" description="Beautiful, fast, and responsive designs." />
          <ServiceCard emoji="⚙️" title="Frontend Dev" description="Modern UIs with React & JavaScript." />
          <ServiceCard emoji="🚀" title="Landing Pages" description="Pages that convert and rank." />
          <ServiceCard emoji="📱" title="Responsive Design" description="Mobile-first, cross-device layouts." />
          <ServiceCard emoji="🔧" title="Site Optimization" description="Speed, SEO, and accessibility." />
          <ServiceCard emoji="💼" title="Consulting" description="Tech stack advice & project planning." />
        </div>
      </section>

      {/* Projects Section Placeholder */}
      <section className="section">
        <h2>Projects</h2>
        <p>[Project cards will go here — add screenshots, links, and descriptions]</p>
      </section>

      {/* Contact Section */}
      <section className="section bg-light contact">
        <h2>Contact Me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Vivamus euismod, nunc et tincidunt efficitur, nisl nisl dapibus erat, sed aliquet lorem sapien in nulla.
        </p>
        <a href="mailto:your@email.com" className="button">Send Me an Email</a>
      </section>

      {/* Footer */}
      <footer className="section footer">
        <p>&copy; {new Date().getFullYear()} Matt Tylek — Built with React</p>
      </footer>
    </main>
  );
}

export default App;