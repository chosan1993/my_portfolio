import React from 'react';
import portfolios from '../../assets/data/portfolioData';

const Modal = ({ activeID, setShowModal }) => {
  const portfolio = portfolios.find(portfolio => portfolio.id === activeID);

  if (!portfolio) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-800 rounded-3xl shadow-2xl">
        
        {/* ==================== Close Button ===========================*/}
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center justify-center"
        >
          <i className="ri-close-line text-xl"></i>
        </button>

        {/* ====================== Modal Content ========================*/}
        <div className="p-8">
          
          {/* ===================== Header ===============================*/}
          <div className="mb-4">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 text-sm font-semibold rounded-full bg-primaryColor text-white">
                {portfolio.category}
              </span>
              <div className="h-1 w-8 bg-primaryColor rounded-full"></div>
            </div>
            
            <h2 className="text-2xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {portfolio.title}
            </h2>
          </div>

          {/* ===================== Description ========================*/}
          <div className="mb-5">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-[15px]">
              {portfolio.description}
            </p>
          </div>

          {/* =========================== Technologies ======================*/}
          <div className="mb-5">
            <div className="flex flex-wrap gap-3">
              {portfolio.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-200 dark:from-gray-700 dark:to-gray-800 text-[13px]
                   text-gray-800 dark:text-gray-200 rounded-xl font-medium hover:scale-105 transition-transform duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;