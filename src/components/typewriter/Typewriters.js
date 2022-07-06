import React from 'react';
import 'react-simple-typewriter/dist/index';
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter';

function Typewriters() {
  const words = ['DevCats', 'Full-Stack', 'Mobile', 'Website'];
  const { text } = useTypewriter({
    words,
    loop: 0, // Infinit
  });

  return (
    <span className=" text-8xl  text-white">
      {text}
      <Cursor />
    </span>
  );
}

export default Typewriters;
