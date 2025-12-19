import React from 'react'

type Props = {
    children: React.ReactNode
}

const Badge = (props: Props) => {
  return (
    <div className="rounded-[4px] p-[10px] text-base font-medium border border-white whitespace-nowrap">
        {props.children}
    </div>
  )
}

export default Badge