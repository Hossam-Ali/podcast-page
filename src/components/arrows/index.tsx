import React from 'react';
import Image from 'next/image';
import LeftArrowSVG from '../../assets/icons/left-arrow.svg';
import RightArrowSVG from '../../assets/icons/right-arrow.svg';
import './styles.scss';

interface arrowProps {
  leftArrow?: () => any;
  rightArrow?: () => any;
}

export const Arrows = ({ leftArrow, rightArrow }: arrowProps) => (
  <div className="arrows">
    <Image
      src={LeftArrowSVG}
      alt="left arrow"
      width={22}
      height={22}
      onClick={leftArrow && leftArrow}
    />
    <Image
      src={RightArrowSVG}
      alt="right arrow"
      width={22}
      height={22}
      onClick={rightArrow && rightArrow}
    />
  </div>
);
