import ProfilePage from './components/ProfilePage';
import ProjectCard from './components/ProjectCard';
import ContactPage from './components/ContactPage'
import SocialLinks from './components/SocialLinks';

function App() {
  const projectData = [
    {
      id: 1,
      title: "School Portal Dashboard",
      description: "A learning management system featuring user roles, dynamic page view, student and teacher features, and real-time updates.",
      features: [
        "Modernized a legacy thesis project into a decoupled architecture using Vue 3 (Quasar) and a Laravel REST API.",
        "Built a secure authentication system using JWT and managed global application state via Pinia.",
        "Implemented Role-Based Access Control (RBAC) for dynamic student/teacher dashboards and protected API routes.",
        "Integrated Cloudinary API to handle secure, asynchronous media and document uploads.",
        "Developed a live messaging system using WebSockets for instant virtual classroom communication."
      ],
      tags: ["Vue 3", "Quasar", "Pinia", "Laravel", "WebSockets"],
      liveLink: "https://vue-3-lms-frontend.vercel.app/login",
      githubLink: "https://github.com/Riel526/VUE3-LMS-FRONTEND"
    },
    {
      id: 2,
      title: "Placeholder Project",
      description: "ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.",
      tags: ["React", "Tailwind CSS", "Express", "Node.js"],
      liveLink: "#",
      githubLink: "https://github.com/Riel526/React-Portfolio"
    },
    {
      id: 3,
      title: "Placeholder Project",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter.",
      tags: ["Laravel", "PHP", "Vue 2", "Tailwind CSS"],
      liveLink: "#",
      githubLink: "https://github.com/Riel526/React-Portfolio"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 scroll-smooth">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 w-full h-16 bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-800 flex items-center justify-between px-6 md:px-12">
        <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Gabriel Padolina
        </div>
        <div className="flex gap-6 text-sm font-medium text-slate-400">
          <a href="#hero" className="hover:text-cyan-400 transition-colors">Home</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
        </div>
      </nav>

      <main className="pt-16">
        <SocialLinks />
        <ProfilePage />

        <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-slate-800">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-100 mb-2">Featured Projects</h2>
            <p className="text-slate-400 max-w-2xl">
              A gallery of applications demonstrating product-minded full-stack logic, data flow integrity, and responsive UI layout.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectData.map((project) => (
              <ProjectCard 
                key={project.id}
                title={project.title}
                description={project.description}
                features={project.features}
                tags={project.tags}
                liveLink={project.liveLink}
                githubLink={project.githubLink}
              />
            ))}
          </div>
        </section>
      <ContactPage />
      </main>
    </div>
  );
}

export default App;