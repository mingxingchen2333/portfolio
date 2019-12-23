import React, { Component } from 'react';
import ReactPlayer from "react-player";
import './MiUi.css';
import Gif from '../resources/NewProject2333.mp4';

export default class MiUi extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
            <body>
            <div className="head"/>
            <p className="text"><a style={{textDecoration: 'none', color: '#282828'}} href={'/'}>Xingchen Ming</a></p>
            <p className="work"><a style={{textDecoration: 'none', color: '#282828'}}>Work</a></p>
            <p className="about"><a style={{textDecoration: 'none', color: '#282828'}} href={'/about'}>About</a></p>
            <div className="project-intro"/>
            <div className="main-features">
                <p className="introduction1">MIUI introduces the always-on display that looks truly gorgeous.
                </p>
                <p className="introduction2">
                    Be it an ever-changing kaleidoscope or rhythmic wave dial, your screen will amaze you with every new glance.
                </p>
                <div className="gif"><ReactPlayer url={Gif} playing='true' loop='true'/></div>
            </div>

            {/*intro*/}
            <div className="intro">
                <div className="poster"/>
                <div className="brief">
                    <div className="mcaption">MiUi</div>
                    <div className="mdetails">
                        <p> MiUi provides users a new way especially the Nature alarm makes a great start to your day.
                            It can wake up to different sounds of nature every day
                            and get your morning boost of energy and focus.
                        </p>
                    </div>
                </div>
                <div className="mtimeline">
                    <div className="mcaption">TimeLine</div>
                    <div className="mdetails"><p>3 Weeks</p></div>
                </div>
                <div className="mrole">
                    <div className="mcaption">My Role</div>
                    <div className="mdetails"><p>UX designer</p></div>
                </div>
            </div>

            {/*miui insights*/}
            <div className="minsights">
                <p className="caption">MiUi Nature Alarm - Sounds of nature</p>
                <p className="details">Soothing and ever-changing sounds that are always fresh.</p>
                <div style={{marginLeft: '4%'}}>
                    <div className="sun"/>
                    <div className="moon"/>
                    <div className="fire"/>
                    <div className="water"/>
                    <div className="wood"/>
                </div>
            </div>
            </body>
        );
    }

}