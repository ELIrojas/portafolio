import { Code, Database, Smartphone, Palette, Layers } from 'lucide-react';
import { useTransition } from 'react';
import { useTranslation } from 'react-i18next';

export default function Skills() {

  const { t } = useTranslation();

  const skills = {
    frontend: ['React', 'Angular', 'TypeScript', 'HTML/CSS', 'Tailwind CSS', 'Chakra UI','Java Script'],
    backend: ['Java Spring Boot',, 'Java', 'Python', 'Node.js'],
    mobile: ['Flutter', 'Android'],
    design: ['Figma', 'Prototipado', 'UI/UX',"GitHub","Trello"],
    databases: ['PostgreSQL', 'MongoDB', 'MySQL', 'Oracle'],
    metodologías: ['Agile', 'Scrum']
  };

  return (
    <section id="skills" className="py-20 px-6 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold mb-4 text-center">{t("skills.title")}</h3>
        <p className="text-slate-400 text-center mb-12">{t("skills.subtitle")}</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-slate-900/50 backdrop-blur rounded-2xl p-6 border border-slate-800">
            <div className="flex items-center gap-3 mb-4">
              <Code className="w-8 h-8 text-blue-400" />
              <h4 className="text-xl font-bold">{t("skills.frontend")}</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.frontend.map((skill, i) => (
                <span key={i} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-lg text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur rounded-2xl p-6 border border-slate-800">
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-8 h-8 text-green-400" />
              <h4 className="text-xl font-bold">{t("skills.backend")}</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.backend.map((skill, i) => (
                <span key={i} className="bg-green-500/20 text-green-300 px-3 py-1 rounded-lg text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur rounded-2xl p-6 border border-slate-800">
            <div className="flex items-center gap-3 mb-4">
              <Smartphone className="w-8 h-8 text-purple-400" />
              <h4 className="text-xl font-bold">{t("skills.mobile")}</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.mobile.map((skill, i) => (
                <span key={i} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-lg text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur rounded-2xl p-6 border border-slate-800">
            <div className="flex items-center gap-3 mb-4">
              <Palette className="w-8 h-8 text-pink-400" />
              <h4 className="text-xl font-bold">{t("skills.design")}</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.design.map((skill, i) => (
                <span key={i} className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-lg text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur rounded-2xl p-6 border border-slate-800 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-8 h-8 text-orange-400" />
              <h4 className="text-xl font-bold">{t("skills.databases")}</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.databases.map((skill, i) => (
                <span key={i} className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-lg text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>


           <div className="bg-slate-900/50 backdrop-blur rounded-2xl p-6 border border-slate-800 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Layers  className="w-8 h-8 text-indigo-500" />
              <h4 className="text-xl font-bold">{t("skills.metodologias")}</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.metodologías.map((skill, i) => (
                <span key={i} className="bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-lg text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}