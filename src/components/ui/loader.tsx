'use client';

import React, { useEffect } from 'react';

const Loader = () => {
  useEffect(() => {
    document.body.classList.add('loader-active');
    return () => {
      document.body.classList.remove('loader-active');
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black z-[200]">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#FF4A17]"></div>
    </div>
  );
};

export default Loader;
