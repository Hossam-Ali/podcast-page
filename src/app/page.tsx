'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import _debounce from 'lodash.debounce';
import BrandIcon from '../assets/icons/brand-icon.svg';
import HomeSVG from '../assets/icons/home.svg';
import DiscoverSVG from '../assets/icons/discover.svg';
import PodcastsSVG from '../assets/icons/podcasts.svg';
import QueueSVG from '../assets/icons/queue.svg';
import RecentsSVG from '../assets/icons/recents.svg';
import { Header } from '../components/header';
import { TopPodcasts } from '../components/topPodcasts';
import { TopEpisodes } from '../components/topEpisodes';
import './styles.scss';

export default function Home() {
  const [apiEpisodes, setApiEpisodes] = useState(null as any);
  const [apiPodcasts, setApiPodcasts] = useState(null as any);
  const [isLoading, setIsLoading] = useState(true);
  const [query, SetQuery] = useState('');

  useEffect(() => {
    handleDebounceFn();
  }, []);

  const handleAPIData = (data: any) => {
    setIsLoading(true);
    const values = Object.values(data)[0] as any;
    const podcasts = values.findIndex(
      (val: any) => val.slug === 'shows'
    ) as number;
    const episodes = values.findIndex(
      (val: any) => val.slug === 'episodes'
    ) as number;
    if (podcasts >= 0) {
      setApiPodcasts(values[podcasts].items[0].items);
    }
    if (episodes >= 0) {
      setApiEpisodes(values[episodes].items[0].items);
    }
  };

  const handleDebounceFn = async (query = '') => {
    await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/client/api/search?search=${query}`,
      {
        cache: 'force-cache',
      }
    )
      .then((res) => res.json())
      .then((data) => handleAPIData(data))
      .catch((e) => console.error('error', e))
      .finally(() => setIsLoading(false));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceFn = useCallback(_debounce(handleDebounceFn, 500), []);

  const handleSearchData = (query: string) => {
    SetQuery(query);
    debounceFn(query);
  };

  return (
    <div className="drawer md:drawer-open left-sidebar">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {isLoading ? (
          <div className="w-full h-full	flex justify-center">
            <span className="loading loading-ring loading-lg"></span>
          </div>
        ) : (
          <>
            <Header handleSearchData={handleSearchData} />
            <div className="main-content">
              <TopPodcasts apiPodcasts={apiPodcasts} query={query} />
              <TopEpisodes apiEpisodes={apiEpisodes} query={query} />
            </div>
          </>
        )}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        />
        <ul className="menu p-4 w-100 min-h-full bg-base-200 text-base-content overflow-y-hidden">
          <Image
            src={BrandIcon}
            alt="Brand"
            width={45}
            height={50}
            className="mb-6 mr-2"
          />
          <li>
            <a className="flex text-sm font-medium cursor-pointer relative">
              <Image
                src={HomeSVG}
                alt="Home"
                width={18}
                height={16}
                className="mr-2"
              />
              Home
            </a>
          </li>
          <li>
            <a className="flex text-sm font-medium cursor-pointer relative">
              <Image
                src={DiscoverSVG}
                alt="Discover"
                width={18}
                height={16}
                className="mr-2"
              />
              Discover
            </a>
          </li>
          <li className="section-header mt-5 inline-block align-middle tracking-normal text-xs font-bold uppercase">
            YOUR STUFF
          </li>
          <li>
            <a className="flex text-sm font-medium cursor-pointer relative">
              <Image
                src={QueueSVG}
                alt="Queue"
                width={18}
                height={16}
                className="mr-2"
              />
              My Queue
            </a>
          </li>
          <li>
            <a className="flex text-sm font-medium cursor-pointer relative">
              <Image
                src={PodcastsSVG}
                alt="Podcasts"
                width={18}
                height={16}
                className="mr-2"
              />
              My Podcasts
            </a>
          </li>
          <li>
            <a className="flex text-sm font-medium cursor-pointer relative">
              <Image
                src={RecentsSVG}
                alt="Recents"
                width={18}
                height={16}
                className="mr-2"
              />
              Recents
            </a>
          </li>
          <li>
            <p className="sidebar-footer block cursor-default text-xs px-3.5 pb-3 pt-0">
              Podbay v2.9.6 by{' '}
              <a
                href="https://fancysoups.com"
                target="_blank"
                className="footer-link"
              >
                Fancy Soups
              </a>
              .
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
