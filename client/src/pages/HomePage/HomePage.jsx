import "./HomePage.css";

function HomePage() {

  const services = [
    "Construction and Renovation",
    "Repairs",
    "Installation",
    "Maintenance",
    "Assembly",
    "Painting",
    "Cleaning",
    "Electrical",
    "Plumbing",
    "Flooring",
    "Tiling",
    "Lighting",
    "Wall Hangings",
    "Carpentry",
    "Weahterproofing",
    "Security Upgrades",
    "Home Automation",
    "Gutter Cleaning and Maintenance",
    "Landscaping and Outdoor Maintenance",
    "Pressure Washing",
    "Minor Roof Repairs",
    "Drywall Repair",
    "Insulation Installation",
    "Window and Door Repairs",
    "Emergency Services",
  ];

  return (
    <div>
      <header>
        <h1>Royally Bazaar</h1>
      </header>

      <section id="services">
        <div className="container">
          <p>As dedicated professionals with 15 years of experience, we take pride in exceeding customer expectations. 
            Countless clients have turned to us to rectify issues left unresolved by previous contractors. We prioritize 
            even the smallest details and ensure that every job site reflects our commitment to excellence. Our track 
            record speaks volumes - No task is too challenging for us to handle.</p>
          <ul className="columns">
          <h2>Our Services</h2>
            {services.map((service, index) => (
              <li key={index}><span>{service}</span></li>
            ))}
          </ul>
        </div>
      </section>

      <section id="projects">
        <div className="container">
          <h2>Before and After Projects</h2>
          <div className="project">
            {/* Add the project images here */}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <p>Get in touch with us for all your handyman needs. We are here to assist you!</p>
          <h2>Contact Us</h2>
          <div>Royally Bazaar</div>
          <div>754-226-9101</div>
          <div>
            <a href="mailto:contact@royallybazaar.com">Contact@royallybazaar.com</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2023 Royally Bazaar</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
