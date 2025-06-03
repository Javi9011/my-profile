function Experience() {
  const jobs = [
    {
      company: "Infotech Systems",
      date: "Ene 2025 – Actualidad",
      description: "Backend con Django y Flask. Dashboards en Angular. PostgreSQL y MongoDB.",
    },
    {
      company: "BRINK’S",
      date: "May 2023 – Nov 2024",
      description: "Apps full-stack con Django y Angular para logística segura. APIs REST y JWT.",
    },
    {
      company: "SPRING",
      date: "Ene 2022 – May 2023",
      description: "React y Python para sistemas de pruebas empresariales. Automatización.",
    },
    {
      company: "Eitech Technology",
      date: "Nov 2017 – Dic 2021",
      description: "APIs con Django y Spring Boot. Refactorización de sistemas legacy.",
    }
  ];

  return (
    <section id="experience" className="section">
      <h2>Experiencia Profesional</h2>
      {jobs.map((job, index) => (
        <div key={index} className="job">
          <h3>{job.company}</h3>
          <small>{job.date}</small>
          <p>{job.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Experience;
