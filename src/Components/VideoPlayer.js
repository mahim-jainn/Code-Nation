import sampleVideo from '../assets/CodeN.mp4';

const VideoPlayer = () => {
  return (
    <video width="800" 
    autoPlay 
    loop 
    muted 
    playsInline 
    className="w-full max-w-2xl">
      <source src={sampleVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
