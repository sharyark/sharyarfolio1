import React from 'react';

function ContactMe() {
  return (
    <div className="bg-gray-600 py-12" >
      <div className="container mx-auto mb-120">
        <h2 className="text-3xl font-bold text-white mb-6">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full md:w-3/4 mx-auto">
            <div className="bg-white shadow-md rounded-md p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-4">
                  <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                  </svg>
                  <span className="text-lg">Sharyar Khan</span>
                </li>
                <li className="flex items-center space-x-4">
                  <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                  </svg>
                  <span className="text-lg">ksharyar12345@gmail.com</span>
                </li>
                <li className="flex items-center space-x-4">
                  <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                  </svg>
                  <span className="text-lg">+92 326 5652667</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-3/4 mx-auto">
            <div className="bg-white shadow-md rounded-md p-6">
              <h3 className="text-xl font-semibold mb-4">Social Links</h3>
              <ul className="space-y-4">
                <li>
                  <a href="https://www.linkedin.com/in/sharyar-khan-2014251a5" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-lg">
                    <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/sharyark" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-lg">
                    <svg className="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 19c0 1.104-.896 2-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2h5v2H7v14h10V7h-3V5h5a2 2 0 012 2v14z"/>
                    </svg>
                    <span>GitHub</span>
                  </a>
                </li>
                <li>
                  <a href="https://profile.indeed.com/?hl=en_PK&co=PK&from=gnav-homepage&_ga=2.211818384.563479035.1714170498-870775526.1710904210" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-lg">
                    <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                    </svg>
                    <span>Indeed</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
