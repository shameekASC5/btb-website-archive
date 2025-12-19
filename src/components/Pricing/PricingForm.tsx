import { ICONS } from '@/assets/icons'
import React, { useEffect, useState } from 'react'
import Input from '../Form/Input'
import { IMAGES } from '@/assets'
import { HTTP } from '@/services'

type Props = {
    handleClose: () => void
}

const PricingForm = ({ handleClose }: Props) => {

    const [step, setStep] = useState(1)

    const errorMesssagesMaster = {
        name: 'Name is required',
        email: 'Email is required',
        business_name: 'Business name is required',
        looking_to_build: 'Looking to build is required',
        title: 'Title is required',
        project_budget: 'Project budget is required'
    }

    const projectBudget = {
        title: "What is the desired project timeframe?",
        name: "project_budget",
        answers: [
            {
                label:"Rapid Prototype: $2500",
                value:"rapid_prototype"
            },
            {
                label:"Minimal Likable Product: $7500",
                value:"likable_product"
            },
            {
                label:"Minimal Viable Product: $20k+",
                value:"viable_product"
            }
        ]
    }

    const [errorMessages, setErrorMessages] = useState({
        name: errorMesssagesMaster.name,
        email: errorMesssagesMaster.email,
        business_name: errorMesssagesMaster.business_name,
        looking_to_build: errorMesssagesMaster.looking_to_build,
        title: errorMesssagesMaster.title,
        project_budget: errorMesssagesMaster.project_budget
    })

    const [errorMessagesState, setErrorMessagesState] = useState({
        name: false,
        email: false,
        business_name: false,
        looking_to_build: false,
        title: false,
        project_budget: false,
    })

    const [formData, setFormData] = useState<{ [key: string]: string }>({
        name: '',
        business_name: '',
        email: '',
        looking_to_build: '',
        title: '',
        project_budget: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        setErrorMessagesState({
            ...errorMessagesState,
            [e.target.name]: false
        })
    }

    const handleSubmit = async () => {
        if (step === 1) {

            if (formData.name === '') {
                setErrorMessagesState({
                    ...errorMessagesState,
                    name: true
                })
                setErrorMessages({
                    ...errorMessages,
                    name: errorMesssagesMaster.name
                })
                return
            }
            if (formData.email === '') {
                setErrorMessagesState({
                    ...errorMessagesState,
                    email: true
                })
                setErrorMessages({
                    ...errorMessages,
                    email: errorMesssagesMaster.email
                })
                return
            }
            if (formData.business_name === '') {
                setErrorMessagesState({
                    ...errorMessagesState,
                    business_name: true
                })
                setErrorMessages({
                    ...errorMessages,
                    business_name: errorMesssagesMaster.business_name
                })
                return
            }
            if (formData.title === '') {
                setErrorMessagesState({
                    ...errorMessagesState,
                    title: true
                })
                setErrorMessages({
                    ...errorMessages,
                    title: errorMesssagesMaster.title
                })
                return
            }
            if (formData.looking_to_build === '') {
                setErrorMessagesState({
                    ...errorMessagesState,
                    looking_to_build: true
                })
                setErrorMessages({
                    ...errorMessages,
                    looking_to_build: errorMesssagesMaster.looking_to_build
                })
                return
            }
            if (formData.project_budget === '') {
                setErrorMessagesState({
                    ...errorMessagesState,
                    project_budget: true
                })
                setErrorMessages({
                    ...errorMessages,
                    project_budget: errorMesssagesMaster.project_budget
                })
                return
            }

            try {
                const res: any = await HTTP.post("users/project-idea", formData);
                console.log(res)
                if (res.data.statusCode === 200) {
                    setStep(3)
                }
            }
            catch (e: any) {
                setErrorMessagesState({
                    ...errorMessagesState,
                    [e.response.data.error.key]: true
                })
                setErrorMessages({
                    ...errorMessages,
                    [e.response.data.error.key]: e.response.data.error.message
                })
            }
        }
    }

    const questions = [
        {
            title: "What is the desired project timeframe?",
            name: "project_timeframe",
            answers: [
                "Less than one month",
                "1 month",
                "2-3 months",
                "3-6 months",
                "6+ months"
            ]
        },
        {
            title: "What is the project budget? (in USD) ",
            name: "project_budget",
            answers: [
                "Under 5k",
                "5k-10k",
                "10k-25k",
                "25k-50k",
                "50,000+"
            ]
        },
    ]

    return (

        <div className='sm:w-[560px] w-full h-full bg-[#F4F4F4] py-[60px] px-10 flex flex-col'>
            <div className="flex justify-between">
                {
                    step === 3
                        ?
                        <div></div> :
                        <div className='w-[330px]'>
                            <h4 className='text-[32px] font-semibold leading-9 relative z-[20]'>
                                Let’s talk about <br />how we can help
                                <span className='absolute bottom-[-10px] right-[60px] -z-[10]'>
                                    <ICONS.Sketch />
                                </span>
                            </h4>
                            <p className='text-[#959595] mt-4'>
                                We’re a chatty bunch, so please don’t hesitate to get in touch about any query - big or small. After you fill out this form, we will provide you with a quote within 24 hours.
                            </p>
                        </div>
                }
                <span className='cursor-pointer h-fit' onClick={handleClose}>
                    <ICONS.CrossRounded />
                </span>
            </div>
            {
                step === 1 ?
                    (
                        <>
                            <div className='mt-10'>
                                <h4 className='text-xl font-normal'>
                                    Introduce yourself
                                </h4>
                                <div className="grid sm:grid-cols-2 gap-x-12 mt-10 gap-y-[70px]">
                                    <div className='flex flex-col gap-1 relative'>
                                        <p className='text-[#515151]'>Name</p>
                                        <Input
                                            value={formData.name}
                                            onChange={handleChange}
                                            name='name'
                                        />
                                        {
                                            errorMessagesState.name &&
                                            <p className='text-red-500 absolute bottom-[-30px] left-0'>
                                                {errorMessages.name}
                                            </p>
                                        }
                                    </div>
                                    <div className='flex flex-col gap-1 relative'>
                                        <p className='text-[#515151]'>Email Address</p>
                                        <Input
                                            value={formData.email}
                                            onChange={handleChange}
                                            name='email'
                                            type='email'
                                        />
                                        {
                                            errorMessagesState.email &&
                                            <p className='text-red-500 absolute bottom-[-30px] left-0'>
                                                {errorMessages.email}
                                            </p>
                                        }
                                    </div>
                                    <div className='flex flex-col gap-1 relative'>
                                        <p className='text-[#515151]'>Business name</p>
                                        <Input
                                            value={formData.business_name}
                                            onChange={handleChange}
                                            name='business_name'
                                        />
                                        {
                                            errorMessagesState.business_name &&
                                            <p className='text-red-500 absolute bottom-[-30px] left-0'>
                                                {errorMessages.business_name}
                                            </p>
                                        }
                                    </div>
                                    <div className='flex flex-col gap-1 relative'>
                                        <p className='text-[#515151]'>Title</p>
                                        <Input
                                            value={formData.title}
                                            onChange={handleChange}
                                            name='title'
                                        />
                                        {
                                            errorMessagesState.title &&
                                            <p className='text-red-500 absolute bottom-[-30px] left-0'>
                                                {errorMessages.title}
                                            </p>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className='mt-[60px]'>
                                <h4 className='text-xl font-normal'>
                                    What are you looking to build?
                                </h4>
                                <div className="grid grid-cols-1 gap-x-12 mt-10 gap-y-[70px]">
                                    <div className='flex flex-col gap-1 relative'>
                                        <p className='text-[#515151]'>Description*</p>
                                        <Input
                                            value={formData.looking_to_build}
                                            onChange={handleChange}
                                            name='looking_to_build'
                                        />
                                        {
                                            errorMessagesState.looking_to_build &&
                                            <p className='text-red-500 absolute bottom-[-30px] left-0'>
                                                {errorMessages.looking_to_build}
                                            </p>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className='relative mt-10'>
                                        <h4 className='text-xl font-normal'>
                                            {projectBudget.title}
                                        </h4>
                                        <p className='absolute  bottom-[-40px] left-0 text-red-500'>
                                            {
                                                errorMessagesState.project_budget ?
                                                <p>
                                                    {errorMessages.project_budget}
                                                </p>
                                                :
                                                null
                                            }
                                        </p>
                                        <div className="flex flex-col gap-3 mt-5">
                                            {
                                                projectBudget.answers.map((answer, index) => (
                                                    <div key={index} className='flex gap-3'>
                                                        <input
                                                            checked={formData[projectBudget.name] === answer.value}
                                                            onChange={()=>{
                                                                setFormData({
                                                                    ...formData,
                                                                    [projectBudget.name]: answer.value
                                                                })
                                                                setErrorMessagesState({
                                                                    ...errorMessagesState,
                                                                    [projectBudget.name]: false
                                                                })
                                                            }}
                                                            name={projectBudget.name}
                                                            type='radio'
                                                        />
                                                        <p
                                                        className='cursor-pointer'
                                                        onClick={()=>{
                                                            setFormData({
                                                                ...formData,
                                                                [projectBudget.name]: answer.value
                                                            })
                                                            setErrorMessagesState({
                                                                ...errorMessagesState,
                                                                [projectBudget.name]: false
                                                            })
                                                        }}
                                                        >
                                                        {answer.label}
                                                        </p>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                        </>
                    )
                    :
                    (
                        <div className='flex flex-col gap-[70px] mt-[112px] items-center'>
                            <h1 className='text-end text-[65px] flex leading-[65px] w-full'>
                                <span>

                                    Thank you for
                                    contacting us! <span className='text-button-blue'> We
                                        will be in touch with
                                        you shortly.</span>
                                </span>
                            </h1>
                            <img src={IMAGES.LOGO_MAIN} className='w-[300px]' alt="" />
                        </div>
                    )
            }

            {
                step === 3
                    ?
                    null :
                    <div className="flex justify-end mt-5 pb-5">
                        <button
                            onClick={() => {
                                handleSubmit()
                            }}
                            className='flex items-center px-7 py-4 gap-2 text-button-blue bg-transparent rounded-full border border-button-blue'>
                            Submit
                            <ICONS.ArrowRight />
                        </button>
                    </div>
            }

        </div>

    )
}

export default PricingForm