import React from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap'
import laptop from './laptop.png'
import { UserContext } from '../../context/UserContext'
import axios from 'axios'

export const DetailProduk = ({idproduct}) => {
     const [user, ] = React.useContext(UserContext);
     const [refetch, setRefetch] = React.useState(true)
     const [detailProduk, setDetailProduk] = React.useState()

     const buyItem = async () => {
          const config = {
               url: 'http://tk.order.getoboru.xyz/order',
               method: 'post',
               headers: {
                   'Authorization': `Bearer ${user.access_token}`
               },
               data: {
                    orderItems: [
                         {
                              name: detailProduk.nama,
                              price: detailProduk.harga,
                              quantity: 1
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

     React.useEffect(() => {
          const fetchDetailProduk  = async () => {
              let config = {
              url: `https://market-system-service.herokuapp.com/api/market-product/${idproduct}`,
              method: 'get',
              }
              axios(config).then((res) => {
                  setDetailProduk(res.data)
                  setRefetch(false)
              }).catch(() =>{
                  alert('Error when fetch detail produk')
              })
          }

          if(refetch){
              fetchDetailProduk()
              console.log(detailProduk)
          }
      }, [detailProduk, refetch])

     return(
          <>
          {detailProduk &&
               <Container>
                    <Row>
                         <Col>
                         <img src={detailProduk.gambar} alt='tes' style={{ width: '100%', height:'20rem'}} />
                         </Col>
                         <Col className="mt-5">
                         <h1>{detailProduk.nama}</h1>
                         <h2>Rp {detailProduk.harga}</h2>
                         <p>{detailProduk.deskripsi}</p>
                         <Button onClick={buyItem}>Beli</Button>
                         </Col>
                    </Row>

               </Container>
          }
          </>
     )
}