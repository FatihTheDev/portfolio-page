'use client';

import Image from "next/image";
import pfp from './assets/business.jpg';
import { TypeAnimation } from 'react-type-animation';
import { ReactTyped } from "react-typed";
import { useState } from "react";

export default function Home() {
  const [showTyped, setShowTyped] = useState(false);

  return (
    <div className="min-h-screen w-full bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
      <div className="hero-section grid gap-8 grid-cols-1 md:grid-cols-2 items-center max-w-5xl mx-auto px-6 py-8 xl:py-16">
        <div className="flex justify-center">
          <Image
            src={pfp}
            alt="business headshot"
            className="h-[150px] w-[150px] md:h-[400px] md:w-[400px] object-cover rounded-full shadow-xl border-4 border-white dark:border-neutral-800 dark:shadow-neutral-950"
          />
        </div>

        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-lg md:text-2xl font-medium text-neutral-800 dark:text-neutral-200 leading-relaxed">
            <TypeAnimation
              sequence={[
                "",
                2000,
                `I am Fatih Mekić, an aspiring frontend web developer with knowledge in HTML, CSS, JavaScript, React, Next.js, TailwindCSS, Bootstrap, C, C++, Kotlin, Python, MongoDB and Neo4J.`,
                1000,
                `I am Fatih Mekić, an aspiring frontend web developer with knowledge in HTML, CSS, JavaScript, React, Next.js, TailwindCSS, Bootstrap, C, C++, Kotlin, Python, MongoDB and Neo4J. I am currently polishing my React knowledge and am ready to code anytime.\nI also have experience in efficiently prompting various large language models to drastically boost my workflow.\n`,
                1000,
                `I am Fatih Mekić, an aspiring frontend web developer with knowledge in HTML, CSS, JavaScript, React, Next.js, TailwindCSS, Bootstrap, C, C++, Kotlin, Python, MongoDB and Neo4J. I am currently polishing my React knowledge and am ready to code anytime.\nI also have experience in efficiently prompting various large language models to drastically boost my workflow.\nI am a big Linux enthusiast and a proud daily driver of Arch Linux, as it allows me to learn a lot about Linux processes and the system itself.\nI have a positive attitude towards learning new things and am always see`,
                1000,
                `I am Fatih Mekić, an aspiring frontend web developer with knowledge in HTML, CSS, JavaScript, React, Next.js, TailwindCSS, Bootstrap, C, C++, Kotlin, Python, MongoDB and Neo4J. I am currently polishing my React knowledge and am ready to code anytime.\nI also have experience in efficiently prompting various large language models to drastically boost my workflow.\nI am a big Linux enthusiast and a proud daily driver of Arch Linux, as it allows me to learn a lot about Linux processes and the system itself.\nI have a positive attitude towards learning new things and am always seeking new`,
                1000,
                () => setShowTyped(true),
              ]}
              speed={50}
              wrapper="span"
              className="block"
              repeat={0}
            />

            {showTyped && (
              <span className="block mt-2 text-xl md:text-3xl font-bold text-blue-700 dark:text-blue-400">
                <ReactTyped
                  strings={["opportunities", "challenges", "knowledge", "collaborations", "growth"]}
                  typeSpeed={50}
                  backSpeed={60}
                  backDelay={2000}
                  loop
                  showCursor={true}
                  cursorChar="."
                />
              </span>
            )}
          </h2>
        </div>
      </div>
    </div>
  );
}
