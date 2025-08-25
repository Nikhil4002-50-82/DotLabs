import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import ProjectComp from "./ProjectComp";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="h-auto pt-10 my-4 sm:my-6 md:my-8">
        <section className="py-16 px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <p className="text-lg text-gray-700">
            We are passionate web developers specializing in React, Express,
            Supabase, and Tailwind CSS. We love creating modern, responsive, and
            scalable web applications that provide excellent user experiences.
          </p>
        </section>
        <section className="text-center py-16 bg-gray-900 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Building Modern & Responsive Websites
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
            I create fast, scalable, and visually appealing websites tailored to
            your brand.
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600">
            Get a Quote
          </button>
        </section>
        <section className="py-16 px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Freelance Works</h2>
          <section className="flex justify-center items-center">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
              <ProjectComp
              title="Dobbespet Public School"
              projectSrc="/DobbespetPublicSchool.png"
              projectLink="https://dobbespetpublicschool.com/"
            />
            </div>
          </section>
        </section>
        <section className="py-16 px-6  mx-auto bg-gray-900">
          <h2 className="text-3xl font-bold text-center mb-10 text-white">
            Services
          </h2>
          <div className="flex items-center justify-center">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
              {[
                "Web Development (React, Tailwind, Vite)",
                "Full-Stack Development (React + Express + Supabase)",
                "UI/UX Design & Prototyping",
                "Landing Page & Portfolio Sites",
                "SEO Optimization & Performance Tuning",
                "Future Services: Mobile Apps, AI Integrations",
              ].map((service, index) => (
                <div
                  key={index}
                  className="p-6 bg-white shadow-md rounded-xl text-center"
                >
                  <p>{service}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 px-6 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6"> Other Projects</h2>
          <div className="flex items-center justify-center">
            <section className="grid grid-cols-1 gap-10 md:grid-cols-3 ">
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
            </section>
          </div>
        </section>
        <section className="py-16 px-6 bg-gray-900 text-white">
          <h2 className="text-3xl font-bold text-center mb-6">Testimonials</h2>
          <p className="text-center max-w-xl mx-auto">
            “We strive to deliver high-quality web solutions that meet client
            expectations.”
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
