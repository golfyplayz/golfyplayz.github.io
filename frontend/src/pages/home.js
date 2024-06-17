import React from 'react';
import '../components/width';
import '../home.css';
import NavBar from '../components/nav';
import Welcome from '../components/welcome';
import useWindowWidth from '../components/width';

function Home() {
  const width = useWindowWidth();
  if (width < 900) {
    return (
      <div id='main'>
        <NavBar width={width} />
        <div className="body">
          <div className="info"></div>
          <div className="leader"></div>
          <div className="stocks"></div>
        </div>
      </div>
  );} else {
    return (
    <div id='main'>
    <NavBar width={width} />
    <div className="body">
      <div className='welcome'><Welcome /></div>
      <div className='container'>
        <div className="stocks"></div>
        <div className="info"></div>
        <div className="leader"></div>
      </div>
    </div>
  </div>
  )}
}

export default Home;