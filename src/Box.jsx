import React, { useRef, useEffect } from "react";
import "./Box.css";

export default function Box() {
  const carouselRef = useRef(null);

  // Array of your boxes
  const boxes = [
    "Rotate me 1",
    "Rotate me 2",
    "Rotate me 3",
    "Rotate me 4",
    "Rotate me 5",
    "Rotate me 6",
  ];

  useEffect(() => {
  const scrollContainer = carouselRef.current;
  const scrollAmount = 2; // pixels per interval
  const intervalTime = 10; // ms
  let interval;
  
  // helper function that starts the auto scrolling 
  const startScroll = () => {
    const isMobile = window.innerWidth <= 600;

    if (!scrollContainer) return;

    // figuring out how big one full set of boxes is (width for horizontal, height for vertical)
   // If isMobile is true, measure the container's vertical size (scrollHeight) —
  // otherwise, measure its horizontal size (scrollWidth).
  // We divide by 2 because the boxes are duplicated, so one "set" is half the total length.
    const singleSetSize = isMobile ? scrollContainer.scrollHeight /2 : scrollContainer.scrollWidth / 2;

    interval = setInterval(() => { //setInterval is a js function that runs inside the code repeatedely, every few milliseconds (like an animation loop)
      if (isMobile) {
        scrollContainer.scrollTop += scrollAmount;  //  scrollContainer.scrollTop  means how far the container has scrolled vertically
                                                    //  every few milliseconds, we move the scorll down by a tiny bit (scrollamount pixels)
        // reset after first set
        if (scrollContainer.scrollTop >= singleSetSize) {
          scrollContainer.scrollTop -= singleSetSize; // jump up exactly by ones sets height
        }
      } else {
        scrollContainer.scrollLeft += scrollAmount;

        if (scrollContainer.scrollLeft >= singleSetSize) {
          scrollContainer.scrollLeft -= singleSetSize;
        }
      }
    }, intervalTime);
  };

  startScroll();

  const handleResize = () => {
    clearInterval(interval);
    startScroll();
  };

  window.addEventListener("resize", handleResize);

  return () => {
    clearInterval(interval);
    window.removeEventListener("resize", handleResize);
  };
}, []);

  return (
    <div className="wrapper">
      {/* Carousel container */}
      <div className="boxes" ref={carouselRef}>
        {/* Duplicate boxes for infinite scroll */}
        {[...boxes, ...boxes].map((box, index) => (
          <div key={index} className="box">
            {box}
          </div>
        ))}
      </div>
    </div>
  );
}
