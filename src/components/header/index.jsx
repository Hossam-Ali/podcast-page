'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Logo from '../../assets/icons/brand-icon.svg';
import { Dropdown } from '../dropdown';
import { Arrows } from '../arrows';
import './styles.scss';

export const Header = () => {
  const [screenSize, setScreenSize] = useState(0);
  const dropdownItems = [
    'Settings',
    'divider',
    'bout Podbay',
    'Podbay apps (Beta)',
    'What&apos;s New',
    'Podcaster FAQ',
    'Privacy',
    'Terms',
    'Privacy Settings',
    'divider',
    'Contact & Feedback',
    'lear Data...',
  ];

  useEffect(() => {
    const getCurrentWidth = () => window.innerWidth;

    const updateDimension = () => setScreenSize(getCurrentWidth());
    window.addEventListener('resize', updateDimension);

    return () => window.removeEventListener('resize', updateDimension);
  }, [screenSize]);

  if (screenSize < 768) {
    dropdownItems.unshift('Log in', 'Sign up');
  }

  return (
    <div className="header-component">
      <div className="header">
        {screenSize < 769 && <Image src={Logo} alt="logo" className="mr-2" />}
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
          />
        </div>
        <div className="action-buttons">
          {screenSize >= 768 && (
            <>
              <button className="btn">Log in</button>
              <button className="btn">Sign up</button>
            </>
          )}
          <Dropdown items={dropdownItems} />
        </div>
      </div>
    </div>
  );
};
