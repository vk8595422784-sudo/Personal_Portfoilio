import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [typedName, setTypedName] = useState("");
  const [typedRole, setTypedRole] = useState("");
  const [roleDone, setRoleDone] = useState(false);
  const hasRun = useRef(false);

  useEffect(() => {
    // React 18 StrictMode runs effects twice in dev; guard so the type animation only starts once
    if (hasRun.current) return;
    hasRun.current = true;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const name = "Vikram";
    const role = "MERN Stack Developer (Fresher)";

    if (prefersReducedMotion) {
      setTypedName(name);
      setTypedRole(role);
      setRoleDone(true);
      return;
    }

    let i = 0;
    const typeName = setInterval(() => {
      i++;
      setTypedName(name.slice(0, i));
      if (i >= name.length) {
        clearInterval(typeName);
        let j = 0;
        const typeRole = setInterval(() => {
          j++;
          setTypedRole(role.slice(0, j));
          if (j >= role.length) {
            clearInterval(typeRole);
            setRoleDone(true);
          }
        }, 45);
      }
    }, 90);

    return () => clearInterval(typeName);
  }, []);

  return (
    <header id="top" className="hero d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center gy-5">
          <div className="col-lg-7">
            <p className="eyebrow-mono mb-3">
              // available for full-time roles
            </p>
            <div className="terminal-window shadow-lg">
              <div className="terminal-titlebar">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
                <span className="terminal-path">vikramkumar@it:~</span>
              </div>
              <div className="terminal-body">
                <p className="term-line">
                  <span className="prompt">$</span> who i am
                </p>
                <p className="term-out">{typedName}</p>
                <p className="term-line">
                  <span className="prompt">$</span> cat role.txt
                </p>
                <p className="term-out">
                  {typedRole}
                  {!roleDone && <span className="cursor">&#9608;</span>}
                </p>
                {roleDone && (
                  <>
                    <p className="term-line">
                      <span className="prompt">$</span> cat status.txt
                    </p>
                    <p className="term-out term-highlight">
                      Fresher &middot; open to opportunities
                    </p>
                  </>
                )}
              </div>
            </div>
            <div className="d-flex flex-wrap gap-3 mt-4">
              <a
                href="/Vikram_Kumar_Resume.pdf"
                download
                className="btn btn-signal btn-lg px-4"
              >
                <i className="bi bi-download me-2"></i>Download Resume
              </a>
              <a href="#contact" className="btn btn-outline-light btn-lg px-4">
                Get in Touch
              </a>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="avatar-card mx-auto">
              <div className="avatar-circle">
                <img className="avatar-photo" src="/profile.jpg" alt="VK" />
              </div>
              <p className="mb-0 mt-4 fw-semibold text-center name-display">
                Vikram
              </p>
              <p className="text-center subtitle-mono mb-0">
                MERN Stack Developer
              </p>
              <hr className="avatar-rule" />
              <ul className="list-unstyled avatar-meta mb-0">
                <li>
                  <i className="bi bi-geo-alt"></i> Gurgaon, Haryana
                </li>
                <li>
                  <i className="bi bi-mortarboard"></i> BCA Final Year
                </li>
                <li>
                  <i className="bi bi-code-slash"></i> HTML &middot; CSS
                  &middot; JS &middot; React
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
