import React, { useState } from 'react';
import Podcast from '../assets/Podcast.jpg';
import Podcast1 from '../assets/Podcast1.jpeg';
import Podcast2 from '../assets/Podcast2.jpeg';
import Podcast3 from '../assets/Podcast3.jpeg';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const podcastImages = [Podcast, Podcast1, Podcast2, Podcast3];

    const goToPrevious = () => {
        setCurrentIndex(prevIndex => (prevIndex - 1 + podcastImages.length) % podcastImages.length);
    };

    const goToNext = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % podcastImages.length);
    };

    return (
        <div className='flex justify-center'>
            <div className='w-full max-w-screen-2xl p-2 pt-12 flex flex-col gap-14'>
                <div className='relative flex flex-col lg:flex-row w-full justify-between items-center mb-[2.5rem] gap-8'>
                    {/* Left Arrow */}
                    <button
                        onClick={goToPrevious}
                        className="absolute left-0 z-10 p-2 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 focus:outline-none"
                        aria-label="Previous"
                    >
                        <FaChevronLeft />
                    </button>

                    <a
                        href="https://www.google.com"
                        className="w-[50rem]"
                    >
                        <div className="w-full relative h-80">
                            <div
                                style={{ backgroundImage: `url(${podcastImages[currentIndex]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                                className="w-full h-full relative overflow-hidden rounded-lg"
                            >
                                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div
                                        className="text-white font-semibold text-lg md:text-2xl lg:text-3xl absolute top-0 left-0 p-4"
                                        style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
                                    >
                                        {/* Optional: Add text or other content here */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>

                    {/* Right Arrow */}
                    <button
                        onClick={goToNext}
                        className="absolute right-0 z-10 p-2 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 focus:outline-none"
                        aria-label="Next"
                    >
                        <FaChevronRight />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Carousel;
