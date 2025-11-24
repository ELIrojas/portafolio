import { Mail, Github, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import elissPhoto from '../assets/eliss.jpg';

export default function Hero() {

  const { t } = useTranslation();
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl text-center">
        <div className="mb-8">
           <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-purple-900 mb-6">
            <img 
              src={elissPhoto} 
              alt="Elizeth" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          {t("hero.greeting")} Elizeth
        </h2>
        <p className="text-2xl md:text-3xl text-slate-300 mb-4">
           {t("hero.profession")}
        </p>
        <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
         
          {t("hero.description")}

        </p>
        <div className="flex gap-4 justify-center">
          <a href="#projects" className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full font-semibold transition-colors">
            {t("hero.viewProjects")}
          </a>
          <a href="#contact" className="border border-purple-600 hover:bg-purple-600/20 px-8 py-3 rounded-full font-semibold transition-colors">
           {t("hero.contact")}
          </a>
        </div>
        <div className="flex gap-6 justify-center mt-8">
          <a href="https://github.com/ELIrojas" target="_blank" className="hover:text-purple-400 transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/elizeth-rojas-1aa5a81aa/" target="_blank" className="hover:text-purple-400 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:rojasellie14@gmail.com" className="hover:text-purple-400 transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}