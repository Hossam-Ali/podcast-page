'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { Arrows } from '../arrows';
import { Dropdown } from '../dropdown';
import './styles.scss';

interface topPodcastProps {
  apiPodcasts: any;
  query: string;
}

export const TopPodcasts = ({ apiPodcasts, query }: topPodcastProps) => {
  const sliderRef = useRef(null);
  const dropdownHeaderItems = ['Switch layout to Grid'];
  const dropdownResultsItems = [
    'Add to My Prodacst',
    'divider',
    'Go to Podcast',
    'divider',
    'Share podcast',
    'divider',
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

  return (
    <div className="top-podcasts relative">
      <div className="header flex justify-between pt-2.5 px-2.5">
        <h4 className="text-base font-semibold">
          Top podcast {query && 'for'} {query}
        </h4>
        <div className="flex">
          <Arrows leftArrow={handleLeftArrow} rightArrow={handleRightArrow} />
          <Dropdown items={dropdownHeaderItems} />
        </div>
      </div>

      <div className="list-container">
        <div className="list">
          <div className="relative">
            <div
              className="results-section flex pt-2.5 px-5 relative overflow-x-auto overflow-y-hidden will-change-transform scroll-smooth"
              ref={sliderRef}
            >
              {apiPodcasts?.map((val: any) => (
                <div key={val.id} className="result-container mr-2.5">
                  <Image
                    src={`${val.image}`}
                    alt="logo"
                    width={216}
                    height={216}
                  />
                  <div className="bottom-info flex justify-between mt-2">
                    <div className="info">
                      <a className="name cursor-pointer overflow-hidden text-sm font-semibold">
                        {val.name}
                      </a>
                      <h5 className="author cursor-pointer overflow-hidden text-xs font-semibold">
                        {val.author}
                      </h5>
                    </div>
                    <Dropdown items={dropdownResultsItems} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
