import React from 'react';
import { Button } from './ui/button';
import { ArrowDown, Download, ExternalLink } from 'lucide-react';
import { personalInfo, socialLinks } from '../mock';

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const getSocialIcon = (iconName) => {
    switch (iconName) {
      case 'linkedin':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
          </svg>
        );
      case 'github':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
          </svg>
        );
      default:
        return <ExternalLink className="w-5 h-5" />;
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-16 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center space-y-10 relative z-10">
        {/* Subtle Background Gradient */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"></div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Status Badge */}
          <div className="inline-flex items-center px-5 py-2.5 rounded-full glass border border-border text-sm font-medium">
            <span className="relative flex h-2.5 w-2.5 mr-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-foreground">Available for new opportunities</span>
          </div>

          {/* Name & Title */}
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-tight">
              <span className="block text-foreground">
                {personalInfo.name.split(' ')[0]}
              </span>
              <span className="block text-primary mt-2">
                {personalInfo.name.split(' ')[1]}
              </span>
            </h1>

            <div className="space-y-4">
              <p className="text-2xl sm:text-3xl font-medium text-foreground/90">
                {personalInfo.title}
              </p>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {personalInfo.tagline}
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="group px-8 py-6 font-medium text-base transition-all hover:scale-105"
              onClick={scrollToAbout}
            >
              Explore My Work
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-0.5 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group px-8 py-6 font-medium text-base transition-all hover:scale-105"
            >
              Download CV
              <Download className="ml-2 h-5 w-5 group-hover:translate-y-0.5 transition-transform" />
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-3 pt-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-lg glass hover:glass-strong border border-border text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110"
              >
                {getSocialIcon(link.icon)}
                <span className="sr-only">{link.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center p-2">
            <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;