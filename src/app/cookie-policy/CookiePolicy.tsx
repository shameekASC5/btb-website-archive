"use client"

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import NewsLetter from '@/components/NewsLetter'
import Terms from '@/components/Terms/Terms'
import { COOKIE_PRIVACY } from '@/data'
import React from 'react'

type Props = {}

const CookiePolicy = (props: Props) => {
  return (
    <div className='bg-[#05000F] min-h-screen text-white'>
        <Navbar/>
        <div className='pt-[60px]'>
            <Terms data={COOKIE_PRIVACY}/>
        </div>
        <div className='mt-[92px]'>
            <NewsLetter/>
        </div>
        <Footer/>
    </div>
  )
}

export default CookiePolicy