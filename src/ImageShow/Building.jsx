import React from 'react';
import building1 from '../Images/BUILDINGELECTRICIAN.jpg';
import './dae.css'; // Import the CSS file

function Building() {
  return (
    <main className="flex flex-col items-center  inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://w0.peakpx.com/wallpaper/103/100/HD-wallpaper-razer-logo-red-razer-computer-logo.jpg')" }}>
      <img src={building1} alt="" className="my-2 small-image" /> {/* Small image */}
    </main>
  );
}

export default Building;
