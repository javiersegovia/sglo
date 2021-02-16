import React from 'react'
import _tw from 'twin.macro'

interface TitleProps {
  children: React.ReactNode
}

const Title = ({ children }: TitleProps) => {
  return <h1 tw="block text-2xl font-bold text-gray-800">{children}</h1>
}

export default Title
