import { useEffect, useState } from "react";

function useWindowResize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerHeight,
    height: window.innerWidth,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
}

export default useWindowResize;
