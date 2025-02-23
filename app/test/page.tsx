"use client";
import { TbLayoutSidebarRightCollapse } from "react-icons/tb";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";

import { useState } from "react";
const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='hidden sm:block h-screen'>
      
      <div className={`absolute bg-transparent backdrop-blur-sm border-2 broder-gray-700 h-full p-4 z-50 transition-all duration-200 ease-in ${isOpen ? "w-64" : "w-16"}`}>
        <div className='flex justify-between'>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <TbLayoutSidebarLeftCollapse className="w-10 h-10 text-gray-600 transition-all  ease-out"/> : <TbLayoutSidebarRightCollapse className="w-10 h-10 text-gray-600  ease-in transition-all"/>}
          </button>
        </div>
      </div>
      
      <div className={`${isOpen ? "" : ""} flex flex-col p-4`}>
        
        
        <p className='text-9xl text-center'>Main area</p>
        <p>aofiejfa amand aojfeoi aejfoa</p>
        <p>jaoweifj</p>
      </div>
    </div>
  );
};

export default Page;
