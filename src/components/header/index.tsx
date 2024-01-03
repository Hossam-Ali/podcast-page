'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Logo from '../../assets/icons/brand-icon.svg';
import { Dropdown } from '../dropdown';
import { Arrows } from '../arrows';
import './styles.scss';

interface headerProps {
  handleSearchData: (value: string) => void;
}

export const Header = ({ handleSearchData }: headerProps) => {
  const [screenSize, setScreenSize] = useState(0);
  const dropdownItems = [
    'Settings',
    'divider',
    'About Podbay',
    'Podbay apps (Beta)',
    'What&apos;s New',
    'Podcaster FAQ',
    'Privacy',
    'Terms',
    'Privacy Settings',
    'divider',
    'Contact & Feedback',
    'Clear Data...',
  ];

  useEffect(() => {
    const getCurrentWidth = () => window.innerWidth;
    setScreenSize(getCurrentWidth());

    const updateDimension = () => setScreenSize(getCurrentWidth());
    window.addEventListener('resize', updateDimension);

    return () => window.removeEventListener('resize', updateDimension);
  }, [screenSize]);

  return (
    <div className="header-component">
      <div className="header flex justify-between fixed top-0 right-0 py-0 px-2.5 items-center">
        {screenSize < 768 && <Image src={Logo} alt="logo" className="mr-2" />}
        {screenSize > 450 && <Arrows />}
        <div className="input">
          <input
            type="text"
            placeholder={
              screenSize > 640
                ? 'Search through over 30 million podcasts and episodes...'
                : 'Search'
            }
            className="input input-bordered w-full"
            onChange={(e) => handleSearchData(e.target.value)}
          />
        </div>
        <div className="action-buttons">
          {screenSize >= 768 && (
            <>
              <button className="btn font-medium py-3">Log in</button>
              <button className="btn font-medium py-3">Sign up</button>
            </>
          )}
          <Dropdown items={dropdownItems} />
        </div>
      </div>
    </div>
  );
};
