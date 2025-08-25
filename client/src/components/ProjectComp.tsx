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
      className="w-[20em] h-[14em] flex flex-col items-center shadow-custom rounded-xl"
      onClick={() => {
        window.open(projectLink, "_blank");
      }}
    >
      <div className="h-[85%] w-full">
        <img
          src={projectSrc}
          alt="Project"
          className="w-full h-full object-cover rounded-t-xl"
        />
      </div>
      <div className="w-full flex items-center justify-center p-2">
        <h3 className="font-montserrat font-semibold ">{title}</h3>
      </div>
    </div>
  );
};

export default ProjectComp;
