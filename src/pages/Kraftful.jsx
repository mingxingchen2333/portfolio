import React, { Component } from 'react';
import ReactPlayer from "react-player";
import './Kraftful.css';
import Login from '../resources/login.mp4';
import Choose from '../resources/choose.mp4';
import Mode from '../resources/mode.mp4';

export default class Kraftful extends Component{
    constructor() {
        super();
    }

    render() {
        return(
            <body>
            <div className="head"/>
            <p className="text"><a style={{textDecoration: 'none', color: '#282828'}} href={'/'}>Xingchen Ming</a></p>
            <p className="work"><a style={{textDecoration: 'none', color: '#282828'}}>Work</a></p>
            <p className="about"><a style={{textDecoration: 'none', color: '#282828'}} href={'/about'}>About</a></p>
            <div className="kintro">
                <div className="img"/>
                <p className="text">1234</p>
            </div>
            <div className="kbrief">
                <div className="introduction">
                    <p className="caption">
                        Introduction
                    </p>
                    <p className="details">
                        builds smart home apps that are compatible with various brands.
                        It provides an integral platform for different smart home product manufacturers so that
                        devices from different brands can be connected and managed in a single application.
                        In this way, brands with no in-house expertise in building mobile apps will not have to worry about
                        building and maintaining their own smart home applications and users of different
                        smart home products can have a more convenient and integrated smart home experience.
                    </p>
                </div>
                <div className="timeline">
                    <p className="caption">
                        Timeline
                    </p>
                    <p className="details">
                        3 Weeks
                    </p>
                </div>
                <div className="myrole">
                    <p className="caption">
                        My Role
                    </p>
                    <p className="details">
                        UX Designer
                    </p>
                </div>
            </div>

            {/*insights*/}
            <div className="kinsights">
                <p className="text1">
                    We have put great effort on designing an App which can provide an easier way for people to
                    enjoy smart home experience. It's like a intelligent controller which is useful for most of thr home products.
                </p>
            </div>

            {/*features*/}
            <div className="kfeatures">
                <p className="caption">Hightlight Features</p>
                <div>
                    <div className="login"><ReactPlayer url={Login} playing='true' loop='true'/></div>
                </div>
                <div>
                    <div className="choose"><ReactPlayer url={Choose} playing='true' loop='true'/></div>
                </div>
                <div>
                    <div className='mode'><ReactPlayer url={Mode} playing='true' loop='true'/></div>
                </div>
            </div>

            {/*interactions*/}
            <div className="interactions">
                <p className="caption">Interaction Wireflow</p>
                <div className="start"/>
                <div className="signIn"/>
                <span>&#8594;</span>
                <div className="homePage"/>

            </div>
            </body>
        );
    }
}