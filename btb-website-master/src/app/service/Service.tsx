"use client"

import { ICONS } from '@/assets/icons'
import Footer from '@/components/Footer'
import HaveIdeaForm from '@/components/HaveIdeaForm'
import Navbar from '@/components/Navbar'
import Container from '@/components/layouts/Container'
import { SERVICE_DATA } from '@/data'
import { Carousel } from 'antd'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

type Props = {}

const Services = (props: Props) => {

    const router = useRouter()
    const [activeTab, setActiveTab] = useState('technology')
    return (
        <div className='bg-[#05000F] min-h-screen text-white'>
            <Navbar />
            {/* Hero */}
            <div className='sm:mt-[90px] mt-[70px] flex flex-col items-center text-center sm:gap-10 gap-3'>
                <h4 className='font-semibold sm:text-[100px] text-3xl sm:max-w-[1100px] max-w-[95vw] sm:leading-[100px] leading-[28px]'>
                    Co-building Services
                </h4>
                <p className='sm:text-2xl text-md sm:max-w-[750px] max-w-[90vw] text-[#656565]'>
                    Our services make building a technology business easy.
                </p>
            </div>

            <Container size='lg' className='sm:mt-[65px] mt-[30px] sm:px-[100px]'>
                {/* Tabs */}
                <div className="flex justify-between items-center">
                    <div
                        className={`sm:min-w-[40%] min-w-[45%] sm:leading-[30px] leading-[16px] sm:text-[60px] text-lg border-b sm:pb-6 pb-2 border-[#EAECF0] cursor-pointer text-[#F4F4F4] ${activeTab === 'technology' ? 'font-bold' : 'font-normal'}`}
                        onClick={() => setActiveTab('technology')}
                    >
                        Technology
                    </div>
                    <div
                        className={`sm:min-w-[40%] min-w-[45%] sm:leading-[30px] leading-[16px] sm:text-[60px] text-lg border-b sm:pb-6 pb-2 border-[#EAECF0] cursor-pointer text-[#F4F4F4] ${activeTab === 'bussiness' ? 'font-bold' : 'font-normal'}`}
                        onClick={() => setActiveTab('bussiness')}
                    >
                        Business
                    </div>
                </div>

                {/* Contains */}
                <div className="sm:mt-[92px] mt-10 sm:gap-[160px] gap-[60px]">
                    {
                        activeTab === 'technology'
                            ?
                            <>
                            <Carousel
                            arrows={true} 
                            prevArrow={<span className='sm:block !hidden'><IoIosArrowBack className='text-3xl sm:[text-lg]'/></span>}
                            nextArrow={<span className='sm:block !hidden'><IoIosArrowForward className='text-3xl sm:[text-lg]'/></span>}
                            infinite={true}
                            >
                                {SERVICE_DATA.TECHNOLOGY_STACK.map((item, index) => (
                                    <div key={index} className='pb-12'>
                                        <div className='grid sm:grid-cols-2 grid-cols-1 sm:gap-[100px] gap-2 mx-2' >
                                                <img src={item.IMAGE} className='w-full max-w-full aspect-square object-cover rounded-xl' alt="" />
                                            <div className='sm:pt-10 pt-5 flex flex-col gap-4'>
                                                <h4 className='sm:text-[60px] text-3xl sm:leading-[78px] leading-[30px] font-semibold text-[#E2E2E2]'>{item.TITLE}</h4>
                                                <p className='sm:text-[20px] text-md font-normal sm:leading-[28px] leading-[25px] text-[#E2E2E2]'>{item.DESCRIPTION}</p>
                                                {
                                                    item.SLUG
                                                        ?
                                                        <button
                                                            onClick={() => {
                                                                router.push(`/service/${item.SLUG}`)
                                                            }}
                                                            className="sm:mt-[40px] mt-8 px-10 py-4 gap-2 text-[#222222] bg-white rounded-[8px] w-fit">
                                                            Read More
                                                        </button>
                                                        :
                                                        null
                                                }
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Carousel>
                            </>
                            :
                            <>
                            <Carousel
                            arrows={true} 
                            prevArrow={<span className='sm:block !hidden'><IoIosArrowBack className='text-3xl sm:[text-lg]'/></span>}
                            nextArrow={<span className='sm:block !hidden'><IoIosArrowForward className='text-3xl sm:[text-lg]'/></span>}
                            infinite={true}
                            >
                                {SERVICE_DATA.BUSSINESS_STACK.map((item, index) => (
                                    <div key={index} className='pb-12'>
                                        <div className='grid sm:grid-cols-2 grid-cols-1 sm:gap-[100px] gap-2 mx-2' >
                                                <img src={item.IMAGE} className='w-full max-w-full aspect-square object-cover rounded-xl' alt="" />
                                            <div className='sm:pt-10 pt-5 flex flex-col gap-4'>
                                                <h4 className='sm:text-[60px] text-3xl sm:leading-[78px] leading-[30px] font-semibold text-[#E2E2E2]'>{item.TITLE}</h4>
                                                <p className='sm:text-[20px] text-md font-normal sm:leading-[28px] leading-[25px] text-[#E2E2E2]'>{item.DESCRIPTION}</p>
                                                {
                                                    item.SLUG
                                                        ?
                                                        <button
                                                            onClick={() => {
                                                                router.push(`/service/${item.SLUG}`)
                                                            }}
                                                            className="sm:mt-[40px] mt-8 px-10 py-4 gap-2 text-[#222222] bg-white rounded-[8px] w-fit">
                                                            Read More
                                                        </button>
                                                        :
                                                        null
                                                }
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Carousel>
                            </>
                    }
                </div>

                <div className='sm:mt-[120px] sm:mb-[140px] mt-[70px] mb-[70px]'>
                    <HaveIdeaForm />
                </div>
            </Container>

            <Footer />
        </div>
    )
}

export default Services