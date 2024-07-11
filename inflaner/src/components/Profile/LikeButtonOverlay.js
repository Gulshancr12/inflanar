// src/LikeButtonOverlay.js
import React, { useState } from 'react';
import './LikeButtonOverlay.css';

const LikeButtonOverlay = () => {
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        setLiked(!liked);
    };

    return (
        <div className="image-container">
            <img src="path_to_your_image.jpg" alt="Descriptive text" className="image" />
            <div className="overlay">
                <button 
                    className={`like-button ${liked ? 'liked' : ''}`} 
                    onClick={handleLike}
                >
                    {liked ? 'Unlike' : 'Like'}
                </button>
            </div>
        </div>
    );
};

export default LikeButtonOverlay;
