import React, { useEffect, useRef } from 'react';

interface VantaBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

const VantaBackground: React.FC<VantaBackgroundProps> = ({ children, className = '' }) => {
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let vantaEffect: any = null;

    const initVanta = () => {
      if (window.VANTA && window.VANTA.TOPOLOGY && vantaRef.current) {
        try {
          vantaEffect = window.VANTA.TOPOLOGY({
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
        } catch (error) {
          console.warn('Vanta.js initialization failed:', error);
        }
      }
    };

    // Wait for scripts to load
    const checkAndInit = () => {
      if (window.VANTA && window.VANTA.TOPOLOGY) {
        initVanta();
      } else {
        // Retry after a short delay
        setTimeout(checkAndInit, 100);
      }
    };

    checkAndInit();

    // Cleanup
    return () => {
      if (vantaEffect && typeof vantaEffect.destroy === 'function') {
        try {
          vantaEffect.destroy();
        } catch (error) {
          console.warn('Vanta.js cleanup failed:', error);
        }
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