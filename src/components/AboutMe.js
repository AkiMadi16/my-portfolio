import { Helmet } from "react-helmet";

function AboutMe() {
  return (
    <div className="container flex-1 mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
      <Helmet>
        <title>About Me | Madhavi Meegahapola</title>
      </Helmet>
      <div>
        <p
          className="first-line:uppercase first-line:tracking-widest
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-3 first-letter:float-left
"
        >
          Hi, I am Madhavi, and I'm passionate about building the websites. As a
          junior software engineer with a background in civil engineering, I
          bring a unique set of skills and perspectives to the field of
          technology. In addition, my experience as a volunteer digital hub
          tutor has inspired me to focus on user experience design.
        </p>
        <p className="mt-2">
          Teaching people how to navigate tech devices, such as basic computer
          literacy, was an eye-opening experience for me. It made me realize the
          importance of designing user-friendly interfaces that cater to people
          with diverse levels of tech knowledge.
        </p>
        <p className="mt-2">
          Overall, my background in civil engineering and experience as a
          digital hub tutor have shaped my approach to software development. I
          am excited to continue learning and growing in this field, and I look
          forward to contributing my unique perspective to future projects.
        </p>

        <div className="overflow-x-auto mt-10">
          <div className=" space-x-4 font-light text-m">
            <h2 className="text-lg uppercase mb-4">Skills & Tools</h2>
            <div className="flex space-x-6">
              <ul className="list-none ">
                <li>JavaScript</li>
                <li>React</li>
                <li>Ruby | Ruby-on-Rails</li>
                <li>CSS | SCSS</li>
                <li>HTML5</li>
                <li>Node | Express.js</li>
                <li>Bootstrap | Tailwind</li>
                <li>Figma</li>
                <li>Postman | CURL</li>
                <li>TRELLO</li>

                <li>
                  <div className=" gap-4">
                    Infrastructure | Hosting | DB
                    <p className="leading-8">
                      <span className="rounded-xl bg-green-200 px-3">
                        Heroku
                      </span>
                      <span className="rounded-xl bg-green-200 px-3">
                        Netlify
                      </span>
                      <span className="rounded-xl bg-green-200 px-3">
                        Surge
                      </span>
                      <span className="rounded-xl bg-green-200 px-3">
                        Render
                      </span>
                      <span className="rounded-xl bg-green-200 px-3">
                        Fly.io
                      </span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
            <div className="overflow-x-auto w-50%">
              <img
                src="https://i.imgur.com/G8CZMt6.png"
                className="w-6 md:w-12"
                alt=""
              />
            </div>
            <div className="overflow-x-auto">
              <img
                src="https://i.imgur.com/XLUAiSs.png"
                className="w-6 md:w-12"
                alt=""
              />
            </div>
            <div className="overflow-x-auto">
              <img
                src="https://i.imgur.com/QISfjom.png"
                className="w-6 md:w-12"
                alt=""
              />
            </div>
            <div className="overflow-x-auto">
              <img
                src="https://i.imgur.com/AKHPl1S.png"
                className="w-6 md:w-12"
                alt=""
              />
            </div>
            <div className="overflow-x-auto">
              <img
                src="https://i.imgur.com/VMI6RzS.png"
                className="w-6 md:w-12"
                alt=""
              />
            </div>
            <div className="overflow-x-auto">
              <img
                src="https://i.imgur.com/eMQ900P.png"
                className="w-6 md:w-12"
                alt=""
              />
            </div>
            <div className="overflow-x-auto">
              <img
                src="https://i.imgur.com/FlX1enD.png"
                className="w-6 md:w-12"
                alt=""
              />
            </div>
            <div className="overflow-x-auto">
              <img
                src="https://i.imgur.com/x9sHxFE.png"
                className="w-6 md:w-12"
                alt=""
              />
            </div>
            <div className="overflow-x-auto">
              <img
                src="https://i.imgur.com/3Ss2h91.png"
                className="w-6 md:w-12"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
