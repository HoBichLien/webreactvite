import React from 'react';
import { ShoppingBag, Phone, Mail, MapPin, Facebook, Instagram, MessageCircle, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Trang chủ', href: '#home' },
    { label: 'Sản phẩm', href: '#products' },
    { label: 'Về chúng tôi', href: '#about' },
    { label: 'Liên hệ', href: '#contact' }
  ];

  const productCategories = [
    { label: 'Balo tiểu học', href: '#' },
    { label: 'Balo THCS', href: '#' },
    { label: 'Balo THPT', href: '#' },
    { label: 'Balo đại học', href: '#' }
  ];

  const policies = [
    { label: 'Chính sách bảo hành', href: '#' },
    { label: 'Chính sách đổi trả', href: '#' },
    { label: 'Chính sách vận chuyển', href: '#' },
    { label: 'Chính sách bảo mật', href: '#' }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', color: 'hover:text-blue-600' },
    { icon: Instagram, href: 'https://instagram.com', color: 'hover:text-pink-600' },
    { icon: MessageCircle, href: 'https://zalo.me', color: 'hover:text-blue-500' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center text-2xl font-bold mb-6">
              <ShoppingBag className="mr-2 text-blue-400" size={28} />
              BaloStore
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Chuyên cung cấp balo học sinh chất lượng cao với thiết kế hiện đại, 
              giá cả hợp lý. Đồng hành cùng các em trong hành trình học tập.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Phone size={16} className="mr-3 text-blue-400" />
                <span>0123 456 789</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail size={16} className="mr-3 text-blue-400" />
                <span>info@balostore.com</span>
              </div>
              <div className="flex items-start text-gray-400">
                <MapPin size={16} className="mr-3 text-blue-400 mt-1" />
                <span>123 Nguyễn Văn Cừ, Q.5, TP.HCM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Liên kết nhanh</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Danh mục sản phẩm</h3>
            <ul className="space-y-3">
              {productCategories.map((category, index) => (
                <li key={index}>
                  <a
                    href={category.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    {category.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Chính sách</h3>
            <ul className="space-y-3 mb-6">
              {policies.map((policy, index) => (
                <li key={index}>
                  <a
                    href={policy.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    {policy.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold mb-3">Đăng ký nhận tin</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email của bạn"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-blue-400 text-sm"
                />
                <button className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors duration-300">
                  <Mail size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110`}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="mb-2 md:mb-0">
              © 2024 BaloStore. Tất cả quyền được bảo lưu.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                Điều khoản sử dụng
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                Chính sách bảo mật
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;