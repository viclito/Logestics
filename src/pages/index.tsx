import React from 'react'
import Landingpage from '../../components/Homepage/Landingpage'
import Service from '../../components/Homepage/service'
import WhatWeProvide from '../../components/Homepage/WhatWeProvide'
import Map from '../../components/Homepage/Map'
import SideContact from '../../components/SideContact'

const index = () => {
  return (
    <>
      <Landingpage/>
      <Service/>
      <WhatWeProvide/>
      <Map/>
      <SideContact/>
    </>
  )
}

export default index
