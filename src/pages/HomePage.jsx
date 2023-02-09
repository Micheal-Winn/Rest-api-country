import React from 'react'
import Navbar from '../components/Navbar'
import Searchbar from '../components/Searchbar'
import AllCountry from '../sections/AllCountry'

const HomePage = () => {
  return (
    <>
        <Navbar/>
        <Searchbar/>
        <AllCountry/>
    </>
  )
}

export default HomePage