import React from 'react';
import 'react-simple-typewriter/dist/index';
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter';

function Typewriters() {
  const handleType = (count) => {
    // access word count number
    console.log(count);
  };
  const words = ['DevCats', 'Full-Stack', 'Mobile', 'Website'];
  const { text } = useTypewriter({
    words,
    loop: 0, // Infinit
  });

  return (
    <span className=" text-8xl  text-white">
      {/* Style will be inherited from the parent element */}
      {text}
      <Cursor />
    </span>
  );
}

export default Typewriters;
