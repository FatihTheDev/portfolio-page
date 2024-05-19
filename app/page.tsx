'use client';

import Image from "next/image";
import business from './assets/business.png';
import { TypeAnimation } from 'react-type-animation';
import { ReactTyped } from "react-typed";
import { useState, useEffect } from "react";

export default function Home() {
  const [showTyped, setShowTyped] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTyped(true);
    }, 37200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hero-section grid gap-0 md:grid-cols-2">
      <Image src={business} alt="business headshot" className="mt-6 mx-auto h-[70%] rounded-md" />
      <h2 className="text-lg text-blue-800 text-center md:text-2xl md:mt-6 md:mr-5">
        <TypeAnimation
          sequence={[
            "",
            2000, 
            `I am Fatih Mekić, an aspiring frontend web developer with knowledge in HTML, CSS, JavaScript, React, Bootstrap and TailwindCSS.`,
            1000,
            `I am Fatih Mekić, an aspiring frontend web developer with knowledge in HTML, CSS, JavaScript, React, Bootstrap and TailwindCSS. I am currently polishing my React knowledge and am ready to code anytime.\n
            I also have experience in efficiently prompting various large language models to drastically boost my workflow.\n`,
            1000,
            `I am Fatih Mekić, an aspiring frontend web developer with knowledge in HTML, CSS, JavaScript, React, Bootstrap and TailwindCSS. I am currently polishing my React knowledge and am ready to code anytime.\n
            I also have experience in efficiently prompting various large language models to drastically boost my workflow.\n
            I have a positive attitude towards learning new things and am always seeking new:`,
            1000
          ]}
          speed={50}
        />

        {showTyped && (
        <h2 className="text-2xl text-blue-900 text-center md:text-3xl md:mt-6 md:mr-5">
        <ReactTyped
        strings={["opportunities", "challenges", "knowledge"]}
        typeSpeed={30}
        backSpeed={40}
        loop
        />
        </h2>
      )}
      </h2>
    </div>
  );
}
