"use client"

import Footer from '@/components/Footer'
import Input from '@/components/Form/Input'
import HaveIdeaForm from '@/components/HaveIdeaForm'
import Navbar from '@/components/Navbar'
import OurWorkCard from '@/components/OurWorkCard'
import { OUR_WORK } from '@/data'
import React from 'react'

type Props = {}

const OurWork = (props: Props) => {
    return (
        <div className='bg-[#05000F] min-h-screen text-white'>

            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <div className="flex flex-col items-center justify-center sm:mt-[90px] mt-[70px]">
                <h4 className='sm:text-[100px] text-4xl font-semibold leading-normal'>
                    Success Stories.
                </h4>
                <p className='sm:text-[24px] text-md sm:max-w-[790px] max-w-[90vw] text-center text-[#656565]'>
                    Since we began in 2022 we’ve helped found more than ten companies, 90% of which are still operating today. We are proud to have helped many of our clients build and accelerate their business.
                </p>
            </div>

            {/* Our Works */}
            <div className='sm:mt-[40px] mt-[20px] container sm:px-2 px-4 mx-auto'>
                <div className="grid sm:grid-cols-3 grid-cols-1 gap-[60px]">
                    {
                        OUR_WORK.WORKS.map((work, index) => (
                            <OurWorkCard TITLE={work.TITLE} CATEGROY={work.CATEGROY} IMG={work.IMG} TAGS={work.TAGS} key={index} SLUG={work.SLUG} />
                        ))
                    }
                </div>
            </div>

            {/* Have an Idea */}
            <div className='sm:mt-[140px] sm:mb-[56px] my-[70px]'>
                <HaveIdeaForm/>
            </div>



            {/* Footer */}
            <Footer />
        </div>
    )
}

export default OurWork