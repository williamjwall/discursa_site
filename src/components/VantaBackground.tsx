import React, { useEffect, useRef } from 'react';

interface VantaBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

const VantaBackground: React.FC<VantaBackgroundProps> = ({ children, className = '' }) => {
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple initialization function exactly as provided
    const setVanta = () => {
      if (window.VANTA && vantaRef.current) {
        window.VANTA.TOPOLOGY({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x43426b,
          backgroundColor: 0x0
        });
      }
    };

    // Initialize
    setVanta();

    // Cleanup
    return () => {
      if (window.VANTA && window.VANTA.TOPOLOGY) {
        window.VANTA.TOPOLOGY.destroy?.();
      }
    };
  }, []);

  return (
    <div 
      ref={vantaRef} 
      className={`relative bg-black ${className}`}
      style={{ minHeight: '100vh' }}
    >
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

// Add TypeScript declarations
declare global {
  interface Window {
    VANTA: {
      TOPOLOGY: any;
    };
  }
}

export default VantaBackground; 