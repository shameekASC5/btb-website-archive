"use client"

import { IMAGES } from '@/assets'
import { FOOTER_ICONS } from '@/data'
import moment from 'moment'
import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
    const ROUTES = [
        {
            title: "Privacy Policy",
            link: "/privacy-policy"
        },
        {
            title: "Cookies Policy",
            link: "/cookie-policy"
        },
    ]
    const router = useRouter()
    return (
        <footer className='container mx-auto px-2'>
            <div>
                <div className="flex justify-between items-center border-t border-[rgba(256,256,256,0.34)] sm:flex-row flex-col">
                    <img src={IMAGES.LOGO} className='w-[150px]' alt="bbs logo" />
                    <div className="flex items-center gap-4">
                        {
                            FOOTER_ICONS.map((icon, index) => (
                                <div 
                                onClick={()=>{
                                    window.open(icon.link, '_blank')
                                }}
                                className="flex items-center justify-center h-12 w-12 rounded-full border border-[rgba(255, 255, 255, 0.24)] cursor-pointer" key={index}>
                                    <icon.component />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='mt-6 text-2xl sm:block hidden'>
                        <p>Award winning tech agency.</p>
                        <p>beyondthebox.studio</p>
                </div>
                <div className="mt-[64px] border-t border-[rgba(256,256,256,0.34)] pt-10 flex sm:flex-row flex-col items-center justify-between text-[#A5A5A5] pb-5 gap-4">
                    <p>© {moment().year()} Beyond the Box Studio. All Rights Reserved</p>
                    <div className="flex items-center gap-11">
                        {
                            ROUTES.map((route, index) => (
                                <button
                                    onClick={() => {
                                        router.push(route.link)
                                    }}
                                    key={index}>
                                    {route.title}
                                </button>
                            ))
                        }
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer