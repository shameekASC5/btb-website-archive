"use client"

import React, { useState } from 'react'
import ContactForm from './ContactForm'
import { Drawer } from 'antd'

type Props = {}

const HaveIdeaForm = (props: Props) => {

    const [isContactFormOpen, setIsContactFormOpen] = useState(false);
    const onClose = () => setIsContactFormOpen(false);

    const errorMessages = {
        name: 'Name is required',
        email: 'Email is required',
        detailed_product_to_build_description: 'Message is required'
    }

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        detailed_product_to_build_description: ''
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        setErrorStates({
            ...errorStates,
            [e.target.name]: false
        })
    }

    const [errorStates, setErrorStates] = useState({
        name: false,
        email: false,
        detailed_product_to_build_description: false
    })

    const handleSubmit = () => {
        if (!formData.name) {
            setErrorStates({
                ...errorStates,
                name: true
            })
            return
        }
        if (!formData.email) {
            setErrorStates({
                ...errorStates,
                email: true
            })
            return
        }
        if (!formData.detailed_product_to_build_description) {
            setErrorStates({
                ...errorStates,
                detailed_product_to_build_description: true
            })
            return
        }

        setIsContactFormOpen(true)


    }

    return (
        <div className='flex flex-col justify-center items-center sm:gap-[100px] gap-8'>
            <Drawer
                width={'auto'}
                closeIcon={null}
                title={null}
                onClose={onClose}
                open={isContactFormOpen}
                style={{ padding: '0px' }}
            >
                <ContactForm
                    handleClose={onClose}
                    prefillData={formData}
                />
            </Drawer>
            <div className='bg-gradient-custom text-transparent bg-clip-text sm:text-[60px] text-2xl font-bold leading-normal'>
                Do you have an idea?
            </div>
            <div className="flex flex-col sm:w-[570px] w-[90vw] gap-[60px]">
                <div className="flex flex-col gap-1 items-start relative">
                    <p className='text-[#E0E0E0] sm:text-[18px] text-sm'>Your name</p>
                    <input
                        value={formData.name}
                        onChange={handleChange}
                        name='name'
                        type="text"
                        className='border-0 outline-none focus:outline-none focus:border-b bg-transparent border-b border-[#BCBCBC] w-full'
                    />
                    {
                        errorStates.name &&
                        <p className='text-red-500 absolute bottom-[-30px] left-0'>
                            {errorMessages.name}
                        </p>
                    }
                </div>
                <div className="flex flex-col gap-1 items-start relative">
                    <p className='text-[#E0E0E0] sm:text-[18px] text-sm'>Your e-mail</p>
                    <input
                        value={formData.email}
                        onChange={handleChange}
                        name='email'
                        type="email"
                        className='border-0 outline-none focus:outline-none focus:border-b bg-transparent border-b border-[#BCBCBC] w-full'
                    />
                    {
                        errorStates.email &&
                        <p className='text-red-500 absolute bottom-[-30px] left-0'>
                            {errorMessages.email}
                        </p>
                    }
                </div>
                <div className="flex flex-col gap-1 items-start relative">
                    <p className='text-[#E0E0E0] sm:text-[18px] text-sm'>Your message</p>
                    <input
                        value={formData.detailed_product_to_build_description}
                        onChange={handleChange}
                        name='detailed_product_to_build_description'
                        type="text"
                        className='border-0 outline-none focus:outline-none focus:border-b bg-transparent border-b border-[#BCBCBC] w-full'
                    />
                    {
                        errorStates.detailed_product_to_build_description &&
                        <p className='text-red-500 absolute bottom-[-30px] left-0'>
                            {errorMessages.detailed_product_to_build_description}
                        </p>
                    }
                </div>
            </div>
            <button
                onClick={handleSubmit}
                className='bg-button-blue sm:px-[96px] px-10 sm:py-6 py-4 rounded-[10px] sm:text-[18px] text-sm font-semibold text-white'>
                Let&apos;s Do This
            </button>
        </div>
    )
}

export default HaveIdeaForm