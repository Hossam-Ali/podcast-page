import React from 'react';
import Image from 'next/image';
import DropdownDots from '../../assets/icons/dropdown-dots.svg';
import './styles.scss';

interface dropdownProps {
  items: string[];
}

export const Dropdown = ({ items }: dropdownProps) => (
  <div className="dropdown">
    <div tabIndex={0} role="button">
      <Image src={DropdownDots} alt="dropdown dots" />
    </div>
    <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
      {items.map((val: string) => {
        if (val === 'divider') return <div className="divider" />;
        return (
          <li key={val}>
            <a>{val}</a>
          </li>
        );
      })}
    </ul>
  </div>
);
