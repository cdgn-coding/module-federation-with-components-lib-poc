import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
import React from 'react';
const Button = React.lazy(() => import("plasmic_components/Button"));

const Home: NextPage = () => {
  console.log(Button)
  return (
    <>
      <h1>{"Cards"}</h1>
      <React.Suspense fallback="Loading Button">
        <Button text="Texto"/>
      </React.Suspense>
    </>
  )
}

export default Home
