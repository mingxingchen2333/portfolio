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
                <div className="miposter"/>
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
                    <div className="container" style={{ marginTop: '50px', marginLeft: '5%'}}>
                        <div className="player"><ReactPlayer url={New}  width='545px' playing='true' loop='true'/></div>
                    </div>
                    <div className="discription" style={{marginLeft: '48%', marginTop: '170px', width: '400px'}}>
                        Trailer will play automatically when mouse over the video.
                        User can click the video to watch the full version.
                    </div>
                </div>
                <div>
                    <div className="container" style={{marginTop: '10%', marginLeft: '56%'}}>
                        <div className="player"><ReactPlayer url={FilterVideo} width='545px' playing='true' loop='true'/></div>
                    </div>
                    <div className="discription" style={{marginTop: '20%', marginLeft: '30%', width: '400px'}}>
                        Select and click one of the genre to get all videos according to this genre.
                    </div>
                </div>
                <div>
                    <div className="container" style={{marginTop: '10%', marginLeft: '5%'}}>
                        <div className="player"><ReactPlayer url={FilterVideo} width='545px' playing='true' loop='true'/></div>
                    </div>
                    <div className="discription" style={{marginTop: '20%', marginLeft: '48%', width: '400px'}}>
                        Select and click one of the artist to get all videos composed by this artist.
                    </div>
                </div>
            </div>

            {/*insights*/}
            <div className="insights">
                <div className="img"/>
                <p className="text1">
                    Pop standards seem to have been the standard in the late '50s.
                    The genre provided the largest percentage of Hot 100 entries for the first three years
                    of the chart's existence. Given that we only have data stretching back to 1958,
                    we probably haven't even captured the genre's peak years.</p>
                <p className="text2">Rock and soul were the most popular music genres from the mid-60s to mid-70s.
                    But as soul peaked in 1974 and slowly began to fade, rock continued to climb.
                    Its run from 1982-86, when rock musicians occupied nearly 60% of available Hot 100 spots,
                    is by far the most dominant stretch for any one genre.
                </p>
                <p className="text3">Despite all the attention paid to boy bands in the late '90s,
                    it seems like R&B had no problem flourishing. Acts like Boyz II Men and Janet Jackson propelled
                    the genre's popularity and ingratiated it with the masses.
                </p>
                <p className="text4">Country has had a tumultuous ride in the history of popular American music.
                    It enjoyed middling popularity through the mid-'80s,
                    when it all but dropped off the charts. Since 1999, however, it's seen a noticeable resurgence.
                </p>
                <p className="text5">
                    There's obviously a lot to digest here.
                    You can toggle genres on and off the graph by adjusting the "Filter Genres" option in the upper left corner.
                    What we want to do is to have an applications which can help users collect and classify the songs by genre. It provides
                    users a platform to understand the style of different genre.
                </p>
            </div>



            </body>
        );
    }
}