import React from 'react'
import { useParams } from 'react-router-dom'
import { ReviewPage } from '../review-product/ReviewPage'

export const ProductDetails = () => {

     let {idproduct} = useParams()

     return(
          <>
               <ReviewPage idproduct={idproduct}/>
          </>
     )
}