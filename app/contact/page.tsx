"use client"

import { CustomButton } from "@/components"

export default function page() {

  const sendsms = () => {

  }
  return (
    <main className='h-auto w-full bg-white text-black'>
        <div className='flex  flex-col justify-center item-center p-20  '>
            <h1 className='font-montserrat font-semibold text-5xl'>Contact us</h1>
            <p className='font-montserrat '>Any question or remarks? Just write us a message.</p>
        </div>

        <section className='flex  flex-col item-center  md:flex-row  item-center justify-center gap-8 text-black'>
        <div className='bg-[#00B4D8] h-auto w-full rounded-md mb-40' >

        <h1 className='font-montserrat font-semibold text-5xl'>Contact us</h1>
       <p className='font-montserrat '>say something to start a live chat!</p>

       <p>phone:07048100715</p>
       <p>gmail.com</p>
       <p>location "camp</p>

          


            
            </div>

       <div className=' h-auto  w-full text-black'>
           <form className='pl-20 pb-20 '>
            <div className='grid grid-cols-1 sm:grid-cols-2 '>
              <div>
              <label>First Name</label><br/>
               <input type='text' placeholder='firstname' className='border-b border-gray-600 py-1'/>
              </div>

              <div>

              <label>Last Name</label><br/>
            <input type='text' placeholder='lastname' className='border-b border-gray-600 py-1'/>

              </div>
         

            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2  pt-10 text-black'>
              <div>
              <label>Email Adress</label><br/>
            <input type='email' placeholder='enter email' className='border-b border-gray-600 py-1'/>
              </div>

              <div>

            <label>Phone Number</label><br/>
            <input type='number' placeholder='phone nubmer' className='border-b border-gray-600 py-1'/>

              </div>
         

            </div>

            <div className="pt-10">
            <label>Select Subject</label><br/>
            <select>
              <option>cancer injury</option>
              <option> kidney failure</option>
              <option>liver stone</option>
            </select>

            </div>

            <div className='pt-10'>

            <div>

         <label>Message</label><br/>
         <input type='text' placeholder='enter your message' className='border-b border-gray-600 px-6 py-1'/>

  </div>
              

            </div>

            <div className='flex justify-end pt-10'>
      <CustomButton 
      title="send message"
      btnType='submit'
  containerStyle="bg-[#C32C31] px-8 py-2 border-2 text-white border-[#C32C31] font-bold hover:bg-transparent hover:text-[#C32C31] rounded-5"
  handleClick={sendsms}/>
  </div>


         

           </form>

       </div>

        </section>
       
    </main>
  )
}
