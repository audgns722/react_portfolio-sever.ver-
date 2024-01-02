import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export const Loading = ({ setIsLoading }) => {
  const [counter, setCounter] = useState(0);
  const loadingBarRef = useRef(null);
  const textRef = useRef(null);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter === 100) {
          clearInterval(interval);
          gsap.to([loadingBarRef.current, textRef.current], {
            // 로딩 바와 텍스트에 애니메이션 적용
            opacity: 0,
            scale: 3,
            duration: 1,
            ease: "power2.out",
            onComplete: () => setIsLoading(false),
          });
          return prevCounter;
        }
        return prevCounter + 1;
      });
    }, 50);

    gsap.fromTo(
      loadingBarRef.current,
      { scaleY: 1 },
      { scaleY: 0, duration: 100 * 0.05, ease: "none" }
    );

    return () => clearInterval(interval);
  }, [setIsLoading]);

  return (
    <div className="loading-page">
      <div className="loading-bar" ref={loadingBarRef} />
      <div className="counter" ref={textRef}>
        {" "}
        {/* 텍스트 요소에 ref 적용 */}
        <p>Loading</p>
        <h1>{counter}%</h1>
        <hr style={{ width: `${counter}%` }} />
      </div>
    </div>
  );
};
