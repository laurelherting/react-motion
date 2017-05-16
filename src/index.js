import React from 'react';
import { Spring, presets } from 'react-motion';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: Array.from(Array(18).keys())
    };
  }

  getDefaults() {
    let obj = {};
    this.state.items.forEach(key =>{
      obj[key] = {
        val: {
          rotate: key % 2 === 0 ? 360 : -360,
          scale: key % 2 === 0 ? 2 : 0
        }
      }
    })
    return obj; 
  }

  getEnds() {
    let obj = {};
    this.state.items.forEach(key =>{
      obj[key] = {
        val: {
          rotate: 0,
          scale: 1
        }
      }
    })
    return obj;
  }

  render() {
    return (
      <Spring
        defaultValue={this.getDefaults()}
        endValue={this.getEnds()}>
        {current =>
            <div>
              {Object.keys(current).map(key => {
                let {rotate,scale} = current[key].val;
                let style = {
                  transform: `
                  rotate(${rotate}deg)
                  scale(${scale})`
                }
                return (
                  <div
                    key={key}
                    className="block"
                    style={style}>
                    {key}
                  </div>
                )
              })}
            </div>
        }
      </Spring>
    )
  }
}


ReactDOM.render(React.createElement(App), document.getElementById('app'));
