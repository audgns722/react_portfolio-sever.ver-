import gsap from "gsap";

export const ClosePoupAnimation6 = () => {
  const tl = gsap.timeline();

  tl.fromTo(
    "#sec6popup .right",
    {
      opacity: 1,
      y: 0,
    },
    {
      opacity: 0,
      y: -20,
      ease: "power3.out",
    }
  )
    .fromTo(
      "#sec6popup .left",
      {
        opacity: 1,
      },
      {
        opacity: 0,
        ease: "power3.out",
      }
    )
    .fromTo(
      "#sec6popup .close",
      {
        opacity: 1,
        y: 0,
      },
      {
        opacity: 0,
        y: -50,
      },
      "<"
    )
    .to(
      "#sec6popup .popup__wrap",
      {
        height: "1",
        ease: "power3.out",
      },
      "<0.5"
    )
    .to("#sec6popup .popup__wrap", {
      width: "1",
      opacity: 0,
      ease: "power3.out",
    })
    .to("#sec6popup", {
      display: "none",
      opacity: 0,
      duration: 1,
    });
  return tl;
};

export const PoupAnimation6 = () => {
  const tl = gsap.timeline();

  // 미디어 쿼리 설정
  const mediaQuery = window.matchMedia("(max-width: 1200px)");
  let popupWidth = mediaQuery.matches ? "95%" : "80%";

  // 미디어 쿼리에 대한 이벤트 리스너 추가
  const updatePopupWidth = (e) => {
    popupWidth = e.matches ? "95%" : "80%";
  };

  mediaQuery.addListener(updatePopupWidth);

  tl.to("#sec6popup", {
    display: "flex",
    opacity: 1,
  })
    .fromTo(
      "#sec6popup .popup__wrap",
      {
        width: "0%",
        height: 0,
        opacity: 0,
      },
      {
        opacity: 0.5,
        height: 1,
        width: popupWidth,
        ease: "power3.out",
      }
    )
    .to(
      "#sec6popup .popup__wrap",
      {
        opacity: 1,
        height: "80vh",
        ease: "power3.out",
      },
      "<0.3"
    )
    .fromTo(
      "#sec6popup .close",
      {
        opacity: 0,
        y: -30,
      },
      {
        opacity: 1,
        y: 0,
      }
    )
    .fromTo(
      "#sec6popup .left",
      {
        y: 50,
        opacity: 0,
      },
      {
        opacity: 1,
        y: 0,
        ease: "power3.out",
      }
    )
    .fromTo(
      "#sec6popup .right",
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        ease: "power3.out",
      },
      "-=0.5"
    )
    .fromTo(
      "#sec6popup .right h2",
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        ease: "power3.out",
      },
      "-=1"
    )
    .fromTo(
      "#sec6popup .right h3",
      {
        opacity: 0,
        x: 30,
      },
      {
        opacity: 1,
        x: 0,
        ease: "power3.out",
      }
    )
    .fromTo(
      "#sec6popup .javascript",
      {
        opacity: 0,
        x: 30,
      },
      {
        opacity: 1,
        x: 0,
        ease: "power3.out",
      },
      ">"
    )
    .fromTo(
      "#sec6popup .right p",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        ease: "power3.out",
      }
    );

  return tl;
};
