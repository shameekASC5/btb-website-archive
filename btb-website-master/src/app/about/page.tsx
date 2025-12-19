import { Metadata } from 'next';
import React from 'react'
import About from './AboutUs';

type Props = {}

export const metadata:Metadata = {
    title: 'About Us',
  };


const Page = (props: Props) => {
  return (
    <About/>
  )
}

export default Page