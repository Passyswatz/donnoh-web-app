'use client'
import { CustomButton } from "@/components"

export default function page() {
    const decline = () => {

    }

    
    const accept = () => {

    }

  return (
 <main className="w-full h-auto text-black ">
    <section className="w-full h-[134px] bg-[#00B4D8] flex justify-center item-center">
        <h1 className=" font-montserrat font-semibold text-5xl pt-10 text-white  ">Terms Of Service</h1>

    </section>

    <section className="w-full h-auto bg-white text-black ">
        <div  className="m-auto p-20 text-black ">
            <h3  className=" font-montserrat font-semibold pt-5 ">TERMS AND CONDITIONS</h3>
            <p className=" font-montserrat pt-3">Prime Team Digital Solutions (referred to as us or we) is a business in Nigeria. We operate the website www.donoh.org (the Website)
These are the Terms and Conditions which govern each use you make of the donation services provided through the Website.
These Terms and Conditions apply separately to each single donation that you make. Except as specified by you, they do not form a contract 
allowing for future or successive transactions to be set up. By confirming on the Website that you wish to make or receive a donation you agree
 to be bound by these Terms and Conditions for that donation.</p>

 <h3 className=" font-montserrat font-semibold pt-5">(1)The Donation Services</h3>
 <p className=" font-montserrat pt-3">We will use your donation strictly as you have specified. All payments through the Website are to be made by payment card or via PayPal.
Once you confirm to us through the Website that you wish to proceed with your donation your transaction will be processed through our
payment services provider, Paystack. By confirming that you wish to proceed with your donation you authorize Paystack to request funds from 
your credit, debit, or PayPal card  provider. Your payment will be charged 1% site maintenance fee. All payments are irrevocable once transferred 
to the intended recipient.</p>

<h3 className=" font-montserrat font-semibold pt-5">(2)Unauthorized Use of Card</h3>
<p className=" font-montserrat pt-3">If you become aware of fraudulent use of your card, or if it is lost or stolen, you must notify your card provider.</p>

<h3 className=" font-montserrat font-semibold pt-5">(3) Your Information</h3>
<p className=" font-montserrat pt-3">
Before we can process a donation you must provide us with (i) your name, email address; and (ii) details of the credit or debit card that you wish 
to use to fund the donation. We will use this information to process your donation. It is your responsibility to ensure you have provided us with the 
correct information. When you submit your payment details, these details will be transferred to our payment provider Paystack and your payment
data will be collected and processed securely by them. You should make sure that you are aware of Paystack's terms and conditions, which are 
different from our own, to ensure that you are comfortable with how they will process your personal data before you make a donation. 
We won’t share your personal details with any other third party other than is set out in our Privacy Policy.  Our Privacy Policy forms part of these
 Donation Payment Terms and Conditions. And by agreeing to these Terms and Conditions, you are also agreeing to the way we use and protect 
your personal information in line with our Privacy Policy.</p>

<h3 className=" font-montserrat font-semibold p-5">(4) Refund Policy</h3>
<p className=" font-montserrat pt-3">
If you make a donation in error, please contact us either by email at info@donoh.org, or by phone at +234 7066 362 982 within 24 hours and a full refund will be
 made to you if it is confirmed the intended recipient has not been paid.</p>

 <h3 className=" font-montserrat font-semibold p-5 ">(5) General</h3>

            <p className=" font-montserrat pt-3">
We reserve the right to amend these Donation Payment Terms and Conditions at any time. These Donation Payment Terms and Conditions are 
governed by Laws of The Federal Republic of Nigeria and are subject to the
 exclusive jurisdiction of the Nigerian courts.</p>
        </div>


        
      <div className='flex justify-center item center gap-10 relative pt-[4rem] pb-10'>
      <CustomButton 
      title="decline"
      btnType='submit'
  containerStyle="bg-[#C32C31] px-5 py-2 border-2 text-white border-[#C32C31] font-bold hover:bg-transparent hover:text-[#C32C31] rounded-md"
  handleClick={decline}/>
      <CustomButton 
  title="accept"
  btnType='submit'
      containerStyle="bg-transparent px-5 py-2 border-2 border-[#C32C31] text-[#C32C31] font-bold hover:bg-[#C32C31] hover:text-white rounded-md mr-10"
  handleClick={accept}/>
      </div>

    </section>

 </main>
  )
}
