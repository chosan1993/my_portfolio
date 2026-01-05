import React from "react";
import aboutImg from "../../../src/assets/images/muhib-bg.png";

const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto">
        {/* ===================== Main Card ======================================= */}
        <div className="bg-[#d7e0ea] rounded-3xl p-10 grid grid-cols-1 md:grid-cols-10 gap-10 items-center">
  
          {/* ================================== Left Side ================================= */}
          <div className="md:col-span-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-3">
              About
            </h2>
            <p className="text-gray-700">
              Find out more about what I can do
            </p>

            <img
              src={aboutImg}
              alt="About"
              className="hidden md:block max-w-sm mx-auto md:mx-0"
            />
          </div>

          {/* ================================= Right Side ============================ */}
          <div className="md:col-span-6 space-y-10">
            {/* ============================== Frontend ================================ */}
            <div className="flex items-center gap-5 rounded-2xl p-3
              bg-[linear-gradient(90deg,rgba(6,69,127,0.42)_0%,rgba(255,255,255,0)_100%)]
              bg-[length:0%_100%] bg-no-repeat
              hover:bg-[length:100%_100%]
              transition-all duration-400">
              <i className="ri-cursor-line text-3xl text-primaryColor"></i>
              <div>
                <h3 className="text-xl font-semibold text-[#0f172a]">
                  Frontend Development
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  I'm a Frontend Developer experienced in building responsive,
                  high-performance, and user-friendly websites.
                </p>
              </div>
            </div>

            {/* =================================== Backend ===================================== */}
            <div className="flex items-center gap-5 rounded-2xl p-3
              bg-[linear-gradient(90deg,rgba(6,69,127,0.42)_0%,rgba(255,255,255,0)_100%)]
              bg-[length:0%_100%] bg-no-repeat
              hover:bg-[length:100%_100%]
              transition-all duration-400">
              <i className="ri-database-2-line text-3xl text-primaryColor"></i>
              <div>
                <h3 className="text-xl font-semibold text-[#0f172a]">
                  Backend Development
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  I have experience developing high-performance, optimized
                  back-end systems and APIs.
                </p>
              </div>
            </div>

            {/* ==================================== Technical Analyst =====================================*/}
            <div className="flex items-center gap-5 rounded-2xl p-3
              bg-[linear-gradient(90deg,rgba(6,69,127,0.42)_0%,rgba(255,255,255,0)_100%)]
              bg-[length:0%_100%] bg-no-repeat
              hover:bg-[length:100%_100%]
              transition-all duration-400">
              <i className="ri-bar-chart-line text-3xl text-primaryColor"></i>
              <div>
                <h3 className="text-xl font-semibold text-[#0f172a]">
                  Technical Analyst
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Experienced Technical Analyst skilled in planning, system
                  analysis, testing, and managing end-to-end project workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
