import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons/faGlobe";
import { faCode } from "@fortawesome/free-solid-svg-icons/faCode";

export const Project = (props) => {
  const [activeSlide, setActiveSlide] = useState(0);
  // Initial active slide index

  const handleSlideChange = (direction) => {
    // Implement logic to update the active slide based on the direction
    // You may need to use state to keep track of the current active slide index
    // Update the state based on the direction passed to the function
    if (direction === "prev") {
      setActiveSlide((prevSlide) =>
        prevSlide > 0 ? prevSlide - 1 : callout.imageSrc.length - 1
      );
    } else if (direction === "next") {
      setActiveSlide((prevSlide) =>
        prevSlide < callout.imageSrc.length - 1 ? prevSlide + 1 : 0
      );
    }
  };

  const { callout } = props;

  return (
    <div
      key={callout.name}
      project={callout}
      // active={index === activeSlide}
      className="group relative"
    >
      <div className="relative w-full" data-carousel="slide">
        <div className="relative h-96 overflow-hidden rounded-lg">
          <div className="carousel">
            {callout.imageSrc.map((img, index) => (
              <img
                key={img + index}
                src={img}
                alt={callout.imageAlt[index]}
                className={`absolute block w-full ${
                  index === activeSlide ? "" : "hidden"
                }`}
              />
            ))}
          </div>

          <div className="absolute z-30 flex space-x-3 bottom-1/2 left-0 right-0">
            {/* <!-- Slider controls --> */}
            <button
              type="button"
              className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev
              onClick={() => handleSlideChange("prev")}
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next
              onClick={() => handleSlideChange("next")}
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
        </div>
      </div>

      <h3 className="mt-6 text-md text-gray-900">
        <a href={callout.href}>
          <span className="absolute inset-0" />
          {callout.name}
        </a>
      </h3>
      <p className="text-base text-gray-500">{callout.description}</p>
      <p className="text-base font-medium text-gray-700 mt-2 mb-2">
        <FontAwesomeIcon className="inline w-6 mr-4" icon={faCode} />
        {callout.skills}
      </p>
      <div className="flex gap-2">
        {callout.links.map((link) => (
          <div key={link.url} className="group relative">
            <div className=" mb-6 ">
              <a
                href={link.url}
                className="text-gray-800 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-bold uppercase rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-10"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon className="inline w-6 mr-4" icon={faGlobe} />
                <span
                  className="absolute inset-0 text-gray-900 hover:text-gray-400 dark:hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                />
                {link.label}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
