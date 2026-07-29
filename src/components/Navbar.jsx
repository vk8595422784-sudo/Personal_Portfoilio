import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false);

  // Close the mobile menu whenever a link is clicked
  const handleLinkClick = () => setIsOpen(false);

  // Close mobile menu on window resize back to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand brand-mono" href="#top">
          ~/vikram
        </a>
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse${isOpen ? " show" : ""}`}>
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
            {NAV_LINKS.map((link) => (
              <li className="nav-item" key={link.href}>
                <a
                  className={`nav-link${activeSection === link.href.slice(1) ? " active" : ""}`}
                  href={link.href}
                  onClick={handleLinkClick}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="nav-item ms-lg-2">
              <a
                className="btn btn-signal btn-sm px-3"
                href="/Vikram_Kumar_Resume.pdf"
                download
                onClick={handleLinkClick}
              >
                <i className="bi bi-download me-1"></i>Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
