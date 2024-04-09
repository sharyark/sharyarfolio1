import React from 'react';
import gred1 from '../Images/gred.jpg';
import gred2 from '../Images/gred1.jpg';
import './dae.css'; // Import the CSS file

function Gred() {
  return (
    <main className="flex flex-col items-center  inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://w0.peakpx.com/wallpaper/103/100/HD-wallpaper-razer-logo-red-razer-computer-logo.jpg')" }}>
      <img src={gred1} alt="" className="my-2 small-image" /> {/* Small image */}
      <img src={gred2} alt="" className="my-2 medium-image" /> {/* Small image */}
    </main>
  );
}

export default Gred;
