import { Briefcase, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
};

export default function Experience() {

   const { t } = useTranslation();
  const experiences = t('experience.jobs', { returnObjects: true }) as ExperienceItem[];

  //  const experiences = [
  //   {
  //     role: 'Desarrolladora Frontend - UX/UI',
  //     company: 'Agile Solutions',
  //     period: '2024 - 2025',
  //     description:
  //       'Encargada del desarrollo frontend e integración de endpoints utilizando React y TypeScript. Realicé prototipado en Figma, pruebas de APIs en Postman, y pruebas funcionales, de usabilidad y smoke tests para asegurar la calidad del producto.',
  //     technologies: ['React', 'TypeScript', 'Figma', 'JavaScript', 'Postman']
  //   }
  // ];

  return (
    <section id="experience" className="py-20 px-6 bg-slate-900/30">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-4xl font-bold mb-4 text-center">{t("experience.title")}</h3>
        <p className="text-slate-400 text-center mb-12">{t('experience.subtitle')}</p>
        
        <div className="space-y-8">
          {experiences.map((exp, e) => (
            <div 
              key={e} 
              className="bg-slate-900/50 backdrop-blur rounded-2xl p-6 border border-slate-800 hover:border-purple-500/50 transition-all relative"
            >
        
              <div className="absolute -left-3 top-8 w-6 h-6 bg-purple-500 rounded-full border-4 border-slate-950 hidden md:block"></div>
              
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h4 className="text-2xl font-bold text-purple-300 mb-1">{exp.role}</h4>
                  <div className="flex items-center gap-2 text-slate-300 mb-2">
                    <Briefcase className="w-4 h-4" />
                    <span className="font-semibold">{exp.company}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-400 mt-2 md:mt-0">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{exp.period}</span>
                </div>
              </div>
              
              <p className="text-slate-400 mb-4">{exp.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech: string, i: number) => (
                  <span 
                    key={i} 
                    className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-lg text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}