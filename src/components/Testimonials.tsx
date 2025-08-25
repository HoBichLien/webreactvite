import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Nguyễn Minh Anh',
      role: 'Học sinh lớp 10',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      content: 'Balo rất đẹp và chất lượng tốt. Mình đã dùng được 1 năm rồi mà vẫn như mới. Các ngăn được thiết kế rất hợp lý, đựng được nhiều sách vở và đồ dùng học tập.',
      date: '2 tuần trước'
    },
    {
      id: 2,
      name: 'Trần Văn Nam',
      role: 'Sinh viên năm 3',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      content: 'Ngăn laptop rất an toàn, có đệm chống sốc tốt. Thiết kế trẻ trung, hiện đại. Giá cả hợp lý so với chất lượng. Rất hài lòng với sản phẩm này!',
      date: '1 tháng trước'
    },
    {
      id: 3,
      name: 'Lê Thị Hương',
      role: 'Phụ huynh',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      content: 'Mua cho con gái lớp 6. Balo nhẹ, không làm đau vai con. Chất liệu chống nước rất tốt, mùa mưa cũng không lo sách vở bị ướt. Sẽ tiếp tục ủng hộ shop!',
      date: '3 tuần trước'
    },
    {
      id: 4,
      name: 'Phạm Đức Thành',
      role: 'Học sinh lớp 12',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 4,
      content: 'Balo có nhiều ngăn tiện lợi, đặc biệt là ngăn đựng laptop rất an toàn. Thiết kế đẹp, phù hợp với học sinh. Chỉ có điều muốn có thêm màu sắc để lựa chọn.',
      date: '1 tuần trước'
    },
    {
      id: 5,
      name: 'Võ Thị Mai',
      role: 'Giáo viên',
      avatar: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      content: 'Tôi đã giới thiệu cho nhiều học sinh trong lớp. Chất lượng tuyệt vời, giá cả phải chăng. Dịch vụ chăm sóc khách hàng rất tốt, giao hàng nhanh chóng.',
      date: '2 tháng trước'
    },
    {
      id: 6,
      name: 'Hoàng Minh Tuấn',
      role: 'Sinh viên năm 1',
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      content: 'Balo gaming với đèn LED rất cool! Chất lượng tốt, thiết kế ấn tượng. Bạn bè ai cũng hỏi mua ở đâu. Definitely sẽ recommend cho mọi người!',
      date: '5 ngày trước'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Khách hàng nói gì về chúng tôi?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hơn 10,000 khách hàng đã tin tưởng và lựa chọn sản phẩm của chúng tôi
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <Quote size={16} className="text-white" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4 pt-4">
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={18}
                        fill={star <= testimonial.rating ? 'currentColor' : 'none'}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    {testimonial.rating}/5
                  </span>
                </div>

                {/* Content */}
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author Info */}
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-blue-600">{testimonial.role}</p>
                    <p className="text-xs text-gray-500">{testimonial.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Overall Stats */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white text-center">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-5xl font-bold mb-2">4.9</div>
                <div className="text-blue-100 mb-2">Điểm đánh giá trung bình</div>
                <div className="flex justify-center text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={20} fill="currentColor" />
                  ))}
                </div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">1,247</div>
                <div className="text-blue-100">Đánh giá tích cực</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">98%</div>
                <div className="text-blue-100">Khách hàng hài lòng</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;