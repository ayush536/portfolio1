import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Coder",
          "Self Learner And Confident",
          "MERN Stack Developer",
          "Open Source Contributor",
          "Traveller",
          "Innovator"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
