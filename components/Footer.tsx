'use client';
import CustomButton  from "./CustomButton"
import Image from "next/image";

const Footer = () => {

 
    const signUp = () => {

    }

    
    const signIn = () => {

    }
  return (
   <footer className="bg-[#00B4D8] h-[800px]  w-full">
    <div className=''>
        <h2 className="flex justify-center item-center font-bold text-2xl pt-20 text-white">It is through Giving that we live. </h2>
<p className=" flex justify-center item-center font-bold text-2xl pt-3  text-white">Save a Life Today</p>
    </div>
    

    <div className='mb-20 flex  flex-wrap justify-center  item-center gap-4 pt-10 sm:flex-wrap'>
 <CustomButton 
      title="Sign In"
      btnType='submit'
  containerStyle="bg-[#00B4D8]  px-7 py-2 border-2 text-white border-white font-bold hover:bg-white hover:text-[#00B4D8] rounded-md"
  handleClick={signIn}/>
      <CustomButton 
  title="Sign Up"
  btnType='submit'
      containerStyle="bg-white px-7 py-2 border-2 border-white text-[#00B4D8] font-bold hover:bg-[#00B4D8] hover:text-white rounded-md"
  handleClick={signUp}/>
  </div>

  <div className=" bg-white  max-w-[730px] m-auto pr-3 pl-3 pt-10  pb-10 flex flex-1  justify-between item-center ">
        <div className="">
            <p className="font-montserrat font-semibold text-[#00B4D8] text-1xl ">Subcribe  to our 
newsletter</p>
        </div>
        <div className="border-2 border-[#C32C31] flex justify-between">
  <input
    className="w-full   "
    type="text"
    placeholder="Enter your patience"
  />
  <CustomButton
    title="Submit"
    btnType="submit"
    containerStyle="bg-[#C32C31] px-7 py-2 border-2 border-[#C32C31] text-white font-bold hover:bg-[#00B4D8] hover:text-white"
    handleClick={signUp}
  />
</div>
  </div>

  <div className="flex flex-wrap gap-40 text-center justify-around items-center pt-20 bg-[#00B4D8]">
    <div className="gap-5">
<h2 className="text-white">navigation</h2>
<p>home</p>
<p>about us</p>
<p>contact us</p>
<p>blog</p>
<p>donate</p>
    </div>
    <div className="gap-5">
      <h2>what we do</h2>
     
<p>home</p>
<p>about us</p>
<p>contact us</p>
<p>blog</p>
<p>donate</p>
        </div>
        <div className="gap-5">
      <h2>legal</h2>
 
<p>home</p>
<p>about us</p>
<p>contact us</p>
<p>blog</p>
<p>donate</p>
        </div>
      

  </div>
  <div className="flex flex-wrap justify-around pt-10 bg-[#00B4D8]">
    <div className="">
    <Image 
            src="/DONOH  4 copy 3 1.png"
            alt='logo'
            width={150}
            height={80}
            className='object-contain'/>
        
    </div>
    <div className="pt-10 text-center">
      <p className="text-white">© 2023 DonoH . All Rights Reserved. </p>
    </div>
    <div className="flex flex-wrap gap-4 pt-10 rounded-full">
    <Image 
            src="/Facebook Icon.png"
            alt='logo'
            width={60}
            height={60}
            className='object-contain'/>
            
            <Image 
            src="/Linkedin Icon.png"
            alt='logo'
            width={60}
            height={60}
            className='object-contain'/>
            
            <Image 
            src="/Twitter Icon.png"
            alt='logo'
            width={60}
            height={60}
            className='object-contain'/>

    </div>
  </div>

   </footer>
  )
}

export default Footer