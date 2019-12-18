import React, { Component } from 'react';
import ReactPlayer from "react-player";
import New from '../resources/New.mp4';
import FilterVideo from '../resources/filterVd.mp4';
import './MusicHunter.css'

export default class MusicHunter extends Component{
    constructor() {
        super();
    }

    render() {
        return (
            <body>
            <div className="head"/>
            <p className="text"><a style={{textDecoration: 'none', color: '#282828'}} href={'/'}>Xingchen Ming</a></p>
            <p className="work"><a style={{textDecoration: 'none', color: '#282828'}}>Work</a></p>
            <p className="about"><a style={{textDecoration: 'none', color: '#282828'}} href={'/about'}>About</a></p>

            {/*intro*/}
            <div className="intro">
                <div className="poster"/>
                <div className="brief">
                    <div className="caption">Music Hunter</div>
                    <div className="details">
                        <p>Music Hunter is an app which allows users to hunt for specific type of
                        songs by selecting the genre or the artist. It helps users to get what they want faster
                        and easier.</p>
                        <p>Songs are classified by genre and composer and sorted by released time. The searching process
                        provides new oppotunities to develop interest in music and tend to understand different types
                            of music deeply. </p>
                    </div>
                </div>
                <div className="timeline">
                    <div className="caption">TimeLine</div>
                    <div className="details"><p>3 Weeks</p></div>
                </div>
                <div className="role">
                    <div className="caption">My Role</div>
                    <div className="details"><p>UX designer</p></div>
                </div>
            </div>

            {/*features*/}
            <div className="features">
                <p className="discription" style={{marginLeft: '600px', fontSize: '27px'}}>Highlighted Features</p>
                <div>
                    <div className="container" style={{ marginTop: '50px', marginLeft: '50px'}}>
                        <div className="player"><ReactPlayer url={New}  width='545px' playing='true' loop='true'/></div>
                    </div>
                    <div className="discription" style={{marginLeft: '800px', marginTop: '170px'}}>
                        When put mouse on the brief
                    </div>
                </div>
                <div>
                    <div className="container" style={{marginTop: '340px', marginLeft: '780px'}}>
                        <div className="player"><ReactPlayer url={FilterVideo} width='545px' playing='true' loop='true'/></div>
                    </div>
                    <div className="discription" style={{marginTop: '400px', marginLeft: '100px'}}>
                        Filter effect
                    </div>
                </div>
                <div>
                    <div className="container" style={{marginTop: '380px', marginLeft: '50px'}}>
                        <div className="player"><ReactPlayer url={FilterVideo} width='545px' playing='true' loop='true'/></div>
                    </div>
                    <div className="discription" style={{marginTop: '500px', marginLeft: '800px'}}>
                        Filter effect
                    </div>
                </div>
            </div>

            {/*insights*/}
            <div className="insights">
                <p>asc</p>
            </div>


            </body>
        );
    }
}