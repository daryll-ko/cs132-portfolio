import { animate } from "framer-motion";
import { useEffect, useRef } from "react";

// Reference: https://stackoverflow.com/questions/60205544/in-framer-motion-how-to-animate-pure-data-like-a-number-from-0-to-100

interface Props {
  from: number;
  to: number;
}

function Counter({ from, to }: Props) {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: 1.5,
      onUpdate(value) {
        if (node) {
          node.textContent = value.toFixed(0);
        }
      },
    });

    return () => controls.stop();
  }, [from, to]);

  return <span ref={nodeRef} />;
}

export default Counter;
