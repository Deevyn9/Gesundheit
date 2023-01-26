import React from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import Pic1 from '../assets/amira-el-fohail-HeNS1RuPZdo-unsplash.jpg';
import Pic2 from "../assets/kit-suman-xvj4GLyGXwc-unsplash.jpg";
import Pic3 from '../assets/melody-temple-QvEULJG78U8-unsplash.jpg';
import Pic4 from '../assets/victor-he-bVXvntN75zY-unsplash.jpg';
import Portrait from '../assets/andreas-dress-pPfri15Zg5I-unsplash.jpg';

const Grid = () => {
  return (
    <div className="grid">
      <LazyLoadImage
        src={Pic1}
        alt=""
        className="div-1"
        loading="lazy"
        height={200}
        width={200}
        effect="blur"
        placeholderSrc={Pic1}
      />
      <LazyLoadImage
        src={Pic2}
        alt=""
        className="div-2"
        loading="lazy"
        height={200}
        width={200}
        effect="blur"
        placeholderSrc={Pic2}
      />
      <LazyLoadImage
        src={Pic3}
        alt=""
        className="div-3"
        loading="lazy"
        height={200}
        width={200}
        effect="blur"
        placeholderSrc={Pic3}
      />
      <LazyLoadImage
        src={Pic4}
        alt=""
        className="div-4"
        loading="lazy"
        height={200}
        width={200}
        effect="blur"
        placeholderSrc={Pic4}
      />
      <LazyLoadImage
        src={Portrait}
        alt=""
        className="div-5"
        loading="lazy"
        height={200}
        width={200}
        effect="blur"
        placeholderSrc={Portrait}
      />
    </div>
  );
}

export default Grid
