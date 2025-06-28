import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/button';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { text: "الصفحة الرئيسية", path: "/" },
    { text: "من نحن", path: "/about" },
    { text: "الأنشطة", path: "/activities" },
    { text: "انضم إلينا", path: "/join" },
    { text: "تواصل معنا", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-gradient-to-l from-[#167fcd] to-[#1370b8] shadow-xl relative z-50 sticky top-0">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20 lg:h-24">
          
          {/* Logo - محسن للجوال */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 md:gap-4 group flex-shrink-0">
            <div className="relative flex-shrink-0">
              <img
                src="/488706236-1098046015673714-2009694652643587000-n-1.png"
                alt="شعار أليكس الكشفية"
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 object-cover rounded-full border-2 sm:border-3 md:border-4 border-white/20 group-hover:border-white/40 transition-all duration-300 shadow-lg"
              />
              <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {/* النص بجانب اللوجو - مرئي دائماً */}
            <div className="text-white min-w-0">
              <h1 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-black font-cairo tracking-wide leading-tight">
                أليكس الكشفية
              </h1>
              <p className="text-xs sm:text-sm md:text-base opacity-90 font-medium leading-tight hidden sm:block">
                التطوع بشرف للوطن
              </p>
            </div>
          </Link>

          {/* Desktop Navigation - مخفي في الشاشات الصغيرة */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`relative px-3 lg:px-4 xl:px-6 py-2 lg:py-3 text-sm lg:text-base xl:text-lg font-bold font-cairo transition-all duration-300 rounded-lg xl:rounded-xl whitespace-nowrap ${
                  isActive(item.path)
                    ? 'text-white bg-white/20 shadow-lg'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.text}
                {isActive(item.path) && (
                  <div className="absolute bottom-0 right-1/2 transform translate-x-1/2 w-1.5 h-1.5 lg:w-2 lg:h-2 bg-white rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button - محسن للجوال */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-white hover:bg-white/20 p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl flex-shrink-0 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation - محسن بالكامل */}
        <div className={`lg:hidden absolute top-full right-0 left-0 bg-gradient-to-l from-[#167fcd] to-[#1370b8] border-t border-white/20 shadow-2xl backdrop-blur-sm transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'opacity-100 visible transform translate-y-0' 
            : 'opacity-0 invisible transform -translate-y-2'
        }`}>
          <nav className="py-2 sm:py-3 md:py-4">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`block px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base md:text-lg font-bold font-cairo transition-all duration-300 ${
                  isActive(item.path)
                    ? 'text-white bg-white/20 border-r-3 sm:border-r-4 border-white shadow-lg'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center justify-between">
                  {item.text}
                  {isActive(item.path) && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};