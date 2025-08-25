import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Phone, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Trang chủ', href: '#home' },
    { label: 'Sản phẩm', href: '#products' },
    { label: 'Tính năng', href: '#features' },
    { label: 'Đánh giá', href: '#testimonials' },
    { label: 'Về chúng tôi', href: '#about' },
    { label: 'Liên hệ', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      {/* Top Bar */}
      <div className="bg-blue-600 text-white py-2 text-sm">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone size={14} className="mr-2" />
              <span>0123 456 789</span>
            </div>
            <div className="flex items-center">
              <Mail size={14} className="mr-2" />
              <span>info@balostore.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Miễn phí vận chuyển cho đơn hàng trên 500k</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">
            <ShoppingBag className="inline mr-2" size={28} />
            BaloStore
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
              Mua ngay
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-xl">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.href)}
                className="w-full text-left px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
              >
                {item.label}
              </button>
            ))}
            <div className="px-6 pt-4">
              <button className="w-full bg-blue-600 text-white py-2 rounded-full font-semibold">
                Mua ngay
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;