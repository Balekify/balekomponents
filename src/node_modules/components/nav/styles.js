import styled, { keyframes } from "styled-components";

export const StyledLink = styled.span`
  display: block;
  margin: 1em;
`;

export const Ul = styled.ul`
  margin: auto 0 0 0;
  padding: 0;
`;

export const keyFrame = keyframes`
0%{transform : scale(1) rotateX(90deg);}
50%{transform : scale(1.5) rotateX(45deg);}
100%{transform : scale(1) rotateX(0deg);}
`;

// transition: transform .5s cubic-bezier(1, 0.04, 0.23, 1.62);
export const Li = styled.li`
  transition: transform 0.2s ease;
  transform: rotateY(90deg) translateY(100%);
  list-style: none;
  animation-duration: 0.5s;
  animation-timing-function: cubic-bezier(1, 0.04, 0.23, 1.62);
  animation-direction: normal;
  ${({ isOpen }) =>
    isOpen
      ? `
  animation-name: ${keyFrame};
  transform : rotateX(0deg);`
      : null};
`;
export const Btn = styled.div`margin: 1em;`;
