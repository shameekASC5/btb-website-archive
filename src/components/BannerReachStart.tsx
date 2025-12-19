import React, { useState } from 'react'
import Button from './partial/Button'
import { ICONS } from '@/assets/icons'
import { IMAGES } from '@/assets'
import { Drawer } from 'antd'
import ContactForm from './ContactForm'

type Props = {}

const BannerReachStart = (props: Props) => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const onClose = () => setIsContactFormOpen(false);

  return (
    <div className=" w-full relative sm:py-[130px] py-14 flex items-center justify-center text-center bg-[#16172B]">
      <Drawer 
      width={'auto'} 
      closeIcon={null} 
      title={null} 
      onClose={onClose} 
      open={isContactFormOpen}
      style={{padding:'0px'}}
      >
        <ContactForm handleClose={onClose} />
      </Drawer>
    <div className="absolute top-0 left-0 w-full h-full  bg-[16172B] z-0">
    </div>
    <img src={IMAGES.HOME_BOTTOM_BANNER} alt=""  className='absolute top-0 left-0 w-full h-full object-cover z-10 opacity-20'/>
    <div className="z-20 flex flex-col sm:gap-[60px] gap-8 items-center">
      <div className="flex flex-col sm:gap-8 gap-4">

        <h4 className="sm:text-[60px] text-3xl font-bold bg-gradient-custom text-transparent bg-clip-text leading-normal">Reach for the Stars.</h4>
        <p className="sm:text-lg text-base text-[#CACACA]">
          We are ready for takeoff! Tell us a little about your business and we’ll reach <br /> out to get your project underway.
        </p>
      </div>
        <button 
        className='flex gap-3 sm;text-lg text-base sm:py-6 py-3 sm:px-12 px-6 bg-button-blue rounded-[10px]'
        onClick={()=>{
          setIsContactFormOpen(true)
        }}
        
        >
        Start your project <ICONS.ArrowRight />
        </button>
    </div>

  </div>
  )
}

export default BannerReachStart