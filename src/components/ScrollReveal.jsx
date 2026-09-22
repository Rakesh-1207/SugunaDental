import React, { useEffect, useRef, useState } from 'react';

/**
 * ScrollReveal component to trigger scroll entrance animations.
 * @param {string} direction - 'up' | 'down' | 'left' | 'right' | 'zoom'
 * @param {number} delay - delay in milliseconds
 * @param {number} duration - animation duration in milliseconds
 * @param {string} className - extra CSS classes
 */
export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 800,
  className = '',
  threshold = 0.15,
  once = true,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [threshold, once]);

  const directionClass = {
    up: 'reveal-up',
    down: 'reveal-down',
    left: 'reveal-left',
    right: 'reveal-right',
    zoom: 'reveal-zoom',
  }[direction] || 'reveal-up';

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
      className={`reveal-init ${directionClass} ${isVisible ? 'reveal-active' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
