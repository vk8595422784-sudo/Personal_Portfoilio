import education from '../data/education';

function CommitItem({ entry }) {
  return (
    <div className="commit-item">
      <div className="commit-node"></div>
      <div className="commit-content">
        <p className="commit-hash">commit &middot; {entry.status}</p>
        <h5 className="commit-title">{entry.title}</h5>
        <p className="commit-meta">{entry.meta}</p>
        <p className="commit-desc">
          {entry.description}
          {entry.percentage && <b> ({entry.percentage})</b>}
        </p>
      </div>
    </div>
  );
}

export default function Education() {
  return (
    <section id="education" className="section-block section-light">
      <div className="container">
        <p className="section-tag">03 &mdash; education</p>
        <h2 className="section-title mb-5">$ git log --education</h2>
        <div className="commit-timeline">
          {education.map((entry) => (
            <CommitItem entry={entry} key={entry.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
