import React, {Component} from 'react';
import './App.css'

export default class App extends Component {
  constructor() {
      super();

      this.state = {
          opacity1: '0.7',
          display1: 'none',
          opacity2: '0.7',
          display2: 'none',
          opacity3: '0.7',
          display3: 'none',
          opacity4: '0.7',
          display4: 'none'
      };
      console.log("display: " + this.state.display1)

      //mouse event for part1
      this.handleMouseEnterPart1 = this.handleMouseEnterPart1.bind(this);
      this.handleMouseLeavePart1 = this.handleMouseLeavePart1.bind(this);

      //mouse event for part2
      this.handleMouseEnterPart2 = this.handleMouseEnterPart2.bind(this);
      this.handleMouseLeavePart2 = this.handleMouseLeavePart2.bind(this);

      //mouse event for part3
      this.handleMouseEnterPart3 = this.handleMouseEnterPart3.bind(this);
      this.handleMouseLeavePart3 = this.handleMouseLeavePart3.bind(this);

      //mouse event for part4
      this.handleMouseEnterPart4 = this.handleMouseEnterPart4.bind(this);
      this.handleMouseLeavePart4 = this.handleMouseLeavePart4.bind(this);


  }

  handleMouseEnterPart1() {
      this.setState({
          opacity1: 0.2,
          display1: 'block'
      })
  }

  handleMouseLeavePart1() {
      this.setState({
          opacity1: 0.8,
          display1: 'none'
      })
  }

  handleMouseEnterPart2() {
      this.setState({
          opacity2: 0.2,
          display2: 'block'
      })
  }

  handleMouseLeavePart2() {
      this.setState({
          opacity2: 0.8,
          display2: 'none'
      })
  }

  handleMouseEnterPart3() {
      this.setState({
          opacity3: 0.2,
          display3: 'block'
      })
  }

  handleMouseLeavePart3() {
      this.setState({
          opacity3: 0.8,
          display3: 'none'
      })
  }

  handleMouseEnterPart4() {
      this.setState({
          opacity4: 0.2,
          display4: 'block'
      })
  }

  handleMouseLeavePart4() {
      this.setState({
          opacity4: 0.8,
          display4: 'none'
      })
  }

  render() {
    return (

       <div>
         <body class='fixed'>
         <div >
             <div className="header"/>
             <p className="text">Xingchen Ming</p>
             <p className="work">Work</p>
             <p className="about">About</p>
         </div>
         <div className="wrapper">
             <div id="row1">
                 <div className="miui" onMouseEnter={this.handleMouseEnterPart1} onMouseLeave={this.handleMouseLeavePart1}>
                     <div className="details" style={{opacity: this.state.opacity1}}/>
                     <div className="img__description" style={{display: this.state.display1}}>
                         <h1>MiUi</h1>
                         <p>Designed interfaces for Xiaomi</p>
                     </div>
                 </div>
                 <div className="redesign" onMouseEnter={this.handleMouseEnterPart2} onMouseLeave={this.handleMouseLeavePart2}>
                     <div className="details" style={{opacity:this.state.opacity2}}/>
                     <div className="img__description" style={{display: this.state.display2}}>
                         <h1>Redesign</h1>
                     </div>
                 </div>
             </div>
             <div id="row2">
                 <div className="development" onMouseEnter={this.handleMouseEnterPart3} onMouseLeave={this.handleMouseLeavePart3}>
                     <div className="details" style={{opacity:this.state.opacity3}}/>
                     <div className="img__description" style={{display: this.state.display3}}>
                         <h1>Music Hunter</h1>
                     </div>
                 </div>
                 <div className="interactive" onMouseEnter={this.handleMouseEnterPart4} onMouseLeave={this.handleMouseLeavePart4}>
                     <div className="details" style={{opacity:this.state.opacity4}}/>
                     <div className="img__description" style={{display: this.state.display4}}>
                         <h1>Smart Robot</h1>
                     </div>
                 </div>


             </div>
         </div>





         {/*<div className="miui" style={this.state.style}>*/}
         {/*  <div className="center">*/}
         {/*    <div className="details">*/}
         {/*      /!*<h1>Make a flip book with HTML5</h1>*!/*/}
         {/*      /!*<ul>*!/*/}
         {/*      /!*  <li>Works on most browsers and devices</li>*!/*/}
         {/*      /!*  <li>Simple and clean API</li>*!/*/}
         {/*      /!*  <li title="Minimized and Gzipped">Lightweight, 10K</li>*!/*/}
         {/*      /!*</ul>*!/*/}
         {/*      /!*<p className="production">*!/*/}
         {/*      /!*  <a href="http://turnjs.com/confirm-download/5396f77366f55/turnjs4.zip" className="get-now">Download</a>*!/*/}
         {/*      /!*</p>*!/*/}
         {/*      /!*<div className="options">*!/*/}
         {/*      /!*  <p><i className="icon github"></i> <a href="http://www.github.com/blasten/turn.js">Fork on GitHub</a>*!/*/}
         {/*      /!*  </p>*!/*/}
         {/*      /!*</div>*!/*/}
         {/*    </div>*/}
         {/*  </div>*/}
         {/*</div>*/}

         {/*<div className="gradient" style={{boxShadow: 'rgba(0, 0, 0, 0) 0px -20px 0px'}}></div>*/}
         {/*<div className="next"/>*/}
         </body>


       </div>


    );
  }
}