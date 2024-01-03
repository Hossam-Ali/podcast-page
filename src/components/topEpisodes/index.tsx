import React from 'react';
import Image from 'next/image';
import { Dropdown } from '../dropdown';
import Temp from '../../assets/icons/temp.webp';
import './styles.scss';

export const TopEpisodes = () => {
  const dropdownHeaderItems = [
    'Switch layout to Scroll',
    'Switch layout to Grid',
    'Switch layout to List',
  ];

  const dropdownResultsItems = [
    'Add to My Queue',
    'divider',
    'Go to episode',
    'Go to prodcast',
    'divider',
    'Download file',
  ];

  const results = [
    {
      name: 'فنجان مسموم',
      author: 'جناية',
    },
    {
      name: 'فنجان مسموم',
      author: 'جناية',
    },
    {
      name: 'فنجان مسموم',
      author: 'جناية',
    },
    {
      name: 'فنجان مسموم',
      author: 'جناية',
    },
    {
      name: 'فنجان مسموم',
      author: 'جناية',
    },
    {
      name: 'فنجان مسموم',
      author: 'جناية',
    },
    {
      name: 'فنجان مسموم',
      author: 'جناية',
    },
    {
      name: 'فنجان مسموم',
      author: 'جناية',
    },
    {
      name: 'فنجان مسموم',
      author: 'جناية',
    },
    {
      name: 'فنجان مسموم',
      author: 'جناية',
    },
    {
      name: 'فنجان مسموم',
      author: 'جناية',
    },
    {
      name: 'فنجان مسموم',
      author: 'جناية',
    },
    {
      name: 'فنجان مسموم',
      author: 'جناية',
    },
    {
      name: 'فنجان مسموم',
      author: 'جناية',
    },
    {
      name: 'فنجان مسموم',
      author: 'جناية',
    },
    {
      name: 'فنجان مسموم',
      author: 'جناية',
    },
    {
      name: 'فنجان مسموم',
      author: 'جناية',
    },
    {
      name: 'فنجان مسموم',
      author: 'جناية',
    },
    {
      name: 'فنجان مسموم',
      author: 'جناية',
    },
    {
      name: 'فنجان مسموم',
      author: 'جناية',
    },
    {
      name: 'فنجان مسموم',
      author: 'جناية',
    },
    {
      name: 'فنجان مسموم',
      author: 'جناية',
    },
    {
      name: 'فنجان مسموم',
      author: 'جناية',
    },
  ];

  return (
    <div className="top-episodes">
      <div className="header">
        <h4 className="title">Top prodcast for testing</h4>
        <div className="action-buttons">
          <Dropdown items={dropdownHeaderItems} />
        </div>
      </div>
      <div className="results-grid">
        {results.map((val, ind) => (
          <div className="result-container" key={ind}>
            <Image src={Temp} alt="temp" width={50} height={50} />
            <div className="info">
              <h6 className="name">{val.name}</h6>
              <p className="author">{val.author}</p>
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
