import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReview';
import camera from '../../nikon.jpg'
import Card from '../card/Card';

const Home = () => {
    const navigate = useNavigate();
    const [reviews] = useReviews();
    const newReview = reviews.slice(3, 6);


    return (
        <div>

            {/* Landing page section */}
            <div className='text-center md:grid grid-cols-2 bg-gray-50 md:h-screen items-center justify-around'>
                <div className='text-cyan-900'>
                    <p className='text-7xl font-bold '>Explore Your World <br />
                        With <span className='text-cyan-500'>Nikon Z9!</span></p> <br />
                    <p className='px-4'>The Nikon Z 9 is a 45.7MP mirrorless camera features a pro build, blazing fast 120 fps stills, 8K UHD video, blackout free Real-Llve Viewfinder and 4-axis tilting touch LCD and more.....</p>
                    <br />
                    <button className='text-xl text-white font-semibold bg-cyan-900 hover:bg-cyan-500 hover:font-bold hover:text-cyan-900 rounded-2xl px-8 py-2'
                        onClick={() => navigate('/underconstruction')}
                    >Live Demo</button>

                </div>
                <div>
                    <img className='sm:mt-16 w-[700px] rounded-2xl' src={camera} alt="" />
                </div>
            </div>


            {/* Users Short Review section */}
            <div className='bg-cyan-900'>
                <div className=' text-6xl font-bold text-center text-gray-300 py-10'><p>Users Opinion Here!!</p></div>
                <div className='md:grid md:grid-cols-3 gap-10 py-10 px-10 '>

                    {newReview.map(review =>
                        <Card key={review.index} review={review}></Card>)
                    }
                </div>
                <div className='text-center pb-20'>
                    <button className='bg-cyan-900 hover:bg-cyan-500 text-gray-200 font-semibold hover:text-cyan-900 border rounded-lg px-6 py-2 items-center' onClick={() => navigate('/reviews')}>
                        More Comments
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;