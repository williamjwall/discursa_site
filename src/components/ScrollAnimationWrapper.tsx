import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

interface ScrollAnimationWrapperProps {
  children: React.ReactNode;
  animation?: 'fade-in' | 'fade-in-up' | 'fade-in-left' | 'fade-in-right' | 'scale-in' | 'stagger-children' | 'counter-up' | 'draw-line';
  className?: string;
  threshold?: number;
  rootMargin?: string;
  delay?: number;
}

const ScrollAnimationWrapper: React.FC<ScrollAnimationWrapperProps> = ({
  children,
  animation = 'fade-in-up',
  className = '',
  threshold = 0.1,
  rootMargin = '0px 0px -100px 0px',
  delay = 0
}) => {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold,
    rootMargin,
    triggerOnce: true
  });

  const animationClasses = `${animation} animate-on-scroll ${isVisible ? 'animate' : ''}`;
  const delayStyle = delay > 0 ? { transitionDelay: `${delay}ms` } : {};

  return (
    <div
      ref={elementRef}
      className={`${animationClasses} ${className}`}
      style={delayStyle}
    >
      {children}
    </div>
  );
};

export default ScrollAnimationWrapper; 