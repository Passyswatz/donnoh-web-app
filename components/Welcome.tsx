'use client';
import Image from 'next/image'

const Welcome = () => {
  return (
    <div className="bg-white h-auto  pt-20 pl-20 pr-20 w-full text-black">

      {/* grid grid-cols-1 md:grid-cols-2 */}
      <div className="flex flex-col flex-wrap  item-center md:flex-row  item-center justify-center  pt-40">
            
            <Image 
          src="/med.jpg"
          alt='logo'
          width={654}
          height={531}
          className='object-contain  rounded-[10px] '/>

          <div className=''>
              <h2 className='font-montserrat font-semibold text-left text-4xl  '>Welcome to DonoH</h2>

              <p className=' font-montserrat text-left text-[#111010] font-semibold max-w-[400px]   '> DonoH is a Digital non-profit organization established to render
                   the service of enabling patients to get
          adequate help from good-willed individuals and organizations who make generous
           donations to assist them.</p>
          </div> 
      </div>

        <div className="flex  flex-col flex-wrap item-center  md:flex-row  item-center justify-center w-full h-auto pt-10">
            
      
        <Image 
          src="/medhelp.jpg"
          alt='logo'
          width={654}
          height={531}
          className='object-contain rounded-[10px] '/>

          <div className='pt-20'>
          <h2 className='font-montserrat font-semibold text-left text-4xl   max-w-[400px] '>Goals</h2>
          

          <ul  className="list-disc ">

            <li className=' font-montserrat text-left text-[#111010] font-semibold  max-w-[400px]'>To help patients get access to funding for their medical treatments.</li>
            <li className=' font-montserrat text-left text-[#111010] font-semibold  max-w-[400px]'>To help patients seamlessly attract donors for financial support.</li>
            
             <li className=' font-montserrat text-left text-[#111010] font-semibold  max-w-[400px]'>To reduce the death rate associated with lack of funds </li> 


          </ul>
         
          </div>

          </div>
 

 <div className='flex justify-center pt-10'>
    <h2 className='text-center font-montserrat font-semibold  text-4xl border-b-red-800 border-line border-b-8 '>Testimonials</h2>
 </div>

 <div className='pt-20  w-full h-auto grid grid-cols-1 sm:grid-cols-2 gap-8 text-left    '>

    <div className=''>
    <Image 
          src="/medtwo.jpg"
          alt='logo'
          width={400}
          height={278}
          className='object-contain'/>
          <h2 className='w-full'>name: charity</h2>
          <p className='max-w-[400px]'> I am thankful for this platform which made it possible for me receive the 
            financial help needed for my
                ailment.</p>
    </div>

    <div className=''>
    <Image 
          src="/smileblack.jpg"
          alt='logo'
          width={400}
          height={278}
          className='object-contain'/>
          <h2 className='max-w-[400px] '>name: charity</h2>
          <p className='max-w-[400px] '> I am thankful for this platform which made it possible for me receive the 
            financial help needed for my
                ailment.</p>
    </div>

    <div className=''>
    <Image 
          src="/smiledoc.jpg"
          alt='logo'
          width={400}
          height={278}
          className='object-contain'/>
          <h2  className='max-w-[400px]'>name: charity</h2>
          <p className='max-w-[400px]'> I am thankful for this platform which made it possible for me receive the 
            financial help needed for my
                ailment.</p>
    </div>

    <div className=''>
    <Image 
          src="/africadoc.jpg"
          alt='logo'
          width={400}
          height={278}
          className='object-contain'/>
          <h2 className='max-w-[400px]'>name: charity</h2>
          <p className='max-w-[400px]'> I am thankful for this platform which made it possible for me receive the 
            financial help needed for my
                ailment.</p>
    </div>

  </div>
      </div>

  )
}

export default Welcome