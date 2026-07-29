import { useState } from "react";
import projects, { categories } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-block section-dark">
      <div className="container">
        <p className="section-tag">04 &mdash; projects</p>
        <h2 className="section-title mb-2 text-light">Sample Projects</h2>
        <div className="mb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-btn${activeFilter === cat ? " active" : ""}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="row g-4">
          {filtered.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-muted-light">No projects in this category yet.</p>
        )}
      </div>
    </section>
  );
}
