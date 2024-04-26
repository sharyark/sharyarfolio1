

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import { educationInfo } from '../Data';
const Portfolio = () => {

  const renderEducationCards = () => {
    return educationInfo.map((education, index) => (
      <Link key={index} to={education.url} className="max-w-4xl mx-auto bg-gray-200 rounded-lg overflow-hidden shadow-lg mb-8 md:w-1/2 md:pr-4 block hover:scale-105 transform transition-transform duration-300 ease-in-out hover:bg-gray-200">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{education.title}</div>
          {education.institution && <p className="text-sm mb-2">Institution: {education.institution}</p>}
          {education.cgpa && <p className="text-sm mb-2">CGPA: {education.cgpa}</p>}
          {education.year && <p className="text-sm mb-2">Year: {education.year}</p>}
          {education.platform && <p className="text-sm mb-2">Platform: {education.platform}</p>}
          {education.description && <p className="text-sm mb-2">{education.description}</p>}
        </div>
      </Link>
    ));
  };

  return (
    <div className=" bg-gray-400">
     <div className="container mx-auto bg-gray-320 px-4 py-8">
     <h1 className="text-3xl font-bold mb-4">Education</h1>
      <p className="text-lg mb-4">I hold a Bachelor of Science degree in Computer Science from <strong><a href="https://www.uaar.edu.pk/index.php">PMAS-Arid Agriculture University Rawalpindi</a></strong>, where I graduated with a CGPA of 3.74. Additionally, I possess an Associate Engineering Degree in Electrical Technology from <strong><a href="http://skillingpakistan.org/institutes/228208">KAMRA POLY TECHNIQUE INSTITUE</a></strong>. Furthermore, I have engaged in online learning through platforms such as YouTube and Coursera, where I pursued various topics relevant to computer science and electrical technology. Moreover, I have completed a Building Electrician Course at <strong><a href="https://navttc.gov.pk/">NEVTCC</a></strong>, where I gained hands-on experience in practical installation of electrical wiring and related skills.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {renderEducationCards()}
      </div>
      {/* Add your picture and small titles here */}
     </div>
    </div>
  );
};

export default Portfolio;
