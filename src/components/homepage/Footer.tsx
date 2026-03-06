import React from "react";
import {
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook size={18} />, href: "#" },
    { icon: <Linkedin size={18} />, href: "#" },
    { icon: <Instagram size={18} />, href: "#" },
    { icon: <Twitter size={18} />, href: "#" }, // Representing X
  ];

  const quickLinks = ["Home", "About Us", "Services", "Projects", "Blog"];
  const resources = ["Pricing", "Integrations", "FAQs", "Contact", "Our Team"];

  return (
    <footer className="w-full bg-[#013228] text-white pt-20 pb-10 px-6 md:px-20 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Column 1: Branding */}
        {/* Column 1: Branding */}
        <div className="flex flex-col space-y-6">
          <div className="flex items-center">
            <Image
              src="/logo-3.svg"
              alt="Webteck Logo"
              width={120} // Adjusted to a more standard logo width
              height={40} // Adjusted to maintain aspect ratio
              className="h-10 w-auto object-left object-contain" // Ensures it aligns to the left and doesn't squash
              priority
            />
          </div>
          <p className="text-emerald-100/60 leading-relaxed text-sm max-w-xs">
            Empowering businesses with intelligent CRM and software solutions
            that drive growth, streamline operations, and deliver exceptional
            results.
          </p>
          <div className="flex gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-10 h-10 rounded-lg bg-[#0a3d34] flex items-center justify-center text-emerald-100/80 hover:bg-emerald-500 hover:text-[#013228] transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-2 relative inline-block">
            Quick Links
            <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-emerald-400/50"></span>
          </h4>
          <ul className="mt-8 space-y-4">
            {quickLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-emerald-100/60 hover:text-emerald-400 text-sm transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Resources */}
        <div>
          <h4 className="text-lg font-bold mb-2 relative inline-block">
            Resources
            <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-emerald-400/50"></span>
          </h4>
          <ul className="mt-8 space-y-4">
            {resources.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-emerald-100/60 hover:text-emerald-400 text-sm transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div className="space-y-6">
          <h4 className="text-lg font-bold mb-2 relative inline-block">
            Get in Touch
            <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-emerald-400/50"></span>
          </h4>

          <div className="mt-8 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#0a3d34] flex items-center justify-center text-emerald-400 shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-emerald-100/40 uppercase tracking-widest mb-1">
                  Address
                </p>
                <p className="text-sm text-emerald-100/80">
                  12 Division Park, SKY 12546, Berlin
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#0a3d34] flex items-center justify-center text-emerald-400 shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-emerald-100/40 uppercase tracking-widest mb-1">
                  Email
                </p>
                <p className="text-sm text-emerald-100/80">
                  help@webteck-mail.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#0a3d34] flex items-center justify-center text-emerald-400 shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-emerald-100/40 uppercase tracking-widest mb-1">
                  Phone
                </p>
                <p className="text-sm text-emerald-100/80">+(215) 2536-32156</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-emerald-800/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-emerald-100/40 text-xs">
          © {currentYear} All rights reserved.
        </p>
        <div className="flex gap-6">
          <a
            href="#"
            className="text-emerald-100/40 hover:text-emerald-400 text-xs transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-emerald-100/40 hover:text-emerald-400 text-xs transition-colors"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
