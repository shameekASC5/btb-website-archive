import React from 'react'

type Props = {
    children: React.ReactNode,
    size?: "sm" | "md" | "lg",
    className?: string
}

const Container = ({
    size = "md",
    ...props
}: Props) => {

    const sizes = {
        sm: "px-2",
        md: "px-4",
        lg: "px-8"
    }
  return (
    <div className={`mx-auto container ${sizes[size]} ${props.className}`}>
        {
            props.children
        }
    </div>
  )
}

export default Container