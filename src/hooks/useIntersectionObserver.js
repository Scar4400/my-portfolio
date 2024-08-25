// useIntersectionObserver.jsimport { useEffect, useRef, useState } from 'react';export const useIntersectionObserver = () => {
  const [isVisible, setIsVisible] = useState(false);  const elementRef = useRef(null);  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);          observer.unobserve(entry.target);        }
      },      { threshold: 0.1 }
    );    if (elementRef.current) {
      observer.observe(elementRef.current);    }
    return () => observer.disconnect();  }, []);  return [isVisible, elementRef];};