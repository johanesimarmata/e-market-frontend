import {
     Routes,
     Route
 } from 'react-router-dom'
import { ExamplePage } from '../pages/example/ExamplePage'
import { EWalletPage } from '../pages/e-wallet/EWalletPage'
export const ApplicationRoutes = () => {
     return(
          <Routes>
               <Route path='/' element={<ExamplePage/>}/>
               <Route path='/e-wallet' element={<EWalletPage/>}/>
          </Routes>
     )
}