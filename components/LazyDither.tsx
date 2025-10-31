"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

// Carregar Dither dinamicamente
const Dither = dynamic(() => import("./Dither"), {
  ssr: false,
});

interface LazyDitherProps {
  waveColor?: [number, number, number];
  disableAnimation?: boolean;
  enableMouseInteraction?: boolean;
  mouseRadius?: number;
  colorNum?: number;
  waveAmplitude?: number;
  waveFrequency?: number;
  waveSpeed?: number;
}

export default function LazyDither(props: LazyDitherProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasRendered, setHasRendered] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Só criar observer se ainda não renderizou
    if (hasRendered) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setHasRendered(true);
            // Desconectar após primeira visualização para evitar loops
            observer.disconnect();
          }
        });
      },
      {
        root: null,
        rootMargin: "50px",
        threshold: 0.1,
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [hasRendered]);

  return (
    <div ref={containerRef} className="w-full h-full">
      {isVisible && <Dither {...props} />}
    </div>
  );
}
