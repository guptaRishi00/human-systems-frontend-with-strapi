"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoChevronDown } from "react-icons/io5";

export default function Header() {
  const headerRef = useRef<HTMLElement | null>(null);
  const lastScroll = useRef(0);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const handleScroll = () => {
      const current = window.scrollY;

      // sticky
      if (current > 50) {
        header.classList.add("bg-[#013228]", "shadow-md", "fixed", "top-0");
      } else {
        header.classList.remove("bg-[#013228]", "shadow-md", "fixed", "top-0");
      }

      // hide on scroll down
      if (current > lastScroll.current && current > 80) {
        header.style.transform = "translateY(-100%)";
      } else {
        header.style.transform = "translateY(0)";
      }

      lastScroll.current = current;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About Us", href: "/" },
    {
      name: "Services",
      href: "#",
      dropdown: [
        { name: "Web Development", href: "/services/web-development" },
        { name: "UI/UX Design", href: "/services/ui-ux" },
        { name: "SEO Optimization", href: "/services/seo" },
      ],
    },
    {
      name: "Pages",
      href: "#",
      dropdown: [
        { name: "Pricing", href: "/pricing" },
        { name: "FAQ", href: "/faq" },
        { name: "Team", href: "/team" },
      ],
    },
    {
      name: "Blog",
      href: "#",
      dropdown: [
        { name: "Blog Grid", href: "/blog" },
        { name: "Blog Details", href: "/blog/details" },
      ],
    },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      ref={headerRef}
      className="w-full relative transition-transform duration-300 z-50"
    >
      <div className="flex items-center justify-center lg:gap-50 px-4 py-2">
        <Image
          src="/logo-3.svg"
          alt="Logo"
          width={200}
          height={200}
          className="w-50"
        />

        <div className="flex items-center gap-10">
          {navLinks.map((link, index) => (
            <div key={index} className="relative group">
              <Link
                href={link.href}
                className="flex items-center gap-1 font-semibold text-white hover:text-[#E3FFCD]"
              >
                {link.name}

                {link.dropdown && (
                  <IoChevronDown
                    size={14}
                    className="transition-transform duration-200 group-hover:rotate-180"
                  />
                )}
              </Link>

              {link.dropdown && (
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200">
                  <div className="flex flex-col bg-white rounded-md shadow-sm min-w-48 py-5">
                    {link.dropdown.map((item, i) => (
                      <Link
                        key={i}
                        href={item.href}
                        className="px-4 py-3 text-gray-700 hover:bg-gray-100 text-lg"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <button className="flex items-center gap-2 bg-[#E3FFCD] rounded-full py-3 px-5 text-sm uppercase tracking-wide font-semibold text-[#013228]">
          Get Started
          <IoIosArrowRoundForward size={30} />
        </button>
      </div>
    </header>
  );
}
