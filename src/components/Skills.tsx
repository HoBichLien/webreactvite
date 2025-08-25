import React from 'react';
import { Code, Database, Palette, Settings, Globe, Smartphone } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      color: 'from-blue-500 to-blue-600',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Vue.js', level: 80 },
        { name: 'JavaScript', level: 95 }
      ]
    },
    {
      title: 'Styling',
      icon: Palette,
      color: 'from-purple-500 to-pink-600',
      skills: [
        { name: 'Tailwind CSS', level: 95 },
        { name: 'SASS/SCSS', level: 90 },
        { name: 'CSS3', level: 95 },
        { name: 'Bootstrap', level: 85 },
        { name: 'Styled Components', level: 80 }
      ]
    },
    {
      title: 'Backend & Database',
      icon: Database,
      color: 'from-green-500 to-emerald-600',
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'GraphQL', level: 80 },
        { name: 'REST API', level: 85 },
        { name: 'MongoDB', level: 70 },
        { name: 'PostgreSQL', level: 65 }
      ]
    },
    {
      title: 'Tools & Others',
      icon: Settings,
      color: 'from-orange-500 to-red-600',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Webpack', level: 75 },
        { name: 'Docker', level: 70 },
        { name: 'AWS', level: 65 },
        { name: 'Jest/Testing', level: 80 }
      ]
    }
  ];

  const otherSkills = [
    { icon: Globe, title: 'Web Performance', description: 'Tối ưu hóa hiệu suất website' },
    { icon: Smartphone, title: 'Responsive Design', description: 'Thiết kế đáp ứng mọi thiết bị' },
    { icon: Code, title: 'Clean Code', description: 'Viết code sạch và maintainable' },
    { icon: Settings, title: 'CI/CD', description: 'Triển khai tự động và DevOps' }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Kỹ năng chuyên môn</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto rounded-full"></div>
          </div>

          {/* Technical Skills */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium text-gray-700">{skill.name}</span>
                          <span className="text-sm text-gray-600">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Other Skills */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Kỹ năng khác</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {otherSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-blue-50 to-emerald-50 p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                      <Icon size={28} className="text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{skill.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{skill.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;