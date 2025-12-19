import { Metadata } from 'next';
import React from 'react'
import Blog from './BlogPage';

type Props = {}

export const metadata:Metadata = {
    title: 'Blogs',
  };

const Page = (props: Props) => {
  return (
    <Blog/>
  )
}

export default Page