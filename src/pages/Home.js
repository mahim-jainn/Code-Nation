import React from 'react'
import VideoPlayer from '../Components/VideoPlayer';

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className="text-3xl mb-6">The ultimate coding website. Everything you need at one place.</h1>
      <VideoPlayer/>
    </div>
  )
}

export default Home;
