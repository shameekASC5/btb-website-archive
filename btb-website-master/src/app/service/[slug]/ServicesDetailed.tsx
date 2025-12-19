"use client"

import Footer from '@/components/Footer'
import HaveIdeaForm from '@/components/HaveIdeaForm'
import Navbar from '@/components/Navbar'
import Container from '@/components/layouts/Container'
import { SERVICE_DATA } from '@/data'
import { useRouter } from 'next/navigation'
import React from 'react'

type ServiceKeys = keyof typeof SERVICE_DATA.ALL_DATA;

const OneService = ({ params }: { params: { slug: ServiceKeys } }) => {

    console.log(params.slug)
    const data = SERVICE_DATA.ALL_DATA[params.slug]
    const router = useRouter()
    if(!data){
        // rounte to 404
        router.push('/404')
    }

    console.log(data)
    return (
        <div className='bg-[#05000F] min-h-screen text-white'>
            <Navbar />

            {/* Hero */}
            <div className='sm:mt-[90px] mt-[70px] flex flex-col sm:gap-10 gap-4 items-center text-center'>
                <h4 className='sm:text-[100px] text-3xl font-semibold sm:max-w-full max-w-[90vw]'>
                    {data.TITLE}
                </h4>
                {
                    data?.DESCRIPTION
                    ?
                    <p className='text-[#656565] sm:text-2xl text-md sm:max-w-[850px] max-w-[90vw]'>
                        {data.DESCRIPTION}
                    </p>
                    :
                    null
                }
            </div>

            {/* Contains */}
            <Container className='sm:mt-[124px] mt-[80px]' size='lg'>
                <div>


                    {
                        data.CONTENTS.map((item, index) => (
                            <div key={index} className='grid grid-cols-3 sm:gap-[120px] gap-4 sm:border-none border-b sm:mb-0 mb-10 sm:pb-0 pb-10'>
                                <div className='sm:col-span-1 col-span-3 sm:py-12 py-3 sm:border-r-[#4D4D4D] sm:border-r-[2px] pr-10 sm:text-[60px] text-2xl font-semibold text-[#F4F4F4] leading-normal'>
                                    {item.TITLE}
                                </div>
                                <div className="sm:col-span-2 col-span-3 sm:py-12 py-3 flex flex-col gap-3">
                                    <h4 className='sm:text-[40px] text-lg font-semibold text-[#F4F4F4] italic'>
                                        {item.SUBTITLE}
                                    </h4>
                                    <p className='py-2 sm:text-2xl text-base text-[#F4F4F4]'>
                                        {item.DESCRIPTION}
                                    </p>
                                </div>
                            </div>

                        ))
                    }
                </div>

                <div className='sm:mt-[120px] sm:mb-[140px] my-[70px]'>
                    <HaveIdeaForm />
                </div>
            </Container>

            <Footer />
        </div>
    )
}

export default OneService