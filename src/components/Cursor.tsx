import React, { useState, useEffect } from 'react';

const Cursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const handleLinkHoverStart = () => setLinkHovered(true);
    const handleLinkHoverEnd = () => setLinkHovered(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseenter', () => setHidden(false));
    window.addEventListener('mouseleave', () => setHidden(true));

    // Track link hovers
    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleLinkHoverStart);
      link.addEventListener('mouseleave', handleLinkHoverEnd);
    });

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseenter', () => setHidden(false));
      window.removeEventListener('mouseleave', () => setHidden(true));

      links.forEach(link => {
        link.removeEventListener('mouseenter', handleLinkHoverStart);
        link.removeEventListener('mouseleave', handleLinkHoverEnd);
      });
    };
  }, []);

  // Only show custom cursor on desktop
  if (typeof window !== 'undefined' && window.innerWidth <= 768) {
    return null;
  }

  return (
    <>
      <div 
        className={`custom-cursor fixed pointer-events-none z-50 ${hidden ? 'opacity-0' : 'opacity-100'}`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
      >
        {/* Outer cursor ring */}
        <div 
          className={`absolute bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ${
            clicked ? 'w-6 h-6 opacity-30' : linkHovered ? 'w-10 h-10 opacity-20' : 'w-8 h-8 opacity-15'
          }`}
        ></div>
        
        {/* Inner cursor dot */}
        <div 
          className={`absolute bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ${
            clicked ? 'w-3 h-3' : linkHovered ? 'w-4 h-4' : 'w-2 h-2'
          }`}
        ></div>
      </div>
    </>
  );
};

export default Cursor;