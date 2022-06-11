import React from 'react';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Card = ({ review }) => {

    const { name, picture, rating, about, gender } = review;

    return (
        <div className='bg-gray-100 border-2 rounded-lg p-4 shadow-md shadow-cyan-200 border-gray-500 sm:my-4'>
            <div className='grid grid-cols-2 justify-items-start items-center'>
                <img className='border rounded-lg w-[220px] h-[200px]' src={picture} alt="" />
                <div className='pl-3 text-cyan-900'>
                    <p className='text-xl font-bold'>{name}</p> <br />
                    <p>Gender: {gender}</p>
                    <p>Ratings:
                        <Rating
                            initialRating={rating}
                            emptySymbol={<FontAwesomeIcon icon={faStar} />}
                            fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
                            readonly
                        ></Rating>
                    </p>
                </div>
            </div>
            <p className='py-2'>{about}</p>
        </div>
    );
};

export default Card;