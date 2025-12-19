"use client"

import { ICONS } from '@/assets/icons'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import NewsLetter from '@/components/NewsLetter'
import PricingCard from '@/components/Pricing/PricingCard'
import PricingForm from '@/components/Pricing/PricingForm'
import Slider from '@/components/Slider'
import Container from '@/components/layouts/Container'
import { COMPANY_SLIDER, PRICING_PLANS } from '@/data'
import { Drawer } from 'antd'
import Image from 'next/image'
import React, { useState } from 'react'

type Props = {}

const PricingPlans = (props: Props) => {
  const [isPricingFormOpen, setIsPricingFormOpen] = useState(false);
  const onClose = () => setIsPricingFormOpen(false);
  const openPricingForm = () => setIsPricingFormOpen(true);
  return (
    <div className='bg-[#05000F] min-h-screen text-white'>
      <Drawer 
      width={'auto'} 
      closeIcon={null} 
      title={null} 
      onClose={onClose} 
      open={isPricingFormOpen}
      style={{padding:'0px'}}
      >
        <PricingForm handleClose={onClose} />
      </Drawer>

        <Navbar/>



        {/* Hero */}
        <Container className='mt-[80px] flex flex-col items-center'>
            <div className='max-w-[850px] text-center flex flex-col gap-4'>
                <p className='text-button-blue sm:text-xl text-sm font-semibold'>{PRICING_PLANS.HERO.MAIN_HEADER_TEXT}</p>
                <div className="flex flex-col sm:gap-6 gap-4">
                    <h4 className="sm:text-[60px] text-3xl font-semibold sm:leading-[60px] leading-normal relative">
                        {PRICING_PLANS.HERO.TITLE}
                        <span className="absolute -bottom-[40px] right-[80px] scale-125 z-10">
                            <ICONS.Sketch/>
                        </span>
                        </h4>
                    <p className="sm:text-xl text-base text-[#F4F4F4] relative z-20" dangerouslySetInnerHTML={{__html:PRICING_PLANS.HERO.SUBTITLE}}></p>
                </div>
            </div>
            <div className="sm:mt-[96px] mt-14 grid sm:grid-cols-3 grid-cols-1 sm:gap-8 gap-10">
                {
                    PRICING_PLANS.PLANS.map((plan, index) => (
                        <PricingCard 
                            key={index} 
                            data={plan}
                            showArrow={index === 1}
                            onButtonClick={()=>{
                              if(plan.HAS_FORM){
                                openPricingForm()
                              }
                            }}
                         />
                    ))
                }
            </div>
        </Container>

        {/* Company Slider */}
      <div className="bg-[#000F4A] py-10 sm:mt-[120px] mt-[80px]">
        <Slider>

          <div className="flex items-center gap-10 mr-10">
            {
              COMPANY_SLIDER.map((item, index) => (
                <div key={index}>
                  <Image src={item.img} alt={item.name} width={100} height={100} />
                </div>
              ))
            }
            {
              COMPANY_SLIDER.map((item, index) => (
                <div key={index}>
                  <Image src={item.img} alt={item.name} width={100} height={100} />
                </div>
              ))
            }
            {
              COMPANY_SLIDER.map((item, index) => (
                <div key={index}>
                  <Image src={item.img} alt={item.name} width={100} height={100} />
                </div>
              ))
            }
          </div>
        </Slider>
      </div>

      {/* FAQ */}
      <Container className='sm:mt-[96px] mt-14'>
        <div className='max-w-[760px]'>
            <h6 className='text-button-blue sm:text-base text-sm'>
                {PRICING_PLANS.FAQ.MAIN_HEADER_TEXT}
            </h6>
            <h4 className='sm:text-[36px] text-2xl font-semibold text-[#F4F4F4] mt-3'>
                {PRICING_PLANS.FAQ.TITLE}
            </h4>
            <p className='sm;text-xl text-base text-[#F4F4F4] mt-5'>
            Everything you need to know about the product and billing. Can&apos;t find the answer you&apos;re looking for? Please <span className='underline cursor-pointer'>chat to our friendly team</span>.
            </p>
        </div>
        <div className="sm:mt-[64px] mt-10 grid sm;grid-cols-2 grid-cols-1 sm:gap-[96px] gap-10">
        <img src={PRICING_PLANS.FAQ.IMAGE} className='w-full sm:hidden block' alt="" />
            <div className='flex flex-col sm:gap-[48px] gap-9 justify-between'>
                {
                    PRICING_PLANS.FAQ.KEY_POINTES.map((point, index) => (
                        <div key={index} className='flex gap-4'>
                            <div className='rounded-full h-12 w-12 min-w-12 min-h-12 flex items-center justify-center bg-[#F0F3FF] text-[#204FFF]'>
                                <point.ICON/>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h4 className='text-xl'>
                                    {point.TITLE}
                                </h4>
                                <p className='text-[#F4F4F4]'>
                                    {point.DESCRIPTION}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <img src={PRICING_PLANS.FAQ.IMAGE} className='w-full hidden sm;block' alt="" />
        </div>
      </Container>

      {/* NewsLetter */}
      <div className='mt-[96px]'>
        <NewsLetter />
      </div>

      {/* Footer */}
      <Footer/>
    </div>
  )
}

export default PricingPlans