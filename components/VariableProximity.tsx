import { motion } from "motion/react";
import React, {
  CSSProperties,
  ElementType,
  HTMLAttributes,
  MutableRefObject,
  ReactElement,
  ReactNode,
  cloneElement,
  forwardRef,
  isValidElement,
  useEffect,
  useMemo,
  useRef,
} from "react";

function useAnimationFrame(callback: () => void) {
  useEffect(() => {
    let frameId: number;
    const loop = () => {
      callback();
      frameId = requestAnimationFrame(loop);
    };
    frameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frameId);
  }, [callback]);
}

function useMousePositionRef(containerRef: MutableRefObject<HTMLElement | null>) {
  const positionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (x: number, y: number) => {
      if (containerRef?.current) {
        const rect = containerRef.current.getBoundingClientRect();
        positionRef.current = { x: x - rect.left, y: y - rect.top };
      } else {
        positionRef.current = { x, y };
      }
    };

    const handleMouseMove = (ev: MouseEvent) => updatePosition(ev.clientX, ev.clientY);
    const handleTouchMove = (ev: TouchEvent) => {
      const touch = ev.touches[0];
      updatePosition(touch.clientX, touch.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [containerRef]);

  return positionRef;
}

interface VariableProximityProps extends HTMLAttributes<HTMLElement> {
  label?: string; // Opcional quando usando children
  children?: React.ReactNode; // Para aceitar estrutura completa
  fromWeight?: number; // Peso da fonte inicial (100-900)
  toWeight?: number; // Peso da fonte final (100-900)
  fromFontVariationSettings?: string; // Para compatibilidade com fontes variáveis
  toFontVariationSettings?: string; // Para compatibilidade com fontes variáveis
  containerRef: MutableRefObject<HTMLElement | null>;
  radius?: number;
  falloff?: "linear" | "exponential" | "gaussian";
  className?: string;
  onClick?: () => void;
  style?: CSSProperties;
  as?: ElementType; // Para poder renderizar como h2, div, etc
}

const VariableProximity = forwardRef<HTMLElement, VariableProximityProps>((props, ref) => {
  const {
    label,
    children,
    fromWeight = 400,
    toWeight = 700,
    fromFontVariationSettings,
    toFontVariationSettings,
    containerRef,
    radius = 50,
    falloff = "linear",
    className = "",
    onClick,
    style,
    as: Component = "span",
    ...restProps
  } = props;

  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const interpolatedWeightsRef = useRef<number[]>([]);
  const interpolatedSettingsRef = useRef<string[]>([]);
  const mousePositionRef = useMousePositionRef(containerRef);
  const lastPositionRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });

  // Verifica se está usando fontVariationSettings ou font-weight
  const useVariableFont = !!(fromFontVariationSettings && toFontVariationSettings);

  const parsedSettings = useMemo(() => {
    if (!useVariableFont) return null;

    const parseSettings = (settingsStr: string) =>
      new Map(
        settingsStr
          .split(",")
          .map((s) => s.trim())
          .map((s) => {
            const [name, value] = s.split(" ");
            return [name.replace(/['"]/g, ""), parseFloat(value)];
          })
      );

    const fromSettings = parseSettings(fromFontVariationSettings);
    const toSettings = parseSettings(toFontVariationSettings);

    return Array.from(fromSettings.entries()).map(([axis, fromValue]) => ({
      axis,
      fromValue,
      toValue: toSettings.get(axis) ?? fromValue,
    }));
  }, [fromFontVariationSettings, toFontVariationSettings, useVariableFont]);

  const calculateDistance = (x1: number, y1: number, x2: number, y2: number) =>
    Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

  const calculateFalloff = (distance: number) => {
    const norm = Math.min(Math.max(1 - distance / radius, 0), 1);
    switch (falloff) {
      case "exponential":
        return norm ** 2;
      case "gaussian":
        return Math.exp(-((distance / (radius / 2)) ** 2) / 2);
      case "linear":
      default:
        return norm;
    }
  };

  useAnimationFrame(() => {
    if (!containerRef?.current) return;
    const { x, y } = mousePositionRef.current;
    if (lastPositionRef.current.x === x && lastPositionRef.current.y === y) {
      return;
    }
    lastPositionRef.current = { x, y };
    const containerRect = containerRef.current.getBoundingClientRect();

    letterRefs.current.forEach((letterRef, index) => {
      if (!letterRef) return;

      const rect = letterRef.getBoundingClientRect();
      const letterCenterX = rect.left + rect.width / 2 - containerRect.left;
      const letterCenterY = rect.top + rect.height / 2 - containerRect.top;

      const distance = calculateDistance(
        mousePositionRef.current.x,
        mousePositionRef.current.y,
        letterCenterX,
        letterCenterY
      );

      if (distance >= radius) {
        if (useVariableFont && fromFontVariationSettings) {
          letterRef.style.fontVariationSettings = fromFontVariationSettings;
        } else {
          letterRef.style.fontWeight = fromWeight.toString();
        }
        return;
      }

      const falloffValue = calculateFalloff(distance);

      if (useVariableFont && parsedSettings) {
        const newSettings = parsedSettings
          .map(({ axis, fromValue, toValue }) => {
            const interpolatedValue = fromValue + (toValue - fromValue) * falloffValue;
            return `'${axis}' ${interpolatedValue}`;
          })
          .join(", ");

        interpolatedSettingsRef.current[index] = newSettings;
        letterRef.style.fontVariationSettings = newSettings;
      } else {
        const interpolatedWeight = Math.round(fromWeight + (toWeight - fromWeight) * falloffValue);
        interpolatedWeightsRef.current[index] = interpolatedWeight;
        letterRef.style.fontWeight = interpolatedWeight.toString();
      }
    });
  });

  // Função recursiva para processar children e aplicar efeito de proximidade aos textos
  const processChildren = (node: ReactNode, letterIndex: { current: number }): ReactNode => {
    if (typeof node === "string") {
      // Processa texto como letras
      const words = node.split(" ");
      return words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {word.split("").map((letter) => {
            const currentLetterIndex = letterIndex.current++;
            return (
              <motion.span
                key={currentLetterIndex}
                ref={(el) => {
                  letterRefs.current[currentLetterIndex] = el;
                }}
                style={{
                  display: "inline-block",
                  ...(useVariableFont
                    ? {
                        fontVariationSettings:
                          interpolatedSettingsRef.current[currentLetterIndex] ||
                          fromFontVariationSettings,
                      }
                    : {
                        fontWeight:
                          interpolatedWeightsRef.current[currentLetterIndex] || fromWeight,
                      }),
                }}
                aria-hidden="true"
              >
                {letter}
              </motion.span>
            );
          })}
          {wordIndex < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ));
    }

    if (
      typeof node === "number" ||
      typeof node === "boolean" ||
      node === null ||
      node === undefined
    ) {
      return node;
    }

    if (Array.isArray(node)) {
      return node.map((child, index) => (
        <React.Fragment key={index}>{processChildren(child, letterIndex)}</React.Fragment>
      ));
    }

    if (isValidElement(node)) {
      const element = node as ReactElement;
      const elementProps = element.props as { children?: ReactNode; [key: string]: unknown };

      // Processa os children recursivamente para aplicar efeito em todos os textos
      if (elementProps && elementProps.children !== undefined) {
        const processedChildren = processChildren(elementProps.children, letterIndex);
        // Preserva todas as props originais mas substitui apenas children
        const newProps = { ...elementProps, children: processedChildren };
        return cloneElement(element, newProps as never);
      }

      return element;
    }

    return node;
  };

  // Se tem children, usa eles; senão usa o label
  const content = children ? (
    processChildren(children, { current: 0 })
  ) : (
    <>
      {label && (
        <>
          {label.split(" ").map((word, wordIndex) => {
            let letterIndex = 0;
            return (
              <span key={wordIndex} className="inline-block whitespace-nowrap">
                {word.split("").map((letter) => {
                  const currentLetterIndex = letterIndex++;
                  return (
                    <motion.span
                      key={currentLetterIndex}
                      ref={(el) => {
                        letterRefs.current[currentLetterIndex] = el;
                      }}
                      style={{
                        display: "inline-block",
                        ...(useVariableFont
                          ? {
                              fontVariationSettings:
                                interpolatedSettingsRef.current[currentLetterIndex] ||
                                fromFontVariationSettings,
                            }
                          : {
                              fontWeight:
                                interpolatedWeightsRef.current[currentLetterIndex] || fromWeight,
                            }),
                      }}
                      aria-hidden="true"
                    >
                      {letter}
                    </motion.span>
                  );
                })}
                {wordIndex < label.split(" ").length - 1 && (
                  <span className="inline-block">&nbsp;</span>
                )}
              </span>
            );
          })}
          {label && <span className="sr-only">{label}</span>}
        </>
      )}
    </>
  );

  // Renderizar componente dinamicamente
  const componentProps: Record<string, unknown> = {
    ref,
    onClick,
    style,
    className,
    ...restProps,
    children: content,
  };

  return React.createElement(Component, componentProps);
});

VariableProximity.displayName = "VariableProximity";
export default VariableProximity;
