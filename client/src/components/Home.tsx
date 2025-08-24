import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import ProjectComp from "./ProjectComp";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="h-auto my-4 sm:my-6 md:my-8">
        {/* add your projects here bro */}
        <div className="mb-0">
          <h2 className="text-xl sm:text-2xl font-montserrat font-semibold px-4 sm:px-6 md:px-8">
            Freelanced Works
          </h2>
          <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            <ProjectComp
              title="Dobbespet Public School"
              projectSrc="/DobbespetPublicSchool.png"
              projectLink="https://dobbespetpublicschool.com/"
            />
          </div>
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-montserrat font-semibold px-4 sm:px-6 md:px-8 mt-4 sm:mt-6 md:mt-8">
            Other Projects
          </h2>
          <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            <ProjectComp
              title="Quiz-2k25"
              projectSrc="/quiz-2k25.png"
              projectLink="https://quiz-2k25.vercel.app/"
            />
            <ProjectComp
              title="ChatMates"
              projectSrc="/ChatMates.png"
              projectLink="https://my-chat-wine-eta.vercel.app/"
            />
            <ProjectComp
              title="Event Management"
              projectSrc="/EventManagement.png"
              projectLink="https://github.com/Nikhil4002-50-82/Event-Management"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
