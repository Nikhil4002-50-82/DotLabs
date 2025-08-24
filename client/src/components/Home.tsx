import Header from "./Header";
import Footer from "./Footer";
import ProjectComp from "./ProjectComp";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="px-[1em] py-[2em] h-[100dvh] grid grid-cols-4 gap-10">
        {/* add your projects here bro */}
        <ProjectComp title="Quiz-2k25" projectSrc="/quiz-2k25.png" projectLink="https://github.com/Nikhil4002-50-82/Quiz-2k25" />
        <ProjectComp title="ChatMates" projectSrc="/ChatMates.png" projectLink="https://github.com/Nikhil4002-50-82/ChatMates" />
        <ProjectComp title="Event Management" projectSrc="/EventManagement.png" projectLink="https://github.com/Nikhil4002-50-82/Event-Management" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
