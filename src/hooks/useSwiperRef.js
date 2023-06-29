import React, { useRef, useState, useEffect } from "react";

export const useSwiperRef = () => {
  const [wrapper, setWrapper] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      setWrapper(ref.current);
    }
  }, []);
  return [wrapper, ref];
};
