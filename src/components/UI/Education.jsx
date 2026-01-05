import React, { useState, useEffect } from 'react';
import education from "../../assets/data/education";

const Education = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [filteredEducation, setFilteredEducation] = useState(education);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    
    // Filter education based on active tab
    if (activeTab === 'all') {
      setFilteredEducation(education);
    } else if (activeTab === 'graduation') {
      setFilteredEducation(education.filter(item => item.category === 'Graduation'));
    } else if (activeTab === 'certificate') {
      setFilteredEducation(education.filter(item => item.category === 'Certificate'));
    }
  }, [activeTab]);

  const getIcon = (category) => {
    if (category === "Graduation") {
      return <i className="ri-graduation-cap-line text-xl"></i>;
    } else {
      return <i className="ri-award-line text-xl"></i>;
    }
  };

  const getIconClass = (category) => {
    return category === "Graduation" ? "ri-graduation-cap-line" : "ri-award-line";
  };

  const getTabCount = (type) => {
    if (type === 'all') return education.length;
    if (type === 'graduation') return education.filter(item => item.category === 'Graduation').length;
    if (type === 'certificate') return education.filter(item => item.category === 'Certificate').length;
    return 0;
  };

  return (
    <section id="education" className="py-16">
      <div className="container mx-auto px-4">
        {/* ======================= Header Section ================================= */}
        <div className="text-center mb-12" data-aos="fade-up" data-aos-duration="800">
          <h2 className="text-headingColor font-[800] text-[2.4rem] mb-4">
            Education & <span className="text-primaryColor">Certifications</span>
          </h2>
          <p className="text-headingColor font-[500] text-[16px] leading-7 max-w-2xl mx-auto">
            A comprehensive record of my academic achievements and professional credentials that demonstrate my commitment to continuous learning.
          </p>
        </div>

        {/* =============================== Tab Navigation =========================== */}
        <div className="flex justify-center mb-10" data-aos="fade-up" data-aos-delay="100">
          <div className="inline-flex bg-gray-100 rounded-xl p-1 shadow-inner">
            <button
              className={`px-6 py-3 rounded-lg font-medium text-sm md:text-base transition-all duration-300 flex 
                items-center ${activeTab === 'all' ? 'bg-white text-primaryColor shadow-md' : 'text-gray-600 hover:text-primaryColor'}`}
              onClick={() => setActiveTab('all')}
            >
              <i className="ri-file-list-line mr-2"></i>
              <span className="hidden md:block">All Records</span>
              <span className="ml-2 bg-primaryColor/10 text-primaryColor text-xs font-bold px-2 py-1 rounded-full">
                {getTabCount('all')}
              </span>
            </button>
            
            <button
              className={`px-6 py-3 rounded-lg font-medium text-sm md:text-base transition-all duration-300 flex items-center mx-2 ${activeTab === 'graduation' ? 'bg-white text-primaryColor shadow-md' : 'text-gray-600 hover:text-primaryColor'}`}
              onClick={() => setActiveTab('graduation')}
            >
              <i className="ri-graduation-cap-line mr-2"></i>
              <span className="hidden md:block">Education</span>
              <span className="ml-2 bg-blue-100 text-blue-600 text-xs font-bold px-2 py-1 rounded-full">
                {getTabCount('graduation')}
              </span>
            </button>
            
            <button
              className={`px-6 py-3 rounded-lg font-medium text-sm md:text-base transition-all duration-300 flex items-center ${activeTab === 'certificate' ? 'bg-white text-primaryColor shadow-md' : 'text-gray-600 hover:text-primaryColor'}`}
              onClick={() => setActiveTab('certificate')}
            >
              <i className="ri-award-line mr-2"></i>
              <span className="hidden md:block">Certifications</span>
              <span className="ml-2 bg-green-100 text-green-600 text-xs font-bold px-2 py-1 rounded-full">
                {getTabCount('certificate')}
              </span>
            </button>
          </div>
        </div>

        {/* ============================== Tab Content ============================= */}
        <div className="max-w-5xl mx-auto">
          {/* ============================== Timeline Layout for All Tab =========================*/}
          {activeTab === 'all' ? (
            <div className="relative">
              {/* ========================= Timeline Line ================================*/}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-primaryColor h-full"></div>
              
              {/* ==========================Timeline Cards ===============================*/}
              {filteredEducation.map((item, index) => {
                const isEven = index % 2 === 0;
                
                return (
                  <div 
                    key={item.id}
                    className="mb-10 md:mb-16 md:text-left"
                    data-aos={isEven ? "fade-right" : "fade-left"}
                    data-aos-delay={index * 100}
                    data-aos-duration="800"
                  >
                    <div className={`flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} items-center`}>
                      {/* ==========================nContent Card ==============================*/}
                      <div className="w-full md:w-5/12">
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <div className="flex items-center mb-2">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                                  item.category === 'Graduation' ? 'bg-blue-50 text-blue-600' : 'bg-green-50 text-green-600'
                                }`}>
                                  {getIcon(item.category)}
                                </div>
                                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                                  item.category === 'Graduation' 
                                    ? 'bg-blue-100 text-blue-700' 
                                    : 'bg-green-100 text-green-700'
                                }`}>
                                  {item.category}
                                </span>
                              </div>
                              <h3 className="text-xl font-bold text-headingColor mb-2">{item.organization}</h3>
                              <p className="text-primaryColor font-medium mb-3">{item.degree}</p>
                            </div>
                          </div>
                          
                          <div className="space-y-3">
                            <div className="flex items-center text-gray-600">
                              <i className="ri-calendar-2-line mr-2 text-primaryColor"></i>
                              <span className="font-medium">{item.startDate} - {item.endDate}</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                              <i className="ri-map-pin-line mr-2 text-primaryColor"></i>
                              <span>{item.location}</span>
                            </div>
                          </div>
                          
                          {/* ===========================nTimeline Node for Desktop ========================*/}
                          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-primaryColor rounded-full z-10"></div>
                        </div>
                      </div>
                      
                      {/* =======================nTimeline Node for Mobile ======================== */}
                      <div className="md:hidden flex justify-center my-6">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          item.category === 'Graduation' ? 'bg-blue-500' : 'bg-green-500'
                        }`}>
                          {getIcon(item.category)}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* ========================= Grid Layout for Filtered Tabs ==========================*/
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredEducation.map((item, index) => (
                <div 
                  key={item.id}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  data-aos-duration="600"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${
                        item.category === 'Graduation' ? 'bg-blue-50 text-blue-600' : 'bg-green-50 text-green-600'
                      }`}>
                        {getIcon(item.category)}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-headingColor mt-2">{item.organization}</h3>
                      </div>
                    </div>

                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      item.category === 'Graduation' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'bg-green-100 text-green-700'
                      }`}>
                      {item.category}
                    </span>
                  </div>
                  
                  <div className="mb-5">
                    <p className="text-headingColor font-medium text-lg mb-3">{item.degree}</p>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Duration</p>
                          <p className="text-sm font-medium text-headingColor">
                            <i className="ri-calendar-2-line mr-2 text-primaryColor"></i>
                            {item.startDate} - {item.endDate}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Location</p>
                          <p className="text-sm font-medium text-headingColor">
                            <i className="ri-map-pin-line mr-2 text-primaryColor"></i>
                            {item.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Credential Type</span>
                      <span className="text-sm font-medium flex items-center">
                        <i className={`mr-1 ${getIconClass(item.category)}`}></i>
                        {item.category === 'Graduation' ? 'Academic Degree' : 'Professional Certificate'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ================================ Empty State ===========================*/}
          {filteredEducation.length === 0 && (
            <div className="text-center py-16" data-aos="fade-up">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <i className="ri-file-search-line text-4xl text-gray-400"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-700 mb-3">No records found</h3>
              <p className="text-gray-500">No {activeTab === 'graduation' ? 'education' : 'certification'} records available.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Education;