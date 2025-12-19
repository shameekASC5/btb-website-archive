import React from 'react'
import OurWork from './OurWork'
import { Metadata } from 'next';

type Props = {}

export const metadata:Metadata = {
    title: 'Our Work',
  };

const Page = (props: Props) => {
  return (
    <OurWork/>
  )
}

export default Page