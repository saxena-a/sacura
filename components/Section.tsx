import React, { useEffect, useRef, useState } from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, className = '', children, fullWidth = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.1 });

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section 
      id={id}
      ref={domRef}
      className={`py-32 md:py-48 section-reveal ${isVisible ? 'active' : ''} ${className}`}
    >
      <div className={`${fullWidth ? 'w-full' : 'max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24'}`}>
        {children}
      </div>
    </section>
  );
};