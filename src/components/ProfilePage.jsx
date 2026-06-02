import profileImg from '../assets/profile.jpg';

function ProfilePage() {
  const coreTech = ['Vue 3', 'Vue 2', 'React', 'Quasar', 'Vuetify', 'Node.js', 'Tailwind CSS', 'JQuery', 'MySQL', 'Laravel', 'PHP'];

  return (
    <section id="hero" className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden py-20 bg-slate-900 text-slate-100">
    
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        
        <div className="text-center lg:text-left order-2 lg:order-1">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 mb-6 tracking-wide uppercase">
            Open to Opportunities
          </span>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4">
            Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 bg-clip-text text-transparent">Gab</span>
          </h1>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-300 mb-6">
            Specialized in functional financial services, data auditing, and legacy migrations.
          </h2>

          <p className="text-base sm:text-lg text-slate-400 max-w-2xl lg:mx-0 mx-auto mb-10 leading-relaxed">
            I'm an aspiring front-end developer focused on creating specializing in building secure, transaction-heavy web applications. From engineering real-time audit logs and financial services to migrating legacy PHP architectures over to modernize vue frontends, I design systems where the UI explicitly serves the data.
          </p>

          <div className="flex flex-wrap lg:justify-start justify-center gap-4 mb-12">
            <a href="#projects" className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-900 font-semibold shadow-md hover:scale-[1.02] transition-transform">
              View My Work
            </a>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase mb-4">Core Technology Stack</p>
            <div className="flex flex-wrap lg:justify-start justify-center gap-2 max-w-xl">
              {coreTech.map((tech) => (
                <span key={tech} className="px-3 py-1 text-sm bg-slate-800 border border-slate-700 text-slate-300 rounded-md">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <div className="relative group max-w-[320px] sm:max-w-[380px] w-full aspect-square">
            
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            
            <div className="absolute inset-0 border-2 border-cyan-500/30 rounded-2xl translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>

            <div className="relative w-full h-full overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-800 shadow-2xl transition-transform duration-300 group-hover:-translate-y-1">
              <img 
                src={profileImg} 
                alt="Riel" 
                className="w-full h-full object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-cyan-500/5 mix-blend-multiply pointer-events-none"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ProfilePage;