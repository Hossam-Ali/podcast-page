import React from 'react';
import Image from 'next/image';
import randomColor from 'randomcolor';
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
    <div className="top-episodes mt-4 mb-12 relative">
      <div className="header flex justify-between pt-2.5 px-5 items-center">
        <h4 className="title font-semibold text-base">
          Top episodes {query && 'for'} {query}
        </h4>
        <div className="flex">
          <Dropdown items={dropdownHeaderItems} />
        </div>
      </div>
      <div className="results-grid grid grid-cols-3 my-0 mx-5	">
        {apiEpisodes?.map((val: any) => (
          <div className="result-container flex" key={val.id}>
            <Image src={val.image} alt="temp" width={50} height={50} />
            <div className="w-full my-0 mx-2.5">
              <h6 className="name text-sm font-medium truncate mb-1 inline-block float-left clear-left">
                {val.name}
              </h6>
              <p
                className="author text-xs font-medium truncate inline-block float-left	clear-left max-w-full"
                style={{ color: randomColor() }}
              >
                {val.podcastName}
              </p>
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
