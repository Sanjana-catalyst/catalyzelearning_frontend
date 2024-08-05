import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Podcast from '../assets/Podcast.jpg';
import Podcast1 from '../assets/Podcast1.jpeg';
import Podcast2 from '../assets/Podcast2.jpeg';
import Podcast3 from '../assets/Podcast3.jpeg';

function Card() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const podcastImages = [Podcast, Podcast1, Podcast2, Podcast3];
  const goToPrevious = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + podcastImages.length) % podcastImages.length);
  };

  const goToNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % podcastImages.length);
  };

  return (
    <div className="pl-20 relative">
      <div className="pl-80">
        <div className="relative pl-20 flex flex-row items-start">
          {/* Left Arrow */}
          <button
            onClick={goToPrevious}
            className="absolute left-[-22rem] top-[14rem] z-50 p-2 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 focus:outline-none"
            aria-label="Previous"
          >
            <FaChevronLeft />
          </button>
          {/* First card */}
          <div className="relative z-30 card card-image-cover mt-20 h-[18rem] w-[20rem]">
            <img src="https://source.unsplash.com/random/300x200" alt="" className="w-full h-full object-cover" />
            <div className="card-body p-4">
              <p>lorem20 dbhjd cbhh chb bcy bdygc</p>
            </div>
          </div>
          {/* Second card */}
          <div className="relative -ml-[4rem] z-20 card card-image-cover mt-28 h-[15rem] w-[17rem]">
            <img src="https://source.unsplash.com/random/300x200" alt="" className="w-full h-full object-cover" />
            <div className="card-body p-4">
              <p>lorem20 dbhjd cbhh chb bcy bdygc</p>
            </div>
          </div>
          {/* Third card */}
          <div className="relative -ml-14 z-10 card card-image-cover mt-36 h-[12rem] w-[15rem]">
            <img src="https://source.unsplash.com/random/300x200" alt="" className="w-full h-full object-cover" />
            <div className="card-body p-4">
              <p>lorem20 dbhjd cbhh chb bcy bdygc</p>
            </div>
          </div>
          {/* Left first card */}
          <div className="relative -left-[57rem] z-20 mt-28 h-[15rem] w-[17rem] card card-image-cover">
            <img src="https://source.unsplash.com/random/300x200" alt="" className="w-full h-full object-cover" />
            <div className="card-body p-4">
              <p>lorem20 dbhjd cbhh chb bcy bdygc</p>
            </div>
          </div>
          {/* Left second card */}
          <div className="relative -left-[85rem] z-10 mt-36 h-[12rem] w-[15rem] card card-image-cover">
            <img src="https://source.unsplash.com/random/300x200" alt="" className="w-full h-full object-cover" />
            <div className="card-body p-4">
              <p>lorem20 dbhjd cbhh chb bcy bdygc</p>
            </div>
          </div>
          {/* Right Arrow */}
          <button
            onClick={goToNext}
            className="absolute right-[28.7rem] top-[14rem] z-10 p-2 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 focus:outline-none"
            aria-label="Next"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
