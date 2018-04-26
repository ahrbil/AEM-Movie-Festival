import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = props => <Btn>{props.title}</Btn>;

Button.propTypes = {
  title: PropTypes.string.isRequired,
};

const Btn = styled.div`
  width: 100%;
  background: #ffdd2d;
  color: #000;
  border: 0;
  border-radius: 6px;
  display: inline-block;
  padding: 13px 25px;
  vertical-align: baseline;
  font-size: 15px;
  text-align: center;
  font-family: work-sans;
  &:hover {
    background: #ffe355;
    cursor: pointer;
  }
`;

export default Button;
