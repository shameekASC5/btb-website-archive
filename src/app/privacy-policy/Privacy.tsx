"use client"

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import NewsLetter from '@/components/NewsLetter'
import Terms from '@/components/Terms/Terms'
import { PRIVACY_PRIVACY } from '@/data'
import React from 'react'

type Props = {}

const PrivacyPolicy = (props: Props) => {
  return (
    <div className='bg-[#05000F] min-h-screen text-white'>
        <Navbar/>
        <div className='pt-[60px]'>
            <Terms data={PRIVACY_PRIVACY}/>
        </div>
        <div className='mt-[92px]'>
            <NewsLetter/>
        </div>
        <Footer/>
    </div>
  )
}

export default PrivacyPolicy