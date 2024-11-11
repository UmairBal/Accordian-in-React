import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ noOfStars = 5 }) => {    
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(getCurrentIndex) {
        setRating(getCurrentIndex);
    }

    function handleMouseEnter(getCurrentIndex) {
        setHover(getCurrentIndex);
    }

    function handleMouseLeave() {
        setHover(0);
    }
    
  
    return (
        <div style={{display: "flex", flexDirection:"row", background: "#000"}} className="wrapper star-wrapper">
            {[...Array(noOfStars)].map((_, index) => {
                const currentIndex = index + 1;

                return (
                    <FaStar 
                        key={currentIndex}
                        onClick={() => handleClick(currentIndex)}
                        onMouseEnter={() => handleMouseEnter(currentIndex)}
                        onMouseLeave={handleMouseLeave}
                        size={40}
                        color={currentIndex <= (hover || rating) ? "#ffc107" : "#eee"}
                        style={{ cursor: 'pointer' }}
                    />
                );
            })}
        </div>
    );
};

export default StarRating;
