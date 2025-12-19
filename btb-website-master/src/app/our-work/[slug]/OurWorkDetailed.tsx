import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Container from '@/components/layouts/Container'
import Accordian from '@/components/partial/Accordian'
import Badge from '@/components/partial/Badge'
import { OUR_WORK } from '@/data'
import React from 'react'

type Props = {}

type ourworkKey = keyof typeof OUR_WORK.DETAILS

const OurWorkDetail = ({slug}:{slug:ourworkKey}) => {
    const data = OUR_WORK.DETAILS[slug]

    if(!data) return <div className='bg-[#05000F] min-h-screen text-white flex items-center justify-center'>Not Found</div>
    return (
        <div className='bg-[#05000F] min-h-screen text-white'>
            {/* Navbar */}
            <Navbar />

            {/* Main Section */}
            <Container className='mt-[120px]' size='lg'>
                {/* Hero */}
                <div className="grid grid-cols-10 sm:gap-[90px]">
                    <div className="sm:col-span-5 col-span-10">
                        <h4 className="sm:text-[70px] text-4xl sm:leading-[70px] leading-normal text-[#E2E2E2]">
                            {data.TITLE}
                        </h4>
                        <p className="sm:text-xl text-lg text-[#E2E2E2] mt-2">{data.DESCRIPTION}</p>
                        <div className="sm:mt-[80px] mt-10 flex flex-col gap-4">
                            {
                                data.WEBSITE
                                ?
                                <div className='flex flex-col gap-2 mb-2'>
                                    <h6 className="text-lg text-[#A0A0A0]">
                                        COMPANY WEBSITE
                                    </h6>
                                    <a className='text-2xl underline cursor-pointer' href={data.WEBSITE} target='_blank'>
                                        {data.WEBSITE}
                                    </a>
                                </div>
                                :
                                null
                            }

                            {       
                                data.APP_LINK
                                ?
                                <div className='flex flex-col gap-2 mb-2'>
                                    <h6 className="text-lg text-[#A0A0A0]">
                                        LINK TO APP
                                    </h6>
                                    <a className='text-2xl underline cursor-pointer' href={data.APP_LINK} target='_blank'>
                                        {data.APP_LINK}
                                    </a>
                                </div>
                                :
                                null
                            }
                            <div className="flex items-center gap-12">
                                <div className='flex flex-col gap-2'>
                                    <h6 className="text-lg text-[#A0A0A0]">
                                        CLIENT
                                    </h6>
                                    <p className='text-2xl'>{data.CLIENT}</p>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <h6 className="text-lg text-[#A0A0A0]">
                                        YEAR
                                    </h6>
                                    <p className='text-2xl'>{data.YEAR}</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h6 className="text-lg text-[#A0A0A0]">
                                    SERVICES
                                </h6>
                                <div className="flex items-center gap-6 flex-wrap gap-y-4">
                                    {data.SERVICES.map((service, index) => (
                                        <Badge key={index}>
                                            {service}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:col-span-5 col-span-10 sm:mt-0 mt-14">
                        <img src={data.IMG} alt="" className="w-full sm:max-w-fit max-w-[100vw]" />
                    </div>
                </div>

                {/* Details */}
                <div className="mt-[150px]">
                    {
                        data.DETAIL_SECTION.map((section:any, index) => (
                            <div className="grid grid-cols-12 sm:gap-[120px] sm:gap-y-[140px] gap-y-10 mt-10" key={index}>
                                <div className="sm:col-span-3 col-span-12 sm:text-[52px] text-2xl font-semibold text-[#E2E2E2] sm:leading-[60px] leading-normal">
                                    {section.TITLE}
                                </div>
                                <div className="sm:col-span-9 col-span-12 sm:text-2xl text-lg text-[#D6D6D6] flex flex-col gap-10">
                                    {
                                        section.DETAILS.map((detail:any, index2:number) => {

                                            if (detail?.isHTML) return (
                                                <div className=' max-w-[100vw] whitespace-pre-wrap' key={index2} dangerouslySetInnerHTML={{ __html: detail.content }}></div>
                                            )
                                            else return (
                                                <p className=' whitespace-pre-wrap' key={index2}>{detail.content}</p>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>

                {/* Accordian */}
                {
                    data?.SHOWEXPANDED
                    ?
                    <div className="flex justify-center mt-[108px]">
                        <Accordian />
                    </div>
                    :
                    null
                }
            </Container>

            <div className='mt-[108px]'>
                <Footer />
            </div>
        </div>

    )
}

export default OurWorkDetail