import type { NextPage } from 'next'
import React from 'react';
import dynamic from 'next/dynamic';
import '@poc/components/dist/styles.css'
import { Button } from '@poc/components'

const Home: NextPage = () => {
  console.log(window)
  if (typeof window === `undefined`) {
    return null;
  }
  console.log(Button)
  return (
    <>
      <h1>{"Cards"}</h1>
      {/*<Button>{"Hola"}</Button>*/}
    </>
  )
}

export default dynamic(() => Promise.resolve(Home), { ssr: false })
