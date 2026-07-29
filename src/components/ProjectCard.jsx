export default function ProjectCard({ project }) {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="project-card">
        <div className="project-tab-bar">
          <i className="bi bi-file-earmark-code me-1"></i>
          {project.title.toLowerCase().replace(/\s+/g, '-')}.jsx
        </div>
        <div className="project-body">
          <h5>{project.title}</h5>
          <p>{project.description}</p>
          <div className="project-tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <div className="project-links">
            <a href={project.demo}>
              <i className="bi bi-box-arrow-up-right me-1"></i>Live Demo
            </a>
            <a href={project.code}>
              <i className="bi bi-github me-1"></i>Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
