'use client';
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import DropdownDots from '../../assets/icons/dropdown-dots.svg';
import './styles.scss';

interface dropdownProps {
  items: string[];
  handleClickOnDropdown?: (val: string) => any;
}

export const Dropdown = ({ items, handleClickOnDropdown }: dropdownProps) => {
  const dropdownRef = useRef(null);

  const useClickOutside = (ref: any, onClickOutside: any) => {
    useEffect(() => {
      const handleClickOutside = (event: any) => {
        if (ref.current && !ref.current.contains(event.target)) {
          onClickOutside();
        }
      };

      document.addEventListener('mousedown', handleClickOutside);

      return () =>
        document.removeEventListener('mousedown', handleClickOutside);
    }, [ref, onClickOutside]);
  };

  useClickOutside(dropdownRef, () => handleCloseDropdown());

  const handleCloseDropdown = () => {
    const dropdown = dropdownRef.current as any;
    dropdown.removeAttribute('open');
  };

  const handleDropdown = (val: string) => {
    handleClickOnDropdown && handleClickOnDropdown(val);
    handleCloseDropdown();
  };

  return (
    <div className="dropdown-component top-0 align-middle flex">
      <details
        className="dropdown dropdown-details flex align-middle"
        ref={dropdownRef}
      >
        <summary className="dropdown-dots m-1 btn cursor-pointer bg-transparent">
          <Image src={DropdownDots} alt="dropdown dots" />
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          {items.map((val: string, ind: number) => {
            if (val === 'divider')
              return <div className="divider block" key={ind} />;
            return (
              <li key={ind} onClick={() => handleDropdown(val)}>
                <p className="w-ful text-sm cursor-pointer text-left block truncate py-2 px-3">
                  {val}
                </p>
              </li>
            );
          })}
        </ul>
      </details>
    </div>
  );
};
