import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import { getStrapiURL } from "@/utils/get-strapi-url";

const Footer = ({ data }: { data?: any }) => {
  const currentYear = new Date().getFullYear();

  const { description, logo, social_links, contacts } = data || {};

  const logoUrl = logo?.data?.attributes?.url || logo?.url;
  const fullLogoSrc = logoUrl ? `${getStrapiURL()}${logoUrl}` : "/logo-7.svg";

  const descriptionText =
    description ||
    "Empowering businesses with a scalable, secure, and modular HR platform — from employee management to payroll and beyond.";

  const getSocialIcon = (text: string) => {
    const t = text.toLowerCase();
    if (t.includes("facebook")) return <Facebook size={18} />;
    if (t.includes("linkedin")) return <Linkedin size={18} />;
    if (t.includes("instagram")) return <Instagram size={18} />;
    if (t.includes("twitter") || t.includes("x.com")) return <Twitter size={18} />;
    return <Facebook size={18} />; // Default fallback
  };

  const socialLinksConfig =
    social_links && social_links.length > 0
      ? social_links.map((s: any) => ({
        icon: getSocialIcon(s.text),
        href: s.href || s.text.includes("http") ? s.text : `https://${s.text}`,
        label: s.text,
      }))
      : [
        { icon: <Facebook size={18} />, href: "#", label: "Facebook" },
        { icon: <Linkedin size={18} />, href: "#", label: "LinkedIn" },
        { icon: <Instagram size={18} />, href: "#", label: "Instagram" },
        { icon: <Twitter size={18} />, href: "#", label: "X" },
      ];

  const contactConfig =
    contacts && contacts.length >= 3
      ? {
        location: contacts[0]?.text || "Paris, France",
        email: contacts[1]?.text || "contact@humansystems.io",
        phone: contacts[2]?.text || "+33 1 23 45 67 89",
      }
      : {
        location: "Paris, France",
        email: "contact@humansystems.io",
        phone: "+33 1 23 45 67 89",
      };

  const platformLinks = [
    { name: "About Us", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const moduleLinks = [
    { name: "Core HR", href: "/modules/core-hr" },
    { name: "Leave Management", href: "/modules/leave-management" },
    { name: "Document Management", href: "/modules/document-management" },
    { name: "Performance", href: "/modules/performance-management" },
    { name: "Payroll", href: "/modules/payroll-management" },
    { name: "Expense", href: "/modules/expense-management" },
  ];

  return (
    <footer className="w-full bg-[#013228] text-white relative overflow-hidden">
      {/* Top decorative bar */}
      <div className="h-1 bg-gradient-to-r from-[#E3FFCD]/0 via-[#E3FFCD]/40 to-[#E3FFCD]/0" />

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <Link href="/">
              <Image
                src={fullLogoSrc}
                alt="Human Systems Logo"
                width={180}
                height={40}
                className="w-32 sm:w-40 lg:-ml-5"
                priority
                unoptimized={!!logoUrl}
              />
            </Link>
            <p className="text-emerald-100/50 leading-relaxed text-sm max-w-xs">
              {descriptionText}
            </p>
            <div className="flex gap-3">
              {socialLinksConfig.map((social: any, index: number) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-100/60 hover:bg-[#E3FFCD] hover:text-[#013228] hover:border-transparent transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Platform */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#E3FFCD] mb-8">
              Platform
            </h4>
            <ul className="space-y-4">
              {platformLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-emerald-100/50 hover:text-[#E3FFCD] text-sm transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-[#E3FFCD] transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Modules */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#E3FFCD] mb-8">
              Modules
            </h4>
            <ul className="space-y-4">
              {moduleLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-emerald-100/50 hover:text-[#E3FFCD] text-sm transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-[#E3FFCD] transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#E3FFCD] mb-8">
              Get in Touch
            </h4>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#E3FFCD] shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-sm text-emerald-100/70 leading-relaxed">
                    {contactConfig.location}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#E3FFCD] shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <a
                    href={`mailto:${contactConfig.email}`}
                    className="text-sm text-emerald-100/70 hover:text-[#E3FFCD] transition-colors"
                  >
                    {contactConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#E3FFCD] shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <a
                    href={`tel:${contactConfig.phone.replace(/\s+/g, '')}`}
                    className="text-sm text-emerald-100/70 hover:text-[#E3FFCD] transition-colors"
                  >
                    {contactConfig.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-emerald-800/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-emerald-100/30 text-xs">
            © {currentYear} Human Systems. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a
              href="#"
              className="text-emerald-100/30 hover:text-[#E3FFCD] text-xs transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-emerald-100/30 hover:text-[#E3FFCD] text-xs transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-emerald-100/30 hover:text-[#E3FFCD] text-xs transition-colors"
            >
              GDPR Compliance
            </a>
          </div>
        </div>
      </div>

      {/* Decorative blurs */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E3FFCD]/3 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#E3FFCD]/3 blur-[100px] rounded-full translate-y-1/3 translate-x-1/3 pointer-events-none" />
    </footer>
  );
};

export default Footer;
