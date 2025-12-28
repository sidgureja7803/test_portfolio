import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, Palette, Check } from 'lucide-react';
import { useTheme, themes } from '../contexts/ThemeContext';

const Header = () => {
  const { theme, changeTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close theme menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isThemeMenuOpen && !e.target.closest('.theme-selector')) {
        setIsThemeMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isThemeMenuOpen]);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#opensource', label: 'Open Source' },
    { href: '#leetcode', label: 'LeetCode' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#contact', label: 'Contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleThemeChange = (newTheme) => {
    changeTheme(newTheme);
    setIsThemeMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? 'glass-strong shadow-lg'
        : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary via-accent to-primary rounded-xl flex items-center justify-center shadow-lg glow-primary">
              <span className="text-primary-foreground font-bold text-lg">S</span>
            </div>
            <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Siddhant
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-2 text-muted-foreground hover:text-foreground transition-all duration-200 font-medium text-sm tracking-wide rounded-lg hover:bg-accent/50 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-3/4"></span>
              </button>
            ))}
          </nav>

          {/* Theme Selector & Mobile Menu */}
          <div className="flex items-center space-x-2">
            {/* Theme Selector */}
            <div className="relative theme-selector">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
                className="hover:bg-accent/50 transition-all duration-200 gap-2"
              >
                <Palette className="h-4 w-4" />
                <span className="hidden sm:inline text-xs">{themes[theme]?.icon}</span>
              </Button>

              {/* Theme Dropdown */}
              {isThemeMenuOpen && (
                <div className="absolute right-0 mt-2 w-64 glass-strong rounded-xl shadow-2xl overflow-hidden border border-border animate-in slide-in-from-top-5 duration-200">
                  <div className="p-3 border-b border-border">
                    <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                      <Palette className="h-4 w-4" />
                      Choose Theme
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">Pick your favorite style</p>
                  </div>
                  <div className="p-2">
                    {Object.entries(themes).map(([key, themeData]) => (
                      <button
                        key={key}
                        onClick={() => handleThemeChange(key)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 ${theme === key
                            ? 'bg-primary text-primary-foreground shadow-md'
                            : 'hover:bg-accent/30 text-foreground'
                          }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{themeData.icon}</span>
                          <div className="text-left">
                            <p className="font-medium text-sm">{themeData.name}</p>
                            <p className={`text-xs ${theme === key ? 'text-primary-foreground/80' : 'text-muted-foreground'
                              }`}>
                              {themeData.description}
                            </p>
                          </div>
                        </div>
                        {theme === key && (
                          <Check className="h-4 w-4" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden hover:bg-accent/50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4 space-y-1 animate-in slide-in-from-top-5 duration-200">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-accent/30 transition-all duration-200 font-medium rounded-lg"
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;