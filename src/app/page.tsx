import React from 'react';
import Image from 'next/image';
import BrandIcon from '../assets/icons/brand-icon.svg';
import HomeSVG from '../assets/icons/home.svg';
import DiscoverSVG from '../assets/icons/discover.svg';
import PodcastsSVG from '../assets/icons/podcasts.svg';
import QueueSVG from '../assets/icons/queue.svg';
import RecentsSVG from '../assets/icons/recents.svg';
import { Header } from '../components/header';
import { TopProdcasts } from '../components/topProdcasts';
import { TopEpisodes } from '../components/topEpisodes';
import './styles.scss';

export default function Home() {
  return (
    <div className="drawer md:drawer-open left-sidebar">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Header />
        <div className="main-content">
          <TopProdcasts />
          <TopEpisodes />
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        />
        <ul className="menu p-4 w-100 min-h-full bg-base-200 text-base-content">
          <Image
            src={BrandIcon}
            alt="Brand"
            width={45}
            height={50}
            className="mb-6"
          />
          <li>
            <a>
              <Image src={HomeSVG} alt="Home" width={18} height={16} />
              Home
            </a>
          </li>
          <li>
            <a>
              <Image src={DiscoverSVG} alt="Discover" width={18} height={16} />
              Discover
            </a>
          </li>
          <li className="section-header">YOUR STUFF</li>
          <li>
            <a>
              <Image src={QueueSVG} alt="Queue" width={18} height={16} />
              My Queue
            </a>
          </li>
          <li>
            <a>
              <Image src={PodcastsSVG} alt="Podcasts" width={18} height={16} />
              My Podcasts
            </a>
          </li>
          <li>
            <a>
              <Image src={RecentsSVG} alt="Recents" width={18} height={16} />
              Recents
            </a>
          </li>
          <li>
            <p className="sidebar-footer">
              Podbay v2.9.6 by
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
