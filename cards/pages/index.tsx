import type { NextPage } from 'next'
import React from 'react';
import {Button} from '@poc/components';
import '@poc/components/dist/styles.css'

const Home: NextPage = () => {
  return (
    <>
      <h1>{"Cards"}</h1>
      <Button>{'Content'}</Button>
    </>
  )
}

export default Home
