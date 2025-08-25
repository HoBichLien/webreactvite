import React from 'react';
import { Shield, Droplets, Zap, Users, Heart, Truck } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Chất liệu bền bỉ',
      description: 'Vải Oxford 600D chống xước, chống rách. Khóa kéo YKK cao cấp bền bỉ theo thời gian.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Droplets,
      title: 'Chống nước hoàn toàn',
      description: 'Lớp phủ chống nước PU coating, bảo vệ sách vở khỏi mưa và độ ẩm.',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Zap,
      title: 'Thiết kế ergonomic',
      description: 'Quai đeo có đệm êm ái, phân bố trọng lượng đều, bảo vệ cột sống.',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      icon: Users,
      title: 'Phù hợp mọi lứa tuổi',
      description: 'Từ tiểu học đến đại học, thiết kế linh hoạt phù hợp với mọi độ tuổi.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Heart,
      title: 'An toàn sức khỏe',
      description: 'Chất liệu không độc hại, thân thiện môi trường, an toàn cho trẻ em.',
      color: 'from-pink-500 to-rose-600'
    },
    {
      icon: Truck,
      title: 'Giao hàng nhanh',
      description: 'Giao hàng toàn quốc trong 24-48h, miễn phí với đơn hàng trên 500k.',
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tại sao chọn balo của chúng tôi?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Chúng tôi cam kết mang đến những sản phẩm chất lượng cao với giá cả hợp lý, 
              đáp ứng mọi nhu cầu của học sinh, sinh viên.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Stats */}
          <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">10,000+</div>
                <div className="text-blue-100">Sản phẩm đã bán</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-blue-100">Khách hàng hài lòng</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">2 năm</div>
                <div className="text-blue-100">Bảo hành chính hãng</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-blue-100">Hỗ trợ khách hàng</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;