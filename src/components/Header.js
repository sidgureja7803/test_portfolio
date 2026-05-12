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
    <header className={`fixed top-0 w-full z-50 transition-all duration-200 ${isScrolled
        ? 'glass-strong shadow-sm'
        : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <span className="font-bold text-2xl tracking-tight text-gradient">GK</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {item.label}
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
                className="hover:bg-accent transition-colors"
              >
                <Palette className="h-4 w-4" />
              </Button>

              {/* Theme Dropdown */}
              {isThemeMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 glass-strong rounded-lg shadow-lg overflow-hidden border border-border">
                  <div className="p-2">
                    {Object.entries(themes).map(([key, themeData]) => (
                      <button
                        key={key}
                        onClick={() => handleThemeChange(key)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-md transition-colors text-sm ${theme === key
                            ? 'bg-accent text-foreground'
                            : 'hover:bg-accent/50 text-muted-foreground'
                          }`}
                      >
                        <div className="flex items-center gap-2">
                          <span>{themeData.icon}</span>
                          <span className="font-medium">{themeData.name}</span>
                        </div>
                        {theme === key && <Check className="h-4 w-4" />}
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
              className="md:hidden hover:bg-accent"
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
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors font-medium rounded-md"
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