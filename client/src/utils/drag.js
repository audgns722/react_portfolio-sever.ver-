import React, { useState, useCallback } from "react";

const useDraggable = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false); // 드래그 상태 추가
  let previousTouch = undefined;

  const startDrag = useCallback((event) => {
    event.preventDefault();
    setIsDragging(true); // 드래그 시작 시 true로 설정
    document.addEventListener("mousemove", updateElementPosition);
    document.addEventListener("touchmove", updateElementPosition);
    document.addEventListener("mouseup", stopDrag);
    document.addEventListener("touchend", stopDrag);
  }, []);

  const updateElementPosition = useCallback((event) => {
    let movementX, movementY;

    if (event.type === "touchmove") {
      const touch = event.touches[0];
      movementX = previousTouch ? touch.clientX - previousTouch.clientX : 0;
      movementY = previousTouch ? touch.clientY - previousTouch.clientY : 0;
      previousTouch = touch;
    } else {
      movementX = event.movementX;
      movementY = event.movementY;
    }

    setPosition((prevPosition) => ({
      x: prevPosition.x + movementX,
      y: prevPosition.y + movementY,
    }));
  }, []);

  const stopDrag = useCallback(() => {
    setIsDragging(false); // 드래그 종료 시 false로 설정
    previousTouch = undefined;
    document.removeEventListener("mousemove", updateElementPosition);
    document.removeEventListener("touchmove", updateElementPosition);
    document.removeEventListener("mouseup", stopDrag);
    document.removeEventListener("touchend", stopDrag);
  }, []);

  return { position, startDrag, isDragging }; // isDragging 반환
};

export default useDraggable;
