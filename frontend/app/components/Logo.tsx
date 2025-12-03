import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2 group cursor-pointer select-none">
      {/* The Clapperboard Icon */}
      <div className="relative w-8 h-8">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-white transition-transform duration-300 group-hover:-rotate-6"
        >
          {/* Bottom Board (Solid) */}
          <path
            d="M4 10H20C21.1 10 22 10.9 22 12V19C22 20.1 21.1 21 20 21H4C2.9 21 2 20.1 2 19V12C2 10.9 2.9 10 4 10Z"
            fill="currentColor"
            className="text-white"
          />
          
          {/* Top Clapper Arm (Angled with Stripes) */}
          <g className="origin-bottom-left transition-transform duration-300 group-hover:rotate-[-15deg]">
             {/* The Arm Background */}
            <rect
              x="2"
              y="3"
              width="20"
              height="5"
              rx="1"
              fill="currentColor"
              className="text-white"
            />
            {/* The Stripes (Cutout effect using dark color) */}
            <path
              d="M5.5 3L3.5 8H6L8 3H5.5ZM10.5 3L8.5 8H11L13 3H10.5ZM15.5 3L13.5 8H16L18 3H15.5Z"
              fill="black" 
              className="opacity-90"
            />
          </g>
        </svg>
      </div>

      {/* The Text */}
      <div className="font-bold text-xl tracking-tight flex items-baseline">
        <span className="text-white">Cine</span>
        <span className="text-red-500">Cut</span>
      </div>
    </div>
  );
};

export default Logo;