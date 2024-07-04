import React, { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './Styles.css';

import macbookImage from "../../Assets/images/img-macbook.jpg";
import budsImage from "../../Assets/images/img-buds.jpg";
import ps5Image from "../../Assets/images/img-ps5.jpg";
import watchImage from "../../Assets/images/img-watch4.jpg";

const ProductCard = ({ image, price, oldPrice, name, brand }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-favorite" onClick={toggleFavorite}>
        {isFavorite ? (
          <AiFillHeart className="favorite-icon" />
        ) : (
          <AiOutlineHeart className="favorite-icon" />
        )}
      </div>
      <div className="card-content">
        <div className="card-prices">
          <span className="card-price">${price}</span>
          {oldPrice && <span className="card-old-price">${oldPrice}</span>}
        </div>
        <h3 className="card-name">{name}</h3>
        <p className="card-brand">{brand}</p>
      </div>
    </div>
  );
};

const ProductDisplay = () => {
  const products = [
    { image: macbookImage, price: 935.90, name: 'Macbook Air 13 256Gb', brand: 'Apple' },
    { image: budsImage, price: 41.25, oldPrice: 55.00, name: 'Buds 4 Lite Black', brand: 'Xiaomi' },
    { image: ps5Image, price: 684.60, name: 'PlayStation 5 825GB', brand: 'Sony' },
    { image: watchImage, price: 168.50, name: 'Galaxy Watch4 40mm', brand: 'Samsung' },
  ];

  return (
    <div>
      <div className="filter">
        <div className="filter-content">
          <h2>Popular products</h2>
          <div className="filter-categories">
            <button>Clothes and shoes</button>
            <button>Electronics</button>
            <button>Sports goods</button>
            <button>Children's goods</button>
            <button>Beauty</button>
            <button>Furniture</button>
          </div>
        </div>
      </div>
      <div className="product-grid-wrapper">
        <div className="product-grid">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
