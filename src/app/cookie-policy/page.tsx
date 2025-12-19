import { Metadata } from 'next';
import React from 'react'
import CookiePolicy from './CookiePolicy';

type Props = {}

export const metadata:Metadata = {
  title: 'Cookie policy',
};

const Page = (props: Props) => {
  return (
    <CookiePolicy/>
  )
}

export default Page