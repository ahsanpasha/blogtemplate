"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Material UI-style Side Drawer implementation using Tailwind CSS
  return (
    <>
      <div className="scroll-bar" style={{ willChange: 'transform', transform: 'translate3d(0px, 0px, 0px) scale3d(0.04158, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}></div>
      <div data-collapse="medium" data-animation="default" data-duration="350" data-easing="ease-in-quad" data-easing2="ease-in-quad" data-doc-height="1" role="banner" className="navbar w-nav">
        <div className="nav-block">
          <Link href="/" aria-current="page" className="brand w-nav-brand w--current" aria-label="home">
            <img src="https://cdn.prod.website-files.com/601b0e022dc24f4ea11206ad/601e8c72c9acbbd5cb31dfcc_Blogy%20-%20Black%20Logo.svg" width="104" alt="" />
          </Link>

          {/* Desktop Menu - Hidden on small screens via CSS (Webflow classes usually handle this, but we reinforce) */}
          <nav role="navigation" className="nav-menu w-nav-menu hidden lg:flex">
            <div className="navbar-categories w-dyn-list">
              <div role="list" className="navbar-categories-list w-dyn-items">
                <div role="listitem" className="w-dyn-item"><Link href="/category/off-grid" className="nav-link w-nav-link">Off Grid</Link></div>
                <div role="listitem" className="w-dyn-item"><Link href="/category/travel" className="nav-link w-nav-link">Travel</Link></div>
                <div role="listitem" className="w-dyn-item"><Link href="/category/food" className="nav-link w-nav-link">Food</Link></div>
              </div>
            </div>
            <Link href="/about" className="nav-link w-nav-link">About</Link>
            <Link href="/contact" className="nav-link _0margin w-nav-link">Contact</Link>
          </nav>

          <a href="#" className="search-link-block w-inline-block">
            <div className="search-text-on-hover">Search</div>
            <img src="https://cdn.prod.website-files.com/601b0e022dc24f4ea11206ad/601b0e24d03ad1171aa2f6ee_Search.svg" loading="lazy" alt="" className="search-icon" />
          </a>
          <div className="nav-right">
            <div className="nav-search-block">
              <Link href="#" className="search-button w-inline-block">
                <img src="https://cdn.prod.website-files.com/601b0e022dc24f4ea11206ad/601ec0074cab6c68cb0b3687_Search.svg" alt="" className="search-icon" />
              </Link>
            </div>
            <div className="nav-menu-button">
              <button
                onClick={() => setIsOpen(true)}
                className="flex items-center justify-center p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="menu"
                style={{ width: '40px', height: '40px' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Side Drawer Backdrop */}
      <div
        className="fixed inset-0 transition-opacity duration-300 ease-in-out"
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
        style={{
          opacity: isOpen ? 0.6 : 0,
          visibility: isOpen ? 'visible' : 'hidden',
          zIndex: 2000,
          pointerEvents: isOpen ? 'auto' : 'none',
          backgroundColor: '#000000'
        }}
      ></div>

      {/* Side Drawer Panel */}
      <div
        className="fixed top-0 right-0 shadow-2xl transition-all duration-300 ease-in-out flex flex-col"
        style={{
          height: '100%',
          width: '300px',
          right: isOpen ? '0' : '-300px',
          visibility: isOpen ? 'visible' : 'hidden',
          zIndex: 2001,
          backgroundColor: '#ffffff',
          transitionProperty: 'right, visibility, box-shadow'
        }}
      >
        <div className="px-8 py-10 flex flex-col h-full relative" style={{ backgroundColor: '#ffffff', minHeight: '100%' }}>
          <div className="flex justify-between items-center mb-12 pb-6" style={{ borderBottom: '1px solid #f3f4f6' }}>
            <Link href="/" onClick={() => setIsOpen(false)} className="flex-shrink-0">
              <img src="https://cdn.prod.website-files.com/601b0e022dc24f4ea11206ad/601e8c72c9acbbd5cb31dfcc_Blogy%20-%20Black%20Logo.svg" width="100" alt="Blogy" />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 -mr-2 text-gray-400 hover:text-black focus:outline-none transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="black" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col space-y-10">
            <div className="space-y-6">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1" style={{ fontSize: '11px', letterSpacing: '0.15em' }}>Explore Categories</h3>
              <div className="flex flex-col space-y-5 pl-1">
                <Link href="/category/off-grid" onClick={() => setIsOpen(false)} className="text-lg font-semibold text-gray-900 hover:text-red-600 transition-colors" style={{ textDecoration: 'none' }}>Off Grid</Link>
                <Link href="/category/travel" onClick={() => setIsOpen(false)} className="text-lg font-semibold text-gray-900 hover:text-red-600 transition-colors" style={{ textDecoration: 'none' }}>Travel</Link>
                <Link href="/category/food" onClick={() => setIsOpen(false)} className="text-lg font-semibold text-gray-900 hover:text-red-600 transition-colors" style={{ textDecoration: 'none' }}>Food</Link>
              </div>
            </div>

            <div className="pt-10 flex flex-col space-y-5 pl-1" style={{ borderTop: '1px solid #f3f4f6' }}>
              <Link href="/about" onClick={() => setIsOpen(false)} className="text-lg font-semibold text-gray-900 hover:text-red-600 transition-colors" style={{ textDecoration: 'none' }}>About the Blog</Link>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="text-lg font-semibold text-gray-900 hover:text-red-600 transition-colors" style={{ textDecoration: 'none' }}>Get in Touch</Link>
            </div>
          </nav>

          <div className="mt-auto pt-12 text-[10px] text-gray-400 uppercase tracking-[0.2em] font-medium">
            © 2026 Blogy. All rights reserved.
          </div>
        </div>
      </div>

      <div className="search-block" style={{ transform: 'translate3d(0px, -82px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
        <a data-w-id="f06dd42f-9d5c-cdc1-f26d-e4b59f633875" href="#" className="close-search w-inline-block">
          <img src="https://cdn.prod.website-files.com/601b0e022dc24f4ea11206ad/6023c579ec357b72e2e92e27_icons8-macos-close-96.png" loading="lazy" alt="" className="close-icon" />
        </a>
        <form action="/search" className="search w-form">
          <input className="search-input w-input" maxLength={256} name="query" placeholder="Search…" type="search" id="search" required />
          <input type="submit" className="search-button w-button" value="Search" />
        </form>
      </div>
    </>
  );
}
