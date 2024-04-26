
import { useState } from "react";
import { Bars3Icon, MoonIcon, PaperAirplaneIcon, SunIcon, XMarkIcon } from "@heroicons/react/24/outline";
import sharyimage from './sharyarimage.png'
function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const navigation = [
    { name: 'Home', href: '/home', current: true },
    { name: 'About', href: '/about', current: false },
    { name: 'Academia', href: '/academia', current: false },
   
    { name: 'Projects', href: '/project', current: false },
    { name: 'Contact', href: '/contactme', current: false }
  ];

  return (
    <div className="app bg-gray-900 text-white">
      <nav>
        <div className="max-w-7xl mx-auto bg-gray-900">
          <div className="flex mx-auto justify-between w-5/6">
            {/* Logo and name */}
            <div className="flex items-center gap-16 my-12">
              <div>
              <a href="/" className="flex gap-1 font-bold text-white text-3xl items-center">
                <img src={sharyimage} alt="Logo" className="h-24 w-24 rounded-full mr-2" />
                <span>SharyarFolio</span>
            </a>
              </div>
            </div>
            {/* Primary and secondary navigation */}
            <div className="flex gap-6 bg-gray-900 text-white">
              <div className="hidden lg:flex items-center gap-8">
                {navigation.map((item, index) => (
                  <a key={index} href={item.href} className={item.current ? 'font-bold' : ''}>
                    {item.name}
                  </a>
                ))}
              </div>
              {/* Mobile navigation toggle */}
              <div className="lg:hidden flex items-center bg-gray-900 text-white">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  {toggleMenu ? <XMarkIcon className="h-6" /> : <Bars3Icon className="h-6" />}
                </button>
              </div>
              <div className="hidden xs:flex items-center gap-10">
                <div className="hidden lg:flex items-center gap-2">
                  <MoonIcon className="h-6 w-6" />
                  <SunIcon className="h-6 w-6" />
                </div>
                <div>
                  <button className="rounded-full border-solid border-2 border-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-gray-100">
                    Free Trial
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile navigation */}
        <div
          className={`fixed z-40 w-full bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12 origin-top duration-700 ${!toggleMenu ? "h-0" : "h-full bg-gray-900 text-white"}`}
        >
          <div className="px-8">
            <div className="flex flex-col gap-8 font-bold tracking-wider">
              {navigation.map((item, index) => (
                <a key={index} href={item.href} className="border-l-4 border-gray-600">
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
