import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ProjectComp from "./ProjectComp";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  return (
    <div className="bg-[#7a3c3c] text-[#f5f5f5] overflow-hidden font-sans">
      <Header />

      {/* Hero Section with Breaking Bad BG */}
      <section
        className="h-screen flex flex-col justify-center items-center text-center relative"
        style={{
          backgroundImage: "url('/bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#1a1a1a]/70"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#e0b38c] drop-shadow-[3px_3px_0px_#000]">
            Let’s Cook Some <span className="text-[#3d6a6b]">Web Magic</span> 💥
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-[#f5f5f5]">
            We build modern, comic-inspired, badass websites —
            <br /> Breaking the rules of boring design.
          </p>

          {/* Speech Bubble CTA */}
          <div className="mt-10 relative inline-block">
            <button className="px-8 py-3 bg-[#e0b38c] text-black font-bold rounded-full shadow-lg border-4 border-black relative z-10">
              💬 Hire Me
            </button>
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-0 h-0 
              border-l-[20px] border-r-[20px] border-t-[20px] border-transparent 
              border-t-[#e0b38c]"></div>
          </div>
        </motion.div>
      </section>

      {/* About Section styled like comic panel */}
      <section className="py-20 px-6 max-w-6xl mx-auto border-4 border-black bg-[#f5f5f5] text-[#1a1a1a] rounded-2xl shadow-xl">
        <h2 className="text-4xl font-bold mb-6">👨‍💻 About Me</h2>
        <p className="text-lg leading-relaxed">
          I’m a full-stack developer blending <span className="bg-[#e0b38c] px-1">design</span>, 
          <span className="bg-[#3d6a6b] px-1 text-white">performance</span>, and 
          <span className="bg-[#7a3c3c] px-1 text-white">storytelling</span> into every build.  
          Inspired by Breaking Bad’s raw energy — I create websites that are 
          bold, memorable, and a little dangerous. 🚬
        </p>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#e0b38c]">🔥 Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <ProjectComp
            title="Dobbespet Public School"
            projectSrc="/DobbespetPublicSchool.png"
            projectLink="https://dobbespetpublicschool.com/"
          />
          <ProjectComp
            title="Medibells"
            projectSrc="/Medibells.png"
            projectLink="https://drive.google.com/file/d/1RIXxCAkCjlfI575oh76QS6ScfVavrovK/view"
          />
          <ProjectComp
            title="Quiz-2k25"
            projectSrc="/quiz-2k25.png"
            projectLink="https://quiz-2k25.vercel.app/"
          />
        </div>
      </section>

      {/* Services Comic Panel */}
      <section className="py-20 px-6 bg-[#1a1a1a] text-[#f5f5f5] border-t-4 border-b-4 border-[#3d6a6b]">
        <h2 className="text-4xl font-bold text-center mb-12">💼 Services</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "⚡ Web Development (React + Tailwind + Vite)",
            "🛠 Full-Stack Development (Express + Supabase)",
            "🎨 UI/UX Design & Prototyping",
            "🚀 Landing Page & Portfolio Sites",
            "📈 SEO Optimization & Performance",
            "🤖 Future: AI & Mobile Apps",
          ].map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-[#e0b38c] text-black border-4 border-black shadow-xl font-semibold"
            >
              {service}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Comic Bubble */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-[#e0b38c]">💬 Testimonials</h2>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="inline-block relative px-6 py-4 bg-[#f5f5f5] text-black rounded-2xl border-4 border-black shadow-lg"
        >
          “Working with Vilas was an incredible experience.  
          He built a high-performing site with style.”  
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-0 h-0 
            border-l-[15px] border-r-[15px] border-t-[20px] border-transparent 
            border-t-[#f5f5f5]"></div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
