import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef(null);

  const navigation = [
    { name: 'Home', href: '/home', current: true },
    { name: 'About', href: '/about', current: false },
    { name: 'Academia', href: '/academia', current: false },
    { 
      name: 'Dailywork', 
      href: '/dailywork', 
      current: true, 
      dropdown: [
        { name: 'Work 1', href: '/work1' },
        { name: 'Work 2', href: '/work2' },
        { name: 'Work 3', href: '/work3' }
      ] 
    },
    { name: 'Projects', href: '/projects', current: false },
    { name: 'Contact', href: '/contact', current: false }
  ]; 

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    setIsMobile(!isMobile)
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640); // Adjust the breakpoint as needed
    };

    handleResize(); // Call once to set initial state
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gray-800 py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            className="h-20 w-20 rounded-full mr-4"
            src="https://scontent.fisb4-2.fna.fbcdn.net/v/t39.30808-6/316224586_501217458736941_2081625411014461883_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEJiT1nOEFBeK9Ulg95vzg6KXxVVC_iyLApfFVUL-LIsCuLqsCy5u6oZ9tM_Ty81q3weCZZSN7ZzsXoZma5cgzV&_nc_ohc=KskU9vYxrokAb72rFCd&_nc_zt=23&_nc_ht=scontent.fisb4-2.fna&oh=00_AfAMX6wlHMRxA1sswfx40Rm8AFGguolW2RNr9sozuyOQoA&oe=6614DDF0"
            alt="Logo"
          />
          <span className="text-white font-semibold my-10 text-2xl">Sharyar</span>
        </div>
        
        {/* Navigation links */}
        <div className="flex items-center space-x-4 ml-8">
          {isMobile ? (
            <button className="text-white font-bold" onClick={toggleDropdown}>
              Menu
            </button>
          ) : (
            navigation.map((item, index) => (
              <div key={index} className="relative">
                {item.dropdown ? (
                  <>
                    <button className="text-white font-bold" onClick={() => setDropdownOpen(!dropdownOpen)}>
                      {item.name}
                    </button>
                    {dropdownOpen && (
                      <div ref={dropdownRef} className="absolute top-full left-0 bg-gray-800 text-white py-2 px-4 mt-2 rounded">
                        {item.dropdown.map((subItem, subIndex) => (
                          <Link key={subIndex} to={subItem.href} className="block py-2 hover:bg-gray-700" onClick={closeDropdown}>
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className={`text-white ${item.current ? 'font-bold' : ''}`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;



// import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const dropdownRef = useRef(null);

//   const navigation = [
//     { name: 'Home', href: '/home', current: true },
//     { name: 'About', href: '/about', current: false },
//     { name: 'Academia', href: '/academia', current: false },
//     { 
//       name: 'Dailywork', 
//       href: '/dailywork', 
//       current: false, 
//       dropdown: [
//         { name: 'Work 1', href: '/work1' },
//         { name: 'Work 2', href: '/work2' },
//         { name: 'Work 3', href: '/work3' }
//       ] 
//     },
//     { name: 'Projects', href: '/projects', current: false },
//     { name: 'Contact', href: '/contact', current: false }
//   ]; 

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//     setIsMobile(!isMobile)
//   };

//   const closeDropdown = () => {
//     setDropdownOpen(false);
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 640); // Adjust the breakpoint as needed
//     };

//     handleResize(); // Call once to set initial state
//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setDropdownOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   return (
//     <nav className="bg-gray-800 py-6">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
//         {/* Logo */}
//         <div className="flex">
//           <img
//             className="h-20 w-20 rounded"
//             src="https://scontent.fisb4-2.fna.fbcdn.net/v/t39.30808-6/316224586_501217458736941_2081625411014461883_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEJiT1nOEFBeK9Ulg95vzg6KXxVVC_iyLApfFVUL-LIsCuLqsCy5u6oZ9tM_Ty81q3weCZZSN7ZzsXoZma5cgzV&_nc_ohc=KskU9vYxrokAb72rFCd&_nc_zt=23&_nc_ht=scontent.fisb4-2.fna&oh=00_AfAMX6wlHMRxA1sswfx40Rm8AFGguolW2RNr9sozuyOQoA&oe=6614DDF0"
//             alt="Logo"
//           />
//           <span className="text-white font-semibold my-10 text-2xl">SharyarFolio</span>
//         </div>
        
//         {/* Navigation links */}
//         <div className="flex items-center space-x-4 ml-8">
//           {isMobile ? (
//             <button className="text-white font-bold" onClick={toggleDropdown}>
//               Menu
//             </button>
//           ) : (
//             navigation.map((item, index) => (
//               <div key={index} className="relative">
//                 {item.dropdown ? (
//                   <>
//                     <button className="text-white font-bold" onClick={() => setDropdownOpen(!dropdownOpen)}>
//                       {item.name}
//                     </button>
//                     {dropdownOpen && (
//                       <div ref={dropdownRef} className="absolute top-full left-0 bg-gray-800 text-white py-2 px-4 mt-2 rounded">
//                         {item.dropdown.map((subItem, subIndex) => (
//                           <Link key={subIndex} to={subItem.href} className="block py-2 hover:bg-gray-700" onClick={closeDropdown}>
//                             {subItem.name}
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </>
//                 ) : (
//                   <Link
//                     to={item.href}
//                     className={`text-white ${item.current ? 'font-bold' : ''}`}
//                   >
//                     {item.name}
//                   </Link>
//                 )}
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Header;
