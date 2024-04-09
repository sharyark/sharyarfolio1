import React from 'react';
import dae1 from '../Images/DAE1.jpg';
import dae2 from '../Images/DAE2.jpg';
import dae3 from '../Images/DAE3.jpg';
import './dae.css'; // Import the CSS file

function DAE() {
  return (
    <main className="flex flex-col items-center  inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://w0.peakpx.com/wallpaper/103/100/HD-wallpaper-razer-logo-red-razer-computer-logo.jpg')" }}>
      <img src={dae1} alt="" className="my-2 small-image" /> {/* Small image */}
      <img src={dae2} alt="" className="my-2 medium-image" /> {/* Small image */}
      <img src={dae3} alt="" className="my-2 normal-image" /> {/* Normal sized image */}
    </main>
  );
}

export default DAE;
