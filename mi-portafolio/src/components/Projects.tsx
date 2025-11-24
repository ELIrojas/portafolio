import { ExternalLink, Github } from 'lucide-react';
import React from 'react'
import { useTranslation } from 'react-i18next';

const Projects = () => {
   const { t } = useTranslation();

    const projects = [
    {
      title: 'Sistema de Reservas Web',
      description: 'Aplicación full-stack para gestión de reservas con autenticación y panel administrativo',
      tech: ['Java Spring Boot', 'React', 'PostgreSQL'],
      type: 'Full Stack',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'App Móvil Android',
      description: 'Aplicación nativa Android con integración a APIs REST y almacenamiento local',
      tech: ['Android', 'Java', 'REST API'],
      type: 'Mobile',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'CRUD con Angular',
      description: 'Sistema de gestión completo con operaciones CRUD, validaciones y manejo de estados',
      tech: ['Angular', 'TypeScript', 'Bootstrap'],
      type: 'Frontend',
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'CRUD con React',
      description: 'Aplicación interactiva con manejo de estado, hooks personalizados y diseño responsive',
      tech: ['React', 'TypeScript', 'Tailwind CSS'],
      type: 'Frontend',
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold mb-4 text-center">{t("projects.title")}</h3>
        <p className="text-slate-400 text-center mb-12">{t("projects.subtitle")}</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-slate-900/50 backdrop-blur rounded-2xl p-6 border border-slate-800 hover:border-purple-500/50 transition-all hover:transform hover:scale-105">
              <div className={`h-2 w-20 rounded-full bg-gradient-to-r ${project.color} mb-4`}></div>
              <span className="text-xs text-purple-400 font-semibold">{project.type}</span>
              <h4 className="text-2xl font-bold mt-2 mb-3">{project.title}</h4>
              <p className="text-slate-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-slate-800 px-3 py-1 rounded-full text-sm text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                  <Github className="w-4 h-4" />
                  {t("projects.code")}

                </button>
                <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                  {t("projects.demo")}

                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects