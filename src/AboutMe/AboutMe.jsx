import React from 'react';
import './AboutMe.css'; // Import your CSS file for styling
import { aboutInfo } from '../Data';
import { skills } from '../Data';
const AboutMe = () => {
  // Object containing information for About Me
  // const aboutInfo = {
  //   story: "My name is Sharyar Khan. I am from Attock city Pakistan, and my life journey  began in the village name Shinka 2001. I started my educational journey in a government school in my village and later pursued my studies in electrical associate engineering from a technical college (located in kamra city) from 2016 to 2019. Afterward, I ventured into the world of computer science and obtained my degree from 2019 to 2023 from Arid university. These days, I'm deeply involved in the fields of React, Django, and Machine Learning. I find immense joy in exploring the realm of IoT, where I've undertaken various projects. The combination of electronics and IoT has always fascinated me, and I thoroughly enjoy experimenting with electronic components."
  // };

  // Array of skills with corresponding levels (0 to 100)
  // const skills = [
  //   { name: "React.js", level: 80 },
  //   { name: "Django", level: 70 },
  //   { name: "Machine Learning", level: 60 },
  //   { name: "IoT", level: 50 }
  // ];

  return (
    <div className="about-me-container color relative color">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://w0.peakpx.com/wallpaper/103/100/HD-wallpaper-razer-logo-red-razer-computer-logo.jpg')" }}></div>
      <div className="max-w-4xl mx-auto px-8 py-12 relative z-10">
        <h2 className="about-me-title text-4xl font-bold mb-8">My Story</h2>
        <p className="about-me-content text-2xl mb-8">{aboutInfo.story}</p>
        <div className="skills-container">
          <h3 className="skills-title text-3xl font-bold mb-4">Skills</h3>
          <ul className="skills-list">
            {skills.map((skill, index) => (
              <li key={index} className="skill-item">
                <span className="skill-name">{skill.name}</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: `${skill.level}%` }}></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
