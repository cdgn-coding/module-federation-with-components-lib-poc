import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import React from 'react';
const CardsPage = dynamic(() => import("cards/CardsPage"), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <>
      <script data-webpack="cards" src="http://localhost:3000/_next/static/chunks/remoteEntry.js" />
      <CardsPage/>
    </>
  )
}

export default Home
