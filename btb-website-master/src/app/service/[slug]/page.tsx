import React from 'react'
import OneService from './ServicesDetailed'
import { SERVICE_DATA } from '@/data';
import { Metadata } from 'next';

type ServiceKeys = keyof typeof SERVICE_DATA.ALL_DATA;


export const metadata:Metadata = {
    title: 'Services',
  };


const Page = ({ params }: { params: { slug: ServiceKeys } }) => {
  return (
    <OneService params={params}/>
  )
}

export default Page