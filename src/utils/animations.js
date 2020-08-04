import { keyframes } from 'styled-components';

export const fadeIn = direction => {
  let translateTo;
  let translateFrom;

  switch (direction) {
    case 'left':
      translateFrom = 'translateX(1rem)';
      translateTo = 'translateX(0rem)';
      break;
    case 'right':
      translateFrom = 'translateX(-1rem)';
      translateTo = 'translateX(0rem)';
      break;
    case 'up':
      translateFrom = 'translateY(-1rem)';
      translateTo = 'translateY(0rem)';
      break;
    case 'down':
      translateFrom = 'translateY(1rem)';
      translateTo = 'translateY(0rem)';
      break;
    default:
      translateFrom = 'translateY(-1rem)';
      translateTo = 'translateY(0rem)';
  }

  return keyframes`
  0% {
    opacity: 0;
    transform: ${translateFrom}
  }
  100% {
    opacity: 1;
    transform: ${translateTo}
  }
`;
};
