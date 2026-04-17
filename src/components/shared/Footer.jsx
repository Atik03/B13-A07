import React from "react";
import { FaYoutube, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#2f5d50] text-white py-12 px-4 w-full h-full lg:px-[130px] ">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">
          Keen<span className="font-semibold">Keeper</span>
        </h1>

        <p className="text-gray-200 text-sm mb-6">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <h3 className="text-sm font-semibold mb-3">Social Links</h3>

        <div className="flex justify-center gap-4 mb-8">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:scale-110 transition">
            <FaYoutube />
          </div>

          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:scale-110 transition">
            <FaFacebookF />
          </div>

          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:scale-110 transition">
            <FaXTwitter />
          </div>
        </div>

        <div className="border-t border-gray-400/30 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-200">
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-6 mt-3 md:mt-0">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
            <a href="#" className="hover:underline">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
