import React from "react";

const HeroSection = () => (
  <section id="hero" className="relative flex justify-center px-3 overflow-hidden py-20 md:py-32 bg-gradient-to-b from-white to-blue-50">
    <div className="container relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-blue-700">
            Legal Help <br />
            <span className="text-blue-400">Made Simple</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-[600px]">
            Get instant answers to your legal questions with LawMate. Simple, fast, and reliable legal guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <button className="px-6 py-3 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition">Get Started</button>
          </div>
        </div>
        <div className="relative mx-6">
          <div className="relative bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
            <div className="p-4 space-y-4">
              <div className="flex justify-end">
                <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm">How can LawMate help me?</p>
                </div>
              </div>
              <div className="flex">
                <div className="bg-blue-50 rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm">
                    LawMate provides easy-to-understand legal information and guidance for your everyday needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection; 