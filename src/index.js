import React from 'react';
import {Motion, spring } from 'react-motion';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
    <Motion defaultStyle={{x: 0}} style={{x: spring(10)}}>
      {value => {<div>{value.x}</div>}
      }}
      </motion>
    )
  }
}
ReactDOM.render(React.createElement(App), document.getElementById('app'));
