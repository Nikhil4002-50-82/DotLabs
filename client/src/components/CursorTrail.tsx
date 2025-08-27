import React, { useEffect } from "react";

const CursorTrail: React.FC = () => {
  useEffect(() => {
    const trailContainer = document.createElement("div");
    trailContainer.style.position = "fixed";
    trailContainer.style.top = "0";
    trailContainer.style.left = "0";
    trailContainer.style.width = "100vw";
    trailContainer.style.height = "100vh";
    trailContainer.style.pointerEvents = "none";
    trailContainer.style.zIndex = "9999";
    document.body.appendChild(trailContainer);

    const createTrail = (x: number, y: number) => {
      const trail = document.createElement("div");
      trail.style.position = "absolute";
      trail.style.width = "60px"; // bigger = smoky
      trail.style.height = "60px";
      trail.style.borderRadius = "50%";
      trail.style.left = `${x - 30}px`;
      trail.style.top = `${y - 30}px`;

      // Smoky Breaking Bad–like glow
      trail.style.background =
        "radial-gradient(circle, rgba(57,255,20,0.4) 0%, rgba(0,0,0,0.05) 70%)";
      trail.style.boxShadow = "0 0 60px 20px rgba(57, 255, 20, 0.25)";
      trail.style.filter = "blur(25px) contrast(1.2)"; // soften edges, smoky

      trail.style.opacity = "0.6";
      trail.style.transform = "scale(1)";
      trail.style.transition =
        "opacity 1.8s ease-out, transform 2s ease-out, filter 2s ease-out";

      trailContainer.appendChild(trail);

      // Trigger fade/scale/distortion
      requestAnimationFrame(() => {
        trail.style.opacity = "0";
        trail.style.transform = `scale(${1.8 + Math.random() * 1.2}) 
                                 translate(${Math.random() * 20 - 10}px, ${
          Math.random() * 20 - 10
        }px)`; // small drift
        trail.style.filter = "blur(40px) contrast(0.8)"; // smoky fade
      });

      // Remove after animation
      setTimeout(() => {
        trail.remove();
      }, 2000);
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Create multiple soft clouds for each move
      for (let i = 0; i < 2; i++) {
        setTimeout(() => createTrail(e.clientX, e.clientY), i * 60);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      trailContainer.remove();
    };
  }, []);

  return null;
};

export default CursorTrail;
