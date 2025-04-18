import React from 'react'
import { Link } from 'react-router-dom'
import profilePic from "../Assets/avatar.jpg"
import ProfileMenu from '../Components/ProfileMenu'
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react";
import NotificationPanel from '../Components/NotificationPanel'
const ResNav = ({ isOpen }) => {

  const [openMenu, setOpenMenu] = useState(false);
  const [showNotification, setShowNotification] = useState(false);



  return (
    <AnimatePresence mode='wait'>
{isOpen &&
 <motion.div 
 initial={{opacity:0 ,y:-100}}
 animate={{opacity:1 ,y:0}}
 exit={{opacity:0 ,y:-100}}
 transition={{duration:0.3}}
 className='absolute top-21  right-1.5 w-50  h-screen z-20 lg:hidden'
>
    <div className='text-xl  bg-pink-300  font-semibold uppercase  rounded text-white py-5'>


        <ul className='flex flex-col  text-sm justify-center items-center gap-5'>
            <Link className='touch text-gray-900  hover:text-amber-50'  to="/Home"><li >Home</li></Link>
           <Link className='touch  text-gray-900  hover:text-amber-50'  to="/Blogs"> <li>Blogs</li></Link>
           <Link  className='touch  text-gray-900  hover:text-amber-50'  to="/Jobs"><li >Jobs</li></Link>
            <Link>
             <li className='touch  text-gray-900  hover:text-amber-50' onClick={() => setShowNotification(prev => !prev)} >Notifications</li></Link>
           <Link className='touch  text-gray-900  hover:text-amber-50'  to="/Join"><li>Join-Now</li></Link>
            
           <li onClick={() => setOpenMenu ((prev) => !prev)}>
            
            <img className='w-10  rounded-full border-1 cursor-pointer' src={profilePic} alt="Profile" />
          
          {openMenu && <ProfileMenu  closeMenu={() => setOpenMenu(false)} />}
          </li>

            </ul>
          </div>

        </motion.div>

}

{showNotification && (
  <NotificationPanel  onClose={() => setShowNotification(false)} />
)}
    </AnimatePresence>


  )
}

export default ResNav
