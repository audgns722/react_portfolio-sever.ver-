import React, { useState } from 'react'
import { javascriptData, phpData } from '../../data/portlist.js'
import { Link } from 'react-router-dom';

const PortList = () => {
    const [selectedTab, setSelectedTab] = useState('javascript');

    // 탭메뉴
    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };

    const getData = () => {
        if (selectedTab === 'javascript') {
            return javascriptData;
        } else if (selectedTab === 'php') {
            return phpData;
        }
    };

    // Store the data to be rendered
    const currentData = getData();

    return (
        <div id='portlist'>
            <h4>port list</h4>
            <div class="list__wrap">
                <div class="list__cate">
                    <span className={selectedTab === 'javascript' ? 'active' : ''} onClick={() => handleTabChange('javascript')}>Javascript</span>
                    <span className={selectedTab === 'php' ? 'active' : ''} onClick={() => handleTabChange('php')}>Php</span>
                </div>
                <div class="list__item">

                    {currentData.map((data, idx) => (
                        <div class="item" key={idx}>
                            <h4>{data.title}<Link to={data.url} target='_blank'><span className='arrow'></span></Link></h4>
                            <p>
                                {data.desc}</p>
                            <ul>
                                {data.sub && data.sub.map((sub, subIdx) => (
                                    <li key={subIdx}>
                                        <span className="icon" style={{ backgroundImage: `url(${sub.img})` }}></span>
                                        {sub.desc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PortList