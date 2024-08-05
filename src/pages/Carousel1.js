import React, { useState, useEffect } from 'react';
import Podcast from '../assets/Podcast.jpg'
function Carousel() {
    const [currentPodcastImage, setCurrentPodcastImage] = useState(Podcast);

    const podcastImages = [Podcast, Podcast, Podcast, Podcast];
    const delay = 6000; // 6 seconds delay between image changes

    useEffect(() => {
        const podcastInterval = setInterval(() => {
            setCurrentPodcastImage(prevImage => {
                const currentIndex = podcastImages.indexOf(prevImage);
                return podcastImages[(currentIndex + 1) % podcastImages.length];
            });
        }, delay);

        return () => clearInterval(podcastInterval);
    }, []);

    return (
        <div className='flex justify-center'>
            <div className='w-full max-w-screen-2xl p-2 pt-12 flex flex-col gap-14'>
                <div className='flex flex-col lg:flex-row w-full justify-between items-center mb-[2.5rem] gap-8'>
                    <a
                        href="https://www.google.com"
                        className="w-[20rem] "
                    >
                        <div className="w-full relative h-80">
                            <div
                                style={{ backgroundImage: `url(${currentPodcastImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                                className="w-full h-full relative overflow-hidden rounded-lg"
                            >
                                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div
                                        className="text-white font-semibold text-lg md:text-2xl lg:text-3xl absolute top-0 left-0 p-4"
                                        style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
                                    >
                                     
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Carousel;
