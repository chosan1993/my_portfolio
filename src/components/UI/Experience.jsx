import React from 'react';
import experiences from '../../assets/data/history';

const Experience = () => {
  return (
    <section id="experience" className="px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        
        {/* ========================== Header ==========================*/}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Get to know more about my experience and journey so far.
          </p>
        </div>

        {/* ===================== Timeline ================================*/}
        <div className="relative">
          {/* ================== Vertical Timeline Line ==============================*/}
          <div className="hidden md:block absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 h-full w-1 bg-primaryColor"></div>

          {experiences.map((exp, index) => (
            <div key={exp.id} className={`relative mb-16 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'}`}>

              {/* ======================== Experience Card ============================*/}
              <div className={`ml-2 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                  
                  {/* ====================== Card Header =============================*/}
                  <div className="p-6 bg-gradient-to-r from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        {exp.imgUrl && (
                          <div className="w-16 h-16 rounded-xl overflow-hidden">
                            <img 
                              src={exp.imgUrl} 
                              alt={exp.organization}
                              className="hidden md:block w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.role}</h2>
                          <div className="flex items-center gap-4 mt-2">
                            <div className="flex items-center gap-2 text-primaryColor">
                              <i className="ri-building-line"></i>
                              <span className="font-medium">{exp.organization}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                              <i className="ri-map-pin-line"></i>
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-primaryColor rounded-xl px-4 py-2 text-center text-[14px]">
                        <div className="text-white">{exp.startDate} - {exp.endDate}</div>
                      </div>
                    </div>
                  </div>

                  {/* ====================== Skills =================================*/}
                  <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-3 mb-4">
                      <i className="ri-code-s-slash-line text-xl text-primaryColor"></i>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Technologies</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-[13px] font-medium rounded-lg transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* ======================= Responsibilities =====================*/}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <i className="ri-task-line text-xl text-primaryColor"></i>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Responsibilities</h3>
                    </div>
                    <div className="space-y-3">
                      {exp.experiences.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 group">
                          <div className="flex-shrink-0 mt-1">
                            <i class="ri-checkbox-circle-fill text-primaryColor group-hover:scale-125 transition-transform"></i>
                          </div>
                          <p className="text-[14px] text-gray-700 dark:text-gray-300 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;