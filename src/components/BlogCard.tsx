import { IMAGES } from '@/assets'
import { ICONS } from '@/assets/icons'
import moment from 'moment'
import React from 'react'

type Props = {
    blog: any
    author_image: any
}

const BlogCard = ({
    blog,
    author_image
}: Props) => {
    return (
        <div className='flex flex-col gap-8 | border border-[#EAECF0] rounded-[16px] | bg-white | overflow-hidden | cursor-pointer | hover:scale-[1.01] transform duration-500 relative'
            onClick={() => {
                window.open(blog.link, '_blank')
            }}
        >
            <div className="absolute top-0 left-0 w-full h-full hover:bg-gray-950 opacity-5">

            </div>
            <img src={blog.thumbnail} alt="" className='w-full aspect-video bg-cover' />
            <div className='px-6 flex flex-col gap-5 pb-8 h-full'>
                <div className='flex flex-col gap-4'>
                    <div className='bg-[rgba(32,79,255,0.42)] rounded-full p-1 pr-3 text-[#204FFF] text-xs flex items-center gap-2 w-fit'>
                        <div className='rounded-full py-[2px] px-2 bg-white text-[#6941C6]'>
                            {blog.keywords[0]}
                        </div>
                        <div>
                            8 min read
                        </div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div className="flex gap-4 items-start">
                            <div className="grow text-[#101828] text-2xl font-semibold">
                                {blog.title}
                            </div>
                            <span
                                className='w-[50px]'
                            >
                                <ICONS.Redirect />
                            </span>
                        </div>
                        <div className='text-[#667085] text-base'>
                            {blog.summary?.length > 110 ? blog.summary.slice(0, 110) + '.....' : blog.summary}
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-3 mt-auto">
                    <img src={author_image} className='h-10 w-10 rounded-full' alt="" />
                    <div>
                        <h6 className='text-[#101828] text-sm font-semibold'>
                            {blog.author}
                        </h6>
                        <p className='text-[#667085] text-sm'>
                            {moment(blog.date_published).format("Do MMMM YYYY")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard