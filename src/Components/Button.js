import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = props => <Btn>{props.title}</Btn>;
Button.propTypes = {
  title: PropTypes.string.isRequired,
};

const Btn = styled.button`
  max-width: 100%;
  height: 2.7rem;
  background: #ffdd2d;
  color: #000;
  border: 0;
  border-radius: 6px;
  display: inline-block;
  padding: 13px 25px;
  vertical-align: baseline;
  font-size: 15px;
  text-align: center;
  outline: none;
  font-family: work-sans;
  &:hover {
    background: #ffe355;
    cursor: pointer;
  }
`;

export default Button;
