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

  // Short names for mobile
  const categoryShortNames = {
    "Programming Languages": "Programming",
    "Frameworks & Libraries": "Frameworks", 
    "Database Management Systems": "Database",
    "Tools & Platforms": "Tools"
  };

  return (
    <section id="skills" className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* =====================  Header Section ================================ */}
        <div className="mb-10 sm:mb-12 lg:mb-16 px-2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-headingColor dark:text-white mb-3 sm:mb-4">
            Technical <span className="text-primaryColor">Skills</span>
          </h2>
          <p className="text-base sm:text-lg text-smallTextColor dark:text-gray-400 max-w-2xl">
            The tools and technologies I use to bring ideas to life
          </p>
        </div>

        {/* ========================== Mobile Category Selector - Grid Layout ==========================*/}
        <div className="lg:hidden mb-6 sm:mb-8">
          <div className="grid grid-cols-2 gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`p-3 sm:p-4 rounded-xl transition-all duration-300 text-left ${
                  activeCategory === category
                    ? 'bg-primaryColor text-white shadow-md'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    activeCategory === category
                      ? 'bg-white/20'
                      : 'bg-white dark:bg-gray-700'
                  }`}>
                    <i className={`${categoryIcons[category]} ${
                      activeCategory === category
                        ? 'text-white'
                        : 'text-primaryColor dark:text-gray-300'
                    }`}></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-sm sm:text-base">
                      {categoryShortNames[category]}
                    </h3>
                    <p className={`text-xs ${
                      activeCategory === category 
                        ? 'text-gray-200'
                        : 'text-gray-600'}`}>
                      {skills.filter(s => s.category === category).length} skills
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
          
          {/* ==================== Active Category Display ========================================*/}
          <div className="mt-6 px-2">
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primaryColor/10 flex items-center justify-center">
                  <i className={`${categoryIcons[activeCategory]} text-primaryColor`}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {activeCategory}
                </h3>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {filteredSkills.length} skills
              </span>
            </div>
          </div>
        </div>

        {/* ====================== Desktop and Tablet Layout =================================*/}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-12">   
          {/* ================================ Category Stats - Desktop ==========================*/}
          <div className="hidden lg:block lg:w-1/3 xl:w-1/4">
            <div className="sticky top-24 space-y-4">
              {categories.map((category) => {
                const categorySkills = skills.filter(
                  (skill) => skill.category === category
                );

                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`w-full p-4 rounded-2xl border-2 transition-all duration-300 text-left ${
                      activeCategory === category
                        ? 'border-primaryColor bg-primaryColor/5 shadow-lg'
                        : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                          activeCategory === category
                            ? 'bg-primaryColor'
                            : 'bg-gray-100 dark:bg-gray-700'
                        }`}
                      >
                        <i
                          className={`${categoryIcons[category]} text-lg ${
                            activeCategory === category
                              ? 'text-white'
                              : 'text-gray-600 dark:text-gray-400'
                          }`}
                        ></i>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 dark:text-white text-sm lg:text-base">
                          {category}
                        </h4>
                        <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400">
                          {categorySkills.length} skills
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className={`text-xs lg:text-sm ${
                        activeCategory === category
                          ? 'text-primaryColor font-medium'
                          : 'text-gray-500 dark:text-gray-400'
                      }`}>
                        View Skills
                      </span>
                      <i
                        className={`ri-arrow-right-s-line ${
                          activeCategory === category
                            ? 'text-primaryColor'
                            : 'text-gray-400 dark:text-gray-500'
                        }`}
                      ></i>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ============================= Skills Grid ================================= */}
          <div className="lg:w-2/3 xl:w-3/4">
            <div className="grid grid-cols-3 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-5">
              {filteredSkills.map((skill) => (
                <div key={skill.id} className="group">
                  <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-2 sm:p-3 border-2 border-gray-200 dark:border-gray-700 hover:border-primaryColor hover:shadow-lg dark:hover:shadow-primaryColor/10 transition-all duration-300 hover:scale-[1.02] active:scale-95">
                    
                    {/* ======================== Skill Icon ============================*/}
                    <div className="mb-2 sm:mb-2 flex justify-center">
                      <div className={`relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 p-2 sm:p-3 flex items-center justify-center transition-all duration-300 ${
                        skill.imgUrl ? '' : 'bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg'
                      }`}>
                        {skill.imgUrl ? (
                          <img
                            src={skill.imgUrl}
                            alt={skill.title}
                            className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                            loading="lazy"
                          />
                        ) : (
                          <i className="ri-code-line text-xl sm:text-2xl text-white group-hover:scale-110 transition-transform duration-300"></i>
                        )}
                        
                        {/* =========================== Hover effect ============================*/}
                        <div className="absolute inset-0 bg-primaryColor/0 rounded-lg transition-all duration-300"></div>
                      </div>
                    </div>

                    {/* ========================== Skill Name ================================*/}
                    <div className="text-center px-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm lg:text-base line-clamp-2 min-h-[2.5em] leading-tight">
                        {skill.title}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;