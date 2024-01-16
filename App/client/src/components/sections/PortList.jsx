import React, { useState } from 'react';
import { javascriptData, nextData, phpData, reactData, viteData, vueData } from '../../data/portlist.js';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";

const PortList = () => {
    const [selectedTab, setSelectedTab] = useState('react');

    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };

    const getData = () => {
        if (selectedTab === 'javascript') {
            return javascriptData;
        } else if (selectedTab === 'php') {
            return phpData;
        } else if (selectedTab === 'react') {
            return reactData;
        } else if (selectedTab === 'next') {
            return nextData;
        } else if (selectedTab === 'vue') {
            return vueData;
        } else if (selectedTab === 'vite') {
            return viteData;
        }
    };

    const currentData = getData();

    return (
        <div id='portlist'>
            <h4>port list</h4>
            <div className="list__wrap">
                <div className="list__cate">
                    <span className={selectedTab === 'react' ? 'active' : ''} onClick={() => handleTabChange('react')}>React</span>
                    <span className={selectedTab === 'next' ? 'active' : ''} onClick={() => handleTabChange('next')}>Next</span>
                    <span className={selectedTab === 'vue' ? 'active' : ''} onClick={() => handleTabChange('vue')}>Vue</span>
                    <span className={selectedTab === 'vite' ? 'active' : ''} onClick={() => handleTabChange('vite')}>Vite</span>
                    <span className={selectedTab === 'php' ? 'active' : ''} onClick={() => handleTabChange('php')}>Php</span>
                    <span className={selectedTab === 'javascript' ? 'active' : ''} onClick={() => handleTabChange('javascript')}>Javascript</span>
                </div>

                <div className="list__item">
                    <AnimatePresence>
                        {currentData.map((data, idx) => (
                            <motion.div className="item"
                                key={data.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3 }}>
                                <h4>{data.title}<Link to={data.url} target='_blank'><span className='arrow'></span></Link></h4>
                                <p>{data.desc}</p>
                                <ul>
                                    {data.sub && data.sub.map((sub, subIdx) => (
                                        <li key={subIdx}>
                                            <span className="icon" style={{ backgroundImage: `url(${sub.img})` }}></span>
                                            {sub.desc}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

            </div>
        </div>
    );
};

export default PortList;