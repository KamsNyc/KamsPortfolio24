'use client'
import { useEffect, useState } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsVisible(scrollTop > 100);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`${
        isVisible ? 'opacity-100' : 'opacity-0'
      } fixed right-10 bottom-10 transition-opacity duration-300`}
    >
      <button
        onClick={scrollToTop}
        className="bg-[#d3e97a] hover:bg-[##d3e97a] text-black heading font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
      >
        Scroll To Top
      </button>
    </div>
  );
};

export default ScrollToTop;