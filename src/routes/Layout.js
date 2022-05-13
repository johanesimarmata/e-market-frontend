import React from 'react'
import {ApplicationRoutes} from './ApplicationRoutes'
import EMarketNavbar  from '../components/Navbar/Navbar'
export const Layout = () => {
     return(
          <>
               <EMarketNavbar />
               <ApplicationRoutes/>
               {/**Footer (if needed)**/}
          </>
     )
}