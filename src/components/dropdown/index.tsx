import React from 'react';
import Image from 'next/image';
import DropdownDots from '../../assets/icons/dropdown-dots.svg';
import './styles.scss';

interface dropdownProps {
  items: string[];
}

export const Dropdown = ({ items }: dropdownProps) => (
  <div className="dropdown top-0 align-middle">
    <details className="dropdown-details">
      <summary className="m-1 btn-dropdown cursor-pointer bg-transparent">
        <Image src={DropdownDots} alt="dropdown dots" />
      </summary>
      <ul className="p-2 shadow menu dropdown-content absolute z-[1] bg-base-100 rounded-box w-52">
        {items.map((val: string, ind: number) => {
          if (val === 'divider')
            return <div className="divider block" key={ind} />;
          return (
            <li key={ind}>
              <a className="w-ful text-sm cursor-pointer text-left block truncate py-2 px-3">
                {val}
              </a>
            </li>
          );
        })}
      </ul>
    </details>
  </div>
);
