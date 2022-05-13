import {
     Routes,
     Route,
     Navigate,
 } from 'react-router-dom'
import { ExamplePage } from '../pages/example/ExamplePage'
import { EWalletPage } from '../pages/e-wallet/EWalletPage'
import { ProductDetails } from '../pages/product-details/ProductDetails'
import { OrderListPage } from '../pages/order/OrderListPage'
import { OrderDetailPage } from '../pages/order/OrderDetailPage'
import { LoginPage } from '../pages/Login/LoginPage'
import { UserContext } from '../context/UserContext'
import { useCallback, useContext } from 'react'
import { DeliveryConfirmationPage } from '../pages/delivery/delivery'
import { DeliveryListPage } from '../pages/delivery/deliverylist'


export const ApplicationRoutes = () => {
     const [user] = useContext(UserContext);
     const ProtectedRoute = useCallback((element) => {
          if (!user) return (<Navigate to='/login'></Navigate>);
          return element;
     }, [user])

     const LoginRoute = useCallback((element) => {
          if (user) return (<Navigate to='/e-wallet'></Navigate>);
          return element;
     }, [user]);

     return(
          <Routes>
               <Route path='/' element={<ExamplePage/>}/>
               <Route path='/login' element={LoginRoute(<LoginPage/>)}/>
               <Route path='/e-wallet' element={ProtectedRoute(<EWalletPage/>)}/>
               <Route path='/order' element={ProtectedRoute(<OrderListPage/>)}/>
               <Route path='/product-details/:idproduct' element={ProtectedRoute(<ProductDetails/>)}/>
               <Route path='/order/detail' element={ProtectedRoute(<OrderDetailPage/>)}/>
               <Route path='/delivery' element={<DeliveryConfirmationPage/>}/>
               <Route path='/delivery-list' element={<DeliveryListPage/>}/>
          </Routes>
     )
}