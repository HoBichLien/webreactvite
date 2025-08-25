import React from 'react';
import { Star, Shield, Truck, Award } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                <Award size={16} className="mr-2" />
                #1 Thương hiệu balo học sinh
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Balo Đi Học
                <span className="block text-blue-600">Chất Lượng Cao</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Khám phá bộ sưu tập balo đi học hiện đại, bền bỉ và thời trang. 
                Thiết kế ergonomic, chống nước và nhiều ngăn tiện lợi cho học sinh, sinh viên.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield size={20} className="text-green-600" />
                </div>
                <span className="font-medium text-gray-700">Bảo hành 2 năm</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Truck size={20} className="text-blue-600" />
                </div>
                <span className="font-medium text-gray-700">Giao hàng miễn phí</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Mua ngay - Chỉ từ 299k
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
                Xem catalog
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-10 h-10 bg-gray-300 rounded-full border-2 border-white"></div>
                  ))}
                </div>
                <span className="ml-3 text-gray-600">1000+ khách hàng hài lòng</span>
              </div>
              <div className="flex items-center">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">4.9/5</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Balo đi học chất lượng cao"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-indigo-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
            
            {/* Floating badges */}
            <div className="absolute top-8 -left-4 bg-white p-4 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-blue-600">299k+</div>
              <div className="text-sm text-gray-600">Giá từ</div>
            </div>
            <div className="absolute bottom-8 -right-4 bg-white p-4 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-green-600">2 năm</div>
              <div className="text-sm text-gray-600">Bảo hành</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;