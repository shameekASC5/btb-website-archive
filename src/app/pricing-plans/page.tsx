import React from 'react'
import PricingPlans from './PricingPlans'
import { Metadata } from 'next';

type Props = {}

export const metadata:Metadata = {
  title: 'Pricing plans',
};

const Page = (props: Props) => {
  return (
    <PricingPlans/>
  )
}

export default Page