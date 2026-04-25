import React from "react";
import { useSpring, animated } from "react-spring";

function Home() {
  const fade = useSpring({
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    to: { opacity: 1, transform: "translate3d(0%,0,0)" },
  });

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-black overflow-hidden">

      {/* IMAGE SECTION */}
      <animated.div
        style={fade}
        className="relative w-full md:w-1/2 h-[60vh] md:h-screen flex justify-center items-end"
      >
        <img
          src="/test.png"
          alt="Profile"
          className="
            w-full 
            h-full 
            object-contain 
            md:object-cover 
            max-w-[700px]
          "
        />

        {/* Gradient overlay */}
        <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
      </animated.div>

      {/* TEXT SECTION */}
      <animated.div
        style={fade}
        className="flex flex-col justify-center items-center md:items-start text-center md:text-left px-6 md:w-1/2"
      >
        <h1 className="font-extrabold text-white text-3xl md:text-5xl">
          Anandhu Vijay
        </h1>

        <hr className="my-4 w-2/3 md:w-full border-gray-700" />

        <h2 className="text-xl md:text-2xl text-gray-300">
          Creative Director / Editor
        </h2>
      </animated.div>

    </div>
  );
}

export default Home;