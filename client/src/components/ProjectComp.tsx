import React from "react";

interface ProjectCompProps {
  title: string;
  projectSrc: string;
  projectLink: string;
}

const ProjectComp: React.FC<ProjectCompProps> = ({
  title,
  projectSrc,
  projectLink,
}) => {
  return (
    <div
      className="w-[20em] h-[14em] flex flex-col items-center 
        bg-[#7a3c3c] border-4 border-black rounded-xl overflow-hidden 
        shadow-[6px_6px_0px_#000] cursor-pointer transition-transform 
        hover:scale-105 hover:shadow-[10px_10px_0px_#000]"
      onClick={() => {
        window.open(projectLink, "_blank");
      }}
    >
      {/* Thumbnail */}
      <div className="h-[85%] w-full border-b-4 border-black">
        <img
          src={projectSrc}
          alt="Project"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title */}
      <div className="w-full flex items-center justify-center p-2 bg-[#1a1a1a]">
        <h3 className="font-montserrat font-bold text-lg tracking-wide 
          text-[#e0b38c] drop-shadow-[2px_2px_0px_#000]">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default ProjectComp;
