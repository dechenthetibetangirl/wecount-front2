import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ChakraWrapper from './ChakraProvider';

ReactDOM.render(
  <React.StrictMode>
    <ChakraWrapper>
      <App />
    </ChakraWrapper>
  </React.StrictMode>,
  document.getElementById('root')
);