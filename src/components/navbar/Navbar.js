import React, { useState, useEffect, useRef } from 'react';
import "./Styles.css";
import { RiUserLine, RiSearchLine, RiHeartLine, RiLuggageCartLine } from "react-icons/ri";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [inputValues, setInputValues] = useState({
    search: '', wishlist: '', cart: '', user: { username: '', password: '' }, });
  const dropdownRef = useRef(null);

  const handleIconClick = (icon) => {
    setActiveDropdown(activeDropdown === icon ? null : icon);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setActiveDropdown(null);
    }};

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleInputChange = (event, field, subField) => {
    if (subField) {
      setInputValues({...inputValues,
        [field]: {
          ...inputValues[field],
          [subField]: event.target.value,
        },
      });
    } else {
      setInputValues({...inputValues,
        [field]: event.target.value,
      });
    }
  };

  const handleSubmit = (event, field) => {
    event.preventDefault();
    console.log(`${field} input:`, inputValues[field]);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <span className="span-logo">E</span>Store
      </div>
      <ul className="navbar__links">
        <li>Catalog</li>
        <li>About</li>
        <li>Delivery</li>
        <li>Blog</li>
        <li>Support</li>
      </ul>
      <div className="navbar__icons">
        <div className="navbar__icon" onClick={() => handleIconClick('search')}>
          <RiSearchLine />
          {activeDropdown === 'search' && (
            <Dropdown
              content="search" inputValue={inputValues.search}
              onInputChange={(event) => handleInputChange(event, 'search')} onSubmit={(event) => handleSubmit(event, 'search')}
              dropdownRef={dropdownRef} />
          )}
        </div>
        <div className="navbar__icon" onClick={() => handleIconClick('wishlist')}>
          <RiHeartLine />
          {activeDropdown === 'wishlist' && (
            <Dropdown
              content="wishlist" inputValue={inputValues.wishlist}
              onInputChange={(event) => handleInputChange(event, 'wishlist')} onSubmit={(event) => handleSubmit(event, 'wishlist')}
              dropdownRef={dropdownRef} />
          )}
        </div>
        <div className="navbar__icon" onClick={() => handleIconClick('cart')}>
          <RiLuggageCartLine />
          {activeDropdown === 'cart' && (
            <Dropdown
              content="cart" inputValue={inputValues.cart} onInputChange={(event) => handleInputChange(event, 'cart')}
              onSubmit={(event) => handleSubmit(event, 'cart')} dropdownRef={dropdownRef} />
          )}
        </div>
        <div className="navbar__icon" onClick={() => handleIconClick('user')}>
          <RiUserLine />
          {activeDropdown === 'user' && (
            <Dropdown
              content="user"
              inputValue={inputValues.user} onInputChange={(event) => handleInputChange(event, 'user', event.target.name)}
              onSubmit={(event) => handleSubmit(event, 'user')}  dropdownRef={dropdownRef}  />
          )}
        </div>
      </div>
    </nav>
  );
};

const Dropdown = ({ content, inputValue, onInputChange, onSubmit, dropdownRef }) => {
  let inputField;

  switch (content) {
    case 'search':
      inputField = (
        <form onSubmit={onSubmit} onClick={(e) => e.stopPropagation()}>
          <input
            type="text" placeholder="Search products..."  value={inputValue}  onChange={onInputChange} />
          <button type="submit">Search</button>
        </form>
      );
      break;
    case 'wishlist':
      inputField = (
        <div className="wishlist-dropdown" onClick={(e) => e.stopPropagation()}>
          <div className="wishlist-header">
            <span>Wishlist</span>
            <RiLuggageCartLine />
          </div>
          <p>No items in wishlist</p>
        </div>
      );
      break;
    case 'cart':
      inputField = (
        <form onSubmit={onSubmit} onClick={(e) => e.stopPropagation()}>
          <input
            type="number" placeholder="Enter quantity..." value={inputValue} onChange={onInputChange} />
          <button type="submit">Add to Cart</button>
        </form>
      );
      break;
    case 'user':
      inputField = (
        <form onSubmit={onSubmit} onClick={(e) => e.stopPropagation()}>
          <input
            type="text"  name="username"   placeholder="Username" value={inputValue.username}  onChange={onInputChange} />
          <br />
          <input
            type="password" name="password" placeholder="Password"  value={inputValue.password}  onChange={onInputChange} />
          <button type="submit">Login</button>
        </form>
      );
      break;
    default:
      inputField = null;
  }

  return (
    <div className="dropdown" ref={dropdownRef}>
      {inputField}
    </div>
  );
};

export default Navbar;










