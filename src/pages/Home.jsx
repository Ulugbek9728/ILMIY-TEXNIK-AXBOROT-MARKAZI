import React from 'react'
import AboutUs from '../components/HomeComponents/AboutUs'
import Colleagues from '../components/HomeComponents/Colleagues'
import Dayjestlar from '../components/HomeComponents/Dayjestlar'
import Direction from '../components/HomeComponents/Direction'
import HeaderCarusel from '../components/HomeComponents/HeaderCarusel'
import Results from '../components/HomeComponents/Results'
function Home() {
  return (
    <main>
      <HeaderCarusel />
      <Direction />
      <Dayjestlar />
      <Results />
      <AboutUs />
      <Colleagues />
    </main>
  )
}

export default Home