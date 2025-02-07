import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

type Product = {
  [x: string]: SanityImageSource;
  _id: string;
  imageUrl: string;
  title: string;
  price: string;
};

const products: Product[] = [
  {
    _id: 'product_1',
    imageUrl: '/images/sofa.png',
    title: 'The Popular Suede Sofa',
    price: '£980',
  },
  {
    _id: 'product_2',
    imageUrl: '/images/chair.png',
    title: 'The Dandy Chair',
    price: '£250',
  },
  {

    _id: 'product_3',
    imageUrl: '/images/blackchair.png',
    title: 'The Black Dandy Chair',
    price: '£250',
  },
  {
    _id: 'product_4',
    imageUrl: '/images/whitepot.png',
    title: 'The Popular Suede Sofa',
    price: '£980',
  },
];

const Product= () => {
  return (
    <div className='md:w-[1358px] md:h-[744px] md:mt-0 mt-[100px]'>
      {/* Heading */}
      <div className='w-[330px] h-[45px] ml-[20px] md:ml-[100px] pt-20'>
        <h1 className='text-[32px] font-[Clash Display]'>Our Popular Products</h1>
      </div>

      {/* Product List */}
      <div className='md:w-[1358px] md:h-[470px] w-[390px] h-[430px] md:flex grid grid-cols-2 gap-[6px] mt-[70px]'>
        {products.map((product) => (
          <div
            key={product._id}
            className='w-[305px] h-[300px] md:ml-[20px] ml-[6px]'
          >
            {/* Product Image */}
            <div className='md:w-[305px] md:h-[375px] w-[200px] h-[150px]   '>
              <Image
              className='md:w-[500px] md:h-[350px] w-[200px] h-[200px] md:ml-[85px] ml-[20px] rounded-lg'
                src={product.imageUrl}
                alt={product.title}
                width={500}
                height={400}
                
              />
            </div>

            {/* Product Info */}
            <div className='md:w-[154px] w-[145px] h-[63px] md:ml-[85px] ml-[30px] pt-[20px]'>
              <h1 className='text-[20px] font-[Clash Display] md:pt-[10px] pt-[60px]'>
                {product.title}
              </h1>
              <p className='text-[18px] font-[Satoshi] md:pt-[5px] pt-[10px]'>
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* View Collection Button */}
      <Link href={'/productListing'} target='_blank'>
        <button className='md:w-[170px] w-[342px] h-[56px] md:mt-[30px] mt-[230px] md:ml-[680px] ml-[40px]  px-[28px] py-[16px] bg-gray-300'>
          View Collection
        </button>
      </Link>
    </div>
  );
};

export default Product;