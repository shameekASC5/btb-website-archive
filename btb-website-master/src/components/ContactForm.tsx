import { ICONS } from '@/assets/icons'
import React, { useEffect, useState } from 'react'
import Input from './Form/Input'
import { IMAGES } from '@/assets'
import { HTTP } from '@/services'

type Props = {
    handleClose: () => void
    prefillData?:{
        name?:string,
        email?:string,
        message?:string
    }
}

const ContactForm = ({handleClose, prefillData}: Props) => {

    const [step, setStep] = useState(1)

    const errorMesssagesMaster = {
        name: 'Name is required',
        email: 'Email is required',
        business_name: 'Business name is required',
        product_to_build_description: 'Title is required',
        detailed_product_to_build_description: 'Description is required',
        project_timeframe: 'Project timeframe is required',
        project_budget: 'Project budget is required'
    }

    const [errorMessages, setErrorMessages] = useState({
        name: errorMesssagesMaster.name,
        email: errorMesssagesMaster.email,
        business_name: errorMesssagesMaster.business_name,
        product_to_build_description: errorMesssagesMaster.product_to_build_description,
        detailed_product_to_build_description: errorMesssagesMaster.detailed_product_to_build_description,
        project_timeframe: errorMesssagesMaster.project_timeframe,
        project_budget: errorMesssagesMaster.project_budget
    })

    const [errorMessagesState, setErrorMessagesState] = useState({
        name: false,
        email: false,
        business_name: false,
        product_to_build_description: false,
        detailed_product_to_build_description: false,
        project_timeframe: false,
        project_budget: false
    })

    const [formData, setFormData] = useState<{[key: string]: string }>({
        name: '',
        business_name: '',
        email: '',
        product_to_build_description: '',
        detailed_product_to_build_description: '',
        project_timeframe:"",
        project_budget:""
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

    const handleSubmit = async() => {
        if (step === 2) {
            if(formData.project_timeframe === ''){
                setErrorMessagesState({
                    ...errorMessagesState,
                    project_timeframe: true
                })
                setErrorMessages({
                    ...errorMessages,
                    project_timeframe: errorMesssagesMaster.project_timeframe
                })
                return
            }
            if(formData.project_budget === ''){
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

            try{
                const res:any = await HTTP.post("users", formData);
                console.log(res)
                if(res.data.statusCode === 200){
                     setStep(3)
                }
            }
            catch(e:any){
                console.log(e)
                setErrorMessagesState({
                    ...errorMessagesState,
                    [e.response.data.error.key]: true
                })
                setErrorMessages({
                    ...errorMessages,
                    [e.response.data.error.key]: e.response.data.error.message
                })
                if(e.response.data.error.key === "project_budget" || e.response.data.error.key === "project_timeframe") setStep(2);
                else setStep(1)
            }
        }
        if(step === 1){
            if(formData.name === ''){
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
            if(formData.email === ''){
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
            if(formData.business_name === ''){
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
            if(formData.product_to_build_description === ''){
                setErrorMessagesState({
                    ...errorMessagesState,
                    product_to_build_description: true
                })
                setErrorMessages({
                    ...errorMessages,
                    product_to_build_description: errorMesssagesMaster.product_to_build_description
                })
                return
            }
            if(formData.detailed_product_to_build_description === ''){
                setErrorMessagesState({
                    ...errorMessagesState,
                    detailed_product_to_build_description: true
                })
                setErrorMessages({
                    ...errorMessages,
                    detailed_product_to_build_description: errorMesssagesMaster.detailed_product_to_build_description
                })
                return
            }
            setStep(2)
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

    useEffect(()=>{
        if(prefillData){
            setFormData({
                ...formData,
                ...prefillData
            })
        }
    }, [prefillData])

    return (

        <div className='sm:w-[560px] w-full h-full bg-[#F4F4F4] py-[60px] px-10 flex flex-col overflow-auto'>
            <div className="flex justify-between">
                {
                    step === 3
                        ?
                        <div></div> :
                        <div className='sm:w-[330px] w-[80vw]'>
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
                                <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-12 mt-10 gap-y-[70px]">
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
                                            value={formData.product_to_build_description}
                                            onChange={handleChange}
                                            name='product_to_build_description'
                                        />
                                        {
                                            errorMessagesState.product_to_build_description &&
                                            <p className='text-red-500 absolute bottom-[-30px] left-0'>
                                                {errorMessages.product_to_build_description}
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
                                            value={formData.detailed_product_to_build_description}
                                            onChange={handleChange}
                                            name='detailed_product_to_build_description'
                                        />
                                        {
                                            errorMessagesState.detailed_product_to_build_description &&
                                            <p className='text-red-500 absolute bottom-[-30px] left-0'>
                                                {errorMessages.detailed_product_to_build_description}
                                            </p>
                                        }
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                    : step === 2 ?
                    (
                        <div className='flex flex-col gap-[60px] mt-10'>
                            {
                                questions.map((question, index) => (
                                    <div key={index} className='relative'>
                                        <h4 className='text-xl font-normal'>
                                            {question.title}
                                        </h4>
                                        <p className='absolute  bottom-[-30px] left-0 text-red-500'>
                                            {
                                                question?.name==="project_timeframe"
                                                ?
                                                errorMessagesState.project_timeframe &&
                                                <p>
                                                    {errorMessages.project_timeframe}
                                                </p>
                                                :
                                                errorMessagesState.project_budget &&
                                                <p>
                                                    {errorMessages.project_budget}
                                                </p>
                                            }
                                        </p>
                                        <div className="flex flex-col gap-3 mt-10">
                                            {
                                                question.answers.map((answer, index) => (
                                                    <div key={index} className='flex gap-3'>
                                                        <input
                                                            value={answer}
                                                            checked={formData[question.name] === answer}
                                                            onChange={()=>{
                                                                setFormData({
                                                                    ...formData,
                                                                    [question.name]: answer
                                                                })
                                                                setErrorMessagesState({
                                                                    ...errorMessagesState,
                                                                    [question.name]: false
                                                                })
                                                            }}
                                                            name={question.name}
                                                            type='radio'
                                                        />
                                                        <p
                                                        className='cursor-pointer'
                                                        onClick={()=>{
                                                            setFormData({
                                                                ...formData,
                                                                [question.name]: answer
                                                            })
                                                            setErrorMessagesState({
                                                                ...errorMessagesState,
                                                                [question.name]: false
                                                            })
                                                        }}
                                                        >
                                                        {answer}
                                                        </p>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                ))

                            }
                        </div>
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
                    <div className="flex justify-end  mt-5 sm:pb-0 pb-5">
                        <button
                            onClick={() => {
                                handleSubmit()
                            }}
                            className='flex items-center px-7 py-4 gap-2 text-button-blue bg-transparent rounded-full border border-button-blue'>
                            {step === 2 ? 'Submit' : 'Next'}
                            <ICONS.ArrowRight />
                        </button>
                    </div>
            }

        </div>

    )
}

export default ContactForm