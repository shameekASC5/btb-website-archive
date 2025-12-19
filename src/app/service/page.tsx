import React from 'react'
import Services from './Service'
import { Metadata } from 'next';

type Props = {}

export const metadata:Metadata = {
    title: 'Services',
  };

const Page = (props: Props) => {
  return (
    <Services/>
  )
}

export default Page