'use client';
import Link from 'next/link';
import Image from 'next/image';
import CustomButton from './CustomButton';
import  {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars , faXmark} from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {

    const [toggle, setToggle] = useState(false);
    const handleClick = ()=> {
      setToggle(!toggle)
    }

    const signUp = () => {

    }

    
    const signIn = () => {

    }
  return (
    <header className="w-full h-[90px] bg-white border-b ">
        <nav className='md:max-w-[1480px]  max-w-[600px] m-auto w-full h-full flex justify-between items-center'>
        <Link href="/" className='flex justify-center items-center'>
            <Image 
            src="/donohh.png"
            alt='logo'
            width={150}
            height={80}
            className='object-contain'/>
        </Link>


        <div className='hidden md:flex items-center'>
              <ul className='flex gap-4'>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
                <li> <Link href="/blog">Blog</Link></li>
                <li><Link href="/privacy">Privacy</Link></li>

               
              </ul>
            </div>


      
<div className='hidden md:flex gap-4'>
 <CustomButton 
      title="Sign In"
      btnType='submit'
  containerStyle="bg-[#C32C31] px-5 py-2 border-2 text-white border-[#C32C31] font-bold hover:bg-transparent hover:text-[#C32C31] rounded-md"
  handleClick={signIn}/>
      <CustomButton 
  title="Sign Up"
  btnType='submit'
      containerStyle="bg-transparent px-5 py-2 border-2 border-[#C32C31] text-[#C32C31] font-bold hover:bg-[#C32C31] hover:text-white rounded-md mr-10"
  handleClick={signUp}/>
  </div>
  <div className='md:hidden' onClick={handleClick}>
      <FontAwesomeIcon icon={toggle?faXmark:faBars} className="w-8 h-8" />
    </div>
 
        </nav>
       

    <div className={toggle?`absolute z-10 p-4 w-full px-8 bg-white md:hidden`: 'hidden'}>
      <ul className=''>
               <li  className='p-4 hover:bg-gray-100'><Link href="/" >Home</Link></li> 
               <li  className='p-4 hover:bg-gray-100'><Link  href="/about">About Us</Link></li> 
               <li  className='p-4 hover:bg-gray-100'><Link href="/contact">Contact Us</Link></li>
               <li  className='p-4 hover:bg-gray-100'><Link href="/blog">Blog</Link></li>
               <li  className='p-4 hover:bg-gray-100'><Link  href="/privacy">Privacy</Link></li>
             
               
               
                
              </ul>

              <div className='flex flex-col my-4 gap-4'>
              <CustomButton 
      title="Sign In"
      containerStyle="bg-[#C32C31] px-5 py-2 border-2 text-white border-[#C32C31] font-bold hover:bg-transparent hover:text-[#C32C31] rounded-md"
      handleClick={signIn}/>
          <CustomButton 
      title="Sign Up"
      containerStyle="bg-transparent px-5 py-2 border-2 border-[#C32C31] text-[#C32C31] font-bold hover:bg-[#C32C31] hover:text-white rounded-md "
      handleClick={signUp}/>
                </div>

      </div>
    </header>
  )
}

export default Navbar