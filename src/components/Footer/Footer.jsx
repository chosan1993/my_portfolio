import React from 'react'

const Footer = () => {

  const year = new Date().getFullYear();
  return (
    <footer className="bg-footerColor pt-12" id="contact">
      {/* ==================== footer top ===================*/}
      <div className="max-w-4xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8 px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4">
              <div>
                <h2 className="text-white text-4xl md:text-5xl font-semibold mb-2">Contact Me</h2>
                <p className="text-gray-300 text-lg md:text-xl font-medium transition-colors block">
                  Feel Free to reach out!
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-6 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <span className="w-[40px] h-[40px] md:w-[45px] md:h-[45px] bg-[#424658] p-1 rounded-[50px] cursor-pointer text-center flex items-center justify-center">
                <i className="ri-linkedin-line text-white text-xl md:text-2xl"></i>
              </span>
              <div>
                <a 
                  href="https://www.linkedin.com/in/cho-san/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-colors hover:text-[#ACBED0] text-sm md:text-base"
                >
                  https://www.linkedin.com/in/cho-san/
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-[40px] h-[40px] md:w-[45px] md:h-[45px] bg-[#424658] p-1 rounded-[50px] cursor-pointer text-center flex items-center justify-center">
                <i className="ri-mail-line text-white text-xl md:text-2xl"></i>
              </span>
              <div>
                <a 
                  href="mailto:chochosan201@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-colors hover:text-[#ACBED0] text-sm md:text-base"
                >
                  chochosan201@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ==================== footer top ===================*/}

      {/* ==================== footer bottom start ===================*/}
      <div className="bg-[#1b1e29] py-6 md:py-5 mt-14 pb-[4.5rem] md:pb-5">
        <div className="container px-4">
          <div className="flex items-center justify-center sm:justify-between">
            <div className="hidden sm:block">
              <div className="flex items-center gap-[10px]">
                <span className="w-[35px] h-[35px] rounded-full bg-[#2b2d33] text-white font-[500]
                text-[18px] flex items-center justify-center">
                  S
                </span>

                <div className="leading-[20px]">
                  <h2 className="text-gray-200 font-[500] text-[18px]">
                    Cho San
                  </h2>
                  <p className="text-gray-400 text-[14px] font-[500]">
                    Personal
                  </p>
                </div>
              </div>
            </div>
            
            <div className="w-full sm:w-auto text-center sm:text-left">
              <p className="text-gray-400 text-[14px] md:text-[14px]">
                Copyright {year} developed by Cho San - All right reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ==================== footer bottom end ===================*/}
    </footer>
  );
};

export default Footer;