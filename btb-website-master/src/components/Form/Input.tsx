import React from 'react'

type Props = {
    value: string | number
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    type?: string
    name?: string
}

const Input = ({
value,
onChange,
type = 'text',
name
}: Props) => {
  return (
    <input 
    type={type}
    className='border-0 outline-none focus:outline-none focus:border-b bg-transparent border-b border-[#BCBCBC] w-full'
    value={value}
    onChange={onChange}
    name={name}
    />
  )
}

export default Input