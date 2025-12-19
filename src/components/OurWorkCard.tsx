import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {
    TITLE: string
    CATEGROY: string
    IMG: string
    TAGS: string[]
    SLUG: string
}

const OurWorkCard = ({
    TITLE,
    CATEGROY,
    IMG,
    TAGS,
    SLUG
}:Props) => {

    const router = useRouter()
  return (
    <div 
    className='w-full flex flex-col gap-4 cursor-pointer hover:scale-[1.01] transform duration-500 rounded-lg group relative'
    onClick={()=>{
        router.push('/our-work/'+SLUG)
    }}
    >
        <div className='absolute top-0 left-0 w-full aspect-square z-1 opacity-0 group-hover:opacity-20 bg-gray-800'>

        </div>
        <div className='w-full aspect-square flex items-center justify-center px-3'>
            <img 
            src={IMG}
            alt=""
            className='w-full h-fit bg-cover'
            />
        </div>
         <div className='flex flex-col gap-2'>
            <p className='text-[#A1A1A1] sm:text-[18px] text-sm'>
                {CATEGROY}
            </p>
            <p className='sm:text-2xl text-lg font-semibold'>
                {TITLE}
            </p>
            <div className="flex items-center gap-3 flex-wrap">
                {
                    TAGS.map((tag, index) => (
                        <div key={index} className='rounded-sm border border-white p-[6px] whitespace-nowrap text-xs'>
                            {tag}
                        </div>
                    ))
                }
            </div>

         </div>
    </div>
  )
}

export default OurWorkCard