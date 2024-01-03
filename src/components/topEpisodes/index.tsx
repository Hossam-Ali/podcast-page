import React from 'react';
import Image from 'next/image';
import { Dropdown } from '../dropdown';
import './styles.scss';

interface topEpisodesProps {
  apiEpisodes: any;
  query: string;
}

export const TopEpisodes = ({ apiEpisodes, query }: topEpisodesProps) => {
  const dropdownHeaderItems = [
    'Switch layout to Scroll',
    'Switch layout to Grid',
    'Switch layout to List',
  ];

  const dropdownResultsItems = [
    'Add to My Queue',
    'divider',
    'Go to episode',
    'Go to podcast',
    'divider',
    'Download file',
  ];

  return (
    <div className="top-episodes">
      <div className="header">
        <h4 className="title">Top podcast for {query}</h4>
        <div className="action-buttons">
          <Dropdown items={dropdownHeaderItems} />
        </div>
      </div>
      <div className="results-grid">
        {apiEpisodes?.map((val: any) => (
          <div className="result-container" key={val.id}>
            <Image src={val.image} alt="temp" width={50} height={50} />
            <div className="info">
              <h6 className="name">{val.name}</h6>
              <p className="author">{val.podcastName}</p>
            </div>
            <div className="dropdown">
              <Dropdown items={dropdownResultsItems} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
