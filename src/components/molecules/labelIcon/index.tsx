import React from 'react'
// import { SearchIcon } from '@heroicons/react/solid'

interface IProps {
  style?: any
  className?: string
}

export const LabelTagIcon: React.FC<IProps> = (Props) => {
  return (
    <div className="flex">
      <span
        style={Props.style}
        className={`${
          Props.style
            ? Props.className
            : 'bg-green-500 text-white rounded align-middle'
        } text-sm font-medium py-1 pl-2 pr-4 flex`}
      >
        {Props.children}
      </span>
    </div>
  )
}
