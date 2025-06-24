import React from "react";
// import GYSLogo from "../assets/GYSLogo.png";
import GYSLogo from "../assets/GYSLogo2.png";
const Footer = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-800 select-none to-purple-900 text-white">
      {/* Main Footer Content */}
      <div className="px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Section - Company Info */}
            <div className="lg:col-span-5  ">
              <div className="flex items-center justify-center">
                <img
                  src={GYSLogo}
                  height={"150px"}
                  width={"150px"}
                  className="text-violet-400  "
                  alt="gystechnologies"
                />
              </div>
              <div className="flex items-center justify-center">
                <p className="text-indigo-100 font-bold leading-relaxed mb-8 max-w-md text-center">
                  GYS Technology empowers businesses with cutting-edge, reliable
                  software tailored to drive innovation, efficiency, and digital
                  transformation.
                </p>
              </div>
              {/* Social Media Icons */}
              <div className="flex justify-center gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-violet-400 bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-all cursor-pointer"
                >
                  <i className="ri-instagram-line text-2xl"></i>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-violet-400 bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-all cursor-pointer"
                >
                  <i className="ri-facebook-circle-line text-2xl"></i>
                </a>
                <a
                  href="https://wa.me/919855575465"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-violet-400 bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-all cursor-pointer"
                >
                  <i class="ri-reddit-line text-2xl"></i>
                </a>
                <a
                  href="tel:9855575465"
                  className="w-12 h-12 bg-violet-400 bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-all cursor-pointer"
                >
                  <i class="ri-telegram-line text-2xl"></i>
                </a>
              </div>
            </div>

            {/* Middle Sections - Links */}
            <div className="lg:col-span-4">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-6">PRODUCT</h3>
                  <ul className="space-y-4 font-semibold">
                    <li>
                      <a
                        href="#"
                        className="text-indigo-100 hover:text-white transition-colors  cursor-pointer hover:underline hover:underline-offset-2"
                      >
                        Samsara Adventures
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-indigo-100 hover:text-white transition-colors  cursor-pointer hover:underline hover:underline-offset-2"
                      >
                        Samsara Studio
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-indigo-100 hover:text-white transition-colors  cursor-pointer hover:underline hover:underline-offset-2"
                      >
                        Design
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-indigo-100 hover:text-white transition-colors  cursor-pointer hover:underline hover:underline-offset-2"
                      >
                        Training
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-6">COMPANY</h3>
                  <ul className="space-y-4 font-semibold">
                    <li>
                      <a
                        href="#"
                        className="text-indigo-100 hover:text-white transition-colors  cursor-pointer hover:underline hover:underline-offset-2"
                      >
                        About us
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-indigo-100 hover:text-white transition-colors  cursor-pointer hover:underline hover:underline-offset-2"
                      >
                        Resources
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-indigo-100  cursor-pointer hover:underline hover:underline-offset-2 hover:text-white transition-colors"
                      >
                        Careers
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-indigo-100 hover:text-white transition-colors  cursor-pointer hover:underline hover:underline-offset-2"
                      >
                        Partners
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Section - Contact Info */}
            <div className="lg:col-span-3">
              <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
              <div className="space-y-4 ">
                <div className="flex items-start gap-3">
                  <i className="ri-map-pin-line text-lg"></i>
                  <span className="text-indigo-100 font-semibold  cursor-pointer hover:underline hover:underline-offset-2">
                    123, Near Vasant Kunj, Gandhi Market, Agra
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="ri-phone-line text-lg"></i>
                  <span className="text-indigo-100 font-semibold  cursor-pointer hover:underline hover:underline-offset-2">
                    9855575465
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="ri-mail-line text-lg"></i>
                  <span className="text-indigo-100 font-semibold cursor-pointer hover:underline hover:underline-offset-2">
                    Hr@gystechnology.in
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="bg-gradient-to-r from-violet-400 to-violet-900 py-2 xs:py-3 sm:py-4 md:py-5 lg:py-6 xl:py-8">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-center text-white font-semibold text-sm">
            2025 GYS Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
