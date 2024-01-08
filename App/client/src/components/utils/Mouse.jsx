import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Mouse = ({ imgRef, isActive }) => {
  const mouseCursorRef = useRef(null);

  const scaleAnimation = {
    initial: { scale: 0 },
    enter: {
      scale: 1,
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      scale: 0,
      transition: { duration: 0.4, ease: [0.32, 0, 0.67, 1] },
    },
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!mouseCursorRef.current || !imgRef.current) return;
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
    if (imageElement) {
      imageElement.addEventListener("mousemove", handleMouseMove);

      // 클린업 함수: 컴포넌트 언마운트 시 이벤트 리스너 제거
      return () => {
        imageElement.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [imgRef]);

  return (
    <motion.div
      ref={mouseCursorRef}
      variants={scaleAnimation}
      initial="initial"
      animate={isActive ? "enter" : "closed"}
      className="mouse__cursor"
    >
      <div className="cursor2"></div>
      <span className="cursor-label">Click Me</span>
    </motion.div>
  );
};

export default Mouse;
