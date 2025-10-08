import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 px-8 py-12 ">
      <div className="grid md:grid-cols-5 gap-8">
        <div>
          <h3 className="text-white font-semibold text-3xl mb-2">Hero.io</h3>
          <p className="text-sm">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting.Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Explore </h4>
          <ul className="space-y-1 text-sm">
            <li>About Us</li>
            <li>Our Mission</li>
            <li>Contact Administrator</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Services</h4>
          <ul className="space-y-1 text-sm">
            <li>Education & Services</li>
            <li>user Stories</li>
            <li>Download Apps</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Information</h4>
          <ul className="space-y-1 text-sm">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Join Us</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Social Links</h4>
          <ul className="space-y-1 text-sm">
            <li>@H.IO - System</li>
            <li>@H.IO - System</li>
            <li>@H.IO - System</li>
            <li>support@H.IO.com</li>
          </ul>
        </div>
      </div>
      <div className="text-left md:text-center text-gray-500 text-sm mt-8">
        © 2025 H.IO — developed app System.
        <br className="block md:hidden" /> All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
