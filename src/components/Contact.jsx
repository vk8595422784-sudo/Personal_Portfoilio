import { useState } from "react";
import emailjs from "@emailjs/browser";

const CONTACT_ITEMS = [
  {
    icon: "bi-geo-alt-fill",
    label: "Address",
    value: "Laxman Vihar, Phase-2, Sector-4, Gurgaon, Haryana - 122001",
  },
  {
    icon: "bi-envelope-fill",
    label: "Email",
    value: "vikramkumarit911@gmail.com",
  },
  { icon: "bi-telephone-fill", label: "Phone", value: "+91 8595422784" },
  {
    icon: "bi-linkedin",
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/vikram-kumar-55890027a",
  },
  {
    icon: "bi-github",
    label: "GitHub",
    value: "https://github.com/vk8595422784-sudo",
  },
];

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [validated, setValidated] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = e.target.checkValidity();
    setValidated(true);

    if (!isValid) return;

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          to_email: "vikramkumarit911@gmail.com",
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setSubmitted(true);
      setForm(initialForm);
      setValidated(false);

      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Email Error:", error);
      alert("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-block section-light">
      <div className="container">
        <p className="section-tag">05 &mdash; contact</p>
        <h2 className="section-title mb-4">Let&apos;s work together</h2>

        <div className="row gy-5">
          <div className="col-lg-5">
            <ul className="contact-list">
              {CONTACT_ITEMS.map((item) => (
                <li key={item.label}>
                  <i className={`bi ${item.icon}`}></i>
                  <div>
                    <span>{item.label}</span>
                    <b>{item.value}</b>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-7">
            <form
              className={`row g-3${validated ? " was-validated" : ""}`}
              noValidate
              onSubmit={handleSubmit}
            >
              <div className="col-md-6">
                <label className="form-label" htmlFor="fname">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fname"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <div className="invalid-feedback">Please enter your name.</div>
              </div>
              <div className="col-md-6">
                <label className="form-label" htmlFor="femail">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="femail"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <div className="invalid-feedback">
                  Please enter a valid email.
                </div>
              </div>
              <div className="col-12">
                <label className="form-label" htmlFor="fsubject">
                  Subject
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fsubject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
                <div className="invalid-feedback">Please enter a subject.</div>
              </div>
              <div className="col-12">
                <label className="form-label" htmlFor="fmessage">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="fmessage"
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <div className="invalid-feedback">Please enter a message.</div>
              </div>
              <div className="col-12">
                <button
                  type="submit"
                  className="btn btn-signal px-4"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
                {submitted && (
                  <span className="ms-3 text-success fw-semibold">
                    <i className="bi bi-check-circle-fill me-1"></i>
                    Message sent successfully!
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
