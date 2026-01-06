import React, { useState, useEffect } from "react";
import skills from "../../assets/data/skills";

const Skills = () => {
  // Get unique categories
  const categories = [...new Set(skills.map(skill => skill.category))];
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  // Filter skills by active category
  const filteredSkills = skills.filter(skill => skill.category === activeCategory);

  const categoryIcons = {
    "Programming Languages": "ri-code-s-slash-line",
    "Frameworks & Libraries": "ri-stack-line",
    "Database Management Systems": "ri-database-2-line",
    "Tools & Platforms": "ri-tools-line"
  };

  const categoryColors = {
    "Programming Languages": "from-purple-500 to-pink-500",
    "Frameworks & Libraries": "from-blue-500 to-cyan-500",
    "Database Management Systems": "from-green-500 to-emerald-500",
    "Tools & Platforms": "from-orange-500 to-red-500"
  };

  return (
    <section id="skills" className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* =====================  Header Section ================================ */}
        <div className="mb-8 sm:mb-10 lg:mb-12 text-center px-2">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-headingColor dark:text-white mb-3 sm:mb-4">
            Technical <span className="text-primaryColor">Skills</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-smallTextColor dark:text-gray-400 max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life
          </p>
        </div>

        {/* ========================== Category Navigation ========================== */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <div className="relative max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2 xs:gap-3 sm:gap-4 mb-6">
              {categories.map((category, index) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`group relative px-3 xs:px-4 sm:px-5 py-2 xs:py-3 sm:py-4 rounded-xl sm:rounded-2xl transition-all duration-300 hover:-translate-y-0.5 ${
                      isActive 
                        ? 'shadow-lg sm:shadow-2xl scale-95 sm:scale-105' 
                        : 'hover:shadow-md'
                    }`}
                    style={{
                      background: isActive 
                        ? `linear-gradient(135deg, var(--tw-gradient-stops))`
                        : 'white',
                    }}
                  >
                    {/* ================== Background Gradient =========================*/}
                    <div className={`absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      isActive ? 'opacity-100' : ''
                    } ${categoryColors[category]}`}></div>
                    
                    {/* ================== Content ========================*/}
                    <div className="relative flex items-center gap-2 xs:gap-3 sm:gap-4">
                      <div className={`w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 rounded-lg xs:rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isActive 
                          ? 'bg-primaryColor text-white' 
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                      }`}>
                        <i className={`${categoryIcons[category]} text-base xs:text-lg sm:text-xl ${
                          isActive 
                            ? 'text-white'
                            : 'text-gray-600 dark:text-gray-400'
                        }`}></i>
                      </div>
                      
                      <div className="text-left">
                        <div className="flex items-center gap-1">
                          <h3 className={`font-medium text-xs xs:text-sm sm:text-base lg:text-lg ${
                            isActive ? 'text-primaryColor' : 'text-headingColor dark:text-white'
                          }`}>
                            {category.split(' ')[0]}
                          </h3>
                          {isActive && (
                            <div className="hidden xs:block w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse ml-1"></div>
                          )}
                        </div>
                        <p className={`text-[10px] xs:text-xs sm:text-sm ${
                          isActive ? 'text-secondaryColor' : 'text-gray-500 dark:text-gray-400'
                        }`}>
                          {skills.filter(s => s.category === category).length} skills
                        </p>
                      </div>
                    </div>
                    
                    {/* ================= Active Indicator =======================*/}
                    {isActive && (
                      <div className="absolute -bottom-1 xs:-bottom-2 left-1/2 transform -translate-x-1/2 w-8 xs:w-10 sm:w-12 h-0.5 xs:h-1 bg-primaryColor rounded-full"></div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ============================= Skills Grid ================================= */}
        <div className="mb-10 sm:mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
            {filteredSkills.map((skill) => (
              <div key={skill.id} className="group">
                <div className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-5 border border-gray-200 dark:border-gray-700 hover:border-transparent hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  
                  {/* ========================= Hover Effect Background ============================*/}
                  <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${categoryColors[activeCategory]} bg-opacity-5`}></div>
                  
                  {/* =========================== Skill Icon ================================*/}
                  <div className="relative mb-4">
                    <div className="relative w-16 h-16 mx-auto">
                      <div className="absolute inset-0 bg-gradient-to-br from-primaryColor/20 to-blue-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                      <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500">
                        {skill.imgUrl ? (
                          <img
                            src={skill.imgUrl}
                            alt={skill.title}
                            className="w-10 h-10 object-contain group-hover:scale-125 transition-transform duration-500"
                            loading="lazy"
                          />
                        ) : (
                          <i className="ri-code-line text-2xl text-primaryColor group-hover:scale-125 transition-transform duration-500"></i>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* ===================== Skill Info ========================================*/}
                  <div className="relative text-center">
                    <h4 className="font-semibold text-primaryColor dark:text-white text-sm group-hover:text-primaryColor transition-colors duration-300 mb-2">
                      {skill.title}
                    </h4>
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

export default Skills;