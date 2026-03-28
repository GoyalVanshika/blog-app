'use client'
import {assets, blog_data } from '@/Assets/assets';
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import { useParams } from "next/navigation";
import Footer from '@/Components/Footer';
import Link from 'next/link';
import axios from 'axios';

const page = () => {
  const params=useParams()
  const [data,setData]=useState(null);
  const fetchBlogData=async()=>{
     const response=await axios.get('/api/blog',{
      params:{
      id:params.id
      }
     })
     setData(response.data);
  }
  useEffect(()=>{
    fetchBlogData();
  },[] )
   return (data?<>
    <div className='bg-gray-200  px-5 py-5 md:px-12 lg:px-28' >
      <div className='flex justify-between items-center' >
        <Link href='/'  >
        <Image src={assets.logo} width={180} alt='' className='w-32.5 sm:w-auto' />
        </Link>
        <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000] ' >Get Started  <Image src={assets.arrow} alt='' />  
        </button>
      </div>
        <div className='text-center my-24 ' >
          <h1 className='text-2xl sm:text-5xl font-semibold max-w-175 mx-auto' >{data.title}</h1>
          <Image className='mx-auto mt-8 border  border-white rounded-full'  src={data.authorImg} width={60} height={60} alt='' />
          <p className='mt-1 pb-2 text-lg max-w-185 mx-auto'  >{data.author}</p>
        </div>   
    </div>
    <div className='mx-5 max-w-200 md:mx-auto -mt-25 mb-10'  > 
      <Image className='border-4 border-white' src={data.image} width={1280} height={720} alt=''    />
      <h1 className='my-8 text-6.5 font-semibold'>Introduction</h1>
      <p   >{data.description}</p>
      <h3 className='my-5 text-[18px] font-semibold ' >Step 1:Self-Reflection and Goal Setting</h3>
      <p className='my-3  '  >Before you can manage your lifestyle, you must have a clear understanding of what you have to achieve. Start by reflecting on your values, aspirations, and long-term goals.</p>
      <p className='my-3  '  >Before you can manage your lifestyle, you must have a clear understanding of what you have to achieve. Start by reflecting on your values, aspirations, and long-term goals.</p>
       <h3 className='my-5 text-[18px] font-semibold ' >Step 2:Self-Reflection and Goal Setting</h3>
      <p className='my-3  '  >Before you can manage your lifestyle, you must have a clear understanding of what you have to achieve. Start by reflecting on your values, aspirations, and long-term goals.</p>
      <p className='my-3  '  >Before you can manage your lifestyle, you must have a clear understanding of what you have to achieve. Start by reflecting on your values, aspirations, and long-term goals.</p>
       <h3 className='my-5 text-[18px] font-semibold ' >Step 3:Self-Reflection and Goal Setting</h3>
      <p className='my-3  '  >Before you can manage your lifestyle, you must have a clear understanding of what you have to achieve. Start by reflecting on your values, aspirations, and long-term goals.</p>
      <p className='my-3  '  >Before you can manage your lifestyle, you must have a clear understanding of what you have to achieve. Start by reflecting on your values, aspirations, and long-term goals.</p>
       <h3 className='my-5 text-[18px] font-semibold ' >Conclusion:</h3>
      <p className='my-3  '  >Managing your lifestyle is a journey that requires commitment and self-awareness. By following this step-by-step giude. You can take control of your life and make meaningful changes that lead to a more balanced and fullfilling lifestyle. Remember that it's okay to seek support and guidance from professionals or mentors foing the way. Your well-being and happiness are worth the effort.
      </p>
      <div className='my-24'  >
        <p className='text-black font-semibold my-4'  >Share this article on social media</p>
        <div className='flex' >
          <Image src={assets.facebook_icon} width={50} alt=''  />
          <Image src={assets.twitter_icon} width={50} alt=''  />
          <Image src={assets.googleplus_icon} width={50} alt=''  />
        </div>
      </div>
    </div>
    <Footer/>
   </>:<></>
  )
}

export default page