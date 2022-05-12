import {
     Routes,
     Route
 } from 'react-router-dom'
import { ExamplePage } from '../pages/example/ExamplePage'
import { EWalletPage } from '../pages/e-wallet/EWalletPage'
import { ProductDetails } from '../pages/product-details/ProductDetails'

export const ApplicationRoutes = () => {
     return(
          <Routes>
               <Route path='/' element={<ExamplePage/>}/>
               <Route path='/e-wallet' element={<EWalletPage/>}/>
               <Route path='/product-details/:idproduct' element={<ProductDetails/>}/>
          </Routes>
     )
}