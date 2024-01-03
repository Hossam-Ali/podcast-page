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
    <div className="top-podcasts">
      <div className="header">
        <h4 className="title">Top podcast for {query}</h4>
        <div className="action-buttons">
          <Arrows leftArrow={handleLeftArrow} rightArrow={handleRightArrow} />
          <Dropdown items={dropdownHeaderItems} />
        </div>
      </div>

      <div className="list-container">
        <div className="list">
          <div className="results">
            <div className="results-section" ref={sliderRef}>
              {apiPodcasts?.map((val: any) => (
                <div key={val.id} className="result-container">
                  <Image
                    src={`${val.image}`}
                    alt="logo"
                    width={216}
                    height={216}
                  />
                  <div className="bottom-info">
                    <div className="info">
                      <a className="name">{val.name}</a>
                      <h5 className="author">{val.author}</h5>
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
