import React from 'react';
import Image from 'next/image';
import DropdownDots from '../../assets/icons/dropdown-dots.svg';
import './styles.scss';

interface dropdownProps {
  items: string[];
}

export const Dropdown = ({ items }: dropdownProps) => (
  <div className="dropdown top-0 align-middle">
    <details className="dropdown">
      <summary className="m-1 btn bg-transparent test">:</summary>
      <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </details>
  </div>
);
