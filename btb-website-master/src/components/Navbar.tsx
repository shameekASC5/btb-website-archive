"use client"

import { IMAGES } from '@/assets'
import { ICONS } from '@/assets/icons'
import { Drawer } from 'antd'
import { usePathname, useRouter } from 'next/navigation'
import React, { useState } from 'react'

type Props = {}

const Navbar = (props: Props) => {
  const router = useRouter()
  const ROUTES = [
    {
      title:"About Us",
      link:"/about"
    },
    {
      title:"Services",
      link:"/service"
    },
    // {
    //   title:"Pricing",
    //   link:"/pricing-plans"
    // },
    {
      title:"Client Work ",
      link:"/our-work"
    },
    {
      title:"Blog",
      link:"/blog"
    },
    {
      title:"Pitch Competitions",
      link:"/pitch-competition"
    },
  ]

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const onClose = () => setIsSidebarOpen(false);

  const pathname = usePathname()

  return (
    <div className='flex justify-between items-center px-10 sm:py-2 py-5 text-white'>
      <Drawer 
      width={'auto'} 
      closeIcon={null} 
      title={null} 
      onClose={onClose} 
      open={isSidebarOpen}
      style={{padding:'0px'}}
      placement='left'
      >
        <div className='w-[100vw] h-full bg-[#05000F] p-4'>
          <div className='flex justify-center relative'>
            <img
              onClick={()=>{
                router.push('/')
              }}
              src={IMAGES.LOGO_MAIN} className='w-[100px] cursor-pointer' alt="bbs logo" />
              <span className='cursor-pointer h-fit  absolute top-2 left-2 text-white' onClick={onClose}>
                    <ICONS.CrossRounded />
                </span>
          </div>

          <div className="flex flex-col mt-10">
            {
              ROUTES.map((route, index) => (
                <button
                className='text-white text-lg font-medium mt-4'
                onClick={()=>{
                  router.push(route.link)
                }}
                key={index}>
                  {route.title}
                </button>
              ))
            }
          </div>
        </div>
      </Drawer>
        <div className="flex items-center justify-between w-full">
            <div
            className='block sm:hidden'
            onClick={()=>{
              setIsSidebarOpen(true)
            }}
            >
              <ICONS.Hamburger />
            </div>
            <img
            onClick={()=>{
              router.push('/')
            }}
            src={IMAGES.LOGO_MAIN} className='w-[100px] cursor-pointer sm:block hidden mr-5' alt="btb logo"
             />
            <div className="sm:flex hidden items-center gap-[30px]">
              {
                ROUTES.map((route, index) => (
                  <button
                  onClick={()=>{
                    router.push(route.link)
                  }}
                  key={index}
                  className={pathname.includes(route.link) == true ? 'text-[#204FFF] font-bold' : 'text-white font-bold'}
                  >
                    {route.title}
                  </button>
                ))
              }
            </div>
            <button
            onClick={()=>{
              router.push('/')
            }}
            className='font-medium'>
            beyondthebox.studio
            </button>
        </div>
    </div>
  )
}

export default Navbar