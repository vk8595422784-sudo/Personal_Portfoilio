import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a href="#top" className={`back-to-top${visible ? ' show' : ''}`} aria-label="Back to top">
      <i className="bi bi-arrow-up"></i>
    </a>
  );
}
