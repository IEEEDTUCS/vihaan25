"use client"
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [songPlaying, setSongPlaying] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative bg-transparent text-white">
      <div className="max-w-7xl  px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Area */}
          <div className="flex space-x-1 items-center relative">
            <div className="text-center justify-center text-stone-500 text-xs font-normal font-['Orbitron'] tracking-widest">VOLUME</div>
            <div className="text-center justify-center text-stone-500 text-xs font-normal font-['Orbitron'] tracking-widest">{songPlaying ? '<ON>' : '<OFF>'}</div>
            <div style={{ width: '100%', height: '100%', marginLeft: 160, transform: 'rotate(180deg)', marginTop: 20 }}>
              <div style={{ width: 19, height: 0, left: 141, top: 19, position: 'absolute', transform: 'rotate(270deg)', transformOrigin: 'top left', outline: '1.50px #8F7E77 solid', outlineOffset: '-0.75px' }}></div>
              <div style={{ width: 9, height: 9, left: 131, top: 14, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: 'top left', borderRadius: 9999, border: '1.12px #8F7E77 solid' }} />
              <div style={{ width: 15, height: 0, left: 123, top: 10, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: 'top left', outline: '1px #8F7E77 solid', outlineOffset: '-0.50px' }}></div>
              <div style={{ width: 15, height: 0, left: 58, top: 10, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: 'top left', outline: '1px #8F7E77 solid', outlineOffset: '-0.50px' }}></div>
              <div style={{ width: 5, height: 0, left: 102, top: 10, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: 'top left', outline: '1px #8F7E77 solid', outlineOffset: '-0.50px' }}></div>
              <div style={{ width: 5, height: 0, left: 37, top: 10, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: 'top left', outline: '1px #8F7E77 solid', outlineOffset: '-0.50px' }}></div>
              <div style={{ width: 15, height: 0, left: 91, top: 10, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: 'top left', outline: '1px #8F7E77 solid', outlineOffset: '-0.50px' }}></div>
              <div style={{ width: 15, height: 0, left: 26, top: 10, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: 'top left', outline: '1px #8F7E77 solid', outlineOffset: '-0.50px' }}></div>
              <div style={{ width: 9, height: 0, left: 74, top: 10, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: 'top left', outline: '1px #8F7E77 solid', outlineOffset: '-0.50px' }}></div>
              <div style={{ width: 9, height: 0, left: 9, top: 10, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: 'top left', outline: '1px #8F7E77 solid', outlineOffset: '-0.50px' }}></div>
            </div>
          </div>

          {/* Navigation Links */}

          <div className=" flex items-baseline  -right-[12vw]    relative " >
            {/* Dotted Lines */}
            <div style={{ width: '100%', height: '100%', marginRight: 160 }}>
              <div style={{ width: 19, height: 0, left: 141, top: 19, position: 'absolute', transform: 'rotate(270deg)', transformOrigin: 'top left', outline: '1.50px #8F7E77 solid', outlineOffset: '-0.75px' }}></div>
              <div style={{ width: 9, height: 9, left: 131, top: 14, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: 'top left', borderRadius: 9999, border: '1.12px #8F7E77 solid' }} />
              <div style={{ width: 15, height: 0, left: 123, top: 10, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: 'top left', outline: '1px #8F7E77 solid', outlineOffset: '-0.50px' }}></div>
              <div style={{ width: 15, height: 0, left: 58, top: 10, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: 'top left', outline: '1px #8F7E77 solid', outlineOffset: '-0.50px' }}></div>
              <div style={{ width: 5, height: 0, left: 102, top: 10, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: 'top left', outline: '1px #8F7E77 solid', outlineOffset: '-0.50px' }}></div>
              <div style={{ width: 5, height: 0, left: 37, top: 10, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: 'top left', outline: '1px #8F7E77 solid', outlineOffset: '-0.50px' }}></div>
              <div style={{ width: 15, height: 0, left: 91, top: 10, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: 'top left', outline: '1px #8F7E77 solid', outlineOffset: '-0.50px' }}></div>
              <div style={{ width: 15, height: 0, left: 26, top: 10, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: 'top left', outline: '1px #8F7E77 solid', outlineOffset: '-0.50px' }}></div>
              <div style={{ width: 9, height: 0, left: 74, top: 10, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: 'top left', outline: '1px #8F7E77 solid', outlineOffset: '-0.50px' }}></div>
              <div style={{ width: 9, height: 0, left: 9, top: 10, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: 'top left', outline: '1px #8F7E77 solid', outlineOffset: '-0.50px' }}></div>
            </div>

            <div className="flex justify-evenly space-x-4 border-white  ">
              <div style={{ textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#8F7E77', fontSize: 12, fontFamily: 'Orbitron', fontWeight: '400', letterSpacing: 2.40, wordWrap: 'break-word' }}>TEAM</div>
              <div style={{ textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#8F7E77', fontSize: 12, fontFamily: 'Orbitron', fontWeight: '400', letterSpacing: 2.40, wordWrap: 'break-word' }}>JUDGES</div>

              <div style={{ textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#8F7E77', fontSize: 12, fontFamily: 'Orbitron', fontWeight: '400', letterSpacing: 2.40, wordWrap: 'break-word' }}>FAQ</div>
              <div style={{ textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#8F7E77', fontSize: 12, fontFamily: 'Orbitron', fontWeight: '400', letterSpacing: 2.40, wordWrap: 'break-word' }}>TRACK</div>
              <div  style={{ textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#8F7E77', fontSize: 12, fontFamily: 'Orbitron', fontWeight: '400', letterSpacing: 2.40, wordWrap: 'break-word' }}>TRACK</div>
              {/* <div  style={{ textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#8F7E77', fontSize: 12, fontFamily: 'Orbitron', fontWeight: '400', letterSpacing: 2.40, wordWrap: 'break-word' }}>TRACK</div> */}
              {/* <div  style={{ textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#8F7E77', fontSize: 12, fontFamily: 'Orbitron', fontWeight: '400', letterSpacing: 2.40, wordWrap: 'break-word' }}>TRACK</div> */}
              <div className='-right-[1vw] absolute top-2 '>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="599" viewBox="0 0 22 599" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M22.0004 1V1.875V12.8605H21.9847V13H20.9847V1.875H0.000366211V0.875H22.0004V1ZM22.0004 42.5124V18.7908H21.0004L21.0004 42.5124H22.0004ZM22.0004 58.3264V99.8386H21.0004L21.0004 58.3264H22.0004ZM22.0004 151.235V113.676H21.0004L21.0004 151.235H22.0004ZM22.0004 157.165V204.608H21.0004L21.0004 157.165H22.0004ZM22.0004 222.398V208.562H21.0004V222.398H22.0004ZM22.0004 228.328V256.004H21.0004L21.0004 228.328H22.0004ZM22.0004 275.772V259.958H21.0004V275.772H22.0004ZM22.0004 281.702V293.562H21.0004V281.702H22.0004ZM22.0004 315.306V297.516H21.0004L21.0004 315.306H22.0004ZM22.0004 319.26V348.912H21.0004L21.0004 319.26H22.0004ZM22.0004 366.702V350.888H21.0004V366.702H22.0004ZM22.0004 370.656V372.634H21.0004V370.656H22.0004ZM22.0004 390.424V378.564H21.0004L21.0003 390.424H22.0004ZM22.0004 400.308V447.75H21.0003L21.0003 400.308H22.0004ZM22.0004 467.518V449.728H21.0003V467.518H22.0004ZM22.0004 471.472V479.378H21.0003V471.472H22.0004ZM21.0003 598.858H22.0004V483.332H21.0003L21.0003 598.858Z" fill="#8F7E77" />
                </svg>
              </div>
            </div>


          </div>



          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-black inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 relative">
            {/* Dotted Lines for Mobile */}
            <div style={{ width: '100%', height: '100%', paddingLeft: 703, paddingRight: 703, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
              <div style={{ width: 191, height: 191, mixBlendMode: 'screen', background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.17) 49%, rgba(255, 255, 255, 0) 100%)', boxShadow: '158.3000030517578px 158.3000030517578px 158.3000030517578px ', borderRadius: 9999, filter: 'blur(79.15px)' }} />
              <img style={{ width: 71, height: 71 }} src="https://placehold.co/71x71" />
            </div>

            <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
              Team
            </a>
            <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
              Judges
            </a>
            <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
              FAQ
            </a>
            <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
              Track
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;