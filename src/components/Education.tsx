import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, BookOpen } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: 'Cử nhân Công nghệ Thông tin',
      school: 'Đại học Bách Khoa TP.HCM',
      location: 'TP.HCM, Việt Nam',
      period: '2016 - 2020',
      gpa: '3.7/4.0',
      description: 'Chuyên ngành Kỹ thuật Phần mềm. Tham gia nhiều dự án nhóm và hoạt động ngoại khóa.',
      highlights: [
        'Tốt nghiệp Khá',
        'Luận văn về Web Development đạt điểm A',
        'Tham gia CLB Lập trình'
      ]
    }
  ];

  const certifications = [
    {
      title: 'React Developer Certification',
      issuer: 'Meta',
      date: '2023',
      icon: '⚛️'
    },
    {
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2022',
      icon: '☁️'
    },
    {
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      date: '2021',
      icon: '🏆'
    },
    {
      title: 'Google Analytics Certified',
      issuer: 'Google',
      date: '2021',
      icon: '📊'
    }
  ];

  const courses = [
    'Advanced React Patterns',
    'TypeScript Deep Dive',
    'System Design for Frontend',
    'Web Performance Optimization',
    'GraphQL with React',
    'Next.js Complete Guide'
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Học vấn & Chứng chỉ</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto rounded-full"></div>
          </div>

          {/* Education */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <GraduationCap className="mr-3 text-blue-600" size={28} />
              Học vấn
            </h3>
            
            {education.map((edu, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                    <div className="text-blue-600 font-semibold mb-2">{edu.school}</div>
                    <div className="text-emerald-600 font-medium">GPA: {edu.gpa}</div>
                  </div>
                  <div className="flex flex-col md:items-end text-sm text-gray-600 mt-4 md:mt-0">
                    <div className="flex items-center mb-1">
                      <Calendar size={16} className="mr-2" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">{edu.description}</p>

                <div>
                  <h5 className="font-semibold text-gray-900 mb-3">Thành tích nổi bật:</h5>
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Award className="mr-3 text-emerald-600" size={28} />
              Chứng chỉ
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{cert.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-1">{cert.title}</h4>
                      <p className="text-blue-600 font-medium mb-1">{cert.issuer}</p>
                      <p className="text-sm text-gray-600">{cert.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Courses */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <BookOpen className="mr-3 text-purple-600" size={28} />
              Khóa học bổ sung
            </h3>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {courses.map((course, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-blue-50 to-emerald-50 px-4 py-3 rounded-lg text-center font-medium text-gray-800 hover:shadow-md transition-all duration-300"
                  >
                    {course}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;