import { GraduationCap, Calendar, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';


type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  status: string;
  achievements: string[];
};

type Certification = {
  name: string;
  issuer: string;
  year: string;
};
export default function Education() {

  const { t } = useTranslation();

  const education = t('education.studies', { returnObjects: true }) as EducationItem[];

  const certifications = t('education.certifications', { returnObjects: true }) as Certification[];


  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold mb-4 text-center">{t('education.title')}</h3>
        <p className="text-slate-400 text-center mb-12">{t('education.subtitle')}</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Formación Académica */}
          <div>
            <h4 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-purple-400" />
              {t("education.academicTitle")}
            </h4>
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div 
                  key={idx}
                  className="bg-slate-900/50 backdrop-blur rounded-2xl p-6 border border-slate-800 hover:border-purple-500/50 transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h5 className="text-xl font-bold text-purple-300 mb-1">
                        {edu.degree}
                      </h5>
                      <p className="text-slate-300 font-semibold mb-2">{edu.institution}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      edu.status === 'Graduada' 
                        ? 'bg-green-500/20 text-green-300' 
                        : 'bg-blue-500/20 text-blue-300'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-slate-400 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{edu.period}</span>
                  </div>
                  
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="text-slate-400 text-sm flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-pink-400" />
              {t("education.certificationsTitle")}
            </h4>
            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div 
                  key={idx}
                  className="bg-slate-900/50 backdrop-blur rounded-2xl p-5 border border-slate-800 hover:border-pink-500/50 transition-all"
                >
                  <h5 className="text-lg font-bold text-pink-300 mb-2">
                    {cert.name}
                  </h5>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-300">{cert.issuer}</span>
                    <span className="text-slate-400">{cert.year}</span>
                  </div>
                </div>
              ))}
            </div>

           
            <div className="mt-6 bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur rounded-2xl p-5 border border-purple-700/50">
              <h5 className="font-bold mb-2 flex items-center gap-2">
              {t("education.continuousLearningTitle")}
              </h5>
              <p className="text-sm text-slate-300">
               {t("education.continuousLearningText")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}