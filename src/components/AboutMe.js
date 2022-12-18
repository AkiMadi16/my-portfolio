function AboutMe() {
  return (
    <div className="container flex-1 mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
      <div>
        <p
          class="first-line:uppercase first-line:tracking-widest
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-3 first-letter:float-left
"
        >
          Hi, I am Madhavi, and I'm passionate about building the websites. I
          have started volunteering as a Digital Hub tutor in the library
          helping many people to navigate computers and mobile phones. That led
          me into having interest in User Experience Design.
        </p>
        <p>
          I was working in civil engineering field and when I come to australia
          I've worked as a customer service officer and helped people as a
          volunteer.
        </p>
        <p>
          Lately, I've discovered my passion for the world of web development
          and the beauty behind building useful websites like the one you will
          find in this portfolio. I'm now looking for a junior dev position to
          finally kick start my career and learn among professionals.
        </p>

        <div className="overflow-x-auto mt-10">
          <div className=" space-x-4 font-light text-m">
            <h2 className="text-lg uppercase mb-4">Skills & Tools</h2>
            <div className="flex space-x-6">
              <ul className="list-none ">
                <li>
                  <label for="js-skill">JavaScript</label>
                </li>
                <li>
                  <label for="react-skill">React</label>
                </li>
                <li>
                  <label for="ruby-skill">Ruby | Ruby-on-Rails</label>
                </li>
                <li>
                  <label for="nodejs-skill">CSS | SCSS</label>
                </li>
                <li>
                  <label for="eleventy-skill">HTML5</label>
                </li>
                <li>
                  <label for="node-skill">Node | Express.js</label>
                </li>
                <li>
                  <label for="css-skill">Bootstrap | Tailwind</label>
                </li>
                <li>
                  <label for="design-skill">Figma</label>
                </li>
                <li>
                  <label for="design-skill">Postman | CURL</label>
                </li>
                <li>
                  <label for="design-skill">TRELLO</label>
                </li>

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
          <div className="lg:max-w-lg lg:w-half md:w-1/2 w/6 mx-auto flex md:flex-row gap-4 flex-col items-center ">
            <div className="overflow-x-auto w-50%">
              <img
                src="https://i.imgur.com/G8CZMt6.png"
                className="float-right"
                alt=""
              />
            </div>
            <div className="overflow-x-auto">
              <img
                src="https://i.imgur.com/XLUAiSs.png"
                className="float-right"
                alt=""
              />
            </div>
            <div className="overflow-x-auto">
              <img
                src="https://i.imgur.com/QISfjom.png"
                className="float-right"
                alt=""
              />
            </div>
            <div className="overflow-x-auto">
              <img
                src="https://i.imgur.com/AKHPl1S.png"
                className="float-right"
                alt=""
              />
            </div>
            <div className="overflow-x-auto">
              <img
                src="https://i.imgur.com/VMI6RzS.png"
                className="float-right"
                alt=""
              />
            </div>
            <div className="overflow-x-auto">
              <img
                src="https://i.imgur.com/eMQ900P.png"
                className="float-right"
                alt=""
              />
            </div>
            <div className="overflow-x-auto">
              <img
                src="https://i.imgur.com/FlX1enD.png"
                className="float-right"
                alt=""
              />
            </div>
            <div className="overflow-x-auto">
              <img
                src="https://i.imgur.com/x9sHxFE.png"
                className="float-right"
                alt=""
              />
            </div>
            <div className="overflow-x-auto">
              <img
                src="https://i.imgur.com/3Ss2h91.png"
                className="float-right"
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
