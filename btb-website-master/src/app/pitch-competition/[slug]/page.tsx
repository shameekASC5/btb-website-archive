"use client"
import { IMAGES } from '@/assets'
import { ICONS } from '@/assets/icons'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import NewsLetter from '@/components/NewsLetter'
import Container from '@/components/layouts/Container'
import React from 'react'

type Props = {}

const page = (props: Props) => {

  const whyThisPitch = [
    {
      title: "Get noticed by investors",
      desc: "Previous participants have raised over $9 billion in funding"
    },
    {
      title: "Pitch on the global stage",
      desc: "Pitch to thousands of attendees and a panel of top VCs"
    },
    {
      title: "Win prizes and media coverage",
      desc: "Previous winners have received coverage from TechCrunch, Forbes, and more"
    },
    {
      title: "Network with top founders",
      desc: "Connect with other founders, potential customers, and partners"
    },
  ]

  const prizes = [
    {
      img: IMAGES.PITCH_COMPETITION.PRIZE_1,
      title: "First place: $100,000",
      desc: "Plus, all finalists will receive a free year of TechCrunch Pro membership"
    },
    {
      img: IMAGES.PITCH_COMPETITION.PRIZE_2,
      title: "Second place: $50,000",
      desc: "Plus, all finalists will receive a free year of TechCrunch Pro membership"
    },
    {
      img: IMAGES.PITCH_COMPETITION.PRIZE_3,
      title: "Third place: $25,000",
      desc: "Plus, all finalists will receive a free year of TechCrunch Pro membership"
    },
  ]
  return (
    <div className='bg-[#05000F] min-h-screen text-white'>
      <Navbar />
      <Container className='sm:mt-[36px] mt-14 max-w-[960px]'>
        <div>
          {/* Image Header */}
          <div className='relative'>
            <img src={IMAGES.PITCH_COMPETITION.IMAGE2} className='w-full aspect-video object-cover rounded-2xl z-10 opacity-80' alt="" />
            <div className='absolute z-20 left-0 bottom-0 w-full sm:px-12 sm:py-6 px-6 py-3 text-[#F4F4F4]'>
              <h4 className='sm:text-5xl text-sm font-extrabold leading-[60px]'>
                Pitch at TechCrunch Disrupt
              </h4>
              <p className='sm:text-base text-xs font-normal sm:mt-2'>
                Join us in San Francisco for the world&apos;s leading startup event. Apply by June 1st
              </p>
              <button className='sm:mt-8 mt-2 sm:py-3 py-2 sm:px-5 px-3 text-[#05000F] bg-[#1F94E0] rounded-xl sm:text-base text-xs'>
                Apply Now
              </button>
            </div>
          </div>

          {/* Why this pitch */}
          <div className='mt-[36px]'>
            <h4 className='text-[#99AEBE] sm:text-[22px] text-lg font-bold'>
              Why pitch at TechCrunch Disrupt?
            </h4>
            <div className='mt-7 grid sm:grid-cols-4 grid-cols-2 gap-3'>
              {
                whyThisPitch.map((data, index) => (
                  <div className='border border-[#DBE0E5] rounded-lg p-4' key={index}>
                    <img src={IMAGES.PITCH_COMPETITION.IMAGE2} className='h-10 w-10 object-cover rounded-md' alt="" />
                    <h6 className="mt-3 text-[#99AEBE] font-bold text-base">{data.title}</h6>
                    <p className='text-[#637887] font-normal'>
                      {data.desc}
                    </p>
                  </div>
                ))
              }
            </div>
          </div>

          {/* Prizes */}
          <div className='mt-[36px]'>
            <h4 className='text-[#99AEBE] sm:text-[22px] text-lg font-bold'>
              Prizes
            </h4>
            <div className='mt-7 grid sm:grid-cols-3 grid-cols-1 gap-3'>
              {
                prizes.map((data, index) => (
                  <div className='border border-[#DBE0E5] rounded-lg p-4' key={index}>
                    <img src={data.img} className='h-10 w-10 object-cover rounded-md' alt="" />
                    <h6 className="mt-3 text-[#99AEBE] font-bold text-base">{data.title}</h6>
                    <p className='text-[#637887] font-normal'>
                      {data.desc}
                    </p>
                  </div>
                ))
              }
            </div>
          </div>

          {/* Eligibility */}
          <div className='mt-[36px]'>
            <h4 className='text-[#99AEBE] sm:text-[22px] text-lg font-bold'>
              Eligibility
            </h4>
            <div className='flex flex-col gap-8 mt-7 text-[#99AEBE] font-normal'>
              <p>Open to early-stage startups and pre-seed companies worldwide</p>
              <p>Startups must be less than 2 years old and have raised less than $5M in funding</p>
              <p>Previous TechCrunch Disrupt winners are not eligible</p>
            </div>
          </div>

          {/* Timeline */}
          <div className='mt-[36px]'>
            <h4 className='text-[#99AEBE] sm:text-[22px] text-lg font-bold'>
              Timeline
            </h4>
            <div className='flex flex-col gap-6 mt-7 text-[#637887] font-normal'>
              <div>
                <p className='text-[#99AEBE]'>
                  Application deadline
                </p>
                <p className='text-sm'>June 1st</p>
                <p className='text-sm'>Applications close</p>
              </div>
              <div>
                <p className='text-[#99AEBE]'>
                  Finalist announcement
                </p>
                <p className='text-sm'>July 1st</p>
                <p className='text-sm'>Finalists announced</p>
              </div>
              <div>
                <p className='text-[#99AEBE]'>
                  Pitch coaching
                </p>
                <p className='text-sm'>July 1st - July 15th</p>
                <p className='text-sm'>Pitch coaching</p>
              </div>
              <div>
                <p className='text-[#99AEBE]'>
                  TechCrunch Disrupt
                </p>
                <p className='text-sm'>August 1st - August 3rd</p>
                <p className='text-sm'>TechCrunch Disrupt</p>
              </div>
            </div>
          </div>

          <div className='mt-[32px]'>
            <h4 className='text-[#99AEBE] sm:text-[22px] text-lg font-bold'>
              Meet the judges
            </h4>
            <div className="grid grid-cols-5 gap-3 mt-7">
              <img src={IMAGES.PITCH_COMPETITION.JUDGE} className='aspect-[9/12] w-full object-cover rounded-xl' alt="" />
              <img src={IMAGES.PITCH_COMPETITION.JUDGE} className='aspect-[9/12] w-full object-cover rounded-xl' alt="" />
              <img src={IMAGES.PITCH_COMPETITION.JUDGE} className='aspect-[9/12] w-full object-cover rounded-xl' alt="" />
              <img src={IMAGES.PITCH_COMPETITION.JUDGE} className='aspect-[9/12] w-full object-cover rounded-xl' alt="" />
              <img src={IMAGES.PITCH_COMPETITION.JUDGE} className='aspect-[9/12] w-full object-cover rounded-xl' alt="" />
            </div>
          </div>

          <div className="flex justify-center sm:mt-[100px] mt-14 sm:mb-[90px] mb-8">
            <button className='bg-[#1F94E0] text-[#05000F] py-3 w-[400px] rounded-xl'>
            Apply Now
            </button>
          </div>

        </div>
      </Container>
          <NewsLetter/>

      <Footer/>
    </div>
  )
}

export default page