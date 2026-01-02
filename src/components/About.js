import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { personalInfo, education } from '../mock';
import { GraduationCap, MapPin, Mail, Phone } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            About
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
            {personalInfo.bio}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center text-muted-foreground">
                <Mail className="w-5 h-5 mr-3" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-foreground transition-colors">
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Phone className="w-5 h-5 mr-3" />
                <a href={`tel:${personalInfo.phone}`} className="hover:text-foreground transition-colors">
                  {personalInfo.phone}
                </a>
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="w-5 h-5 mr-3" />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <GraduationCap className="w-5 h-5 mr-3" />
              Education
            </h3>

            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.id} className="space-y-2">
                  <h4 className="font-semibold text-foreground">
                    {edu.degree}
                  </h4>
                  <p className="text-muted-foreground">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground">
                    {edu.duration}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;