"use client"

import { ICONS } from '@/assets/icons'
import { OUR_WORK } from '@/data'
import * as Accordion from '@radix-ui/react-accordion'
import React, {useState} from 'react'

type Props = {}

const Accordian = (props: Props) => {
  const [active, setActive] = useState<string | undefined>(undefined)
    return (
        <div className='w-full flex justify-center'>

<Accordion.Root className="bg-[#2E2E2E] py-6 sm:px-12 px-5 rounded-[20px] sm:w-[1000px] w-full" type="single" defaultValue={undefined} collapsible>
    <div className='text-[#D6D6D6] sm:text-[40px] text-2xl border-b pb-8 text-center'>
    Expanded Description of Services
    </div>
    {
      OUR_WORK.ACCORDIAN_DATA.map((item, index) => (
      <Accordion.Item key={index} className="AccordionItem py-8 border-b transform transform-all duration-1000" value={item.SLUG}>
        <Accordion.AccordionTrigger
          onClick={()=>{
            if(active === item.SLUG){
              setActive(undefined)
            }
            else{
              setActive(item.SLUG)
            }
          }}
        className='AccordionTrigger sm:text-[30px] text-lg text-[#D6D6D6] flex justify-between items-center w-full pr-8'>{item.TITLE} <span className='AccordionChevron'><ICONS.Chevron/></span></Accordion.AccordionTrigger>
        <Accordion.AccordionContent className='AccordionContent overflow-hidden'>
          <div className='flex flex-col gap-8 mt-8'>
            {
              item.CONTENT.map((content, index2)=>{
                if(content.isHTML){
                  return <div key={index2} dangerouslySetInnerHTML={{__html: content.content}}></div>
                }
                else return <p key={index2}>{content.content}</p>
              })
            }
          </div>
        </Accordion.AccordionContent>
      </Accordion.Item>
      ))
    }
  </Accordion.Root>
        </div>
    )
}

export default Accordian