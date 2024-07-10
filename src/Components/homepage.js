import './Home.css';
import React from 'react';
import ReactDOM from 'react-dom';
import RotatingBall from './RotatingBall';


const Home = () => (
  <div tgclose = {close}>
    <h1>Adeita</h1>
    <RotatingBall />
  </div>
);

ReactDOM.render(<Home />, document.getElementById('root'));

export {Home};
