import { useState } from "react";
import { NavLink } from "react-router-dom"

export const HomePage =()=>{
    const [playVideo, setPlayVideo] = useState(false);
    const [playVideo2, setPlayVideo2] = useState(false);
    const [playVideo3, setPlayVideo3] = useState(false);

    const handlePlay = () => {
      setPlayVideo(true);
    };
    const handlePlay2 = () => {
        setPlayVideo2(true);
      };
      const handlePlay3 = () => {
        setPlayVideo3(true);
      };


    

return(<div className="containerHome">
    <div className="containerHomeImg">
        <p>Live is back in stock</p>
        <NavLink className={"homeLink"}>Shop Now</NavLink>

    </div>
    <div className="HomeGetMove">
        <h3>Get  started with Move</h3>
        <div className="MoveVidDiv">
        {!playVideo ? (
        <div style={{ position: 'relative', cursor: 'pointer' }} onClick={handlePlay}>
          {/* Custom Thumbnail */}
          <img
            src="https://img.youtube.com/vi/_c4lz85pOLc/hqdefault.jpg"
            alt="YouTube Thumbnail"
            style={{ width: '100%', maxWidth: '560px' }}
          />
          {/* Play Button */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
        left: '50%',
              transform: 'translate(-50%, -50%)',
              background: 'rgba(0, 0, 0, 0.5)',
              borderRadius: '50%',
              padding: '15px',
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      ) : (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/_c4lz85pOLc?autoplay=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}


{!playVideo2 ? (
        <div style={{ position: 'relative', cursor: 'pointer' }} onClick={handlePlay2}>
          {/* Custom Thumbnail */}
          <img
            src="https://img.youtube.com/vi/_UQj8c6MaZU/hqdefault.jpg"
            alt="YouTube Thumbnail"
            style={{ width: '100%', maxWidth: '560px' }}
          />
          {/* Play Button */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
        left: '50%',
              transform: 'translate(-50%, -50%)',
              background: 'rgba(0, 0, 0, 0.5)',
              borderRadius: '50%',
              padding: '15px',
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      ) : (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/_UQj8c6MaZU?autoplay=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
       {!playVideo ? (
        <div style={{ position: 'relative', cursor: 'pointer' }} onClick={handlePlay}>
          {/* Custom Thumbnail */}
          <img
            src="https://img.youtube.com/vi/5Q1EHEjbuhA/hqdefault.jpg"
            alt="YouTube Thumbnail"
            style={{ width: '100%', maxWidth: '500px' }}
          />
          {/* Play Button */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
        left: '50%',
              transform: 'translate(-50%, -50%)',
              background: 'rgba(0, 0, 0, 0.5)',
              borderRadius: '50%',
              padding: '15px',
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      ) : (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/5Q1EHEjbuhA?autoplay=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
</div>
      

       
        </div>
    
        
      


    

    
</div>)

} 