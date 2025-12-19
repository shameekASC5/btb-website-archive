import { ICONS } from '@/assets/icons'
import React from 'react'
import Button from '../partial/Button'

type DataPropType = {
    NAME: string
    DESCRIPTION: string
    PRICE: string
    FEATURES: string[]
    BUTTON_TEXT: string
}

type Props = {
    data: DataPropType
    showArrow?: boolean
    onButtonClick?: () => void
}

const PricingCard = ({
    data,
    showArrow,
    onButtonClick
}: Props) => {
    return (
        <div className='w-full rounded-[16px] bg-white border border-[#EAECF0] pt-10 px-8 pb-4'>
            {/* Header */}
            <div className='flex flex-col gap-4 items-center text-center'>
                <div className="flex flex-col gap-1">
                    <h4 className={`text-xl font-semibold text-[#101828] ${showArrow?"relative":""}`}>
                        {data.NAME}
                        {showArrow &&  <span className="absolute -top-[60px] right-0 flex items-start text-button-blue gap-2 text-sm">
                            <ICONS.CustomeArrow />
                            <span className='-mt-[10px]'>
                                Most popular!
                            </span>
                        </span>}
                    </h4>
                    <p className='text-[#667085]' dangerouslySetInnerHTML={{__html:data.DESCRIPTION}}></p>
                        
                </div>
                <p className='font-semibold text-[48px] leading-[60px] text-[#101828]'>
                    {data.PRICE}
                </p>
            </div>
            {/* Key Points */}
            <div className="mt-8 flex flex-col gap-4">
                {
                    data.FEATURES.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                            <ICONS.CheckGreen />
                            <span className='text-[#667085]'>
                                {feature}
                            </span>
                        </div>
                    ))
                }
            </div>
                <Button
                onClick={onButtonClick}
                outerClassName='w-full' className='w-full mt-10 text-base'>
                    {data.BUTTON_TEXT}
                </Button>
        </div>
    )
}

export default PricingCard