import React from 'react';
import Image from 'next/image';
import DropdownDots from '../../assets/icons/dropdown-dots.svg';
import './styles.scss';

interface dropdownProps {
  items: string[];
}

export const Dropdown = ({ items }: dropdownProps) => (
  <div className="dropdown">
    <details className="dropdown-details">
      <summary className="m-1 btn-dropdown">
        <Image src={DropdownDots} alt="dropdown dots" />
      </summary>
      <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
        {items.map((val: string) => {
          if (val === 'divider') return <div className="divider" />;
          return (
            <li key={val}>
              <a>{val}</a>
            </li>
          );
        })}
      </ul>
    </details>
  </div>
);
