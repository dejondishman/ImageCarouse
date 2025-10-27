import React, { useEffect, useRef } from "react";
import "./Box.css";
import "./Boxthree.css";

export default function Box() {
const carouselRef = useRef(null);

// your boxes (can be replaced with images later)
const boxes = [
"Rotate me 1",
"Rotate me 2",
"Rotate me 3",
"Rotate me 4",
"Rotate me 5",
"Rotate me 6",
];

useEffect(() => {
    const carousel = carouselRef.current;
    let angle = 0;
    const numBoxes = boxes.length;
  
    const boxElements = carousel.querySelectorAll(".box");
    
    // Determine axis based on screen width
    const isMobile = window.innerWidth <= 600;
    const rotationPerBox = 360 / numBoxes;
  
    boxElements.forEach((box, i) => {
      if (isMobile) {
        // Vertical carousel: rotateX
        const rotateX = i * rotationPerBox;
        box.style.transform = `rotateX(${rotateX}deg) translateZ(150px)`;
      } else {
        // Horizontal carousel: rotateY
        const rotateY = i * rotationPerBox;
        box.style.transform = `rotateY(${rotateY}deg) translateZ(300px)`;
      }
    });
  
    const interval = setInterval(() => {
      angle += 1; // speed
      if (isMobile) {
        carousel.style.transform = `rotateX(${angle}deg)`;
      } else {
        carousel.style.transform = `rotateY(${angle}deg)`;
      }
    }, 30);
  
    return () => clearInterval(interval);
  }, []);
  

return (
    <div className="wrapper">
      <div className="carousel" ref={carouselRef}>
        {boxes.map((box, index) => (
          <div key={index} className="box">
            {box}
          </div>
        ))}
      </div>
    </div>
  );
}
