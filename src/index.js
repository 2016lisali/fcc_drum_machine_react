import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
if (window.getSelection().rangeCount >= 1) {
  var r = window.getSelection().getRangeAt(0);
}
ReactDOM.render(
    <App />,
  document.getElementById('root')
);

