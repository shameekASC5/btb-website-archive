import { IMAGES } from '@/assets'
import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {
    pitch_name:string
    pitch_location:string
    deadline:string
    min_prize:string
    max_prize:string
    link:string
}

const PitchCard = ({
    pitch_name,
    pitch_location,
    deadline,
    min_prize,
    max_prize,
    link
}: Props) => {

  const router = useRouter()
  return (
    <div 
    className='w-full flex justify-between items-start p-4 sm:gap-10 gap-5 font-manrope sm:flex-row flex-col cursor-pointer hover:scale-[1.02] transform duration-500 hover:bg-gray-900 rounded-xl'
    >
            <img 
            src={IMAGES.PITCH_COMPETITION.IMAGE1} className='block sm:hidden w-full aspect-[2/1] object-cover rounded-md hover:opacity-50 cursor-pointer' alt="pitch-image" 
            onClick={()=>router.push('/pitch-competition/expanded')}
            />
        <div className=' flex flex-col gap-2 text-sm'>
            <p className='text-[#99AEBE] font-normal leading-[21px]'>{pitch_location}</p>
            <p className='text-base'>{pitch_name}</p>
            <p className='text-[#99AEBE] font-normal leading-[21px]'>Application Deadline: {deadline}</p>
            <p className='text-[#99AEBE] font-normal leading-[21px]'>Top Prize: <span className='font-bold'>{min_prize} {min_prize&&max_prize?"- "+max_prize:max_prize}</span></p>
            <p 
            onClick={()=>window.open(link, '_blank')}
            className='text-[#204FFF]/90 text-sm font-normal underline cursor-pointer'>Application Link</p>
        </div>
        <img src={IMAGES.PITCH_COMPETITION.IMAGE1} className='sm:block hidden w-[320px] h-[170px] object-cover rounded-md' alt="pitch-image" />
    </div>
  )
}

export default PitchCard