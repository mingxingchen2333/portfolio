import React, { Component } from 'react';
import './Redesign.css';

export default class Redesign extends Component {
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

            </body>
        );
    }

}