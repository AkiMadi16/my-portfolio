import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="container flex-1 flex flex-col justify-center items-center text-center mx-auto">
      <div className="p-12">
        <h1 className="relative title-font sm:text-4xl text-3xl mb-4 font-large font-bold text-black">
          <span className="relative">
            <sup className="absolute -top-8 -rotate-12 -left-10 font-Caveat text-3xl mb-4 font-large text-black">
              Hello, I'm
            </sup>
            <span className="uppercase">Madhavi Meegahapola</span>
          </span>
          <br className="hidden lg:inline-block" />
        </h1>
        <p className="mb-8 text-blackleading-relaxed">
          I am a Software Engineer 👩‍💻 from Adelaide 🇦🇺.
          <br />I love to build amazing apps.
        </p>
        <div className="flex justify-center">
          <a
            href="/ContactMe"
            className="text-gray-800 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-bold uppercase rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            ✉️ Hire Me
          </a>
          {/* <a
              href="/Projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a> */}
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        {/* <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://i.imgur.com/HVsIHhw.jpg"
          /> */}
      </div>
    </div>
  );
}
