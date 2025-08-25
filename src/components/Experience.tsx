import React from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'TechViet Solutions',
      location: 'TP.HCM, Việt Nam',
      period: '2022 - Hiện tại',
      type: 'Full-time',
      description: 'Phát triển và duy trì các ứng dụng web phức tạp sử dụng React, TypeScript và Next.js. Lãnh đạo team frontend và mentor cho các developer junior.',
      achievements: [
        'Tăng hiệu suất ứng dụng lên 40% thông qua tối ưu hóa code',
        'Xây dựng design system cho toàn công ty',
        'Mentor 5+ junior developers'
      ],
      technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'GraphQL']
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency ABC',
      location: 'TP.HCM, Việt Nam',
      period: '2021 - 2022',
      type: 'Full-time',
      description: 'Phát triển giao diện người dùng cho các dự án e-commerce và corporate websites. Làm việc chặt chẽ với team design và backend.',
      achievements: [
        'Hoàn thành 20+ dự án website trong thời hạn',
        'Giảm thời gian load trang xuống 50%',
        'Implement responsive design cho tất cả projects'
      ],
      technologies: ['React', 'JavaScript', 'SASS', 'Bootstrap', 'REST API']
    },
    {
      title: 'Junior Frontend Developer',
      company: 'Startup InnoTech',
      location: 'TP.HCM, Việt Nam',
      period: '2020 - 2021',
      type: 'Full-time',
      description: 'Bắt đầu sự nghiệp với việc phát triển các tính năng frontend cho ứng dụng SaaS. Học hỏi và áp dụng các best practices trong development.',
      achievements: [
        'Phát triển component library tái sử dụng',
        'Cải thiện UX của 10+ tính năng chính',
        'Đạt 95% code coverage trong unit tests'
      ],
      technologies: ['Vue.js', 'JavaScript', 'CSS3', 'HTML5', 'Jest']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Kinh nghiệm làm việc</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto rounded-full"></div>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-32 bg-gradient-to-b from-blue-600 to-emerald-600"></div>
                )}
                
                {/* Experience Card */}
                <div className="flex items-start space-x-6">
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                    <Briefcase size={20} className="text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                        <div className="flex items-center text-blue-600 font-semibold mb-2">
                          <span>{exp.company}</span>
                          <ExternalLink size={16} className="ml-2" />
                        </div>
                      </div>
                      <div className="flex flex-col md:items-end text-sm text-gray-600">
                        <div className="flex items-center mb-1">
                          <Calendar size={16} className="mr-2" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-2" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed">{exp.description}</p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Thành tựu chính:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Công nghệ sử dụng:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gradient-to-r from-blue-100 to-emerald-100 text-blue-800 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;