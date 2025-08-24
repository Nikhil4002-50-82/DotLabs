import Header from "./Header";
import Footer from "./Footer";
import ProjectComp from "./ProjectComp";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="h-auto my-[2em]">
        {/* add your projects here bro */}
        <div className="mb-0">
          <h2 className="text-2xl font-montserrat font-semibold px-4">
            Freelanced Works
          </h2>
          <div className="px-[1em] py-[2em] grid grid-cols-4 gap-10">
            <ProjectComp
              title="Dobbespet Public School"
              projectSrc="/DobbespetPublicSchool.png"
              projectLink="https://dobbespetpublicschool.com/"
            />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-montserrat font-semibold px-4 mt-[2em]">
            Other Projects
          </h2>
          <div className="px-[1em] py-[2em] grid grid-cols-4 gap-10">
            <ProjectComp
              title="Quiz-2k25"
              projectSrc="/quiz-2k25.png"
              projectLink="https://quiz-2k25.vercel.app/"
            />
            <ProjectComp
              title="ChatMates"
              projectSrc="/ChatMates.png"
              projectLink="https://github.com/Nikhil4002-50-82/ChatMates"
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
