import Image from 'next/image';
import { useEffect, useState } from 'react';
import iphoneMainImage from '/public/images/iphone-315x317.png';
import tabletMainImage from '/public/images/tablet-608x317.png';
import dt1440MainImage from '/public/images/desktop1440-987x317.png';
import dt1920MainImage from '/public/images/desktop1920-1199x385.png';

import {
  Main, 
  MainTitle,
  MainMenu,
  MainMenuAbout,
  MainMenuBlog
} from "../components/custom-tw-components";

export default function Home() {
  const [imagePath, setImagePath] = useState('');
  const [imageWidth, setImageWidth] = useState(315);
  const [imageHeight, setImageHeight] = useState(317);
  const [staticImage, setStaticImage] = useState(iphoneMainImage);

  useEffect(() => {
      function handleResize() {
        const screenWidth = window.innerWidth;
        if (screenWidth >= 1920) {
          setStaticImage(dt1920MainImage);
        } else if(screenWidth >= 1440) {
          setStaticImage(dt1440MainImage);
        } else if(screenWidth >= 768) {
          setStaticImage(tabletMainImage);
        } else {
          setStaticImage(iphoneMainImage);
        }
      }
      window.addEventListener('resize', handleResize);
      handleResize(); // Call the function initially
      return () => {
        window.removeEventListener('resize', handleResize);
      };
  }, []);

  return (
    <Main>
          <Image
          src={staticImage}
          alt="Main Picture"
          className='profile-image'
        />
        <MainTitle>rolemadelen</MainTitle>
        <MainMenu>
          <MainMenuAbout>
            about
            </MainMenuAbout>
          <MainMenuBlog>
            blog
            </MainMenuBlog>
        </MainMenu>
    </Main>
  )
}
