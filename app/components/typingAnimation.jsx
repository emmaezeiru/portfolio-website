"use client";

import { useState, useEffect } from "react";

const TypingAnimation = () => {
  const texts = ["Backend Developer", "Fullstack Developer"];
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentString = texts[currentIndex];

    if (!isDeleting && charIndex < currentString.length) {
      setTimeout(() => {
        setCurrentText((prev) => prev + currentString[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);
    } else if (isDeleting && charIndex > 0) {
      setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, 50);
    } else if (!isDeleting && charIndex === currentString.length) {
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }
  }, [charIndex, isDeleting, currentIndex]);

  return (
    <div className=" relative w-[300px] whitespace-nowrap">
      <span className="text-blue-500 inline-block">{currentText}</span>
      <span className="inline-block border-r-2 border-blue-500 animate-blink h-full"></span>
    </div>
  );
};

export default TypingAnimation;
