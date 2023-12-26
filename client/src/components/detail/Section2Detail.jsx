import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';

const Section2Detail = () => {
    const text1Ref = useRef(null);
    const text2Ref = useRef(null);
    const imgRef = useRef(null);

    useEffect(() => {
        gsap.fromTo('.left__box', {
            width: "504px",
        }, {
            width: "40%",
            ease: "power1.in",
            delay: 1,
        })
        gsap.to(imgRef.current, {
            left: 0,
            xPercent: 0,
            ease: "power1.in",
            delay: 0,
        })
        gsap.to("#Detail2 .text1", {
            left: 0,
            xPercent: 0,
        })
        gsap.to("#Detail2 .text2", {
            right: 0,
            translateX: 0,
        })
        gsap.to("#Detail2 .right__box", {
            display: "block",
            width: "60%",
            delay: 1,
            duration: 1,
            onComplete: () => {
                gsap.to(".detail__wrap", {
                    display: "block",
                    opacity: 1,
                    duration: 1,
                });
            }
        });
    }, [])
    window.addEventListener('scroll', () => {
        console.log('스크롤 발생!');
    });


    return (
        <div id="Detail2">
            <div className="contents2">
                <div className="left__box">
                    <div className="imgWrap" ref={imgRef} >
                        <div className="text1" ref={text1Ref}>
                            youtube
                        </div>
                        <div className="text2" ref={text2Ref}>
                            api site
                        </div>
                    </div>
                </div>
                <div className="right__box">
                    <div className="detail__wrap">
                        <div className="details">
                            <h1>나만의 다큐 유튜브 사이트 만들기</h1>
                            <p>이 프로젝트는 YouTube API를 활용하여 다큐멘터리 콘텐츠를
                                중심으로 한 독특한 서비스를 제공하는 웹사이트를 구축하는 것이
                                목표였습니다. 사용자들이 다양한 다큐멘터리를 쉽게 탐색하고
                                감상할 수 있는 사이트를 개발했습니다.</p>
                        </div>
                        <div className="details">
                            <h1>POINT!</h1>
                            <p>React Router, Axios, React Player 등 다양한 라이브러리를 통한
                                기능적인 웹사이트 구축.<br />
                                React Helmet Async: SEO 최적화와 동적 head 관리를 위한 구현.<br />
                                Swiper: 터치 슬라이드 기능을 통해 사용자 인터페이스 개선.
                            </p>
                        </div>
                        <div className="details">
                            <h1>STACK!</h1>
                            <p>Front-end: React, HTML5, JavaScript, CSS3<br />
                                라이브러리: react-router-dom, axios, react-icons, react-player, sass, react-helmet-async, swiper
                            </p>
                        </div>
                        <div className="details">
                            <h1>TROUBLESHOOTING</h1>
                            <div className='code'></div>
                        </div>
                        <div className="details">
                            <h1>나만의 다큐 유튜브 사이트 만들기</h1>
                            <p>이 프로젝트는 YouTube API를 활용하여 다큐멘터리 콘텐츠를
                                중심으로 한 독특한 서비스를 제공하는 웹사이트를 구축하는 것이
                                목표였습니다. 사용자들이 다양한 다큐멘터리를 쉽게 탐색하고
                                감상할 수 있는 사이트를 개발했습니다.</p>
                        </div>
                        <div className="details">
                            <h1>POINT!</h1>
                            <p>React Router, Axios, React Player 등 다양한 라이브러리를 통한
                                기능적인 웹사이트 구축.<br />
                                React Helmet Async: SEO 최적화와 동적 head 관리를 위한 구현.<br />
                                Swiper: 터치 슬라이드 기능을 통해 사용자 인터페이스 개선.
                            </p>
                        </div>
                        <div className="details">
                            <h1>STACK!</h1>
                            <p>Front-end: React, HTML5, JavaScript, CSS3<br />
                                라이브러리: react-router-dom, axios, react-icons, react-player, sass, react-helmet-async, swiper
                            </p>
                        </div>
                        <div className="details">
                            <h1>TROUBLESHOOTING</h1>
                            <div className='code'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Section2Detail