import "./Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

import "pure-react-carousel/dist/react-carousel.es.css";
import { Helmet } from "react-helmet";

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const callouts = [
  {
    name: "Hikr App",
    description:
      "This website contains highlights of important places recommended by people around the world along with high quality photography and allow people to find the most popular places to get experience on hiking. Hikr app allows user to add recommendations and maintain thier own profiles and the Map shows recommended sites",
    imageSrc: [
      "https://i.imgur.com/s5wpF2w.png",
      "https://i.imgur.com/6Eyepo8.jpg",
      "https://i.imgur.com/cQMEyOs.jpg",
    ],
    imageAlt: ["profile", "dashboard", "figma - design"],
    href: "#",
    skills: "Javascript | HTML | CSS",
    links: [
      {
        label: "Website",
        url: "https://hikr.fly.dev/",
      },
      {
        label: "GitHub",
        url: "https://github.com/AkiMadi16/happy-feet-app",
      },
    ],
  },

  {
    name: "My Books App",
    description:
      "This app was build inspired by Read Write Inc. Reading records book. I wanted to digitize this paper book for users to easy to access and keep a record and track of their reading habits.",
    imageSrc: [
      "https://i.imgur.com/IkLpBrE.jpg",
      "https://i.imgur.com/9wpBSUE.jpg",
      "https://i.imgur.com/IkLpBrE.jpg",
    ],
    imageAlt: "",
    href: "#",
    skills: "Ruby | Sinatra | mySQL | HTML | CSS",
    links: [
      {
        label: "Website",
        url: "https://bookapp-z0hv.onrender.com/",
      },
      {
        label: "GitHub",
        url: "https://github.com/AkiMadi16/book_record",
      },
    ],
  },
  {
    name: "Find Your Baker App",
    description:
      "This website is a single-page-application(SPA) providing bakers information where the local community can find their favourite bakers and the bakers can have a place to show their food.",
    imageSrc: [
      "https://i.imgur.com/G7BjuZ2.jpg",
      "https://i.imgur.com/G7BjuZ2.jpg",
      "https://i.imgur.com/ZjFVt5N.jpg",
    ],
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
    skills: "Javascript | HTML | CSS | Javascript | Express | MySQL | Node js",
    links: [
      {
        label: "Website",
        url: "https://find-your-baker.onrender.com/",
      },
      {
        label: "GitHub",
        url: "https://github.com/huifang719/find_your_baker",
      },
    ],
  },
  {
    name: "Tic-Tac-Toe",
    description:
      "HTML was used for building the content of the website, CSS for styling and JS for implementing the tic-tac-toe game. I used DOM manipulation in JS to interact with the HTML elements.",
    imageSrc: [
      "https://i.imgur.com/FE17aoP.png",
      "https://i.imgur.com/w1UtFL9.png",
      "https://i.imgur.com/FE17aoP.png",
    ],
    imageAlt: "Win Lost Draw Game conditions.",
    href: "#",
    skills: "Javascript | HTML | CSS",
    links: [
      {
        label: "Website",
        url: "https://akimadi16.github.io/tic-tac-toe/",
      },
      {
        label: "GitHub",
        url: "https://github.com/AkiMadi16/tic-tac-toe",
      },
    ],
  },
  {
    name: "PacMan Simulator",
    description:
      "HTML was used for building the content of the website, CSS for styling and JS for implementing the tic-tac-game. I used DOM manipulation in JS to interact with the HTML elements.",
    imageSrc: [
      "https://i.imgur.com/vXg7Xsz.png",
      "https://i.imgur.com/w1UtFL9.png",
      "https://i.imgur.com/FE17aoP.png",
    ],
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
    skills: "Javascript | HTML | CSS",
    links: [
      {
        label: "Website",
        url: "https://akimadi16.github.io/Pacman-Simulator/",
      },
      {
        label: "GitHub",
        url: "https://github.com/AkiMadi16/Pacman-Simulator",
      },
    ],
  },
];

export default function Projects() {
  return (
    <div className="flex-1">
      <Helmet>
        <title>Projects | Madhavi Meegahapola</title>
      </Helmet>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Projects</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
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
                          <FontAwesomeIcon
                            className="inline w-6 mr-4"
                            icon={faGlobe}
                          />
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// export default Projects;
