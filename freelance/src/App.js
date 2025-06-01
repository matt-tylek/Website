// src/App.js
import './App.css';
import ServiceCard from './components/ServiceCard';

function App() {
  return (
    <main>
      {/* Hero Section */}
      <div className="full-width bg-dark">
        <section className="section hero">
          <h1><span className="hero-highlight">Matt Tylek</span></h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Vivamus euismod, nunc et tincidunt efficitur, nisl nisl dapibus erat, sed aliquet lorem sapien in nulla.
          </p>
          <a href="mailto:your@email.com" className="button">Work With Me</a>
        </section>
      </div>

      {/* About Section */}
      <div className="full-width bg-light">
        <section className="section">
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Vivamus euismod, nunc et tincidunt efficitur, nisl nisl dapibus erat, sed aliquet lorem sapien in nulla.
          </p>
        </section>
      </div>

      {/* Services Section */}
      <div className="full-width bg-highlight">
        <section className="section">
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
      </div>

      {/* Projects Section */}
      <div className="full-width">
        <section className="section">
          <h2>Projects</h2>
          <p>[Project cards will go here — add screenshots, links, and descriptions]</p>
        </section>
      </div>

      {/* Contact Section */}
      <div className="full-width bg-light">
        <section className="section contact">
          <h2>Contact Me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Vivamus euismod, nunc et tincidunt efficitur, nisl nisl dapibus erat, sed aliquet lorem sapien in nulla.
          </p>
          <a href="mailto:your@email.com" className="button">Send Me an Email</a>
        </section>
      </div>

      {/* Footer */}
      <footer className="section footer">
        <p>&copy; {new Date().getFullYear()} Matt Tylek</p>
      </footer>
    </main>
  );
}

export default App;