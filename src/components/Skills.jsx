import skillGroups from '../data/skills';

function SkillItem({ item }) {
  if (item.icon) {
    const src = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${item.icon}.svg`;
    return (
      <li>
        <img src={src} alt={item.name} className={item.darkBg ? 'icon-on-dark' : ''} />
        <span>{item.name}</span>
      </li>
    );
  }
  return (
    <li>
      <i className={`bi ${item.bsIcon} skill-bs-icon`}></i>
      <span>{item.name}</span>
    </li>
  );
}

function SkillCard({ group }) {
  return (
    <div className="col-md-6 col-lg-3">
      <div className="skill-card">
        <h6 className="skill-cat">
          <i className={`bi ${group.icon}`}></i> {group.title}
        </h6>
        <ul className="skill-list skill-list-icons">
          {group.items.map((item) => (
            <SkillItem item={item} key={item.name} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-block section-dark">
      <div className="container">
        <p className="section-tag">02 &mdash; skills</p>
        <h2 className="section-title mb-4 text-light">$ ls skills/</h2>
        <div className="row g-4">
          {skillGroups.map((group) => (
            <SkillCard group={group} key={group.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
