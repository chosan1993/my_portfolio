import React, { useState, useEffect } from 'react';
import portfolios from '../../assets/data/portfolioData';
import Modal from "./Modal";

const Portfolio = () => {
  const [nextItems, setNextItems] = useState(6);
  const [filteredPortfolios, setFilteredPortfolios] = useState(portfolios);
  const [activeTab, setActiveTab] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [activeID, setActiveID] = useState(null);

  const categories = [
    { 
      id: 'all', 
      name: 'All', 
      icon: 'ri-apps-line', 
      count: portfolios.length,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      id: 'full-stack', 
      name: 'Full-Stack', 
      icon: 'ri-stack-line', 
      count: portfolios.filter(p => p.category === 'Full-Stack').length,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      id: 'frontend', 
      name: 'FrontEnd', 
      icon: 'ri-code-s-slash-line', 
      count: portfolios.filter(p => p.category === 'FrontEnd').length,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      id: 'technical-analyst', 
      name: 'Technical Analyst', 
      icon: 'ri-bar-chart-line', 
      count: portfolios.filter(p => p.category === 'Technical Analyst').length,
      color: 'from-orange-500 to-red-500'
    }
  ];

  // Load more handler
  const loadMoreHandler = () => {
    setNextItems(prev => prev + 3);
  };

  // Show modal handler
  const showModalHandler = (id) => {
    setShowModal(true);
    setActiveID(id);
  };

  // Filter portfolios based on active tab
  useEffect(() => {
    if (activeTab === 'all') {
      setFilteredPortfolios(portfolios);
    } else if (activeTab === 'frontend') {
      const filteredData = portfolios.filter(item => item.category === 'FrontEnd');
      setFilteredPortfolios(filteredData);
    } else if (activeTab === 'full-stack') {
      const filteredData = portfolios.filter(item => item.category === 'Full-Stack');
      setFilteredPortfolios(filteredData);
    } else if (activeTab === 'technical-analyst') {
      const filteredData = portfolios.filter(item => item.category === 'Technical Analyst');
      setFilteredPortfolios(filteredData);
    }
    setNextItems(6); // Reset to initial count when changing tabs
  }, [activeTab]);

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">

        {/* ============================ Category Tabs ======================================*/}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div className="md:w-1/3">
            <h3 className="text-4xl font-bold text-headingColor dark:text-white">
            My Working Projects
            </h3>
          </div>

          <div className="md:w-2/3">
            <div className="flex flex-wrap gap-3 justify-center md:justify-end">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`flex items-center gap-3 px-5 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === category.id
                      ? `bg-primaryColor text-white shadow-lg transform scale-105`
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                  }`}
                >
                  <i className={`${category.icon} text-lg`}></i>
                  {category.name}
                  <span className={`px-2 py-1 text-xs rounded-full min-w-[28px] ${
                    activeTab === category.id 
                      ? 'bg-white/20' 
                      : 'bg-gray-100 dark:bg-gray-700'
                  }`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* =========================== Portfolio Grid ===============================*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPortfolios.slice(0, nextItems).map((portfolio) => (
            <div
              key={portfolio.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
            >
              {/* ======================= Project Image ===========================*/}
              <div className="relative h-64 overflow-hidden p-8 bg-[#d7e0ea]">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-xl"
                  src={portfolio.imgUrl}
                  alt={portfolio.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 
                group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* ===================== Category Badge ============================*/}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 text-xs text-white font-semibold rounded-full bg-primaryColor">
                    {portfolio.category}
                  </span>
                </div>
              </div>

              {/* ======================== Project Content ==============================*/}
              <div className="p-6 bg-white dark:bg-gray-800">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-1">
                  {portfolio.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {portfolio.description}
                </p>

                {/* ===================== Action Buttons ================================*/}
                <div className="flex gap-3">
                  <button
                    onClick={() => showModalHandler(portfolio.id)}
                    className="flex-1 bg-primaryColor text-white 
                    py-2.5 px-4 rounded-xl font-medium hover:shadow-lg transition-all duration-300 
                    hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <i className="ri-eye-line"></i>
                    View Details
                  </button>
                  <a
                    href={portfolio.siteUrl}
                    className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    <i className="ri-external-link-line"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ========================= Load More Button ========================== */}
        {nextItems < filteredPortfolios.length && (
          <div className="text-center mt-12">
            <button
              onClick={loadMoreHandler}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primaryColor text-white 
              rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <i className="ri-add-line text-xl"></i>
              Load More Projects 
            </button>
          </div>
        )}

        {/* ========================== No Projects Message ===================== */}
        {filteredPortfolios.length === 0 && (
          <div className="text-center py-12">
            <div className="w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center mx-auto mb-6">
              <i className="ri-folder-open-line text-3xl text-gray-400"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              No Projects Found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try selecting a different category
            </p>
          </div>
        )}
      </div>

      {/* ================ Modal ======================== */}
      {showModal && <Modal setShowModal={setShowModal} activeID={activeID} />}
    </section>
  );
};

export default Portfolio;