"use client"

import { ICONS } from '@/assets/icons'
import BlogCard from '@/components/BlogCard'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import NewsLetter from '@/components/NewsLetter'
import { BLOG_TEXTS_AND_LABELS } from '@/data'
import { HTTP } from '@/services'
import React, { useEffect, useState } from 'react'

type Props = {}

const Blog = (props: Props) => {
    const [blogs, setBlogs] = useState<any>([])
    const [athorImage, setAuthorImage] = useState<any>(null)
    const [filteredBlogs, setFilteredBlogs] = useState<any>([])
    const [search, setSearch] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(true)

    const [showMore, setShowMore] = useState<boolean>(false)

    const getData = async () => {
        setLoading(true)
        try {
            const res = await HTTP.get('medium/posts?mediumAuthorUsername=ayakinbo')
            setBlogs(res.data.data.posts)
            setAuthorImage(res.data.data.authorImage)
            setFilteredBlogs(res.data.data.posts)
            console.log(res)
        }
        catch (err) {
            console.log(err)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getData()
    }
        , [])

    useEffect(() => {
        if (search === '') {
            setFilteredBlogs(blogs)
        }
        else {
            setFilteredBlogs(blogs.filter((blog: any) => blog.title.toLowerCase().includes(search.toLowerCase())))
        }
    }, [search])

    // useEffect(() => {
    //     if (filteredBlogs.length <= 6) {
    //         setShowMore(true)
    //     }
    // }
    //     , [filteredBlogs])


    return (
        <div className='bg-[#05000F] min-h-screen text-white'>

            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <div className="flex flex-col gap-[64px] items-center justify-center py-[96px]">
                <div className='flex items-center flex-col sm:gap-6 gap-3 | text-center'>
                    <h4 className='text-[#F4F4F4] sm:text-[60px] text-4xl sm:leading-[60px] leading-[35px] font-semibold'>
                        {BLOG_TEXTS_AND_LABELS.HERO.TITLE}
                    </h4>
                    <p className='sm:text-lg text-base text-[#B3B3B3] sm:w-auto w-[90vw] font-inter'>
                        {BLOG_TEXTS_AND_LABELS.HERO.SUBTITLE}
                    </p>
                </div>
                <div className="flex gap-2 items-center | border border[#D0D5DD] rounded-lg px-4 py-3 | bg-white w-[320px]">
                    <ICONS.Search />
                    <input
                        type="text"
                        className='grow bg-transparent border-none focus:outline-none text-[#667085]'
                        placeholder='Search'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>

            {/* Blog List */}
            {
                loading
                    ?
                    <div className='flex items-center justify-center min-h-[300px]'>
                        <div role="status">
                            <svg aria-hidden="true" className="w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                    :
                    <div>

                        <div className="grid sm:grid-cols-3 grid-cols-1 gap-x-8 gap-y-12 container mx-auto sm:px-2 px-4 sm:mt-[70px] mt-6 mb-[64px]">
                            {
                                showMore ? filteredBlogs.map((blog: any) => (
                                    <BlogCard key={blog.id} blog={blog} author_image={athorImage} />
                                ))
                                    :
                                    filteredBlogs.slice(0, 6).map((blog: any) => (
                                        <BlogCard key={blog.id} blog={blog} author_image={athorImage} />
                                    ))
                            }
                        </div>
                        {
                            !showMore && (
                                <div className="flex justify-center ">
                                    <button
                                        onClick={() => {
                                            setShowMore(true)
                                        }}
                                        className='flex items-center px-5 py-3 gap-2 text-button-blue bg-white rounded-[8px] '>
                                        <ICONS.ArrowDown />
                                        Load more
                                    </button>
                                </div>
                            )
                        }

                    </div>
            }

            {/* NewaLetter */}
            <div className='sm:my-[140px] my-[70px]'>

            </div>
            <NewsLetter />

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Blog