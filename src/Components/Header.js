import React, { Component } from 'react';
import posed from 'react-pose';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import '../App.css';
import close from '../assets/close.svg';
import fb from '../assets/fb.svg';
import ig from '../assets/ig.svg';
import logo from '../assets/logo.svg';
import open from '../assets/open.svg';
import tw from '../assets/tw.svg';
import yt from '../assets/yt.svg';
import Button from './Button';

class Header extends Component {
  state = {
    isOpen: 'closed',
  };
  open = () => {
    this.setState({ isOpen: this.state.isOpen === 'closed' ? 'opend' : 'closed' });
  };
  close = () => {
    this.setState({ isOpen: this.state.isOpen === 'opend' ? 'closed' : 'opend' });
  };
  render() {
    return (
      <HeaderApp className="App-header">
        <Logo>
          <Link to="/">
            <img src={logo} alt="AEM Movie Festival" draggable="false" />
          </Link>
          <NavBtn onClick={this.open}>
            <img src={open} alt="open" />
          </NavBtn>
        </Logo>
        <HeaderBottom pose={this.state.isOpen}>
          <Logo className="bottomLogo">
            <Link to="/">
              <img src={logo} alt="AEM Movie Festival" draggable="false" />
            </Link>
            <NavBtn onClick={this.close}>
              <img src={close} alt="close" />
            </NavBtn>
          </Logo>
          <Container>
            <NavLink to="/about" activeClassName="isActive"onClick={this.close}>
              <li>About</li>
            </NavLink>
            <NavLink to="/movies" activeClassName="isActive"onClick={this.close}>
              <li>Movies</li>
            </NavLink>
            <NavLink to="/news" activeClassName="isActive"onClick={this.close}>
              <li>News</li>
            </NavLink>
            <NavLink to="/gallery" activeClassName="isActive"onClick={this.close}>
              <li>Gallery</li>
            </NavLink>
            <NavLink to="/contact" activeClassName="isActive"onClick={this.close}>
              <li>Contact</li>
            </NavLink>
          </Container>
          <Bottom>
            <Link to="/Buy-Ticket" onClick={this.close}>
              <Button title="Buy a ticket" />
            </Link>
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
        </HeaderBottom>
      </HeaderApp>
    );
  }
}
const NavBtn = styled.div`
  width: 35px;
  img {
    /* height: 45px;
    width: 45px ; */
  }
`;
const HeaderBottom = styled(
  posed.div({
    opend: {
      left: '0',
      transition:{ duration: 400, ease: 'easeInOut' },
    },
    closed: {
      left: '-100%',
      transition:{ duration: 400, ease: 'easeInOut' },
    },
  }),
)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .bottomLogo {
    display: none;
  }
`;
const Logo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${NavBtn} {
    display: none;
  }
  a img {
    width: 160px;
    height: auto;
  }
`;
const Container = styled.ul`
  list-style: none;
  margin-top: 30%;
  @media (max-width: 990px) {
    margin: 0;
    li {
      margin: 15px;
      font-size: 20px;
    }
  }
  a {
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
    li {
      padding-left: 40px;
      &::before {
        width: 70px;
      }
    }
  }
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    margin-top: 30px;
    display: flex;
    justify-content: space-around;
    width: 100%;
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
const HeaderApp = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  background-color: white;
  padding: 20px;
  color: black;
  min-width: 240px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 990px) {
    height: 80px;
    position: relative;
    display: block;
    ${NavBtn} {
      display: block;
      width: 50px;
      margin-left: 50px;
    }
    ${HeaderBottom} {
      position: fixed;
      background-color: white;
      height: 100vh;
      top: 0;
      z-index: 11;
      padding: 20px;
      .bottomLogo {
        display: flex;
      }
    }
  }
`;
export default Header;
