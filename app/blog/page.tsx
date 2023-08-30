'use client'
import Image from "next/image"

export default function page() {
  return (
  

<main  className="bg-white text-black">
    <section className="pt-10 pl-20 flex justify-center">
        <h2 className="font-montserrat font-semibold text-6xl text-left text-black">Our Top Stories</h2>
      
    </section>

    <section className=" pt-20 pb-10 pl-8 w-full h-auto grid grid-cols-1 item-center sm:grid-cols-4 gap-8 text-black">

      
    <div className="  bg-white w-fit shadow-md shadow-gray-400 ">
        <Image 
          src="/blog.png"
          alt='logo'
          width={400}
          height={268}
          className='object-contain'/>
          <h2 className='w-full pl-3 pt-3 text-red-700 '>Access to medical aid now 
feasible with DonoH</h2>

<p className="w-full pl-3 pt-5">Ifeanyi Micheal</p>
          <p className="w-full pl-3 pt-5">DonoH as a Digital platform was developed to
connect patients with kind hearted individuals/
Organizations but has no connection with the
general public who sign up for the sole purpose
of providing or receiving this aid.</p>

        </div>
        <div className="  bg-white w-fit shadow-md shadow-gray-400 ">

        <Image 
          src="/blog2.png"
          alt='logo'
          width={400}
          height={268}
          className='object-contain'/>
          <h2 className='w-full pl-3 pt-3 text-red-700'>Exploring the community in DonoH</h2>

          <p className="w-full pl-3 pt-5">Mark Smith</p>
          <p className="w-full pl-3 pt-5">DonoH as a Digital platform was developed to
connect patients with kind hearted individuals/
Organizations but has no connection with the
general public who sign up for the sole purpose
of providing or receiving this aid.</p>

        </div>

        <div className="  bg-white w-fit shadow-md shadow-gray-400 ">

        <Image 
          src="/blog3.png"
          alt='logo'
          width={400}
          height={268}
          className='object-contain'/>
          <h2 className='w-full pl-3 pt-3 text-red-700'> The importance of giving</h2>

          <p className="w-full pl-3 pt-5">Jane Eze</p>
          <p className="w-full pl-3 pt-5">DonoH as a Digital platform was developed to
connect patients with kind hearted individuals/
Organizations but has no connection with the
general public who sign up for the sole purpose
of providing or receiving this aid.</p>

        </div>

    </section>

    </main>
  )
}
