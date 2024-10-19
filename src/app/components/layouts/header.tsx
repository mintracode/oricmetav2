"use client";

import React, { useState } from "react";
import { CloseIcon, MenuIcon } from "@/app/icons";
import { cn } from "@/app/utils";
import Link from "next/link";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 px-4 xl:space-y-10 lg:space-y-10 md:space-y-10 sm:space-y-10 space-y-5 py-4 bg-white/30 rounded-full fixed mt-3 z-50 relative">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="#" className="text-white">
          Logo
        </Link>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <MenuIcon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
              {item.name}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-20 bg-white p-6">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt="Logo"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <CloseIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-100"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#"
              className="block rounded-lg px-3 py-2.5 mt-6 text-base font-semibold text-gray-900 hover:bg-gray-100"
            >
              Log in
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
