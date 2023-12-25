import gsap from "gsap";
import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const Detailsec2 = () => {
  const navigate = useNavigate(); // useNavigate 사용

  // 사용자가 X를 클릭하면 이전 페이지로 돌아가는 핸들러
  const handleBackClick = (e) => {
    e.preventDefault();

    gsap.to(".detail__info *", {
      opacity: 0,
      duration: 0.5,
      ease: "expo.out",
    });

    gsap.fromTo(
      ".detail__info",
      {
        width: "80%",
        opacity: 1,
      },
      {
        width: "0%",
        opacity: 0,
        duration: 1,
        ease: "expo.out", // 올바른 ease 값
        onComplete: () => {
          navigate(-1); // 이전 페이지로 이동
        },
      }
    );
  };

  useEffect(() => {
    gsap.fromTo(
      "canvas",
      {
        opacity: 1,
      },
      {
        opacity: 0.2,
        duration: 1,
        rotate: 180,
        ease: "power1.in",
        onComplete: () => {
          // canvas 애니메이션이 완료된 후 실행될 코드
          gsap.fromTo(
            ".detail__info",
            {
              width: "0",
              opacity: 0,
            },
            {
              width: "80%",
              opacity: 1,
              duration: 0.5,
              ease: "exop in",
            }
          );
        },
      }
    );
  }, []);

  return (
    <div>
      <div className="detail__section2">
        <div className="deatail__wrap">
          <div className="detail__info">
            <Link href="/" onClick={handleBackClick}>
              X
            </Link>
            <div className="left">
              <div className="img"></div>
            </div>
            <div className="right">
              <div className="right__wrap">
                <div className="title">REACT YOUTUBE SITE</div>
                <div className="desc">
                  이 프로젝트는 YouTube API를 활용하여 다큐멘터리 콘텐츠를
                  중심으로 한 독특한 서비스를 제공하는 웹사이트를 구축하는 것이
                  목표였습니다. 사용자들이 다양한 다큐멘터리를 쉽게 탐색하고
                  감상할 수 있는 사이트를 개발했습니다.
                </div>
                <div className="desc2">
                  React Router, Axios, React Player 등 다양한 라이브러리를 통한
                  기능적인 웹사이트 구축.
                  <br />
                  React Helmet Async: SEO 최적화와 동적 head 관리를 위한 구현.
                  <br />
                  Swiper: 터치 슬라이드 기능을 통해 사용자 인터페이스 개선.
                </div>
                <div className="stack">
                  <p>STACK</p>
                  <ul>
                    <li>REACT</li>
                    <li>HTML</li>
                    <li>YOUTUBE_API</li>
                    <li>JAVASCRIPT</li>
                    <li>CSS3</li>
                  </ul>
                </div>
                <div className="btn">
                  <Link to="/">Site</Link>
                  <Link to="/">Github</Link>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailsec2;
