import React from 'react'
import { useParams } from 'react-router-dom'
import { ReviewPage } from '../review-product/ReviewPage'
import { Row, Col, Container } from 'react-bootstrap'
import laptop from './laptop.png'

export const DetailProduk = ({idproduct}) => {
     return(
          <>
               <Container>
                    <Row>
                         <Col>
                         <img src={laptop} alt='tes' style={{ width: '100%'}} />
                         </Col>
                         <Col className="mt-5">
                         <h1>Asus X509JA-EJ019T Laptop / X509JA-EJ485T</h1>
                         <h2>Rp 2000000</h2>
                         <p>Spesifikasi:
                              # Intel Core i3
                              # RAM 8GB DDR3
                              # HDD 500GB
                              # VGA intel HD Graphics 4000 + Invidia Geforce 2GB 
                              # Wiffi,USB 3.0 ,Buetoot 4.0
                              # Screen 14 
                              # Windows 10 -64 Bit</p>
                         </Col>
                    </Row>

               </Container>
          </>
     )
}