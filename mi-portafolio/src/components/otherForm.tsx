import { useState } from 'react';

  export default function Contact() {
    const [status, setStatus] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = e.currentTarget;
      const data = new FormData(form);

      try {
        const response = await fetch('https://formspree.io/f/xrbyrrly', {
          method: 'POST',
          body: data,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          setStatus('success');
          form.reset();

          setTimeout(() => setStatus(''), 3000);
        } else {
          setStatus('error');
        }
      } catch (error) {
        setStatus('error');
      }
    };

    return (
      <section id="contact" className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-4xl font-bold mb-4 text-center">Contáctame</h3>
          <p className="text-slate-400 text-center mb-12">¿Tienes un proyecto en mente? ¡Hablemos!</p>
          
          <div className="bg-slate-900/50 backdrop-blur rounded-2xl p-8 border border-slate-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Nombre</label>
                <input 
                  type="text"
                  name="name"
                  required
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors text-white"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input 
                  type="email"
                  name="email"
                  required
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors text-white"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Mensaje</label>
                <textarea 
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors resize-none text-white"
                  placeholder="Cuéntame sobre tu proyecto..."
                ></textarea>
              </div>

              {status === 'success' && (
                <div className="bg-green-500/20 border border-green-500 text-green-300 px-4 py-3 rounded-lg">
                  ¡Mensaje enviado correctamente! Te responderé pronto.
                </div>
              )}

              {status === 'error' && (
                <div className="bg-red-500/20 border border-red-500 text-red-300 px-4 py-3 rounded-lg">
                  Hubo un error. Por favor intenta de nuevo.
                </div>
              )}

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 py-3 rounded-lg font-semibold transition-all"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }