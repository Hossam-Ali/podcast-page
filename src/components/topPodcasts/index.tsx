'use client';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Arrows } from '../arrows';
import { Dropdown } from '../dropdown';
import './styles.scss';

interface topPodcastProps {
  apiPodcasts: any;
  query: string;
}

export const TopPodcasts = ({ apiPodcasts, query }: topPodcastProps) => {
  const [isGrid, setIsGrid] = useState(false);
  const sliderRef = useRef(null);
  let dropdownHeaderItems = [];
  if (isGrid) {
    dropdownHeaderItems = ['Switch layout to Slider'];
  } else {
    dropdownHeaderItems = ['Switch layout to Grid'];
  }
  const dropdownResultsItems = [
    'Add to My Prodacst',
    'divider',
    'Go to Podcast',
    'divider',
    'Share podcast',
    'Hide podcast',
  ];

  const handleLeftArrow = (): void => {
    const container = sliderRef.current as any;
    container.scrollLeft -= 800;
  };

  const handleRightArrow = (): void => {
    const container = sliderRef.current as any;
    container.scrollLeft += 800;
  };

  const handleClickOnDropdown = () => setIsGrid((isGrid) => !isGrid);

  return (
    <div className="top-podcasts relative">
      <div className="header flex justify-between pt-2.5 px-5 items-center">
        <h4 className="text-base font-semibold text-white">
          Top podcast {query && 'for'} {query}
        </h4>
        <div className="flex">
          {!isGrid && (
            <Arrows leftArrow={handleLeftArrow} rightArrow={handleRightArrow} />
          )}
          <Dropdown
            items={dropdownHeaderItems}
            handleClickOnDropdown={handleClickOnDropdown}
          />
        </div>
      </div>

      <div className="list-container">
        <div className="list">
          <div className="relative">
            <div
              className={`results-section ${
                isGrid
                  ? 'grid grid-view'
                  : 'flex pt-2.5 px-5 relative overflow-x-auto overflow-y-hidden will-change-transform scroll-smooth'
              }`}
              ref={sliderRef}
            >
              {apiPodcasts?.map((val: any) => (
                <div key={val.item.id} className="result-container mr-3.5">
                  <Image
                    src={`${val.item.image}`}
                    alt="logo"
                    width={216}
                    height={216}
                  />
                  <div className="bottom-info flex justify-between items-end">
                    <div className="info">
                      <a className="name cursor-pointer overflow-hidden text-sm font-semibold">
                        {val.item.name}
                      </a>
                      <h5
                        className="author cursor-pointer overflow-hidden text-xs font-semibold"
                        style={{ color: val.color }}
                      >
                        {val.item.author}
                      </h5>
                    </div>
                    <Dropdown items={dropdownResultsItems} />
                  </div>
                </div>
              ))}
              {apiPodcasts.length === 0 && (
                <h1 className="no-results">No Results</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
