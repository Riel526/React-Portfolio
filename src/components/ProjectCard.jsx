function ProjectCard({ title, description, features = [], tags, liveLink, githubLink }) {
  return (
    <div className="flex flex-col bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group">
      <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors mb-2">
        {title}
      </h3>
      
      <p className="text-sm text-slate-400 mb-4 italic">
        {description}
      </p>

      {features.length > 0 && (
        <ul className="space-y-2 mb-6 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="text-xs text-slate-300 flex items-start gap-2 line-height-relaxed">
              <span className="text-cyan-400 mt-1">▹</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="flex flex-wrap gap-1.5 mb-6">
        {tags.map((tag, index) => (
          <span 
            key={index} 
            className="text-[11px] font-medium bg-slate-900 text-cyan-400 px-2.5 py-1 rounded-md border border-slate-700"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-auto pt-4 border-t border-slate-750">
        {liveLink && liveLink !== "#" && (
          <a 
            href={liveLink} 
            target="_blank" 
            rel="noreferrer" 
            className="text-xs font-semibold text-cyan-400 hover:underline flex items-center gap-1"
          >
            Live Demo ↗
          </a>
        )}
        <a 
          href={githubLink} 
          target="_blank" 
          rel="noreferrer" 
          className="text-xs font-semibold text-slate-400 hover:text-slate-200 transition-colors"
        >
          Source Code
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;