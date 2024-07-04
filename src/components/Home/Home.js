import React, { useState } from 'react';
import "./Styles.css";
import image from "../../Assets/images/pexel-home.jpg";
import image1 from "../../Assets/images/bulb.jpg";
import image2 from "../../Assets/images/chair.jpg";
import image3 from "../../Assets/images/chair-2.jpg"; 
import image4 from "../../Assets/images/chair-3.jpg";
import image5 from "../../Assets/images/chair-2.jpg";
import image6 from "../../Assets/images/chair.jpg";
import { PiLightning } from "react-icons/pi";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const items = [
  { image: image2, title: "Minimal chair", subtitle: "Yonell" },
  { image: image3, title: "Modern table", subtitle: "FurniCo" },
  { image: image4, title: "Cozy sofa", subtitle: "HomeStyle" },
  { image: image5, title: "Modern table", subtitle: "FurniCo" },
  { image: image6, title: "Cozy sofa", subtitle: "HomeStyle" },
];

const Home = () => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  const handleLeftArrowClick = () => {
    setCurrentItemIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const handleRightArrowClick = () => {
    setCurrentItemIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="image-grid">
      <div className="image-item image1">
        <div className="image-container">
          <img src={image} alt="Image 1" />
          <div className="charge-icon">
            <PiLightning />
          </div>
          <div className="box">
            <div className="box-image">
              <img src={items[currentItemIndex].image} alt={`Image ${currentItemIndex + 1}`} className="class-img" />
            </div>
            <div className="box-text">
              <h3 className="box-title">{items[currentItemIndex].title}</h3>
              <p className="box-paragraph">{items[currentItemIndex].subtitle}</p>
            </div>
            <div className="box-arrows">
              <div className="arrow-container" onClick={handleLeftArrowClick}>
                <AiOutlineLeft className="arrow" />
              </div>
              <span className="arrow-number">{currentItemIndex + 1}/5</span>
              <div className="arrow-container" onClick={handleRightArrowClick}>
                <AiOutlineRight className="arrow" />
              </div>
            </div>
          </div>
        </div>
        <div className="image-content">
          <div className="image-text">
            <p>
              Complete your interior with a minimalist designer chandelier
            </p>
          </div>
        </div>
      </div>
      <div className="image-item image2">
        <div className="image-container">
          <img src={image1} alt="Image 2" />
          <div className="circles-container">
            <div className="circle gray"></div>
            <div className="circle brown"></div>
            <div className="circle black"></div>
            <div className="circle"></div>
          </div>
          <div className="right-image-content">
            <h2 className="right-image-title">Cast Lights</h2>
            <p className="right-image-subtitle">GlowGalore Store</p>
          </div>
          <button className="add-to-cart-button">Add to Cart - $ 45.90</button>
        </div>
      </div>
    </div>
  );
};

export default Home;














