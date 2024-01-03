'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import Test from '../../assets/icons/test.webp';
import { Arrows } from '../arrows';
import { Dropdown } from '../dropdown';
import './styles.scss';

export const TopProdcasts = () => {
  const sliderRef = useRef(null);
  const dropdownHeaderItems = ['Switch layout to Grid'];
  const dropdownResultsItems = [
    'Add to My Prodacst',
    'divider',
    'Go to Prodcast',
    'divider',
    'Share prodcast',
    'divider',
    'Hide prodcast',
  ];

  const results = [
    {
      name: 'فنجان مع عبد الرححن أبو صالح',
      sing: 'ثمانيه',
    },
    {
      name: 'فنجان مع عبد الرححن أبو صالح',
      sing: 'ثمانيه',
    },
    {
      name: 'فنجان مع عبد الرححن أبو صالح',
      sing: 'ثمانيه',
    },
    {
      name: 'فنجان مع عبد الرححن أبو صالح',
      sing: 'ثمانيه',
    },
    {
      name: 'فنجان مع عبد الرححن أبو صالح',
      sing: 'ثمانيه',
    },
    {
      name: 'فنجان مع عبد الرححن أبو صالح',
      sing: 'ثمانيه',
    },
    {
      name: 'فنجان مع عبد الرححن أبو صالح',
      sing: 'ثمانيه',
    },
    {
      name: 'فنجان مع عبد الرححن أبو صالح',
      sing: 'ثمانيه',
    },
    {
      name: 'فنجان مع عبد الرححن أبو صالح',
      sing: 'ثمانيه',
    },
    {
      name: 'فنجان مع عبد الرححن أبو صالح',
      sing: 'ثمانيه',
    },
    {
      name: 'فنجان مع عبد الرححن أبو صالح',
      sing: 'ثمانيه',
    },
    {
      name: 'فنجان مع عبد الرححن أبو صالح',
      sing: 'ثمانيه',
    },
    {
      name: 'فنجان مع عبد الرححن أبو صالح',
      sing: 'ثمانيه',
    },
    {
      name: 'فنجان مع عبد الرححن أبو صالح',
      sing: 'ثمانيه',
    },
    {
      name: 'فنجان مع عبد الرححن أبو صالح',
      sing: 'ثمانيه',
    },
    {
      name: 'فنجان مع عبد الرححن أبو صالح',
      sing: 'ثمانيه',
    },
    {
      name: 'فنجان مع عبد الرححن أبو صالح',
      sing: 'ثمانيه',
    },
    {
      name: 'فنجان مع عبد الرححن أبو صالح',
      sing: 'ثمانيه',
    },
    {
      name: 'فنجان مع عبد الرححن أبو صالح',
      sing: 'ثمانيه',
    },
    {
      name: 'فنجان مع عبد الرححن أبو صالح',
      sing: 'ثمانيه',
    },
    {
      name: 'فنجان مع عبد الرححن أبو صالح',
      sing: 'ثمانيه',
    },
    {
      name: 'فنجان مع عبد الرححن أبو صالح',
      sing: 'ثمانيه',
    },
    {
      name: 'فنجان مع عبد الرححن أبو صالح',
      sing: 'ثمانيه',
    },
    {
      name: 'فنجان مع عبد الرححن أبو صالح',
      sing: 'ثمانيه',
    },
    {
      name: 'فنجان مع عبد الرححن أبو صالح',
      sing: 'ثمانيه',
    },
    {
      name: 'فنجان مع عبد الرححن أبو صالح',
      sing: 'ثمانيه',
    },
    {
      name: 'فنجان مع عبد الرححن أبو صالح',
      sing: 'ثمانيه',
    },
    {
      name: 'فنجان مع عبد الرححن أبو صالح',
      sing: 'ثمانيه',
    },
    {
      name: 'فنجان مع عبد الرححن أبو صالح',
      sing: 'ثمانيه',
    },
    {
      name: 'فنجان مع عبد الرححن أبو صالح',
      sing: 'ثمانيه',
    },
    {
      name: 'فنجان مع عبد الرححن أبو صالح',
      sing: 'ثمانيه',
    },
    {
      name: 'فنجان مع عبد الرححن أبو صالح',
      sing: 'ثمانيه',
    },
    {
      name: 'فنجان مع عبد الرححن أبو صالح',
      sing: 'ثمانيه',
    },
    {
      name: 'فنجان مع عبد الرححن أبو صالح',
      sing: 'ثمانيه',
    },
    {
      name: 'فنجان مع عبد الرححن أبو صالح',
      sing: 'ثمانيه',
    },
    {
      name: 'فنجان مع عبد الرححن أبو صالح',
      sing: 'ثمانيه',
    },
    {
      name: 'فنجان مع عبد الرححن أبو صالح',
      sing: 'ثمانيه',
    },
    {
      name: 'فنجان مع عبد الرححن أبو صالح',
      sing: 'ثمانيه',
    },
    {
      name: 'فنجان مع عبد الرححن أبو صالح',
      sing: 'ثمانيه',
    },
    {
      name: 'فنجان مع عبد الرححن أبو صالح',
      sing: 'ثمانيه',
    },
    {
      name: 'فنجان مع عبد الرححن أبو صالح',
      sing: 'ثمانيه',
    },
    {
      name: 'فنجان مع عبد الرححن أبو صالح',
      sing: 'ثمانيه',
    },
    {
      name: 'فنجان مع عبد الرححن أبو صالح',
      sing: 'ثمانيه',
    },
    {
      name: 'فنجان مع عبد الرححن أبو صالح',
      sing: 'ثمانيه',
    },
    {
      name: 'فنجان مع عبد الرححن أبو صالح',
      sing: 'ثمانيه',
    },
    {
      name: 'فنجان مع عبد الرححن أبو صالح',
      sing: 'ثمانيه',
    },
    {
      name: 'فنجان مع عبد الرححن أبو صالح',
      sing: 'ثمانيه',
    },
    {
      name: 'فنجان مع عبد الرححن أبو صالح',
      sing: 'ثمانيه',
    },
  ];

  const handleLeftArrow = (): void => {
    const container = sliderRef.current as any;
    container.scrollLeft -= 800;
  };

  const handleRightArrow = (): void => {
    const container = sliderRef.current as any;
    container.scrollLeft += 800;
  };

  return (
    <div className="top-prodcasts">
      <div className="header">
        <h4>Top prodcast for testing</h4>
        <div className="action-buttons">
          <Arrows leftArrow={handleLeftArrow} rightArrow={handleRightArrow} />
          <Dropdown items={dropdownHeaderItems} />
        </div>
      </div>

      <div className="list-container">
        <div className="list">
          <div className="results">
            <div className="results-section" ref={sliderRef}>
              {results.map((val) => {
                return (
                  <div key={val.name} className="result-container">
                    <Image src={Test} alt="logo" width={216} height={216} />
                    <div className="bottom-info">
                      <div className="info">
                        <a className="name">{val.name}</a>
                        <h5 className="author">{val.sing}</h5>
                      </div>
                      {/* <Dropdown items={dropdownResultsItems} /> */}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
