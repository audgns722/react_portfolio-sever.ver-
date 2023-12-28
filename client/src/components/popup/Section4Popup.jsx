import React from 'react'
import { Link } from 'react-router-dom'

const Section4Popup = ({ onClick }) => {

    return (
        <div id='Sec4popup'>
            <div className="popup__wrap">
                <div className="popup__content">
                    <div className='close' onClick={onClick}></div>
                    <div className="left">
                        <div className="img"></div>
                    </div>
                    <div className="right" data-lenis-prevent-wheel>
                        <div className="content">
                            <h1 className='pt1'>나만의 다큐 유튜브 사이트 만들기</h1>
                            <p className='desc1'>
                                이 프로젝트는 YouTube API를 활용하여 다큐멘터리 콘텐츠를 중심으로 한
                                독특한 서비스를 제공하는 웹사이트를 구축하는 것이 목표였습니다.
                                사용자들이 다양한 다큐멘터리를 쉽게 탐색하고 감상할 수 있는 사이트를
                                개발했습니다.
                            </p>
                            <h2 className='pt2'>POINT!</h2>
                            <p className='desc2'>
                                React Router, Axios, React Player 등 다양한 라이브러리를 통한
                                기능적인 웹사이트 구축.
                                <br />
                                React Helmet Async: SEO 최적화와 동적 head 관리를 위한 구현.
                                <br />
                                Swiper: 터치 슬라이드 기능을 통해 사용자 인터페이스 개선.
                            </p>
                            <h2 className='pt3'>STACK!</h2>
                            <p className='desc3'>
                                Front-end: React, HTML5, JavaScript, CSS3
                                <br />
                                라이브러리: react-router-dom, axios, react-icons, react-player,
                                sass, react-helmet-async, swiper
                            </p>
                            <h2 className='pt4'>TROUBLESHOOTING</h2>
                            <div className="codeimg c1"></div>
                            <h2 className='pt5'>TROUBLESHOOTING</h2>
                            <div className="codeimg c2"></div>
                        </div>
                        <div className="scroll"></div>
                    </div>
                    <div className="btn">
                        <Link to='/'>SITE<span className='arrow'></span></Link>
                        <Link to='/'>CODE<span className='arrow'></span></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section4Popup