const TRAITS = [
  "Quick Learner",
  "Problem Solver",
  "Team Player",
  "Detail-Oriented",
];

export default function About() {
  return (
    <section id="about" className="section-block section-light">
      <div className="container">
        <p className="section-tag">01 &mdash; about</p>
        <h2 className="section-title mb-4">
          A fresher developer, learning in public.
        </h2>
        <div className="row gy-4">
          <div className="col-lg-7">
            <p className="lead-body">
              A fresher developer, learning in public. I'm Vikram, a MERN Stack
              developer pursuing BCA and currently enrolled in a 1-year
              full-stack development program at Webigeeks, where I'm gaining
              hands-on experience building real-world applications. I build
              responsive web interfaces and full-stack applications using
              MongoDB, Express.js, React.js, and Node.js — turning ideas into
              clean, working products.{" "}
            </p>
            <p className="lead-body">
              I focus on writing readable code, following good UI/UX practices
              with Bootstrap, and shipping real projects like e-commerce
              platforms, REST APIs with JWT authentication, and admin
              dashboards. I'm actively looking for an entry-level developer role
              where I can learn from a strong engineering team and contribute
              from day one.
            </p>
            <div className="d-flex flex-wrap gap-2 mt-4">
              {TRAITS.map((trait) => (
                <span className="pill" key={trait}>
                  {trait}
                </span>
              ))}
            </div>
          </div>
          <div className="col-lg-5">
            <div className="info-card">
              <h6 className="info-card-title">
                <i className="bi bi-person-lines-fill me-2"></i>Quick Info
              </h6>
              <ul className="info-list">
                <li>
                  <span>Name</span>
                  <b>Vikram</b>
                </li>
                <li>
                  <span>Role</span>
                  <b>Full Stack Developer</b>
                </li>
                <li>
                  <span>Status</span>
                  <b>Fresher / BCA Final Year</b>
                </li>
                <li>
                  <span>Location</span>
                  <b>Gurgaon, Haryana</b>
                </li>
                <li>
                  <span>Resume</span>
                  <b>
                    <a href="/Vikram_Kumar_Resume.pdf" download>
                      Download PDF
                    </a>
                  </b>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
