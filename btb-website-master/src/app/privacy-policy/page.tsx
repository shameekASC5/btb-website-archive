import React from 'react'
import PrivacyPolicy from './Privacy'
import { Metadata } from 'next';

type Props = {}

export const metadata:Metadata = {
  title: 'Privacy policy',
};


const Page = (props: Props) => {
  return (
    <PrivacyPolicy/>
  )
}

export default Page