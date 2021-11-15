import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
import React from 'react';
const CardsPage = dynamic(() => import("cards/CardsPage"), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <>
      <script data-webpack="cards" src="http://localhost:3000/_next/static/chunks/remoteEntry.js" />
      <script data-webpack="plasmic_components" src="http://localhost:5000/remoteEntry.js" />
      <CardsPage/>
    </>
  )
}

export default Home
