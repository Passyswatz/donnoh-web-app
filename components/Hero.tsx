'use client';
import Image from 'next/image'
import CustomButton  from "./CustomButton"

const Hero = () => {

  const signUp = () => {

  }

  
  const signIn = () => {

  }

  return (
    <div className="relative h-[650px]">
      <Image
        src="/hero.jpg"
        alt="hero"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="z-0"
      />


<div className="pt-20 absolute " >
      <h1 className='font-montserrat font-semibold pl-10  text-6xl  '>
          It is through<br/> <span className='text-blue-500'>Giving</span> <br/>that we live.
        </h1>
     
        <h2 className='font-montserrat font-semibold pl-10 text-6xl'>
          <span className='text-blue-500'>Save</span> a Life Today
        </h2>
      </div>


      <div className='flex justify-center item center gap-10 relative pt-[35rem]'>
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

        <div className="bg-[#00B4D8] w-full h-auto flex justify-around p-12 m-auto text-white text-center font-montserrat" >

          <div className="p-2 pt-5">
                <h3>200H+</h3>
                <p>HUMANS IMPACTED</p>
          </div>

          <div className="p-2 pt-5">
                <h3>50+</h3>
                <p>ASSISTED</p>
          </div>

          <div className="p-2 pt-5">
                <h3>8K+</h3>
                <p>COLLABORATIONS</p>
          </div>

        </div>
    </div>


  )
}

export default Hero