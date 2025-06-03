const projects = [
  {
    title: "SaaS de Inventario",
    tech: "Django, Angular, PostgreSQL",
    link: "https://github.com/Javi9011/inventario-saas"
  },
  {
    title: "App de Logística",
    tech: "Flask, MongoDB, Angular",
    link: "https://github.com/Javi9011/logistica-app"
  }
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Proyectos</h2>
      {projects.map((project, idx) => (
        <div key={idx} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.tech}</p>
          <a href={project.link} target="_blank" rel="noreferrer">Ver en GitHub</a>
        </div>
      ))}
    </section>
  );
}

export default Projects;
