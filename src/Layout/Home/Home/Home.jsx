import React from 'react'
import Banner from '../Banner'
import PopularClass from '../../../components/PopularClass/PopularClass'
import Instructor from '../../../components/Instructor/Instructor'
import About from '../../../components/About'


function Home() {
  return (
    <div>
        <Banner></Banner>
        <PopularClass></PopularClass>
        <About></About>
        <Instructor></Instructor>
    </div>
  )
}

export default Home