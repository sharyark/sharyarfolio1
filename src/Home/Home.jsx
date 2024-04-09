import React from 'react';
import './Home.css';
import { homeInfo } from '../Data';
const Home = () => {
  // Object containing information for the Home component
  // const homeInfo = {
  //   title: "Welcome to My Portfolio",
  //   description: "Hello, Sharyar Khan! As a versatile web developer adept in React and Django, I'm also deeply immersed in the realms of data science and IoT. With a solid foundation in machine learning and experience in harnessing the power of Arduino for IoT projects, I'm equipped to tackle a wide array of challenges. Let's collaborate to bring your ideas to life and make an impact in the digital world!",
  // };

  return (
    <div className="bg-gray-100 min-h-screen relative color">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://w0.peakpx.com/wallpaper/103/100/HD-wallpaper-razer-logo-red-razer-computer-logo.jpg')" }}></div>
      <div className="max-w-4xl mx-auto px-8 py-12 relative z-10">
        <h1 className="text-4xl  font-bold mb-40">{homeInfo.title}</h1>
        <p className="text-2xl mb-8">{homeInfo.description}</p>
      </div>
    </div>
  );
}

export default Home;
