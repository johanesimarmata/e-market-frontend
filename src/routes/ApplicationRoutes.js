import {
     Routes,
     Route
 } from 'react-router-dom'
import { ExamplePage } from '../pages/example/ExamplePage'

export const ApplicationRoutes = () => {
     return(
          <Routes>
               <Route path='/' element={<ExamplePage/>}/>
          </Routes>
     )
}