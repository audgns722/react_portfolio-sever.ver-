import React, { useEffect, useRef } from "react";
import profile from "../../assets/img/test.png";
import { Link } from "react-router-dom";
import { skill } from "../../data/skill.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Skill = () => {
  const bgRef = useRef();
  const skillsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const bgAnimation = gsap.fromTo(
      bgRef.current,
      {
        scale: 1.2,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 0.5,
        ease: "none",
        scrollTrigger: {
          trigger: "#skill",
          start: "top 25%",
          end: "bottom top",
          scrub: true,
          markers: true,
        },
      }
    );

    return () => {
      bgAnimation.kill();
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: bgRef.current,
        start: "top top",
        markers: true,
        // scrub: true,
        toggleActions: "play none none reset",
      },
    });

    skillsRef.current.forEach((skill, index) => {
      tl.fromTo(
        skill,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: index * 0.2,
          ease: "power3.out",
        },
        0 // 모든 애니메이션을 동시에 시작
      );
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !skillsRef.current.includes(el)) {
      skillsRef.current.push(el);
    }
  };
  return (
    <div id="skill">
      <div className="skill__bg" ref={bgRef}></div>
      <div className="skill__inner">
        <div className="left">
          <img src={profile} alt="" />
        </div>
        <div className="right">
          {skill.map((skill, key) => (
            <div className="skills" key={key} ref={addToRefs}>
              <h2 className="title">{skill.title}</h2>
              <p className="desc">{skill.desc}</p>
              <div className="btn">
                <Link to={skill.code}>code</Link>
                <Link to={skill.site}>site</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
