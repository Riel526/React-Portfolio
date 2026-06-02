import { useState } from 'react';

function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Since this is a static frontend portoflio, we log it for now.
    // You can later hook this up to Formspree, EmailJS, or your own backend.
    console.log('Form Submission:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-slate-800">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        
        {/* Left Side: Connect Context */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-100 mb-2">Let's Connect</h2>
            <p className="text-slate-400 max-w-md mb-8 leading-relaxed">
              I am currently open to new full-time opportunities or technical collaborations. If you have a question or just want to say hi, drop a message!
            </p>

            {/* Quick Contact Info Cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-slate-800/30 border border-slate-800 p-4 rounded-xl max-w-sm">
                <span className="text-2xl text-cyan-400">📍</span>
                <div>
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Location</h4>
                  <p className="text-sm text-slate-300 font-medium">Manila, Philippines (GMT+8)</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-slate-800/30 border border-slate-800 p-4 rounded-xl max-w-sm">
                <span className="text-2xl text-cyan-400">💼</span>
                <div>
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Availability</h4>
                  <p className="text-sm text-slate-300 font-medium">Open for remote front-end / full-stack roles</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Icons Links Footnote */}
          <div className="mt-12 lg:mt-0 pt-6 border-t border-slate-800/60 flex gap-6">
            <a href="https://github.com/Riel526" target="_blank" rel="noreferrer" className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors">
              GitHub ↗
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors">
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* Right Side: Contact Form Element */}
        <div className="bg-slate-800/40 border border-slate-700/40 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                placeholder="Let's talk about a project opportunity..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-900 font-bold hover:scale-[1.01] active:scale-[0.99] transition-all shadow-md flex items-center justify-center gap-2"
            >
              Send Message
            </button>

            {submitted && (
              <div className="text-center text-xs font-medium text-emerald-400 mt-2 animate-pulse">
                ✓ Message received! Thanks for reaching out.
              </div>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}

export default ContactPage;