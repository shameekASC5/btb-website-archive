import React from 'react'
import Container from '../layouts/Container'

type TermsDataType = {
    TITLE: string,
    LAST_UPDATED: string
    INTRODUCTION: string,
    SECTIONS: {
        TITLE: string,
        CONTENTS: {
            VALUE: string
            IsHTML?: boolean
        }[]
    }[]
}

type Props = {
    data: TermsDataType
}

const Terms = ({
    data
}: Props) => {
    return (
        <Container size='lg' className='sm:px-[240px] px-4 font-sans'>
            <h2 className='sm:text-[48px] text-3xl font-semibold text-[#F4F4F4]'>{data.TITLE}</h2>
            <p className='sm:mt-6 mt-1 sm:text-xl text-lg text-[#F4F4F4]'>{data.LAST_UPDATED}</p>
            <h3 className='sm:text-[30px] text-2xl font-semibold leading-[38px] mt-[25px]'>Introduction</h3>
            <p className='sm:text-lg text-base text-[#F4F4F4] mt-6 leading-[28px] font-normal' dangerouslySetInnerHTML={{ __html: data.INTRODUCTION }}></p>
            <div className="mt-[25px] flex flex-col gap-6">
                {
                    data.SECTIONS.map((section, index) => (
                        <div key={index}>
                            <h4 className='sm:text-2xl text-xl font-semibold'>
                                {section.TITLE}
                            </h4>
                            <div className="flex flex-col gap-6 mt-[15px]">
                                {
                                    section.CONTENTS.map((content, index2) => {
                                        if(content.IsHTML){
                                            return(
                                                <p className='sm:text-lg text-base text-[#F4F4F4] leading-[28px] font-normal' key={index2} dangerouslySetInnerHTML={{ __html: content.VALUE }}></p>
                                            )
                                        }
                                        else return(
                                            <p className='sm:text-lg text-base text-[#F4F4F4] leading-[28px] font-normal' key={index2}>
                                            {
                                                content.VALUE
                                            }
                                        </p>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </Container>
    )
}

export default Terms