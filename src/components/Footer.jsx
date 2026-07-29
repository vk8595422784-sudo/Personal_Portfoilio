export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
        <p className="mb-0 brand-mono">~/vikram &copy; {year}</p>
        <p className="mb-0 small text-muted-light">Built with HTML, CSS, Bootstrap, JavaScript &amp; React</p>
      </div>
    </footer>
  );
}
