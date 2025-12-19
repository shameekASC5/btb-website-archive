import { Metadata } from 'next';
import React from 'react'
import OurWorkDetail from './OurWorkDetailed';
import { OUR_WORK } from '@/data';

type Props = {}

export const metadata:Metadata = {
    title: 'Our Work',
  };

  type ourworkKey = keyof typeof OUR_WORK.DETAILS


const Page = ({params}: {params:{slug:ourworkKey}}) => {
  return (
    <OurWorkDetail slug={params.slug}/>
  )
}

export default Page