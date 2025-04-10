import React from 'react';
import Link from 'next/link';

const TrackButton = ({ href = '', children, onClick }) => {
  const buttonContent = (
    <div
      className="flex cursor-pointer"
      onClick={(e) => {
        // Prevent default link behavior if onClick is used
        if (onClick) {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <div className="relative bg-[#D9D9D938]/78 lg:px-6 px-4 py-3 text-center lg:min-w-[200px] whitespace-nowrap">
        {/* Top border with irregular dashes */}
        <div className="absolute top-0 left-0 right-0 h-[1px] flex">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="h-full bg-[#a89a84]"
              style={{
                width: `${Math.random() * 8 + 4}px`,
                marginRight: `${Math.random() * 8 + 4}px`,
              }}
            ></div>
          ))}
        </div>

        {/* Bottom border with irregular dashes */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] flex">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="h-full bg-[#a89a84]"
              style={{
                width: `${Math.random() * 8 + 4}px`,
                marginRight: `${Math.random() * 8 + 4}px`,
              }}
            ></div>
          ))}
        </div>

        {/* Left border with irregular dashes */}
        <div className="absolute left-0 top-0 bottom-0 w-[1px] flex flex-col">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="w-full bg-[#a89a84]"
              style={{
                height: `${Math.random() * 8 + 4}px`,
                marginBottom: `${Math.random() * 8 + 4}px`,
              }}
            ></div>
          ))}
        </div>

        {/* Right border with irregular dashes */}
        <div className="absolute right-0 top-0 bottom-0 w-[1px] flex flex-col">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="w-full bg-[#a89a84]"
              style={{
                height: `${Math.random() * 8 + 4}px`,
                marginBottom: `${Math.random() * 8 + 4}px`,
              }}
            ></div>
          ))}
        </div>

        {/* Corner notches */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#a89a84]"></div>
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#a89a84]"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#a89a84]"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#a89a84]"></div>

        <p className="text-[#a89a84] font-orbitron font-bold">{children}</p>
      </div>
    </div>
  );

  // If href is provided and there's no onClick, wrap in a Link
  return href && !onClick ? (
    <Link href={href} passHref legacyBehavior>
      <a rel="noopener noreferrer">{buttonContent}</a>
    </Link>
  ) : (
    buttonContent
  );
};

export default TrackButton;
