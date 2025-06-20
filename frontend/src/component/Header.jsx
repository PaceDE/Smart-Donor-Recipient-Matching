import React from 'react';
import { Link, useLocation } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandHoldingDroplet,
  faTruckDroplet,
  faHome,
  faUser,
  faCircleQuestion
} from '@fortawesome/free-solid-svg-icons';

const menuItems = [
  { path: '/request', label: 'Request', icon: faHandHoldingDroplet },
  { path: '/donate', label: 'Donate', icon: faTruckDroplet },
  { path: '/home', label: 'Home', icon: faHome },
  { path: '/profile', label: 'Profile', icon: faUser },
  { path: '/about', label: 'About Us', icon: faCircleQuestion }
];

function Header() {
  const location = useLocation();

  return (
    <div className="h-screen w-32 bg-white shadow-xl border-r border-gray-100">
      <div className="h-full flex flex-col justify-center items-center">
        <div className="absolute top-5 mb-10">
          <div className="text-red-500 text-2xl font-bold italic">AquaLink</div>
          <div className="h-1 bg-red-400 w-full mt-1 rounded-full"></div>
        </div>
        
        <nav className="w-full">
          <ul className="flex flex-col items-center space-y-6">
            {menuItems.map((item, index) => {
              const isActive = location.pathname === item.path;

              return (
                <li key={index} className="w-full flex justify-center">
                  <Link
                    to={item.path}
                    className={`flex flex-col items-center p-4 w-20 transition-all duration-300 ease-in-out 
                      ${isActive 
                        ? 'text-white bg-red-500 rounded-xl shadow-lg transform -translate-y-1' 
                        : 'text-red-500 hover:bg-red-50 rounded-xl hover:shadow-sm'
                      }`}
                  >
                    <FontAwesomeIcon 
                      icon={item.icon} 
                      className={`text-xl mb-2 ${isActive ? 'scale-110 text-white' : 'text-red-500'}`} 
                    />
                    <span className={`text-xs font-medium ${isActive ? 'text-white' : 'text-red-500'}`}>
                      {item.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        
        <div className="absolute bottom-5 text-red-400 text-xs text-center opacity-70">
          © 2025 <br />
          
        </div>
      </div>
    </div>
  );
}

export default Header;