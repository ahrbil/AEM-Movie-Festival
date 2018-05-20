import React from 'react';
import styled from 'styled-components';
import { Link,NavLink } from 'react-router-dom';

import Button from './Components/Button';
import './App.css';
import logo from './assets/logo.svg';
import fb from './assets/fb.svg';
import ig from './assets/ig.svg';
import tw from './assets/tw.svg';
import yt from './assets/yt.svg';

const Header = () => (
  <header className="App-header">
    <Link to="/">
      <img src={logo} alt="AEM Movie Festival" draggable="false" />
    </Link>
    <Container>
      <NavLink to="/about" activeClassName="isActive">
        <li>About</li>
      </NavLink>
      <NavLink to="/movies" activeClassName="isActive">
        <li>Movies</li>
      </NavLink>
      <NavLink to="/news" activeClassName="isActive">
        <li>News</li>
      </NavLink>
      <NavLink to="/gallery" activeClassName="isActive">
        <li>Gallery</li>
      </NavLink>
      <NavLink to="/contact" activeClassName="isActive">
        <li>Contact</li>
      </NavLink>
    </Container>
    <Bottom>
      <Button title="Buy a ticket" />
      <div>
        <a href="#">
          <img src={tw} alt="twitter" />
        </a>
        <a href="#">
          <img src={fb} alt="facebook" />
        </a>
        <a href="#">
          <img src={ig} alt="instagram" />
        </a>
        <a href="#">
          <img src={yt} alt="youtube" />
        </a>
      </div>
    </Bottom>
  </header>
);

export default Header;

const Container = styled.ul`
  list-style: none;
  a{
    color: inherit;
  font-weight: 700;
  font-size: 14px;
  }
  li {
    cursor: pointer;
    padding: 10px 0px 10px 20px;
    position: relative;
    transition: padding 600ms cubic-bezier(0.19, 1, 0.22, 1);
    &:before {
      content: '';
      display: block;
      width: 0px;
      height: 3px;
      top: 50%;
      left: -40px;
      background: #ffe355;
      position: absolute;
      transition: width 450ms;
    }
  }
  li:hover {
    padding-left: 30px;
  }
  li:hover:before {
    width: 50px;
  }
  .isActive {
    li{
      padding-left: 40px;
      &::before {
      width: 70px;
      }
    }
  }
`;
const Bottom = styled.div`
  div {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    a {
      height: 24px;
      width: 24px;
      padding: 10px;
      position: relative;
      display: inline-block;
    }
  }
  img {
    width: 16px;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
  }
`;
