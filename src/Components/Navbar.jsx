import React, { useState } from 'react'
import {Link} from 'react-scroll'
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const Navbar = () => {
    const  [click,setclick]=useState(false);
    const handle=()=> setclick(!click);
    const content=<>
    <div className='lg:hidden block absolute top-16 w-full ring-fuchsia-300 left-0 right-0 bg-blue-700'>
      
            <ul className='text-center text-xl'>
            <Link to="Home" smooth={true} spy={true}><li>Home</li></Link>

<Link to="Job" smooth={true} spy={true}><li>Job</li></Link>
<Link to="Blog Post" smooth={true} spy={true}><li>Blog Post</li></Link>
<Link to="Company" smooth={true} spy={true}><li>Company</li></Link>
<Link to="Notifications" smooth={true} spy={true}><li>Notifications</li></Link>
<Link to="Support" smooth={true} spy={true}><li>Support</li></Link>

<Link to="Profile" smooth={true} spy={true}>
        <li className='text-center ml-60'><img className='w-5 rounded-full border-1' src="https://th.bing.com/th/id/OIP.FlFbGc_ui_bVLHN3TfGsxQHaHa?rs=1&pid=ImgDetMain" alt="profile" srcset="" /></li>
      </Link>

            </ul>
            
            </div></>
  return (
    <div className='sticky top-0 opacity-80'>
        <nav  className=' bg-lime-200 justify-between  flex p-3 cursor-pointer   bg-white-400 items-center'>
        <a href="#" id="logo" className='flex gap-2 items-center'>
         <img className='max-w-12 max-h-12 rounded-full object-cover' src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQumBDVsn-16viIQ9pFnRB2awDWgjZ87c57xQ&s"alt="logo"  />
       <span className='text-lg font-medium '>Job Dhundo</span>
        </a>
        <div className='lg:flex md:flex lg:flex-1  justify-evenly  items-center font-normal hidden'>
        <div><ul className=' flex text-cyan-950 space-x-7 text-xl font-bold font-mono'>
        <Link spy={true}  smooth={true} to='Home'><li className='hover:underline'>Home</li></Link>

          <Link spy={true}  smooth={true} to='Job'><li className='hover:underline'>Job</li></Link>
        <Link spy={true}  smooth={true} to='Blog Post'><li className='hover:underline'>Blog-Post</li></Link>
       <Link spy={true} smooth={true}  to='Company'> <li className='hover:underline'>Company</li></Link>
     <Link  spy={true} smooth={true} to='Notification'> <li className='hover:underline'>Notification</li></Link>  
     <Link spy={true}  smooth={true} to='Support'><li className='hover:underline'>Support</li></Link>

        </ul>
        </div>

        <div  ><ul className='flex text-center gap-3'><li className='text-xl bg-amber-200 w-30 
         h-10 font-bold py-1   rounded-2xl  border-2  text-blue-400'>Login</li>
        <li><img className='w-10  rounded-full border-1' src="https://th.bing.com/th/id/OIP.FlFbGc_ui_bVLHN3TfGsxQHaHa?rs=1&pid=ImgDetMain" alt="profile" srcset="" /></li></ul>
        </div>
      </div>  
        <div>
          {click&&content}
        </div>
        <button className='block sm:hidden transition' onClick={handle}>{click?<ImCross/>:<GiHamburgerMenu/>}</button>
      </nav>

    </div>
  )
}

export default Navbar
