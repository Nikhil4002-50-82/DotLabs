import React from "react";

const StaticComp: React.FC = () => {
  return (
    <div className="font-sans text-gray-800">
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

      {/* Services Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
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
      </section>

      {/* Portfolio Section */}
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">Portfolio</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3].map((project) => (
            <div key={project} className="bg-white rounded-xl shadow-md p-6">
              <img
                src={`https://via.placeholder.com/300x200?text=Project+${project}`}
                alt={`Project ${project}`}
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">Project {project}</h3>
              <p className="text-sm text-gray-600 mt-2">
                Short description about project {project}.
              </p>
              <a
                href="#"
                className="text-blue-500 mt-3 inline-block hover:underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-gray-700">
          I'm a passionate web developer specializing in React, Express,
          Supabase, and Tailwind CSS. I love creating modern, responsive, and
          scalable web applications that provide excellent user experiences.
        </p>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-6">Testimonials</h2>
        <p className="text-center text-gray-600 max-w-xl mx-auto">
          “I strive to deliver high-quality web solutions that meet client
          expectations.”
        </p>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <form className="grid gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border rounded-lg"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="p-3 border rounded-lg"
          />
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default StaticComp;
