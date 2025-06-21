import React from 'react';
import logo from '../assets/bloodlink-logo.svg';
import { Link, useLocation,Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandHoldingDroplet,
  faTruckDroplet,
  faHome,
  faUser,
  faCircleQuestion
} from '@fortawesome/free-solid-svg-icons';

const menuItems = [
  { path: '/home/request', label: 'Request', icon: faHandHoldingDroplet },
  { path: '/home/donate', label: 'Donate', icon: faTruckDroplet },
  { path: '/home', label: 'Home', icon: faHome },
  { path: '/home/profile', label: 'Profile', icon: faUser },
  { path: '/home/about', label: 'About Us', icon: faCircleQuestion }
];

function Sidebar() {
  const location = useLocation();

  return (
    <aside className="h-screen w-32 bg-white shadow-xl border-r border-gray-100">
      <div className="h-full flex flex-col justify-center items-center">
        <div className="absolute top-5 mb-10">
          <img src={logo}/>
        </div>
        
        <nav className="w-full">
          <ul className="flex flex-col items-center space-y-6">
            {menuItems.map((item, index) => {
              const isActive = location.pathname === item.path;

              return (
                <li key={index} className="w-full flex justify-center">
                  <Link
                    to={item.path}
                    className={`flex flex-col items-center p-3 w-20 transition-all duration-300 ease-in-out 
                      ${isActive 
                        ? 'text-white text-sm bg-red-500 rounded-xl shadow-lg transform -translate-y-1' 
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
    </aside>
   
  );
}

export default Sidebar;