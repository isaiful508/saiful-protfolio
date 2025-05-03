import React, { useState, useEffect } from 'react';

const Cursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 768) return;

    let animationFrameId: number;

    const updatePosition = (e: MouseEvent) => {
      animationFrameId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
      setHidden(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button')) {
        setLinkHovered(true);
      } else {
        setLinkHovered(false);
      }
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseenter', () => setHidden(false));
    window.addEventListener('mouseleave', () => setHidden(true));
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseenter', () => setHidden(false));
      window.removeEventListener('mouseleave', () => setHidden(true));
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (typeof window !== 'undefined' && window.innerWidth <= 768) {
    return null;
  }

  return (
    <div
      className={`custom-cursor fixed pointer-events-none z-50 ${
        hidden ? 'opacity-0' : 'opacity-100'
      }`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: 'transform 0.05s ease-out',
      }}
    >
      <div
        className={`absolute bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ${
          clicked ? 'w-6 h-6 opacity-30' : linkHovered ? 'w-10 h-10 opacity-20' : 'w-8 h-8 opacity-15'
        }`}
      ></div>
      <div
        className={`absolute bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ${
          clicked ? 'w-3 h-3' : linkHovered ? 'w-4 h-4' : 'w-2 h-2'
        }`}
      ></div>
    </div>
  );
};

export default Cursor;
