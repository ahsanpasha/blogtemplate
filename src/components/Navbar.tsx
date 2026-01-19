"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="scroll-bar" style={{ willChange: 'transform', transform: 'translate3d(0px, 0px, 0px) scale3d(0.04158, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}></div>

      {/* Main Navbar Header */}
      <nav
        role="banner"
        className="navbar w-nav"
        style={{
          zIndex: 1000,
          visibility: isOpen ? 'hidden' : 'visible',
          opacity: isOpen ? 0 : 1,
          transition: 'opacity 0.3s ease, visibility 0.3s ease'
        }}
      >
        <div className="nav-block">
          <Link href="/" aria-current="page" className="brand w-nav-brand w--current" aria-label="home">
            <img src="https://cdn.prod.website-files.com/601b0e022dc24f4ea11206ad/601e8c72c9acbbd5cb31dfcc_Blogy%20-%20Black%20Logo.svg" width="104" alt="Blogy" />
          </Link>

          {/* Desktop Menu */}
          <nav role="navigation" className="nav-menu w-nav-menu nav-menu-desktop">
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

          {/* <div className="nav-right">
            <div className="nav-search-block">
              <Link href="#" className="search-button w-inline-block">
                <img src="https://cdn.prod.website-files.com/601b0e022dc24f4ea11206ad/601ec0074cab6c68cb0b3687_Search.svg" alt="" className="search-icon" />
              </Link>
            </div>
            
          </div> */}

          <div className="nav-menu-button nav-menu-mobile-btn">
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center justify-center p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="menu"
              style={{ width: '40px', height: '40px', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </nav>

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
          width: '320px',
          right: isOpen ? '0' : '-320px',
          visibility: isOpen ? 'visible' : 'hidden',
          zIndex: 2001,
          backgroundColor: '#ffffff',
          transitionProperty: 'right, visibility, box-shadow'
        }}
      >
        <div className="px-12 py-12 flex flex-col h-full relative" style={{ backgroundColor: '#ffffff', minHeight: '100%' }}>
          <div className="flex justify-between items-center mb-16 pb-8" style={{ borderBottom: '1px solid #f0f0f0' }}>
            <Link href="/" onClick={() => setIsOpen(false)} className="flex-shrink-0">
              <img src="https://cdn.prod.website-files.com/601b0e022dc24f4ea11206ad/601e8c72c9acbbd5cb31dfcc_Blogy%20-%20Black%20Logo.svg" width="100" alt="Blogy" />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
              style={{ width: '44px', height: '44px', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <nav className="flex flex-col space-y-12">
            <div className="space-y-8">
              <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] pl-0">Browse</h3>
              <div className="flex flex-col space-y-6">
                <Link href="/category/off-grid" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-gray-900 hover:text-red-500 transition-colors" style={{ textDecoration: 'none' }}>Off Grid</Link>
                <Link href="/category/travel" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-gray-900 hover:text-red-500 transition-colors" style={{ textDecoration: 'none' }}>Travel</Link>
                <Link href="/category/food" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-gray-900 hover:text-red-500 transition-colors" style={{ textDecoration: 'none' }}>Food</Link>
              </div>
            </div>

            <div className="pt-12 flex flex-col space-y-6" style={{ borderTop: '1px solid #f0f0f0' }}>
              <Link href="/about" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-gray-900 hover:text-red-500 transition-colors" style={{ textDecoration: 'none' }}>Our Story</Link>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-gray-900 hover:text-red-500 transition-colors" style={{ textDecoration: 'none' }}>Contact</Link>
            </div>
          </nav>

          <div className="mt-auto pt-16 text-[9px] text-gray-300 uppercase tracking-[0.4em] font-bold">
            © 2026 Blogy. All rights reserved.
          </div>
        </div>
      </div>

      <div className="search-block" style={{ transform: 'translate3d(0px, -82px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
        <a href="#" className="close-search w-inline-block">
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
