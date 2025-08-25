import React, { useState } from 'react';
import { Star, ShoppingCart, Eye, Heart } from 'lucide-react';

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tất cả' },
    { id: 'elementary', name: 'Tiểu học' },
    { id: 'middle', name: 'THCS' },
    { id: 'high', name: 'THPT' },
    { id: 'university', name: 'Đại học' }
  ];

  const products = [
    {
      id: 1,
      name: 'Balo Học Sinh Cấp 1',
      category: 'elementary',
      price: 299000,
      originalPrice: 399000,
      rating: 4.8,
      reviews: 124,
      image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Chống nước', 'Nhẹ nhàng', 'Nhiều màu sắc'],
      badge: 'Bán chạy'
    },
    {
      id: 2,
      name: 'Balo THCS Premium',
      category: 'middle',
      price: 449000,
      originalPrice: 599000,
      rating: 4.9,
      reviews: 89,
      image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Ngăn laptop', 'Chống sốc', 'USB port'],
      badge: 'Mới'
    },
    {
      id: 3,
      name: 'Balo THPT Thể Thao',
      category: 'high',
      price: 599000,
      originalPrice: 799000,
      rating: 4.7,
      reviews: 156,
      image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Ngăn giày', 'Chống thấm', 'Phản quang'],
      badge: 'Giảm giá'
    },
    {
      id: 4,
      name: 'Balo Đại Học Business',
      category: 'university',
      price: 799000,
      originalPrice: 999000,
      rating: 5.0,
      reviews: 67,
      image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Laptop 17"', 'Khóa TSA', 'Sạc không dây'],
      badge: 'Premium'
    },
    {
      id: 5,
      name: 'Balo Mini Cute',
      category: 'elementary',
      price: 199000,
      originalPrice: 299000,
      rating: 4.6,
      reviews: 203,
      image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Siêu nhẹ', 'Họa tiết dễ thương', 'An toàn'],
      badge: 'Yêu thích'
    },
    {
      id: 6,
      name: 'Balo Gaming RGB',
      category: 'university',
      price: 899000,
      originalPrice: 1199000,
      rating: 4.9,
      reviews: 45,
      image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['LED RGB', 'Gaming gear', 'Chống sốc'],
      badge: 'Limited'
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN').format(price) + 'đ';
  };

  const getBadgeColor = (badge: string) => {
    const colors = {
      'Bán chạy': 'bg-red-500',
      'Mới': 'bg-green-500',
      'Giảm giá': 'bg-orange-500',
      'Premium': 'bg-purple-500',
      'Yêu thích': 'bg-pink-500',
      'Limited': 'bg-indigo-500'
    };
    return colors[badge as keyof typeof colors] || 'bg-blue-500';
  };

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Sản phẩm nổi bật
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Khám phá bộ sưu tập balo đa dạng, phù hợp với mọi lứa tuổi và nhu cầu học tập
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Badge */}
                  <div className={`absolute top-4 left-4 ${getBadgeColor(product.badge)} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                    {product.badge}
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
                      <Heart size={18} />
                    </button>
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
                      <Eye size={18} />
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={16}
                          fill={star <= Math.floor(product.rating) ? 'currentColor' : 'none'}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">
                      {product.rating} ({product.reviews} đánh giá)
                    </span>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-blue-600">
                        {formatPrice(product.price)}
                      </span>
                      {product.originalPrice && (
                        <span className="ml-2 text-sm text-gray-500 line-through">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>
                    {product.originalPrice && (
                      <div className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-semibold">
                        -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                      </div>
                    )}
                  </div>

                  {/* Add to Cart Button */}
                  <button className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                    <ShoppingCart size={20} className="mr-2" />
                    Thêm vào giỏ
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105">
              Xem thêm sản phẩm
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;