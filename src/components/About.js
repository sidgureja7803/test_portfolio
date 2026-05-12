import React from 'react';
import { personalInfo } from '../mock';

const About = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-end relative">
        <div className="md:w-3/4">
          <p className="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-foreground">
            {personalInfo.bio}
          </p>
        </div>
        <div className="mt-12 md:mt-0 flex flex-col items-center justify-center">
          <div className="w-32 h-32 md:w-40 md:h-40 bg-foreground text-background rounded-full flex items-center justify-center text-sm md:text-base font-medium cursor-pointer hover:scale-105 transition-transform duration-300">
            About me
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;