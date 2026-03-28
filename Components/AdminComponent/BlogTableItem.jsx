import { assets } from '@/Assets/assets'
import React from 'react'
import Image from 'next/image'
const BlogTableItem = ({auhtorImg,title,author}) => {
  return (
    <tr className='bg-white border-b '>
        <th scope='row' className='items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
            <Image width={40} height={40} src={auhtorImg?auhtorImg:assets.profile_icon}/>
            <p>{author?author:"No Author"}</p>
        </th>
        <td className='px-6 py-4'>
            {title?title:"no title"}
        </td>
         <td className='px-6 py-4'>
            {"28 Mar 2026"}
        </td>
         <td className='px-6 py-4 cursor-pointer'>
           x
        </td>
    </tr>
  )
}

export default BlogTableItem