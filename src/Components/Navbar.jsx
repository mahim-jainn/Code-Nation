import React from 'react'
import Logo1 from '../assets/logo1.svg';
import { Link } from 'react-router-dom';
import {toast} from 'react-hot-toast';

const Navbar = (props) => {

    let isLoggedIn = props.isLoggedIn;
    let setisLoggedIn = props.setisLoggedIn;
  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
        <Link to="/">
           <img src={Logo1} alt='Logo' width={250} height={50} loading='lazy'/>
        </Link>

        <nav>
            <ul className='flex gap-x-6'>
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/">About</Link>
                </li>

                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav>

        <div className='flex items-center gap-x-4'>
            {/* login signup logout dashboard */}

            { !isLoggedIn &&
                <Link to="/Login">
                    <button className='bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                        Log In
                </button>
                </Link>
            }
            { !isLoggedIn &&
                <Link to="/Signup">
                    <button className='bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                        Sign Up</button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/">
                    <button className='bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700'
                    onClick={()=>{
                        setisLoggedIn(false);
                        toast.success("Logged Out");
                    }}>Log Out</button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/Dashboard">
                    <button className='bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                        Dashboard</button>
                </Link>
            }
        </div>
    </div>
  )
}

export default Navbar;
