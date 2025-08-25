import React from 'react';
import { Award, Users, Clock, Heart } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    {
      icon: Users,
      number: '10,000+',
      label: 'Khách hàng tin tưởng',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Award,
      number: '5+',
      label: 'Năm kinh nghiệm',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Clock,
      number: '24/7',
      label: 'Hỗ trợ khách hàng',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      icon: Heart,
      number: '98%',
      label: 'Độ hài lòng',
      color: 'from-pink-500 to-rose-600'
    }
  ];

  const values = [
    {
      title: 'Chất lượng hàng đầu',
      description: 'Chúng tôi cam kết chỉ cung cấp những sản phẩm chất lượng cao nhất, được kiểm tra kỹ lưỡng trước khi đến tay khách hàng.'
    },
    {
      title: 'Giá cả hợp lý',
      description: 'Với mục tiêu phục vụ mọi tầng lớp học sinh, chúng tôi luôn duy trì mức giá cạnh tranh và nhiều chương trình ưu đãi.'
    },
    {
      title: 'Dịch vụ tận tâm',
      description: 'Đội ngũ tư vấn chuyên nghiệp, nhiệt tình hỗ trợ khách hàng 24/7. Chúng tôi luôn lắng nghe và đáp ứng mọi nhu cầu.'
    },
    {
      title: 'Bảo hành uy tín',
      description: 'Chế độ bảo hành 2 năm chính hãng, đổi trả trong 30 ngày đầu. Chúng tôi chịu trách nhiệm hoàn toàn về sản phẩm.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Về BaloStore
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Với hơn 5 năm kinh nghiệm trong ngành, chúng tôi tự hào là địa chỉ tin cậy 
              cung cấp balo học sinh chất lượng cao với giá cả hợp lý nhất thị trường.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Câu chuyện của chúng tôi
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    BaloStore được thành lập từ năm 2019 với sứ mệnh mang đến những sản phẩm 
                    balo chất lượng cao, thiết kế hiện đại và giá cả phải chăng cho học sinh, 
                    sinh viên Việt Nam.
                  </p>
                  <p>
                    Chúng tôi hiểu rằng một chiếc balo không chỉ đơn thuần là phụ kiện mà còn 
                    là người bạn đồng hành trong suốt quá trình học tập. Vì vậy, mỗi sản phẩm 
                    của chúng tôi đều được thiết kế tỉ mỉ, chú trọng đến tính tiện dụng và 
                    sức khỏe của người sử dụng.
                  </p>
                  <p>
                    Với đội ngũ thiết kế trẻ trung, năng động và am hiểu xu hướng thời trang, 
                    chúng tôi không ngừng cải tiến và phát triển những mẫu balo mới, đáp ứng 
                    nhu cầu ngày càng đa dạng của khách hàng.
                  </p>
                </div>
              </div>

              {/* Values */}
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Giá trị cốt lõi</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  {values.map((value, index) => (
                    <div key={index} className="space-y-2">
                      <h5 className="font-semibold text-blue-600">{value.title}</h5>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Về chúng tôi"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-blue-600">5+</div>
                <div className="text-sm text-gray-600">Năm kinh nghiệm</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-green-600">10K+</div>
                <div className="text-sm text-gray-600">Khách hàng</div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon size={28} className="text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Mission Statement */}
          <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-6">Sứ mệnh của chúng tôi</h3>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              "Mang đến cho mỗi học sinh, sinh viên Việt Nam một chiếc balo chất lượng cao, 
              thiết kế đẹp và giá cả hợp lý, đồng hành cùng các em trong hành trình chinh phục tri thức."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;