import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ProjectComp({ title, description, image }: any) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // triggers when in view
  });

  // Smooth parallax motion (adjust values for intensity)
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className="relative rounded-2xl overflow-hidden shadow-xl bg-[#0c3547]/80 backdrop-blur-sm border border-[#47a7ae]/20 hover:scale-[1.02] transition-transform duration-500"
    >
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-[#dddce4]">{title}</h3>
        <p className="text-[#83d0d2] mt-2">{description}</p>
      </div>
    </motion.div>
  );
}
