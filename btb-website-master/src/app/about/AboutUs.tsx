"use client"
import { IMAGES } from '@/assets'
import BannerReachStart from '@/components/BannerReachStart'
import Footer from '@/components/Footer'
import FounderMessage from '@/components/FounderMessage'
import Navbar from '@/components/Navbar'
import NewsLetter from '@/components/NewsLetter'
import Slider from '@/components/Slider'
import Testimonials from '@/components/Testimonials'
import Container from '@/components/layouts/Container'
import { ABOUT_US_TEXT_AND_LABELS } from '@/data'
import { HTTP } from '@/services'
import React from 'react'

type Props = {}

const About = (props: Props) => {
    const [team, setTeam] = React.useState<any>([])
    React.useEffect(() => {
        const FetchOutTeam = async () => {
          try {
            const res = await HTTP.get("team")
            console.log(res.data)
            setTeam(res.data.data)
          } catch (err) {
            console.log(err)
          }
        }
        FetchOutTeam()
      }, [])

    return (
        <div className='bg-[#05000F] min-h-screen text-white'>
            <div>
                <Navbar />
                <div className='sm:py-[8px] py-[45px] flex justify-center items-center px-10 text-center'>
                    <div className='max-w-[1100px] '>

                        <h4 className='font-semibold sm:text-[100px] text-3xl sm:max-w-[1100px] max-w-[95vw] sm:leading-[100px] leading-[28px] sm:pt-[80px] pt-[45px]'>
                        Beyond The Box is a <br/>Studio of Experts
                        </h4>
                        <p className="sm:text-lg text-md sm:mt-6 mt-3 text-[#B3B3B3]">
                            {ABOUT_US_TEXT_AND_LABELS.HERO.SUBTITLE}
                        </p>
                    </div>
                </div>
            </div>

            {/* Hero About */}
            <Container size='md' className=' sm:mt-[96px] mt-10'>
                <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-[96px] gap-12">
                    <img src={IMAGES.LOGO_1} className="w-full" alt="" />
                    <div className='flex flex-col sm:gap-[64px] gap-8'>
                        <div className="flex flex-col gap-3">
                            <h4 className='text-button-blue text-2xl font-semibold'>
                                {ABOUT_US_TEXT_AND_LABELS.OUR_HELP.TITLE}
                            </h4>
                            <h2 className='sm:text-[48px] text-3xl font-semibold sm:leading-[60px] leading-[30px]'>
                                {ABOUT_US_TEXT_AND_LABELS.OUR_HELP.SUBTITLE}
                            </h2>
                        </div>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-20">
                            {
                                ABOUT_US_TEXT_AND_LABELS.OUR_HELP.ACHIEVEMENTS.map((achievement, index) => (
                                    <div className='flex flex-col gap-3' key={index}>
                                        <h4 className='sm:text-[60px] text-4xl font-semibold text-button-blue'>
                                            {achievement.title}
                                        </h4>
                                        <p className='sm:text-lg text-md'>
                                            {achievement.subtitle}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </Container>

            {/* Our Story */}
            {/* <Container size='md' className='sm:mt-[150px] mt-[90px]'>
                <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-11 gap-4">
                    <div>
                        <h4 className='sm:text-[60px] text-4xl font-semibold  sm:leading-[60px] leading-[35px]'>
                            {ABOUT_US_TEXT_AND_LABELS.OUR_STORY.TITLE}
                        </h4>
                        <p className='sm:text-xl tex-lg sm:mt-6 mt-4'>
                            {ABOUT_US_TEXT_AND_LABELS.OUR_STORY.SUBTITLE}
                        </p>
                    </div>
                    <div className='sm:text-2xl text-base'>
                        {ABOUT_US_TEXT_AND_LABELS.OUR_STORY.DESCRIPTION1}
                    </div>
                    <div className='sm:text-2xl text-base'>
                        {ABOUT_US_TEXT_AND_LABELS.OUR_STORY.DESCRIPTION2}
                    </div>
                </div>
            </Container> */}

            {/* OUR TEAM */}
            {/* <div className="px-2 sm:mt-[150px] mt-[90px]">
                <div className='text-center flex justify-center items-center gap-5 sm:mb-[100px] mb-10'>
                    <div className='max-w-[720px]'>

                    <h4 className='sm:text-[50px] text-2xl text-button-blue leading-[60px] font-semibold'>
                        {ABOUT_US_TEXT_AND_LABELS.OUR_TEAM.TITLE}
                    </h4>
                    <p className='text-[#F5F5F5] sm:text-xl text-md font-normal mt-5'>
                        {ABOUT_US_TEXT_AND_LABELS.OUR_TEAM.SUBTITLE}
                    </p>
                    </div>
                </div>
                <Slider>
                    <div className="flex items-center gap-10 mr-10">
                        {
                            team?.length>0
                            ?
                            team.map((person:any, index:number) => (
                                <div key={index} className="flex relative sm:w-[358px] sm:h-[412px] w-[200px] h-[230px] items-end sm:px-4 px-2 sm:pb-6 pb-3 border">
                                    <img src={person?.["Clear Picture"]} alt={person?.["Full Name"]} className="absolute top-0 left-0 h-full w-full z-10" />
                                    <div className='z-20 w-full border border-white p-3 flex flex-col gap-1 relative'>
                                        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(30, 30, 30)] opacity-30 z-30">
                                        </div>
                                        <h4 className='sm:text-[20px] text-sm font-semibold z-40'>
                                            {person?.["Full Name"]}
                                        </h4>
                                        <p className='sm:text-[14px] text-xs z-40'>
                                            {person?.["Position at BTB"]}
                                        </p>
                                    </div>
                                </div>
                            ))
                            :
                            null
                        }
                    </div>
                </Slider>
                <div className='flex justify-center sm:mt-[90px] mt-11'>
                        <div className='text-[#F5F5F5] sm:text-2xl text-base sm:leading-[33px] leading-5 max-w-[750px]'>
                            {ABOUT_US_TEXT_AND_LABELS.OUR_TEAM.EXPLAINATION}
                        </div>
                </div>
            </div> */}

            {/* Founder Message Video */}
            <div className='sm:mt-[170px] mt-[90px]'>
                <FounderMessage />
            </div>

            {/* Testimonial */}
            <div className='sm:mt-[150px] mt-[90px]'>
                <Testimonials />
            </div>

            {/* Last Banner */}
            <div className='sm:mt-[190px] mt-[80px]'>
                <BannerReachStart />
            </div>

            {/* News Letter */}
            <div className='sm:mt-[130px] mt-[60px]'>
                <NewsLetter />
            </div>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default About