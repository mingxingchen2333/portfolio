import React, { Component } from 'react';
import './box.css';
import thermo from '../resources/thermo.jpeg';
import robot from '../resources/robotLogo.png';
import lock from '../resources/smartlock.jpg';

export default class Box extends Component {
    constructor(props) {
        super(props);

    }

    getImg() {
        switch (this.props.name) {
            case "thermo":
                return thermo;
            case "robot":
                return robot;
            case "lock":
                return lock;
            default:
                return null;
        }
    }

    render() {
        return (
            <div className="box">
                <p className="title">{this.props.title}</p>
                <p className="name">{this.props.content}</p>
                <div className="img"><img style={{height: '240px', width: '340px'}}  src={this.getImg()} alt="Logo"/></div>
            </div>
        );
    }

}