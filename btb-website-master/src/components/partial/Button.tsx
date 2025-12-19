import React from 'react'

type Props = {
    children: React.ReactNode
    className?: string
    outline?: boolean
    onClick?: () => void
    outerClassName?: string
}

const Button = ({
    children,
    className,
    outline,
    onClick,
    outerClassName
}: Props) => {
  return (
    <button onClick={onClick} className={`sm:text-[23px] text-base font-semibold rounded-[10px] p-[1px] ${outerClassName}`}>
        <div className={`py-4 px-5 bg-button-blue rounded-[10px] ${className}`}>

        {children}
        </div>
    </button>
  )
}

export default Button