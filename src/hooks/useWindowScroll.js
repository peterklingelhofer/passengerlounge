import { useCallback, useEffect, useRef } from "react";

export function useWindowScroll() {
  const callbackRef = useRef(null);

  const onScroll = useCallback((cb) => {
    callbackRef.current = cb;
  }, []);

  useEffect(() => {
    const handler = () => {
      if (callbackRef.current) {
        callbackRef.current();
      }
    };

    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return onScroll;
}
