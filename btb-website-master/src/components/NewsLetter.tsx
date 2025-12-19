import { ICONS } from '@/assets/icons'
import { HTTP } from '@/services'
import React, { useState } from 'react'

type Props = {}

const NewsLetter = (props: Props) => {
  const [email, setEmail] = useState('')

  const [emailError, setEmailError] = useState("")

  const [loading, setLoading] = useState(false)

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(email)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email")
      return
    }
    setLoading(true)

    try{
      const res = await HTTP.post("users/newsletter", {email})
      console.log(res.data)
      if(res.data.error){
        setEmailError(res?.data?.error?.message)
        return
      }
      setEmail("")
      alert("Subscribed successfully")
    }
    catch(err:any){
      console.log(err)
      setEmailError(err?.response?.data?.error?.message || "Something went wrong")
    }
    finally{
      setLoading(false)
    }
  }
  return (
    <div className="container mx-auto px-2 mb-[64px]">
      <div className="flex justify-between items-center sm:flex-row flex-col gap-3">
        <div className="flex flex-col gap-1 sm:text-start text-center">
          <h4 className="text-lg">
            Join our newsletter
          </h4>
          <p>
            We’ll send you a nice letter once per week. No spam.
          </p>
        </div>
        <form onSubmit={handleSubmit} className='relative'>
          <div className="flex items-center sm:gap-2 gap-4 sm:flex-row flex-col">
            <div className="flex items-center gap-2 px-6 py-4 w-[300px] rounded-full border border-[rgba(255, 255, 255, 0.24)] text-[rgba(255, 255, 255, 0.24)]">
              <ICONS.Person />
              <input
                type="email"
                value={email}
                onChange={(e) =>{
                   setEmail(e.target.value)
                    setEmailError("")
                  }}
                placeholder="Enter your email"
                className="border-none bg-transparent text-white p-0 grow focus:outline-none"
              />
            </div>
            {
              loading ?
              <div className="py-4 px-5 bg-button-blue rounded-full sm:w-fit w-full">
                Loading....
            </div>
              :
            <button type='submit' className="py-4 px-5 bg-button-blue rounded-full sm:w-fit w-full">
              Subscribe
            </button>
            }
          </div>
          {
            emailError && <p className="absolute text-red-500 left-0 -bottom-8">{emailError}</p>
          }
        </form>
      </div>
    </div>
  )
}

export default NewsLetter