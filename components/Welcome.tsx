'use client';
import Image from 'next/image'

const Welcome = () => {
  return (
    <div className="bg-white h-[2296px] pt-20 pl-20 pr-20 w-full">
        <div className="flex flex-row flex-wrap">
            
              <Image 
            src="/med.jpg"
            alt='logo'
            width={610}
            height={417}
            className='object-contain'/>

            <div className=' pl-10 pt-20  '>
                <h2 className='font-montserrat font-semibold text-left text-4xl max-w-[380px]  '>welcome to DonoH</h2>

                <p className=' font-montserrat text-left text-[#111010] font-semibold max-w-[440px]'> DonoH is a Digital non-profit organization established to render
                     the service of enabling patients to get
            adequate help from good-willed individuals and organizations who make generous
             donations to assist them.</p>
            </div>
        </div>

        <div className="flex  flex-row-reverse flex-wrap justify-around  pt-10">
            
      
        <Image 
          src="/medhelp.jpg"
          alt='logo'
          width={610}
          height={417}
          className='object-contain'/>

          <div className='text-left ml-10'>
          <h2 className='font-montserrat font-semibold text-left text-4xl  max-w-[380px]  '>Goals</h2>
          <p className=' font-montserrat text-left text-[#111010] font-semibold'>To help patients get access to funding for their medical treatments.</p>
            <p className=' font-montserrat text-left text-[#111010] font-semibold'>To help patients seamlessly attract donors for financial support.</p>
            
             <p className=' font-montserrat text-left text-[#111010] font-semibold'>To reduce the death rate associated with lack of funds </p> 

          </div>

          </div>
 

 <div className='flex justify-center pt-10'>
    <h2 className='text-center font-montserrat font-semibold  text-4xl border-b-red-800 border-line border-b-8 '>Testimonials</h2>
 </div>

 <div className='pt-20 w-full grid grid-cols-1 sm:grid-cols-2 gap-8 text-left py-8 px-12 sm:px-0  '>

    <div className=''>
    <Image 
          src="/medtwo.jpg"
          alt='logo'
          width={400}
          height={278}
          className='object-contain'/>
          <h2>name: charity</h2>
          <p> I am thankful for this platform which made it possible for me receive the 
            financial help needed for my
                ailment.</p>
    </div>

    <div className=''>
    <Image 
          src="/smileblack copy.jpg"
          alt='logo'
          width={400}
          height={278}
          className='object-contain'/>
          <h2>name: charity</h2>
          <p> I am thankful for this platform which made it possible for me receive the 
            financial help needed for my
                ailment.</p>
    </div>

    <div className='hidden sm:block'>
    <Image 
          src="/smiledoc.jpg"
          alt='logo'
          width={400}
          height={278}
          className='object-contain'/>
          <h2>name: charity</h2>
          <p> I am thankful for this platform which made it possible for me receive the 
            financial help needed for my
                ailment.</p>
    </div>

    <div className='hidden sm:block'>
    <Image 
          src="/africadoc.jpg"
          alt='logo'
          width={400}
          height={278}
          className='object-contain'/>
          <h2>name: charity</h2>
          <p> I am thankful for this platform which made it possible for me receive the 
            financial help needed for my
                ailment.</p>
    </div>

  </div>
      </div>

  )
}

export default Welcome