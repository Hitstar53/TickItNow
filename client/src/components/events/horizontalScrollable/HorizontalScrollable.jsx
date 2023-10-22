// HorizontalScrollable.js
import React, { useState } from 'react';
import './app.css';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';

// Import your button images
import backBtn from './backBtn.png';
import nextBtn from './nextBtn.png';

const HorizontalScrollable = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    // Replace these placeholder image URLs with your actual image URLs
    const images = [
        img1,
        img2,
        img3,
        img4
    ];

    const scrollLeft = () => {
        const newPosition = (scrollPosition - 1 + images.length) % images.length;
        setScrollPosition(newPosition);
    };

    const scrollRight = () => {
        const newPosition = (scrollPosition + 1) % images.length;
        setScrollPosition(newPosition);
    };

    const imageWidth = 1240;
    const padding = 20;
    const totalWidth = imageWidth + 2 * padding;

    return (
        <div style={{ overflow: 'hidden', padding: '20px', textAlign: 'center' }}>
            <div
                style={{
                    display: 'flex',
                    transition: 'transform 0.5s ease',
                    transform: `translateX(-${scrollPosition * totalWidth}px)`,
                }}
            >
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Image ${index + 1}`}
                        style={{
                            width: `${imageWidth}px`,
                            height: '300px',
                            margin: '0 20px',
                            flex: '0 0 auto',
                        }}
                    />
                ))}
            </div>
            <button onClick={scrollLeft} className='backBtn'>
                <img src={backBtn} alt="Back" />
            </button>
            <button onClick={scrollRight} className='nextBtn'>
                <img src={nextBtn} alt="Next" />
            </button>
        </div>
    );
};

export default HorizontalScrollable;
