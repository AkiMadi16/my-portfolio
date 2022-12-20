import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";

export default function Resume() {
  return (
    <div className="md:columns-2 flex-1">
      <Helmet>
        <title>Resume | Madhavi Meegahapola</title>
      </Helmet>
      <div id="sidebar" className="content w-full py-8 px-4">
        <div className="px-2 py-4 mb-12  ">
          <img
            src="https://i.imgur.com/ANO0Cdu.png?1"
            alt="madhavi"
            className="rounded-full w-50 h-44 mx-auto mb-4"
          />
          <h1 className="text-center text-3xl font-semibold mb-2">
            Madhavi Meegahapola
          </h1>
          <h2 className="text-center text-xl font-light">
            Junior Software Engineer
          </h2>
        </div>
        <div id="profile" className="prose  lg:inline-block lg:w-12/12 w-full">
          <h2 className="section-headline text-base font-semibold mb-2">
            Profile
          </h2>
          <p>
            I'm a software developer with an interest in javascript and frontend
            development. I'm experienced in frontend frameworks React. I love to
            use CSS frameworks like TailwindCSS or Bootstrap to speed up styling
            of my projects.
          </p>
          <p>
            I am a highly organised and a passionate software Engineer who is
            keen to work reliably and trustworthy as a team member also
            independently. I am highly motivated in expanding my horizons day by
            day for better performance, testing and user experience.
          </p>
        </div>
        <hr className="mt-8 mb-12" />
        <div className="font-light text-lg px-2 mb-12 ">
          <h2 className="text-light font-semibold mb-4">Contact</h2>
          <div className="flex items-center my-3">
            <FontAwesomeIcon className="inline w-6 mr-4" icon={faEnvelope} />
            <a href="mailto:">madie86@gmail.com</a>
          </div>
          <h2 className="text-light font-semibold mb-4">Resume</h2>
          <div className="flex items-center px-3 my-3">
            <FontAwesomeIcon className="inline w-6 mr-4" icon={faDownload} />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1jYvovUiw4igrRRRZ0wvl8i8UEF-Sr8Hz/view?usp=sharing"
              className="text-gray-800 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-bold uppercase rounded-lg text-sm px-20 py-3 text-center"
            >
              Download
            </a>
          </div>
        </div>

        <div className="font-light text-mb px-2 mb-12 ">
          <h2 className="text-light font-semibold mb-4">On the Web</h2>
          <div className="flex items-center my-3">
            <img
              src="https://i.imgur.com/vYCL2TI.png"
              className="inline w-6 mr-4"
              alt="GitHub Logo"
            />
            <a
              href="https://github.com/AkiMadi16"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>

          <div className="flex items-center my-3">
            <img
              src="https://i.imgur.com/j19KamY.png"
              className="inline w-6 mr-4"
              alt="LinkedIn Logo"
            />
            <a
              href="https://www.linkedin.com/in/madhavi-m-014b79b2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <div className="flex items-center my-3">
            <img
              src="https://i.imgur.com/dUT1VtY.png"
              className="inline w-6 mr-4"
              alt="Twitter Logo"
            />
            <a
              href="https://twitter.com/tweetymadie"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </div>
          <div className="flex items-center my-3">
            <img
              src="https://i.imgur.com/rfbdsiL.png"
              className="inline w-6 mr-4"
              alt="CodePen Logo"
            />
            <a
              href="https://codepen.io/madie86"
              target="_blank"
              rel="noopener noreferrer"
            >
              CodePen
            </a>
          </div>
          <div className="flex items-center my-3">
            <FontAwesomeIcon className="inline w-6 mr-4" icon={faGlobe} />
            <a
              href="https://app.netlify.com/sites/lambent-douhua-febd8c"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio
            </a>
          </div>
        </div>

        <div className="font-light text-mb px-2 mb-12">
          <div className=" inline font-light text-sm px-10 mb-12">
            <h2 className="text-light font-semibold mb-4">Skills & Tools</h2>
            <ul className="list-none  ">
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
                <div>Infrastructure | Hosting | DB</div>
                <p className="leading-8">
                  <span className="rounded-xl bg-green-200 px-3">Heroku</span>
                  <span className="rounded-xl bg-green-200 px-3">Netlify</span>
                  <span className="rounded-xl bg-green-200 px-3">Surge</span>
                  <span className="rounded-xl bg-green-200 px-3">Render</span>
                  <span className="rounded-xl bg-green-200 px-3">Fly.io</span>
                </p>
              </li>
            </ul>
          </div>

          <div className=" inline w-6 mr-4 text-lg px-10 py-6 mb-12">
            <h2 className="text-light font-semibold mb-4">Education</h2>
            <h3 className=" text-light font-semibold">
              Software Engineering Immersive course
            </h3>
            <p>2022 Aug-Oct General Assembly - Australia</p>
          </div>
          <div className="inline w-6 mr-4 text-lg px-10 py-6 mb-12">
            <h3 className="text-light font-semibold">
              National Diploma in Engineering Sciences
            </h3>
            <p>2007-2011 Institute of Engineering Technology - Sri Lanka</p>
          </div>

          <div className="inline w-6 mr-4  text-lg px-10 mb-12">
            <h2 className="text-light font-semibold mb-4">Languages</h2>
            <h3 className="font-semibold">Sinhala</h3>
            <p>Native</p>
            <h3 className="font-semibold">English</h3>
            <p>Fluent</p>
          </div>
        </div>
      </div>

      <div className="w-full p-8 mt-12">
        <div id="experience" className="prose ">
          <h2 className="font-semibold mb-4 section-headline">
            Experience - SoftWare Engineering Projects
          </h2>
          <div>
            <h3 className="text-light font-semibold mb-4">Hikr App</h3>
            <section className="mb-6">
              <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                Oct 2022
              </div>
              <div className="lg:inline-block lg:w-8/12 w-full">
                Fullstack Web application
              </div>
            </section>
            <section className="mb-6">
              <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                Task:
              </div>
              <div className="lg:inline-block lg:w-8/12 w-full">
                Design UI with FIGMA Schedule three days work plan with TRELLO
                Build FrontEnd web application with React Build Backend API and
                Database with Node.js Connects FrontEnd and BackEnd using
                framework Testing API using Postman CSS styling with Bootstrap
              </div>
            </section>
            <section className="mb-6">
              <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                Description:
              </div>
              <div className="lg:inline-block lg:w-8/12 w-full">
                This website contains highlights of important places recommended
                by people around the world along with high quality photography
                and allow people to find the most popular places to get
                experience on hiking. Hikr app allows user to add
                recommendations and maintain their own profiles and the Map
                shows recommended sites. Features - Google Map | Recommendations
                | Profile section | weather
              </div>
            </section>
            <section className="mb-6">
              <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                Tech Stack:
              </div>
              <div className="lg:inline-block lg:w-8/12 w-full">
                <span className="rounded-xl bg-green-200 px-3">React</span>
                <span className="rounded-xl bg-green-200 px-3">Bootstrap</span>
                <span className="rounded-xl bg-green-200 px-3">Git</span>
              </div>
            </section>
          </div>

          <div>
            <h3 className="text-light font-semibold mb-4">My Books App</h3>
            <section className="mb-4">
              <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                Sep 2022
              </div>
              <div className="lg:inline-block lg:w-8/12 w-full">
                Fullstack Web application
              </div>
            </section>
            <section className="mb-4">
              <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                Task:
              </div>
              <div className="lg:inline-block lg:w-8/12 w-full">
                Schedule three days work plan with TRELLO Build FrontEnd web
                application with Ruby and Sinatra
              </div>
            </section>
            <section className="mb-4">
              <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                Description:
              </div>
              <div className="lg:inline-block lg:w-8/12 w-full">
                This CRUD app was build inspired by Read Write Inc. Reading
                records book. I wanted to digitise this paper book for users
                easy to access and keep a record and track of their reading
                habits. Features - Profile pic | Bio | Reviews | Like count
              </div>
            </section>
            <section className="mb-4">
              <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                Tech Stack:
              </div>
              <div className="lg:inline-block lg:w-8/12 w-full">
                <span className="rounded-xl bg-green-200 px-3">
                  Ruby | Sinatra
                </span>
                <span className="rounded-xl bg-green-200 px-3">CSS | SQL </span>
                <span className="rounded-xl bg-green-200 px-3">
                  Git | Heroku
                </span>
              </div>
            </section>
          </div>

          <div>
            <h3 className="text-light font-semibold mb-4">
              Find-Your-Baker App
            </h3>
            <section className="mb-4">
              <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                Oct 2022
              </div>
              <div className="lg:inline-block lg:w-8/12 w-full">
                Fullstack Web application Single-Page-Application(SPA | AJAX)
              </div>
            </section>
            <section className="mb-4">
              <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                Task:
              </div>
              <div className="lg:inline-block lg:w-8/12 w-full">
                Wireframe Design with sketches Schedule three days work plan
                with TRELLO Build SPA web application with Express Node.js
                Testing API using Postman CSS styling with Bootstrap
              </div>
            </section>
            <section className="mb-4">
              <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                Description:
              </div>
              <div className="lg:inline-block lg:w-8/12 w-full">
                This website is a single-page-application(SPA) providing bakers
                information where the local community can find their favourite
                bakers and the bakers can have a place to show their food. app
                allows user to add reviews and maintain their own profiles and
                the Map shows bakers details and address. Features - Bing Map |
                Reviews | Ratings | Search
              </div>
            </section>
            <section className="mb-4">
              <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                Tech Stack:
              </div>
              <div className="lg:inline-block lg:w-8/12 w-full">
                <span className="rounded-xl bg-green-200 px-3">
                  HTML | CSS | SQL
                </span>
                <span className="rounded-xl bg-green-200 px-3">
                  Node.js | Express
                </span>
                <span className="rounded-xl bg-green-200 px-3">Bootstrap</span>
                <span className="rounded-xl bg-green-200 px-3">
                  Git | Heroku
                </span>
              </div>
            </section>
          </div>
        </div>

        <hr className="mt-8 mb-12" />
        <div id="projects " className="prose ">
          <h2 className="text-light font-semibold mb-4">Expand my skills</h2>
          <div className="mb-16">
            <h4 id="expand-knowledge-headline">
              I'd like to expand my skills and knowledge in several fields
            </h4>
            <ul>
              <li>TypeScript</li>
              <li>Testing, e.g. with Mocha, Chai, Jest</li>
              <li>Web Components, e.g. with StencilJS, LitElement</li>
              <li>Prototyping and Wireframing, e.g. with Figma, Adobe XD</li>
              <li>Scalable Vector Graphics</li>
              <li>Databases</li>
              <li>Mobile development</li>
              <li>
                Backend development, e.g. learn additional languages like
                Python, Java
              </li>
            </ul>
          </div>
        </div>
      </div>

      <footer className="mt-12 text-center flex justify-center flex-col md:flex-row mx-12"></footer>
    </div>
  );
}
