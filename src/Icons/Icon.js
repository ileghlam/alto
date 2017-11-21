import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const IconContainer = styled.i`
  display: inline-flex;
  align-self: center;
  position: relative;
  height: ${({ size }) => size};
  width: ${({ size }) => size};

  svg {
    bottom: -0.125em;
    position: absolute;
  }
`;

IconContainer.displayName = 'IconContainer';

const Icon = props => (
  <IconContainer {...props}>
    <svg
      version="1.1"
      viewBox={props.viewBox}
      width={props.size}
      height={props.size}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
    >
      {props.children}
    </svg>
  </IconContainer>
)

Icon.defaultProps = {
  size: '1em',
  viewBox: '0 0 36 36',
};

Icon.propTypes = {
  children: PropTypes.element.isRequired,
  viewBox: PropTypes.string,
  size: PropTypes.string,
};

export default Icon;