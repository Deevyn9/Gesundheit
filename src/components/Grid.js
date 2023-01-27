import React from 'react';
import Pic1 from '../assets/amira-el-fohail-HeNS1RuPZdo-unsplash.jpg';
import Pic2 from "../assets/kit-suman-xvj4GLyGXwc-unsplash.jpg";
import Pic3 from '../assets/melody-temple-QvEULJG78U8-unsplash.jpg';
import Pic4 from '../assets/victor-he-bVXvntN75zY-unsplash.jpg';
import Portrait from '../assets/andreas-dress-pPfri15Zg5I-unsplash.jpg';

const Grid = () => {
  return (
    <div className="grid">
      <img src={Pic1} alt="" className="div-1" loading="lazy" />
      <img src={Pic2} alt="" className="div-2" loading="lazy" />
      <img src={Pic3} alt="" className="div-3" loading="lazy" />
      <img src={Pic4} alt="" className="div-4" loading="lazy" />
      <img src={Portrait} alt="" className="div-5" loading="lazy" />
    </div>
  );
}

export default Grid
