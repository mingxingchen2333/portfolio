import React, { Component } from 'react';
import ReactPlayer from "react-player";
import './Kraftful.css';
import Arrow from "../components/arrow";
import Login from '../resources/login.mp4';
import Choose from '../resources/choose.mp4';
import Mode from '../resources/mode.mp4';
import Box from "../components/box";

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
                <p className="caption">Kraftful</p>
                <p className="text">Kraftful builds smart home apps that are compatible with various brands.
                    It provides an integral platform for different smart home product manufacturers so that
                    devices from different brands can be connected and managed in a single application.
                    In this way, brands with no in-house expertise in building mobile apps will not have to worry about
                    building and maintaining their own smart home applications and users of different
                    smart home products can have a more convenient and integrated smart home experience.</p>
            </div>
            <div className="kbrief">
                <div className="introduction">
                    <p className="caption">
                        Overview
                    </p>
                    <p className="details">
                        Research different types of home products and offer
                        the only complete software solution that gets your product to market faster and
                        keeps it performing with ongoing support.
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
                <div className="kraftHome"></div>
            </div>

            {/*insights*/}
            <div className="kinsights">
                <p className="caption">
                    Kraftful Insights
                </p>
                <p className="text1">
                    We have put great effort on designing an App which can provide an easier way for people to
                    enjoy smart home experience. It's like a intelligent controller which is useful for most of the home products.
                </p>
                <div className="kbox">
                    <div className="thermoBox">
                        <Box title="Hot Thermostat App"
                             content="People want to be able to adjust the temperature based on the weather or to control their thermostat from remote locations."
                             name="thermo"
                        />
                    </div>
                    <div className="robotBox">
                        <Box title="Hot Thermostat App"
                             content="People want to be able to adjust the temperature based on the weather or to control their thermostat from remote locations."
                             name="robot"
                        />
                    </div>
                    <div className="lockBox">
                        <Box title="Hot Thermostat App"
                             content="People want to be able to adjust the temperature based on the weather or to control their thermostat from remote locations."
                             name="lock"
                        />
                    </div>

                </div>
                {/*<div className="thermo"/>*/}
            </div>

            {/*features*/}
            <div className="kfeatures">
                <p className="caption">Hightlight Features</p>
                <div className="login">
                    <ReactPlayer url={Login} playing='true' loop='true'/>
                </div>
                <div style={{fontFamily: 'Arial, Helvetica, sans-serif', color: 'white', position: 'absolute', marginLeft: '30%', marginTop: '20%'}}>Click sign in to log in to the application home page</div>
                <div className="choose">
                    <ReactPlayer url={Choose} playing='true' loop='true'/>
                </div>
                <div style={{fontFamily: 'Arial, Helvetica, sans-serif', width: '400px', color: 'white', position: 'absolute', marginLeft: '40%', marginTop: '40%'}}>Click manage to add/delete the smart products you want to use</div>
                <div className='mode'>
                    <ReactPlayer url={Mode} playing='true' loop='true'/>
                </div>
                <div style={{fontFamily: 'Arial, Helvetica, sans-serif', width: '400px', color: 'white', position: 'absolute', marginLeft: '30%', marginTop: '60%'}}>Click to choose the device you want to use and then enter into the product management page</div>
            </div>

            {/*interactions*/}
            <div className="interactions">
                <p className="caption">Interaction Wireflow</p>
                <div className="homePage"/>
                <p className="lockText">Lock</p>
                <div className="robot"/>
                <p className="robotText">Robot</p>
                <div className="thermo"/>
                <p className="thermoText">Thermostats</p>
                <div className="manage"/>
                <p className="homeText">Home Page</p>
            </div>
            </body>
        );
    }
}