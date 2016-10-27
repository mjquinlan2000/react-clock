import React, {createClass} from 'react';
import moment from 'moment';

import 'app/styles/clock.scss';

const Clock = createClass({
  componentWillUnmount() {
    clearInterval(this.interval);
  },
  componentDidMount() {
    this.interval = setInterval(this.forceUpdate.bind(this), 1000);
  },
  circlePoint(angle, length) {
    const x = length*Math.sin(angle) + 250;
    const y = length*Math.cos(angle) + 250;
    return {x, y};
  },
  handPath(amount, opts={}) {
    const increments = opts.increments || 60;
    const outerLength = opts.outerLength || 225;
    const innerLength = opts.innerLength || 0;
    const angle = -2*Math.PI*amount/increments - Math.PI;
    const outer = this.circlePoint(angle, outerLength);
    const inner = this.circlePoint(angle, innerLength);
    return `M 250 250 M ${inner.x} ${inner.y} L ${outer.x} ${outer.y}`;
  },
  handArc(amount, radius, opts={}) {
    const increments = opts.increments || 60;
    const angle = -2*Math.PI*amount/increments - Math.PI;
    const {x, y} = this.circlePoint(angle, radius);
    return `M 250 ${250 - radius} A 125 125 0 1 0 ${x} ${y}`;
  },
  tickPaths() {
    let paths = [];
    for(let i = 1; i <= 12; i++) {
      let opts = {increments: 12};
      if(i % 3 === 0) {
        opts.innerLength = 175;
      } else {
        opts.innerLength = 200;
      }
      paths.push(this.handPath(i, opts));
    }
    return paths;
  },
  render() {
    const now = moment();
    const secondsPath = this.handPath(now.seconds(), {innerLength: 100})
    const minutesPath = this.handPath(now.minutes(), {outerLength: 200})
    const hoursPath = this.handPath(now.hours()*60 + now.minutes(), {outerLength: 150, increments: 720})
    const ticks = this.tickPaths();
    return(
      <div className="clock">
        <svg height="500" width="500">
          {ticks.map((tick) => {
            return(<path key={tick} d={tick} stroke="black" strokeWidth="2"></path>)
          })}
          <path className="hand" d={hoursPath} stroke="black" strokeWidth="10" strokeLinecap="round"/>
          <path className="hand" d={minutesPath} stroke="black" strokeWidth="4" strokeLinecap="round"/>
          <path className="hand" d={secondsPath} stroke="red" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="250" cy="250" r="240" stroke="black" strokeWidth="2" fill="none"/>
          <circle cx="250" cy="250" r="10" fill="black"/>
        </svg>
        <h2>{now.format('h:mm:ss A')}</h2>
      </div>
    );
  }
});

export default Clock;