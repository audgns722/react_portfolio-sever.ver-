import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const Mouse = ({ imgRef }) => {
  const mouseCursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!imgRef || !imgRef.current) return;
      const imgRect = imgRef.current.getBoundingClientRect();
      const cursorWidth = mouseCursorRef.current.clientWidth;
      const cursorHeight = mouseCursorRef.current.clientHeight;

      gsap.to(mouseCursorRef.current, {
        duration: 0.5,
        left: e.clientX - imgRect.left - cursorWidth / 2,
        top: e.clientY - imgRect.top - cursorHeight / 2,
        ease: "power1.out",
      });
    };

    const imageElement = imgRef.current;
    imageElement.addEventListener("mousemove", handleMouseMove);

    const showCursor = () => {
      gsap.fromTo(
        mouseCursorRef.current,
        { autoAlpha: 0, scale: 0.2 },
        { autoAlpha: 1, scale: 1.5, duration: 0.1 }
      );
    };

    const hideCursor = () => {
      gsap.to(mouseCursorRef.current, {
        autoAlpha: 0,
        scale: 0.5,
        duration: 0.3,
      });
    };

    imageElement.addEventListener("mouseenter", showCursor);
    imageElement.addEventListener("mouseleave", hideCursor);

    return () => {
      imageElement.removeEventListener("mousemove", handleMouseMove);
      imageElement.removeEventListener("mouseenter", showCursor);
      imageElement.removeEventListener("mouseleave", hideCursor);
    };
  }, [imgRef]);

  return (
    <div className="mouse__cursor" ref={mouseCursorRef}>
      <div className="cursor2"></div>
      <span className="cursor-label">Click Me</span>
    </div>
  );
};

export default Mouse;
