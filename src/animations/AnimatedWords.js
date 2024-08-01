import React, { useState, useEffect } from 'react';

const AnimatedWords = ({ words }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    if (words.length === 0) return;

    const timer = setInterval(() => {
      setCurrentWordIndex((prevIndex) =>
        prevIndex < words.length - 1 ? prevIndex + 1 : 0
      );
    }, 2000);

    return () => clearInterval(timer); 
  }, [words]);

  return (
      <span className="animate">
        {words[currentWordIndex]}
      </span>
  );
};

export default AnimatedWords;
