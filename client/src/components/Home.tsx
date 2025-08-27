import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ProjectComp from "./ProjectComp";
import { motion, useScroll, useTransform } from "framer-motion";

const Home: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]); // fades hero out
  const scale = useTransform(scrollYProgress, [0, 0.25], [1.2, 1]); // zooms bg out

  return (
    <div className="bg-black text-white overflow-hidden font-sans">
      <Header />

      {/* Hero Section */}
      <motion.section
        style={{ opacity }}
        className="relative h-screen w-full flex flex-col justify-center items-center text-center overflow-hidden"
      >
        {/* Background */}
        <motion.div style={{ scale }} className="absolute inset-0">
          <div
            className="h-full w-full mt-14"
            style={{
              backgroundImage: "url('/bg\ final.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </motion.div>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black" />

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 px-6"
        >
          <h1
            className="text-[12vw] md:text-[10vw] font-extrabold leading-[0.9] uppercase 
             drop-shadow-[4px_4px_0px_#000] 
             [text-shadow:_4px_4px_0_#e0b38c,_-4px_-4px_0_#3d6a6b]"
          >
            Crafting <span className="text-[#e0b38c]">Digital</span>
            <br /> Experiences
          </h1>

          <p className="mt-8 text-xl md:text-2xl max-w-2xl mx-auto text-gray-300">
            Immersive. Bold. Cinematic. Websites that feel alive.
          </p>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <section className="min-h-screen flex items-center px-6 md:px-20 bg-black">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <h2 className="text-[8vw] md:text-7xl font-bold mb-12 uppercase">
            About Me
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
            I’m a full-stack developer blending{" "}
            <span className="text-[#e0b38c]">design</span>,{" "}
            <span className="text-[#3d6a6b]">performance</span>, and{" "}
            <span className="text-[#7a3c3c]">storytelling</span> into every
            build. Inspired by cinematic visuals, I create websites that are{" "}
            <span className="font-semibold">
              immersive, bold, and unforgettable.
            </span>
          </p>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="py-40 px-6 md:px-20 bg-white text-black">
        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-[10vw] md:text-8xl font-bold text-center mb-20 uppercase"
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-16">
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
        </div>
      </section>

      {/* Services Section */}
      <section className="py-40 px-6 md:px-20 bg-black text-white">
        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-[9vw] md:text-7xl font-bold uppercase mb-16"
        >
          Services
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            "Web Development",
            "Full-Stack Development",
            "UI/UX Design",
            "Landing Pages",
            "SEO & Performance",
            "AI + Mobile Apps",
          ].map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, rotate: -1 }}
              className="p-10 rounded-2xl bg-[#111] text-white border border-gray-700 text-2xl font-semibold tracking-tight"
            >
              {service}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-40 px-6 md:px-20 bg-[#e0b38c] text-black text-center">
        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-[8vw] md:text-6xl font-bold uppercase mb-16"
        >
          Testimonials
        </motion.h2>
        <motion.blockquote
          whileHover={{ scale: 1.05 }}
          className="text-2xl md:text-3xl font-light leading-relaxed max-w-3xl mx-auto"
        >
          “Working with Vilas was an incredible experience. He built a
          high-performing site with style.”
        </motion.blockquote>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
