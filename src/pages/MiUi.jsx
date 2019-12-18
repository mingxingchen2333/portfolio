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
            <div className="preface">
            </div>

            </body>
        );
    }

}