import React from 'react';
import { experience } from '../mock';

const Experience = () => {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 border-b border-border pb-4">
          <span className="text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Work Experience
          </span>
        </div>
        <div className="space-y-0">
          {experience.map((exp, index) => (
            <div 
              key={exp.id} 
              className="flex flex-col md:flex-row md:items-center justify-between py-12 md:py-16 border-b border-border hover:bg-muted/20 transition-colors duration-300"
            >
              <h3 className="text-5xl md:text-7xl font-medium tracking-tight mb-4 md:mb-0">
                {exp.company}
              </h3>
              <div className="text-right flex flex-col items-end">
                <span className="text-sm md:text-base font-medium text-foreground">
                  {exp.position}
                </span>
                <span className="text-xs md:text-sm text-muted-foreground mt-1">
                  {exp.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;