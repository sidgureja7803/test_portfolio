import React from 'react';
import { skills } from '../mock';

const Skills = () => {
  // Deduplicate and flatten skills
  const allSkills = Array.from(new Set([
    ...(skills.programming || []),
    ...(skills.frontend || []),
    ...(skills.backend || []),
    ...(skills.databases || []),
    ...(skills.tools || []),
    ...(skills.ai || []),
    ...(skills.core || [])
  ]));

  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 border-b border-border pb-4">
          <span className="text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Skills & Tools
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {allSkills.map((skill, index) => (
            <div 
              key={index}
              className="aspect-square flex items-center justify-center p-6 bg-muted/10 border border-border/50 hover:bg-muted/30 transition-colors duration-300 rounded-lg"
            >
              <span className="text-sm md:text-base font-medium text-center text-foreground/80">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;