import React from 'react'
import Image from 'next/image'


const Hero = () => {
  return (
       <section className='w-[135px] md:h-[704px] h-[700px]'>
       <div className="container flex md:w-[1410px] md:h-[584px] w-[400px] h-[502px] bg-[#2A254B] ml-[10px] md:ml-[50px] mt-[30px] ">
        <div className='"w-[513px] h-[187px] md:ml-[60px] ml-[30px] pt-[45px] "'>
        <p className='"md:w-[513px] text-[#FFFFFF] md:h-[90px] w-[350px] h-[135px] font-[Clash Display] text-[25px] "'>
        The furniture brand for the future, with timeless designs
        </p>
        <button className='"w-[170px] h-[56px] mt-[10px] bg-[#F9F9F926] hidden md:block md:mt-[50px] px-[30px] py-[16px] text-[#ebe4e4] "'>
            View Collection</button>
        <p className='"w-[342px] md:w-[602px] h-[135px] md:h-[81px] mt-[10px] md:mt-0 text-[20px] md:text-[19px]  md:pt-[200px]  font-[Satoshi] text-white mx-auto"'>
        A new era in eco-friendly furniture with Avelon, the French luxury retail brand
    with nice fonts, tasteful colors, and a beautiful way to display things digitally
    using modern web technologies.
        </p>
        <button className='"md:w-[170px] md:h-[56px] bg-[#F9F9F926] block md:hidden w-[342px] h-[56px] mt-[55px] md:mt-[50px] px-[30px] py-[16px] text-[#ebe4e4] "'>
        View Collection</button>
         </div>
         
         <Image src='/images/hero.png'
          alt="hero image"
          width={800}
          height={300}
          className="ml-[187px] hidden md:block"
          ></Image>
       </div>
       </section>

   
  )
}

export default Hero