import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { LockClosedIcon } from "@heroicons/react/20/solid";

function ContactMe() {
  const handleOnSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    fetch("/", {
      method: "post",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then((response) => response.json())
      .then(() => console.log("Form successfully submitted"))
      .catch((error) => alert(error));
  };

  return (
    <div className="flex flex-1 min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 mt-10 mb-10 border border-2 bg-green-200 ">
        <div className="col-md-6 offset-md-3">
          <div className="mt-2 text-center text-md text-gray-600">
            <div className="mt-6 text-center text-lg font-light tracking-tight text-gray-900">
              <h5 className="mt-2 text-center text-md text-gray-600">
                Get in Touch
              </h5>
              <h5 className="mt-2 text-center text-sm text-gray-600">
                I will respond asap if a valid email is provided!
              </h5>
              <h2 className="mt-2 text-center text-md text-gray-600">
                Contact Me
              </h2>
              <div className="contact__options">
                <h5 className="mt-2 text-center text-md text-gray-600">
                  <a
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                    href="mailto:"
                  >
                    <FontAwesomeIcon icon={faEnvelope} /> madie86@gmail.com
                  </a>
                </h5>
              </div>
              {/* <form onSubmit={handleOnSubmit}>  */}
              {/* <form onSubmit={handleOnSubmit} action="https://mailthis.to/madie86@gmail.com" method="POST" encType="multipart/form-data"> */}
              <form name="contact" netlify="true" onSubmit={handleOnSubmit}>
                <input type="hidden" name="form-name" value="contact" />

                <div className="mt-8 space-y-6 rounded-md p-2">
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    type="fullname"
                    name="name"
                    id="fullname"
                    placeholder="Your Full Name"
                    className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 mt-10 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    required
                  />
                </div>
                <div className="-space-y-px rounded-md p-2">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 mt-10 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="-space-y-px rounded-mb p-2">
                  <textarea
                    type="message"
                    className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    id="message"
                    name="message"
                    placeholder="Your message"
                  />
                </div>
                <button
                  className="group relative flex w-half justify-center bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-bold uppercase  rounded-lg py-2 px-4 mt-5 mb-5 ml-40 pl-20 text-sm font-medium text-black  focus:ring-offset-2"
                  type="submit"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <LockClosedIcon
                      className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                      aria-hidden="true"
                    />
                  </span>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
