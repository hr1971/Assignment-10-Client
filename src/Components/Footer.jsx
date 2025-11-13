import React from "react";
import { Facebook,  Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { SiX } from "react-icons/si";
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-cyan-100 to-blue-200 text-gray-700 mt-16"> 
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">
        
        {/* Logo & Description */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
              <img src={logo} alt="" />
            </div>
            <h2 className="text-2xl font-bold text-blue-600">STUDYMATE</h2>
          </div>
          <p className="text-sm leading-relaxed">
            StudyMate helps students find the perfect study partners to learn, collaborate,
            and grow together. Learn smarter, not harder.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-blue-600 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-500 transition">Find Partners</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Create Profile</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">About StudyMate</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-blue-600 mb-4">Get in Touch</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><Mail size={16}/> studymate@support.com</li>
            <li className="flex items-center gap-2"><Phone size={16}/> +880 1712 345 678</li>
            <li className="flex items-center gap-2"><MapPin size={16}/> Dhaka, Bangladesh</li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5">
            <a href="#" className="hover:text-blue-500 transition"><Facebook size={20}/></a>
            <a href="#" className="hover:text-blue-500 transition"><SiX size={20}/></a>
            <a href="#" className="hover:text-blue-500 transition"><Instagram size={20}/></a>
            <a href="#" className="hover:text-blue-500 transition"><Linkedin size={20}/></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-300 py-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} StudyMate. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
