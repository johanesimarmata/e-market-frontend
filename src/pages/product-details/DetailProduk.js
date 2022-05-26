import React from 'react'
import { useParams } from 'react-router-dom'
import { ReviewPage } from '../review-product/ReviewPage'
import { Row, Col, Container, Button } from 'react-bootstrap'
import laptop from './laptop.png'
import { UserContext } from '../../context/UserContext'
import axios from 'axios'

export const DetailProduk = ({idproduct}) => {
     const price = 2000000;
     const name = 'Asus X509JA-EJ019T Laptop / X509JA-EJ485T';
     const quantity = 1;

     const [user, ] = React.useContext(UserContext);
     const buyItem = async () => {
          const config = {
               url: 'http://tk.order.getoboru.xyz/order',
               method: 'post',
               headers: {
                   'Authorization': `Bearer ${user.access_token}`
               },
               data: {
                    username: user.user?.username,
                    nama: user.user?.nama,
                    alamat: user.user?.alamat,
                    orderItems: [
                         {
                              name,
                              price,
                              quantity
                         }
                    ],
               }  
          }

          try {
               await axios(config);
               alert('Barang Berhasil Dibeli')
          } catch (error) {
               console.log(error);
               alert('Barang gagal dibeli')
          }
     }
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
                         <Button onClick={buyItem}>Beli</Button>
                         </Col>     
                    </Row>

               </Container>
          </>
     )
}