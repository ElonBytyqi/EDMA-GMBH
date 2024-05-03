import React, { useState, useEffect } from "react";
import construction from "../assets/construction.jpg";
import construction2 from "../assets/construction2.jpg";
import construction3 from "../assets/construction4.jpg";

const Slideshow = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <div
      id="carouselExampleCaptions"
      className="relative max-w-[1250px] mx-auto mb-20 "
      data-twe-carousel-init
      data-twe-ride="carousel"
      
    >
      <div
        className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
        data-twe-carousel-indicators
      >
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            type="button"
            onClick={() => handleSlideChange(index)}
            className={`mx-[3px] box-content h-[5px] w-[120px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 ${
              index === activeIndex ? "opacity-100" : "opacity-50"
            } transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motionReduce:transitionNone`}
            aria-current={index === activeIndex ? "true" : undefined}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        {[construction, construction2, construction3].map((image, index) => (
          <div
            key={index}
            className={`relative float-left -mr-[100%] ${
              index === activeIndex ? "" : "hidden"
            } w-full transition-transform duration-[600ms] ease-in-out motionReduce:transitionNone`}
            data-twe-carousel-active
            data-twe-carousel-item
            style={{ backfaceVisibility: "hidden" }}
          >
            <img src={image} className="block w-full h-[85vh] " alt={`Slide ${index + 1}`} />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              
              <p>Some representative from our work</p>
            </div>
          </div>
        ))}
      </div>

      <button
        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motionReduce:transitionNone"
        type="button"
        onClick={() => handleSlideChange((activeIndex - 1 + 3) % 3)}
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path d="M15.75 19.5L8.25 12l7.5-7.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Previous
        </span>
      </button>

      <button
        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motionReduce:transitionNone"
        type="button"
        onClick={() => handleSlideChange((activeIndex + 1) % 3)}
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path d="M8.25 4.5l7.5 7.5-7.5 7.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Next
        </span>
      </button>
    </div>
  );
};

export default Slideshow;
