import React from 'react'
import i18n, { changeLanguage } from 'i18next';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const {t}=useTranslation();
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-lg z-50 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Elizeth Rojas
          </h1>
          <div className="flex gap-6">
            <a href="#home" className="hover:text-purple-400 transition-colors">{t('navbar.home')}</a>
            <a href="#projects" className="hover:text-purple-400 transition-colors">{t('navbar.projects')}</a>
            <a href="#experience" className="hover:text-purple-400 transition-colors">{t("navbar.experience")}</a>
            <a href="#education" className="hover:text-purple-400 transition-colors">{t("navbar.education")}</a>
            <a href="#skills" className="hover:text-purple-400 transition-colors">{t('navbar.skills')}</a>
            <a href="#contact" className="hover:text-purple-400 transition-colors">{t('navbar.contact')}</a>
          </div>
          <div className="flex items-center gap-2 ml-6">
            <button
              onClick={() => changeLanguage('es')}
              className="hover:scale-110 transition-transform text-lg"
              title="Español"
            >
              🇪🇸
            </button>
            <button
              onClick={() => changeLanguage('en')}
              className="hover:scale-110 transition-transform text-lg"
              title="English"
            >
             🇺🇸
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar