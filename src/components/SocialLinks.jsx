import { useState } from "react";
import { FaGithub, FaLinkedin, FaCheck } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { BiLoaderAlt } from "react-icons/bi";

const SocialLinks = () => {
  const [downloadState, setDownloadState] = useState("idle");

  const handleResumeClick = () => {
    if (downloadState !== "idle") return;

    setDownloadState("downloading");

    setTimeout(() => {
      setDownloadState("success");
      
      setTimeout(() => {
        setDownloadState("idle");
      }, 3000);
    }, 1000);
  };

  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={25} />
        </>
      ),
      href: "https://www.linkedin.com/in/gabriel-padolina-559a4a243/",
      style: "rounded-tr-lg border-t border-r border-slate-700/50",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={25} />
        </>
      ),
      href: "https://github.com/Riel526",
      style: "border-y border-r border-slate-700/50",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={25} />
        </>
      ),
      href: "mailto:gabpadolina05@gmail.com",
      style: "border-b border-r border-slate-700/50",
    },
    {
      id: 4,
      child: (
        <>
          {downloadState === "idle" && (
            <>
              Resume <BsFillPersonLinesFill size={25} />
            </>
          )}
          {downloadState === "downloading" && (
            <>
              Saving... <BiLoaderAlt size={25} className="animate-spin text-cyan-400" />
            </>
          )}
          {downloadState === "success" && (
            <>
              Saved! <FaCheck size={22} className="text-emerald-400" />
            </>
          )}
        </>
      ),
      href: "/PADOLINA_Gabriel_Resume.pdf",
      style: "rounded-br-lg border-b border-r border-slate-700/50",
      download: "PADOLINA_Gabriel_Resume.pdf",
      onClick: handleResumeClick,
    },
  ];

  return (
    <div className="hidden md:flex flex-col top-[35%] left-0 fixed z-50">
      <ul>
        {links.map(({ id, child, href, download, style, onClick }) => {
          const isMail = href.startsWith('mailto:');
          
          return (
            <li
              key={id}
              className={
                "flex justify-between items-center w-40 h-12 px-4 ml-[-110px] hover:ml-[-10px] duration-300 bg-slate-800/90 backdrop-blur-sm " +
                style
              }
            >
              <a
                href={href}
                className="flex justify-between items-center w-full text-slate-300 hover:text-cyan-400 font-medium text-sm transition-colors"
                download={download}
                target={isMail ? undefined : "_blank"}
                rel={isMail ? undefined : "noreferrer"}
                onClick={onClick}
              >
                {child}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialLinks;