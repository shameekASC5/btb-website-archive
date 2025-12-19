import React from 'react'

type propDatType = {
    Icon:React.FC
    TITLE:string
    DESCRIPTION:string
}

type Props = {
    data:propDatType
}

const WhyApplyCard = ({
    data
}: Props) => {
  return (
    <div className='rounded-md border border-[#DBE0E5] p-4 flex flex-col gap-3'>
        <data.Icon/>
        <div className="flex flex-col gap-1">
            <h4 className='text-base font-bold'>{data.TITLE}</h4>
            <p className='text-sm font-normal text-[#99AEBE]'>{data.DESCRIPTION}</p>
        </div>
    </div>
  )
}

export default WhyApplyCard