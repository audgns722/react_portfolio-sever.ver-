import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/all";

const About = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const targets = gsap.utils.toArray(".split");
    // gsap 애니메이션 초기화
    targets.forEach((target) => {
      let splitClient = new SplitType(target, { type: "lines, words, chars" });
      let lines = splitClient.lines;
      let words = splitClient.words;
      let chars = splitClient.chars;

      gsap.from(chars, {
        y: -5,
        x: 5,
        opacity: 0,
        duration: 0.05,
        ease: "expo.out",
        stagger: 0.03,
        scrollTrigger: {
          trigger: ".about__top",
          start: "top 50%",
          end: "bottom bottom-=100",
          scrub: 5,
        },
      });
    }, []);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  });

  return (
    <div id="about">
      <div className="about__wrap">
        <div className="about__top">
          <div className="text split">
            <h1>
              창의적인 아이디어를 현실로 전환하는 것에 열정을 가진 "이명훈"
              입니다.
              <br />
              한계를 넘어서는 것이 저의 동력이며, 항상 새로운 기술과 아이디어를
              탐색하며 발전하고자 합니다.
              <br />
              많은 이야기보다는 실제로 구현하고 실행하는 것을 중시합니다.
              <br />
              지속적으로 새로운 기술을 배우고, 혁신적인 솔루션을 개발하여 회사에
              기여하고자 합니다.
              <br />제 열정과 행동이 팀과 프로젝트에 긍정적인 영향을 끼칠 것임을
              확신합니다.
            </h1>
          </div>
        </div>
        <div className="lineleft ln1"></div>
        <div className="about__center">
          <div className="left">
            <div className="profile">
              <div className="img"></div>
            </div>
          </div>
          <div className="right">
            <div className="text rt1">
              Innovative
            </div>
            <div className="text rt2">
              Resourceful
            </div>
            <div className="text rt3">
              Creative
            </div>
            <div className="text rt4">
              Positive
            </div>
          </div>
        </div>
        <div className="lineleft ln2"></div>
        <div className="about__bottom">
          <div className="left"></div>
          <div className="right"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
