import React from 'react'
import PitchCompetition from './PitchCompetition'
import { Metadata } from 'next';

type Props = {}

export const metadata:Metadata = {
  title: 'Pitch competition',
};

const Page = (props: Props) => {
  return (
    <PitchCompetition/>
  )
}

export default Page