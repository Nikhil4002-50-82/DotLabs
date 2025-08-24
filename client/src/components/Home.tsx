import Header from "./Header";
import Footer from "./Footer";
import ProjectComp from "./ProjectComp";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="px-[1em] py-[2em] h-[100dvh] grid grid-cols-4 gap-10">
        {/* add your projects here bro */}
        <ProjectComp title="Quiz-2k25" projectSrc="/quiz-2k25.png" />
        <ProjectComp title="ChatMates" projectSrc="/ChatMates.png" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
