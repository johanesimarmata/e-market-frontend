import {
     Routes,
     Route
 } from 'react-router-dom'
import { ExamplePage } from '../pages/example/ExamplePage'
import { EWalletPage } from '../pages/e-wallet/EWalletPage'
import { OrderListPage } from '../pages/order/OrderListPage'
import { OrderDetailPage } from '../pages/order/OrderDetailPage'

export const ApplicationRoutes = () => {
     return(
          <Routes>
               <Route path='/' element={<ExamplePage/>}/>
               <Route path='/e-wallet' element={<EWalletPage/>}/>
               <Route path='/order' element={<OrderListPage/>}/>
               <Route path='/order/detail' element={<OrderDetailPage/>}/>
          </Routes>
     )
}