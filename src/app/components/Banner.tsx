import React from "react";

export default function Banner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-black to-grey-700 font-sans px-6 py-12 mb-7">
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://img.freepik.com/free-photo/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai_157027-1734.jpg"
          alt="burger banner"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 container mx-auto flex flex-col justify-center items-center text-center">
        <h2 className="text-white sm:text-5xl font-bold mb-4">
          Discover Our Menu
        </h2>
        <p className="text-white text-lg text-center mb-6 max-w-xl">
          Our burgers are made with the finest ingredients and prepared to
          perfection.
        </p>

        <button
          type="button"
          className="bg-blue-500 text-white text-sm font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-cyan-600 transition duration-300"
        >
          Exciting Deals Launch At 12PM!
        </button>
      </div>
    </div>
  );
}
