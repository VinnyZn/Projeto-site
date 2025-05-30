import React, { useEffect, useRef, useState } from 'react';
import '../assets/scrolling.css';

interface ScrollAnimationProps {
  children: React.ReactNode;
  threshold?: number;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ 
  children,
  threshold = 0.1
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      // In case there are multiple elements, we only need to check one
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        // Once it's visible, no need to observe anymore
        if (domRef.current) observer.unobserve(domRef.current);
      }
    }, { threshold });
    
    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);
  
  return (
    <div
      ref={domRef}
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;