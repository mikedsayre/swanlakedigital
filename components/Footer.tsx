
import React from 'react';
import { IMAGES } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="py-10 pb-8 text-center"> {/* Reduced vertical padding */}
      <div className="max-w-7xl mx-auto px-5 flex flex-col items-center"> {/* Use flex-col for overall centering */}
        <div className="flex items-center justify-center gap-3 mb-2"> {/* Flex row for image and copyright */}
          <img
            src={IMAGES.SWAN_LAKE_MASCOT_512}
            alt="Swan Lake Digital Mascot"
            className="h-8 w-auto drop-shadow-cyan-strong flex-shrink-0"
          />
          <p className="opacity-80 text-base md:text-lg m-0 text-shadow"> {/* Removed my-4 here */}
            © 2026 Swan Lake Digital Consulting. All rights reserved.
          </p>
        </div>
        <p className="opacity-80 text-base md:text-lg text-shadow">
          Bridging Business & Technology with AI Innovation
        </p>
      </div>
    </footer>
  );
};