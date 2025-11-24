import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const [status, setStatus] = useState('');
  const form = useRef<HTMLFormElement>(null);
   const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        'service_f17sxvk',   // Service ID
        'template_jumsdmu',  //Template ID
        form.current,//formulario html
        'R_pHI4McHsIQRaoOe'  //Public Key
      )
      .then(() => {
        setStatus('success');
        form.current?.reset();
        setTimeout(() => setStatus(''), 3000);
      })
      .catch(() => setStatus('error'));
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h3 className="text-4xl font-bold mb-4 text-center">{t('contact.title')}</h3>
        <p className="text-slate-400 text-center mb-12">{t('contact.subtitle')}</p>
        
        <div className="bg-slate-900/50 backdrop-blur rounded-2xl p-8 border border-slate-800">
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2">{t('contact.name')}</label>
              <input 
                type="text"
                name="user_name"  
                required
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors text-white"
                placeholder={t('contact.placeholderName')}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">{t("contact.email")}</label>
              <input 
                type="email"
                name="user_email" 
                required
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors text-white"
                // placeholder="tu@email.com"
                placeholder={t('contact.placeholderEmail')}

              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">{t("contact.message")}</label>
              <textarea 
                name="message"   
                required
                rows={5}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors resize-none text-white"
                // placeholder="Cuéntame sobre tu proyecto..."
                placeholder={t('contact.placeholderMessage')}
              ></textarea>
            </div>

            {status === 'success' && (
              <div className="bg-green-500/20 border border-green-500 text-green-300 px-4 py-3 rounded-lg">
                {/* ¡Mensaje enviado correctamente! Te responderé pronto!. */}
                {t('contact.success')}
              </div>
            )}

            {status === 'error' && (
              <div className="bg-red-500/20 border border-red-500 text-red-300 px-4 py-3 rounded-lg">
                {/* Hubo un error. Por favor intenta de nuevo. */}
                {t('contact.error')}
              </div>
            )}

            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 py-3 rounded-lg font-semibold transition-all"
            >
              {/* Enviar Mensaje */}
              {t('contact.send')}

            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
