"use client"
import Image from "next/image"

export default function page() {
  return (
    <main  className="bg-white text-black">
    <section className="pt-10 pl-20">
        <h2 className="font-montserrat font-semibold text-6xl text-left text-black">We are a team of <br/> <span  className='text-blue-500'>creators </span> and <span  className='text-blue-500'> innovators</span> </h2>
        <p className="font-montserrat ">DonoH is a Digital non-profit organization established to render the service of enabling patients to get adequate help from good-willed individuals and 
      organizations who make generous donations to assist them. This platform is solely non-governmental, developed by a team of tech ADA with the
        primary aim of supporting patients who are fully registered in the platform gain access to all forms of medical aid.</p>
    </section>

    <section className="pt-20 pb-10 pl-8 w-full h-auto grid grid-cols-1 item-center sm:grid-cols-4 gap-8 text-black">

        <div className="rounded-b-md  bg-white w-fit shadow-md shadow-gray-400 ">
        <Image 
          src="/mask9.png"
          alt='logo'
          width={240}
          height={280}
          className='object-contain'/>
          <h2 className='w-full pl-3 '> Ifeanyi Michael</h2>
          <p className="w-full pl-3 ">Data Scientist</p>

        </div>
        
        <div className="rounded-b-md  bg-white w-fit shadow-md shadow-gray-400 ">
        <Image 
          src="/mask1.png"
          alt='logo'
          width={240}
          height={280}
          className='object-contain'/>
          <h2 className='w-full pl-3'>Udoka Success</h2>
          <p className="w-full pl-3">Product Manager</p>


        </div>
        
        <div className=" rounded-b-md  bg-white w-fit shadow-md shadow-gray-400">
        <Image 
          src="/mask2.png"
          alt='logo'
          width={240}
          height={280}
          className='object-contain'/>
          <h2 className='w-full pl-3'>Akeem Abiodun</h2>
          <p className="w-full pl-3">Data Scientist</p>

        </div>
        

        <div className="rounded-b-md  bg-white w-fit shadow-md shadow-gray-400">
        <Image 
          src="/mask3.png"
          alt='logo'
          width={240}
          height={280}
          className='object-contain'/>
          <h2 className='w-full pl-3'>Glory Okafor</h2>
          <p className="w-full pl-3"> Frontend Developer</p>

        </div>
        
        <div className=" rounded-b-md  bg-white w-fit shadow-md shadow-gray-400">
        <Image 
          src="/mask4.png"
          alt='logo'
          width={240}
          height={280}
          className='object-contain'/>
          <h2 className='w-full pl-3'>Onwuli Valentina</h2>
          <p className="w-full pl-3"> Frontend Developer</p>

        </div>
        
        <div className="rounded-b-md  bg-white w-fit shadow-md shadow-gray-400">
        <Image 
          src="/mask5.png"
          alt='logo'
          width={240}
          height={280}
          className='object-contain'/>
          <h2 className='w-full pl-3'>Ude Abigail</h2>
          <p className="w-full pl-3"> Frontend Developer</p>

        </div>
        
        <div className="rounded-b-md  bg-white w-fit shadow-md shadow-gray-400">
        <Image 
          src="/mask6.png"
          alt='logo'
          width={240}
          height={280}
          className='object-contain'/>
          <h2 className='w-full pl-3'>Chukwuma Kingsley</h2>
          <p className="w-full pl-3"> Data Scientist</p>

        </div>
        
        <div className="rounded-b-md  bg-white w-fit shadow-md shadow-gray-400">
        <Image 
          src="/mask7.png"
          alt='logo'
          width={240}
          height={280}
          className='object-contain'/>
          <h2 className='w-full pl-3'>Rabiu Aisha</h2>
          <p className="w-full pl-3">Product Designer</p>

        </div>
        
        <div className="rounded-b-md  bg-white w-fit shadow-md shadow-gray-400">
        <Image 
          src="/mask8.png"
          alt='logo'
          width={240}
          height={280}
          className='object-contain'/>
          <h2 className='w-full pl-3'>Anukam Chidalu</h2>
          <p className="w-full pl-3"> Frontend Developer</p>

        </div>
        
        <div className="rounded-b-md  bg-white w-fit shadow-md shadow-gray-400">
        <Image 
          src="/mask10.png"
          alt='logo'
          width={240}
          height={280}
          className='object-contain'/>
          <h2 className='w-full pl-3'>Anukam Chidalu</h2>
          <p className="w-full pl-3"> Frontend Developer</p>

        </div>
        

 
         

        
        

          

    </section>


    </main>
  )
}
