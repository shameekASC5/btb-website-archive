"use client"

import { ICONS } from '@/assets/icons'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import NewsLetter from '@/components/NewsLetter'
import PitchCard from '@/components/PitchCompetition/PitchCard'
import WhyApplyCard from '@/components/PitchCompetition/WhyApplyCard'
import Container from '@/components/layouts/Container'
import { PITCH_COMPETITIONS } from '@/data'
import { HTTP } from '@/services'
import React, { useEffect } from 'react'
import * as Select from '@radix-ui/react-select';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';

type Props = {}

const SelectOptions = [
  {
    value: "sort_by",
    label: <div className='flex items-center justify-between w-full'>
      Select Filter
    </div>
  },
  {
    value: "min_to_max",
    label: "Prize: Minimum to Maximum"
  },
  {
    value: "max_to_min",
    label: "Prize: Maximum to Minimum"
  },
  {
    value: "in_person",
    label: "In-Person"
  },
  {
    value: "remote",
    label: "Remote Only"
  },
  // {
  //   value: "deadline",
  //   label: "Application Deadline"
  // },
]

const PitchCompetition = (props: Props) => {

  const [filter, setFilter] = React.useState("sort_by")

  // Newletter
  const [email, setEmail] = React.useState('')
  const [emailError, setEmailError] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [dataLoading, setDataLoading] = React.useState(false)

  // pitch competitions
  const [pitchCompetitions, setPitchCompetitions] = React.useState([])
  const [filterdPitchCompetitions, setFilterdPitchCompetitions] = React.useState([])
  const [showMore, setShowMore] = React.useState(false)

  React.useEffect(() => {
    const fetchPitchCompetitions = async () => {
      setDataLoading(true)
      try {
        const res = await HTTP.get("pitch")
        console.log(res.data)
        setPitchCompetitions(res.data.data)
        setFilter("min_to_max")
        setFilterdPitchCompetitions(res.data.data?.slice(0, 5))
      } catch (err) {
        console.log(err)
      }
      finally {
        setDataLoading(false)
      }
    }
    fetchPitchCompetitions()
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(email)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email")
      return
    }
    setLoading(true)

    try {
      const res = await HTTP.post("users/pitch-newsletter", { email })
      console.log(res.data)
      if (res.data.error) {
        setEmailError(res?.data?.error?.message)
        return
      }
      setEmail("")
      alert("Subscribed successfully")
    }
    catch (err: any) {
      console.log(err)
      setEmailError(err?.response?.data?.error?.message || "Something went wrong")
    }
    finally {
      setLoading(false)
    }
  }

  // const handleLoadMore = () => {
  //   if(filter === "sort_by"){
  //     setFilterdPitchCompetitions(pitchCompetitions)
  //   }
  //   else if(filter === "min_to_max"){
  //     setFilterdPitchCompetitions(pitchCompetitions.sort((a, b) => a["Min Prize"] - b["Min Prize"]))
  //   }
  //   else if(filter === "max_to_min"){
  //     setFilterdPitchCompetitions(pitchCompetitions.sort((a, b) => b["Max Prize"] - a["Max Prize"]))
  //   }
  //   else if(filter === "in_person"){
  //     setFilterdPitchCompetitions(pitchCompetitions.filter((data: any) => data.Location === "In-Person"))
  //   }
  //   else if(filter === "remote"){
  //     setFilterdPitchCompetitions(pitchCompetitions.filter((data: any) => data.Location === "Remote"))
  //   }
  //   else if(filter === "deadline"){
  //     setFilterdPitchCompetitions(pitchCompetitions.sort((a, b) => new Date(a["Application Deadline"])?.getTime() - new Date(b["Application Deadline"]).getTime())?.filter((data: any) => data["Application Deadline"] > new Date().toISOString()))
  //   }
  // }

  // useEffect(()=>{
  //   if(filter === "sort_by"){
  //     setFilterdPitchCompetitions(pitchCompetitions.slice(0, 5))
  //   }
  //   else if(filter === "min_to_max"){
  //     setFilterdPitchCompetitions(pitchCompetitions.sort((a, b) => a["Min Prize"] - b["Min Prize"]).slice(0, 5))
  //   }
  //   else if(filter === "max_to_min"){
  //     setFilterdPitchCompetitions(pitchCompetitions.sort((a, b) => b["Max Prize"] - a["Max Prize"]).slice(0, 5))
  //   }
  //   else if(filter === "in_person"){
  //     setFilterdPitchCompetitions(pitchCompetitions.filter((data: any) => data.Location === "In-Person").slice(0, 5))
  //   }
  //   else if(filter === "remote"){
  //     setFilterdPitchCompetitions(pitchCompetitions.filter((data: any) => data.Location === "Remote").slice(0, 5))
  //   }
  //   else if(filter === "deadline"){
  //     setFilterdPitchCompetitions(pitchCompetitions.sort((a, b) => new Date(a["Application Deadline"]).getTime() - new Date(b["Application Deadline"]).getTime())?.filter((data: any) => new Date(data["Application Deadline"])?.toISOString() > new Date().toISOString()).slice(0, 5))
  //   }
  // }, [filter])
  return (
    <div className='bg-[#05000F] min-h-screen text-white'>
      <Navbar />
      {/* Header */}
      <div className='flex justify-center text-center flex-col items-center gap-6 mt-[70px]'>
        <h4 className='sm:text-[60px] text-3xl font-semibold text-[#F4F4F4] sm:leading-[60px] leading-[35px]'>
          Pitch your venture idea.
        </h4>
        <p className='sm:max-w-[820px] max-w-[90vw] sm:text-lg text-base text-[#B3B3B3] font-normal'>
          Access to capital is a ongoing challenge for many startups, so every week we consolidate a list of pitch competitions for you to apply to. Sign up for the weekly newsletter for early access!
        </p>
      </div>

      {/* Newsletter */}
      <div className="sm:mt-[35px] mt-14 flex justify-center">
        <form onSubmit={handleSubmit} className='relative'>
          <div className="flex items-center sm:gap-2 gap-4 sm:flex-row flex-col">
            <div className="flex items-center gap-2 px-6 py-4 sm:w-[430px] w-[90vw] rounded-full border border-[rgba(255, 255, 255, 0.24)] text-white">
              <ICONS.Person />
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  setEmailError("")
                }}
                placeholder="Join our Pitch Competition email list"
                className="border-none bg-transparent p-0 grow focus:outline-none placeholder:text-white"
              />
            </div>
            {
              loading ?
                <div className="py-4 px-5 bg-button-blue rounded-full sm:w-auto w-full">
                  Loading....
                </div>
                :
                <button type='submit' className="py-4 px-7 bg-button-blue rounded-full sm:w-auto w-full">
                  Subscribe
                </button>
            }
          </div>
          {
            emailError && <p className="absolute text-red-500 left-0 -bottom-8">{emailError}</p>
          }
        </form>
      </div>

      {/* pitch competitions */}
      <Container size="lg" className='sm:mt-[50px] mt-14 sm:px-[80px]'>
        <div className="flex justify-between sm:flex-row flex-col gap-y-4">
          <h5 className='sm:text-[30px] text-2xl font-bold leading-[28px]'>
            Upcoming Pitch Competitions
          </h5>
          {/* <Select.Root value={filter} onValueChange={(value)=>{
            console.log(value)
            setFilter(value)
          }}>
            <Select.Trigger className="flex px-3 py-3 bg-white rounded-md text-black sm:w-[280px] w-full hover:border-none focus-visible:border-none focus-visible:outline-none" aria-label="Food" >
            <div className='flex items-center justify-between w-full'>
                  {SelectOptions.find((option) => option.value === filter)?.label}
                  <ChevronDownIcon/>
                </div>
            </Select.Trigger>
            <Select.Portal>
              <Select.Content position='popper' className='bg-white rounded-md sm:w-[280px] w-full'>
                <Select.Viewport className="SelectViewport">
                  {
                    SelectOptions.map((options, index) => (
                      <Select.Item value={options.value} className='px-4 py-3 hover:border-none focus-visible:border-none focus-visible:outline-none cursor-pointer hover:bg-gray-200' key={index}>
                        <Select.ItemText>
                          <span>{options.label}</span>
                        </Select.ItemText>
                      </Select.Item>
                    ))
                  }
                </Select.Viewport>
              </Select.Content>
            </Select.Portal>
          </Select.Root> */}
        </div>
        {
          dataLoading
            ?
            <div className='flex items-center justify-center min-h-[300px]'>
              <div role="status">
                <svg aria-hidden="true" className="w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </div>

            :
            <>
              <div className='flex flex-col gap-[35px] mt-[35px] min-h-[300px]'>
                {
                  filterdPitchCompetitions?.length>0?filterdPitchCompetitions.map((data: any, index) => (
                    <PitchCard
                      pitch_name={data.Name}
                      pitch_location={data.Location}
                      deadline={data?.["Application Deadline"]}
                      min_prize={data?.["Min Prize"]}
                      max_prize={data?.["Max Prize"]}
                      link={data?.Url}
                      key={index} />
                  ))
                  :
                  <div className='flex items-center justify-center min-h-[300px]'>
                    No Pitch Competitions Found
                  </div>
                }
              </div>
              <div className="flex justify-center mt-[67px]">
                {
                  !showMore && filterdPitchCompetitions.length > 0
                    ?
                    <button
                      onClick={() => {
                        setShowMore(true)
                        setFilterdPitchCompetitions(pitchCompetitions)
                        // handleLoadMore()
                      }}
                      className='flex items-center px-5 py-3 gap-2 text-button-blue bg-white rounded-[8px] '>
                      <ICONS.ArrowDown />
                      Load more
                    </button>
                    :
                    null
                }
              </div>
            </>
        }


        {/* Why Apply */}
        <div className='mt-[60px]'>
          <h3 className='font-bold text-[30px] leading-[28px] pl-2'>
            Why Apply?
          </h3>
          <div className='mt-[50px] grid sm:grid-cols-5 grid-col-s-1 gap-3'>
            {
              PITCH_COMPETITIONS.WHY_APPLY.CONTENTS.map((data, index) => (
                <WhyApplyCard data={data} key={index} />
              ))
            }
          </div>
        </div>
      </Container>

      <div className='sm:mt-[180px] mt-[80px]'>
        <NewsLetter />
      </div>
      <Footer />
    </div>
  )
}

export default PitchCompetition