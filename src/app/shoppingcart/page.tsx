import React from 'react'
import Header from '../component/header'
import Footer from "../component/footer";
import Image from 'next/image'
const Listing = () => {
  return (
    <section className='w-[1550px] h-[749px]'>
      <Header logo={''} navLinks={[]}/>
    <div className='md:w-[1358px] md:h-[749px] w-[390px] h-[729px]'>
    <div className='w-[328px] h-[50px] md:ml-[180px] ml-[50px] pt-[50px]'>
    <h1 className='md:text-[36px] text-[24px] font-[Clash Display] text-[#2A254B]'>Your shopping cart</h1>
    </div>

    <div className='h-[390px] md:ml-[180px] ml-[30px] mt-[70px] w-[1200px]'>
      <div className='w-full md:flex hidden'>
        <h1 className='w-[55px] h-[20px] pl-[4px]'>Product</h1>
        <h1 className='w-[57px] h-[20px] pl-[600px]'>Quantity</h1>
        <h1 className='w-[34px] h-[20px] pl-[400px]'>Total</h1>
      </div>
      <hr className='mt-[10px] hidden md:block'/>

      <div className='md:w-full w-[334px] md:flex'>
        <div className='w-[309px] h-[166px] flex md:h-[134px] mt-[10px]'>
          <Image
              src={'/images/vase.png'}
              alt='chair'
              width={109}
              height={134}
             />
         <div className='w-[179px] h-[110px] md:mt-[10px]'>
          <h1 className='text-[20px] pl-[15px] font-[Clash Display]'>Graystone vase</h1>
          <p className='text-[14px] pl-[15px] pt-[6px] font-[Satoshi]'>A timeless ceramic vase with 
          a tri color grey glaze.</p>
          <p className='text-[16px] font-[Satoshi] pl-[15px] pt-[7px]'>£85</p>
         </div>
        </div>
        <div className='w-[122px] h-[46px] md:flex md:ml-[320px] ml-[130px] md:mt-[30px] box-border bg-[#F9F9F9]'>
          <p className='flex items-center pl-[55px]'>1</p>
        </div>
        <div className='w-[33px] h-[27px] flex ml-[320px] mt-[35px] box-border'>
         <p className='text-[18px] font-[Satoshi] hidden md:block'>£85</p>
        </div>

      </div>


       
       <div className='flex'>
       <div className='w-[309px] flex h-[134px] md:mt-[30px] '>
          <Image
              src={'/images/pot.png'}
              alt='chair'
              width={109}
              height={134}
             />
         <div className='w-[179px] h-[110px] md:mt-[10px]'>
          <h1 className='text-[20px] pl-[15px] font-[Clash Display]'>Basic white vase</h1>
          <p className='text-[14px] pl-[15px] pt-[6px] font-[Satoshi]'>Beautiful and simple this is
          one for the classics.</p>
          <p className='text-[16px] font-[Satoshi] pl-[15px] pt-[7px]'>£85</p>
         </div>
        </div>


        <div className='w-[122px] h-[46px] md:flex md:ml-[320px] mt-[70px] box-border bg-[#F9F9F9]'>
          <p className='flex items-center pl-[55px]'>1</p>
        </div>

        <div className='w-[33px] h-[27px] flex ml-[320px] mt-[90px] box-border'>
         <p className='text-[18px] font-[Satoshi]'>£125</p>
        </div>
      </div>
      
      <hr className='md:mt-[20px] mt-[30px]' />
    
    </div>


    <div className='w-[282px] h-[67px] md:ml-[1040px] ml-[120px] md:mt-[10px] mt-[50px]'>
      <div className='w-[150px] h-[34px] flex justify-end items-end gap-[16px] pl-[268px]'>
      <h1 className='text-[20px] font-[Clash Display] text-[#4E4D93]'>Subtotal</h1>
      <p className='text-[24px] font-[Clash Display] text-[#2A254B]'>£210</p>
      </div>

      <div className='pl-[10px] pt-[10px]'>
      <p className='text-[14px] font-[Satoshi] text-[#4E4D93]'>Taxes and shipping are calculated at checkout</p>
      </div>
    </div>

    <div className='w-[172px] h-[56px] px-[30px] py-[16px] md:ml-[1150px] ml-[220px] mt-[20px] bg-[#2A254B]'>
      <button className='text-white'>Go to checkout</button>
    </div>

  </div>


    <Footer/>
    </section>
  )
}

export default Listing