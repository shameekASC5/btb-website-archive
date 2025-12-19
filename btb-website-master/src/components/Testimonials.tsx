import React from 'react'
import Slider from './Slider'
import { TESTIMONIALS } from '@/data'

type Props = {}

const Testimonials = (props: Props) => {
  return (
    <div className="pl-10 flex flex-col sm:gap-[100px] gap-12">
        <div className="flex flex-col gap-3 text-center">
          <h4 className="sm:text-2xl text-lg font-semibold text-[#204FFF]">
            TESTIMONIALS
          </h4>
          <p className="sm:text-[60px] text-2xl font-medium">
            Don’t just take our word for it
          </p>
        </div>
        <Slider>
          <div className="flex items-center gap-10 mr-10">
            {
              TESTIMONIALS.map((item, index) => (
                <div key={index} className="flex flex-col justify-between sm:max-w-[500px] max-w-[300px]">
                  <h4 className="sm:text-[32px] text-base sm:font-medium font-normal whitespace-normal sm:leading-[40px] leading-[30px]">
                    {`"`}{item.feedback}{`"`}
                  </h4>
                  <p className="sm:text-md text-xs font-medium sm:mt-12 mt-5">
                    {item.name}
                  </p>
                </div>
              ))
            }
          </div>
        </Slider>
      </div>
  )
}

export default Testimonials