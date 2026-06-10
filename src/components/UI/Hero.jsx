import React from 'react';
import heroImg from '../../assets/images/hero-bg.png';
import CountUp from 'react-countup';
import AnimatedTitles from '../Utils/AnimatedTitles';
// import CV from "../../assets/cv/TechnicalProjectManager.pdf";
import CV from "../../assets/cv/2026_June_IT_ChoChoSan.pdf";

const Hero = () => {
  return (
    <section className="pt-0" id="home">
        <div className="container pt-14">
            <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
                { /* =============== hero left content start ============= */ }
                <div className="w-full md:basis-1/2">
                    <h5
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    className="text-headingColor font-[600] text-[16px]"
                    >
                     Hello welcome   
                    </h5>
                    <h1
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px]
                    leading-[35px] sm:leading-[46px] mt-5"
                    >
                        I'm Cho Cho San <br /> 
                    </h1>
                    <AnimatedTitles />
                    <div 
                    data-aos="fade-up"
                    data-aos-duration="1800"
                    data-aos-delay="200"
                    className="flex items-center gap-6 mt-7"
                    >
                        <a href={CV}>
                            <button className="bg-primaryColor text-white font-[500] flex items-center gap-2
                            bg-hireMe ease-in duration-300 py-2 px-4 rounded-[8px]">
                                <i class="ri-download-cloud-2-line"></i> Download CV
                            </button>
                        </a>
                        <a href="#portfolio" className="text-smallTextColor font-[600] text-[16px] 
                        underline underline-offset-8">See Portfolio
                        </a>
                    </div>
                    <p
                        data-aos="fade-left"
                        data-aos-duration="1500"
                        className="flex gap-2 text-headingColor mt-12 font-[500] text-[15px] leading-7
                        sm:pl-14 sm:pr-10">
                        <span>
                            <i class="ri-apps-2-line"></i>
                        </span>
                        Experienced web development skilled in PHP, HTML, CSS, Tailwind, JavaScript, Bootstrap, Drupal, WordPress, React, Laravel, and CodeIgniter. Proficient in REST APIs, MySQL, and MS SQL. Adaptable, organized, and quick to learn new technologies. Strong in planning, analysis, and teamwork, focused on delivering innovative solutions.
                    </p>
                    <div className="flex items-center gap-9 mt-14">
                        <span className="text-smallTextColor text-[15px] font-[600]">
                            Follow me:
                        </span>
                        <span>
                            <a href="https://www.linkedin.com/in/cho-san/" 
                            className="text-smallTextColor text-[18px] font-[600]">
                                <i className="ri-linkedin-line"></i>
                            </a>
                        </span>
                        <span>
                            <a href="#github" 
                            className="text-smallTextColor text-[18px] font-[600]">
                                <i className="ri-github-line"></i>
                            </a>
                        </span>
                        <span>
                            <a href="mailto:chochosan201@gmil.com" 
                            className="text-smallTextColor text-[18px] font-[600]">
                                <i className="ri-mail-line"></i>
                            </a>
                        </span>
                        <span>
                            <a href="#" 
                            className="text-smallTextColor text-[18px] font-[600]">
                                <i className="ri-facebook-line"></i>
                            </a>
                        </span>
                        <span>
                            <a href="#" 
                            className="text-smallTextColor text-[18px] font-[600]">
                                <i class="ri-instagram-line"></i>
                            </a>
                        </span>
                    </div>
                </div>
                { /* =============== hero left content end ============= */ }

                { /* =============== hero img start ============= */ }
                <div className="basis-1/3 mt-10 sm:mt-0 bg-heroColor rounded-[15rem]">
                    <figure className="flex items-center justify-center">
                        <img src={heroImg} alt="" />
                    </figure>
                </div>
                { /* =============== hero img end ============= */ }
                
                { /* =============== hero content right start ============= */ }
                <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
                    <div className="mb-10">
                        <h2 className="text-headingColor font-[700] text-[32px]">
                            <CountUp start={0} end={7} duration={2} suffix="+"/>
                        </h2>
                        <h4 className="text-headingColor font-[600] text-[18px]">
                            Years of experience
                        </h4>
                    </div>
                    <div className="mb-10">
                        <h2 className="text-headingColor font-[700] text-[32px]">
                            <CountUp start={0} end={100} duration={2} suffix="%"/>
                        </h2>
                        <h4 className="text-headingColor font-[600] text-[18px]">
                            Success Rate
                        </h4>
                    </div>
                    <div className="mb-10">
                        <h2 className="text-headingColor font-[700] text-[32px]">
                            <CountUp start={0} end={100} duration={2} suffix="%"/>
                        </h2>
                        <h4 className="text-headingColor font-[600] text-[18px]">
                            Work Responsibility
                        </h4>
                    </div>
                    <div className="mb-10">
                        <h2 className="text-headingColor font-[700] text-[32px]">
                            <CountUp start={0} end={10} duration={2} suffix="+"/>
                        </h2>
                        <h4 className="text-headingColor font-[600] text-[18px]">
                            Working Projects
                        </h4>
                    </div>
                </div>
                { /* =============== hero content right end ============= */ }
            </div>
        </div>
    </section>
  )
}

export default Hero