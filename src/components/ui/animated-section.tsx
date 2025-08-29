import React, { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animationType?: 'fadeInUp' | 'fadeInDown' | 'slideInLeft' | 'slideInRight' | 'scaleIn' | 'rotateIn';
  delay?: number;
  duration?: number;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  animationType = 'fadeInUp',
  delay = 0,
  duration = 800,
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  triggerOnce = true
}) => {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold,
    rootMargin,
    triggerOnce
  });

  const getAnimationClass = () => {
    const baseClass = 'animate-on-scroll';
    if (isVisible) {
      return `${baseClass} animate-in`;
    }
    return baseClass;
  };

  return (
    <section
      ref={elementRef}
      className={cn(
        getAnimationClass(),
        className
      )}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`
      }}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;
