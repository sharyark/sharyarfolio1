import React from 'react';
import project1 from "./project1.gif"
import project2 from "./project2.png"
import project3 from "./project3.png"
import project4 from "./project4.jpeg"

function Projects() {
  // Data for each card
  const cardData = [
    {
      id: 1,
      title: "Iot base attendence management system ",
      description: "The Face Recognition System aims to streamline attendance management and surveillance processes in educational institutions and organizations. Traditional methods of attendance tracking are often time-consuming and prone to errors. This system leverages facial recognition technology to automatically identify individuals and mark their attendance, thus saving time and improving accuracy             . ",
      imageSrc: project1,
      buttonText: "Read more",
      buttonLink: "https://github.com/sharyark/Final_year_project-bscs-"
    },
    {
      id: 2,
      title: "AI Base hand gesture",
      description: "This project uses a webcam and Mediapipe library to recognize hand gestures and displays the number on a 7-segment display. It includes a Python script, gesture.py, which captures the video from the webcam, processes it using Mediapipe library to recognize the hand gesture and displays the number on a 7-segment display using an Arduino board connected to the computer via USB.click on pic to see video",
      imageSrc: project2,
      buttonText: "Read more",
      buttonLink: "https://github.com/sharyark/gesture-arduino_7segment"
    },
    {
      id: 3,
      title: "Movie recomender system",
      description: "movie recommender system using pandas sklearn here are few steps in which project are formed      1.collected data form kaggel      2.preprocesse the data(clean the columns the combine all string in on columns known tags)      3.make each movies vector (bag of word technique is used)4.find the distance or similarity of movie between them      5.retuen the top 5 most similar movies",
      imageSrc: project3,
      buttonText: "Read more",
      buttonLink: "https://github.com/sharyark/Movie_reomender_system"
    },
    {
      id: 3,
      title: "Smart car",
      description: "...",
      imageSrc: project4,
      buttonText: "click me to see video",
      buttonLink: "https://web.facebook.com/sharyar.shary.5243/videos/958427622410554/"
    },
  ];


  return (
    <div className="containerA bg-gray-600" >
      <div className='flex flex-wrap justify-center'>
        {/* Map over cardData array and render each card */}
        {cardData.map((card, index) => (
          <React.Fragment key={index}>
            <div className={`w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4`}>
              <div className="max-w-4xl widthA mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href={card.buttonLink} target='_blank'>
                  <img className="rounded-t-lg" src={card.imageSrc} alt="" />
                </a>
                <div className="p-5">
                  <a href={card.buttonLink} target='_blank'>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{card.title}</h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400" >{card.description}</p>
                  <a href={card.buttonLink} target='_blank' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    {card.buttonText}
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {(index + 1) % 2 === 0 && <div className="w-full flex justify-center"></div>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Projects;


// import React from 'react';
// import "./Projects.css"
// import project1 from "./project1.gif"
// import project2 from "./project2.png"
// import project3 from "./project3.png"
// function Projects() {
//   // Data for each card
//   const cardData = [
//     {
//       id: 1,
//       title: "Iot base attendence management system ",
//       description: "The Face Recognition System aims to streamline attendance management and surveillance processes in educational institutions and organizations. Traditional methods of attendance tracking are often time-consuming and prone to errors. This system leverages facial recognition technology to automatically identify individuals and mark their attendance, thus saving time and improving accuracy             . ",
//       imageSrc: project1,
//       buttonText: "Read more",
//       buttonLink: "https://github.com/sharyark/Final_year_project-bscs-"
//     },
//     {
//       id: 2,
//       title: "AI Base hand gesture",
//       description: "This project uses a webcam and Mediapipe library to recognize hand gestures and displays the number on a 7-segment display. It includes a Python script, gesture.py, which captures the video from the webcam, processes it using Mediapipe library to recognize the hand gesture and displays the number on a 7-segment display using an Arduino board connected to the computer via USB.click on pic to see video",
//       imageSrc: project2,
//       buttonText: "Read more",
//       buttonLink: "https://github.com/sharyark/gesture-arduino_7segment"
//     },
//     {
//       id: 2,
//       title: "Movie recomender system",
//       description: "movie recommender system using pandas sklearn here are few steps in which project are formed      1.collected data form kaggel      2.preprocesse the data(clean the columns the combine all string in on columns known tags)      3.make each movies vector (bag of word technique is used)4.find the distance or similarity of movie between them      5.retuen the top 5 most similar movies",
//       imageSrc: project3,
//       buttonText: "Read more",
//       buttonLink: "https://github.com/sharyark/Movie_reomender_system"
//     },

//   ];

//   return (
//     <div className="containerA">
//     <div className='flex flex-wrap justify-center'>
//       {/* Map over cardData array and render each card */}
//       {cardData.map((card, index) => (
//         <div key={index} className={`w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4`}>
//           <div className="max-w-4xl widthA mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//             <a href={card.buttonLink}>
//               <img className="rounded-t-lg" src={card.imageSrc} alt="" />
//             </a>
//             <div className="p-5">
//               <a href={card.buttonLink}>
//                 <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{card.title}</h5>
//               </a>
//               <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{card.description}</p>
//               <a href={card.buttonLink} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//                 {card.buttonText}
//                 <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//                   <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//     </div>
//   );
// }

// export default Projects;
