import React from 'react'
import { useParams } from 'react-router-dom'
import { ReviewPage } from '../review-product/ReviewPage'
import { DetailProduk } from './DetailProduk'

export const ProductDetails = () => {

     let {idproduct} = useParams()

     return(
          <>
               <DetailProduk idproduct={idproduct}/>
               <ReviewPage idproduct={idproduct}/>
          </>
     )
}