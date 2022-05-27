import axios from 'axios'
import React from 'react'
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap'
import { useQuery } from 'react-query'
import { UserContext } from '../../context/UserContext'
import { TopUpBank } from './components/TopUpBank'
import { UploadBuktiPembayaran } from './components/UploadBuktiPembayaran'
import styles from './EWallet.module.css'

export const EWalletPage = () => {
     const [user, ] = React.useContext(UserContext)
     const [currentTab, setCurrentTab] = React.useState('top-up-bank')

     const { data : dataEWallet } = useQuery('fetchewallet', async () => {
          let config = {
               method: 'get',
               url: `https://e-market-wallet.herokuapp.com/api/e-wallet/${user.user.username}/`,
               headers: { 
                    'Authorization': `Bearer ${user.access_token}`
               }
          }
          let response
          try{
               response = await axios(config);
          } catch{
               alert('error when fetching e-wallet')
          }
          return response.data
     }, {refetchInterval: 60000})

     const currencyFormat=(num)=> {
          return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(num);
     };

     return(
          <>
               <Container className='py-5'>
                    <Row>
                         <Col className='d-flex justify-content-center'>
                              <h1>Informasi Saldo</h1>
                         </Col>
                    </Row>
                    <Row>
                         <Col className={`${styles.informasiSaldo} py-3 d-flex flex-row justify-content-around align-items-center`}>
                              <h3 className={styles.noMarginBottom}>Saldo</h3>
                              <h3 className={styles.noMarginBottom}>{currencyFormat(dataEWallet?.data.saldo)}</h3>               
                         </Col>
                    </Row>
               </Container>
               <Container className='py-3'>
                    <Row>
                         <Col className='d-flex justify-content-center'>
                              <h1>Top up E - Wallet</h1>
                         </Col>
                    </Row>
                    <Row>
                         <Col className={`py-3`}>
                              <Tabs
                                   activeKey={currentTab}
                                   onSelect={(tab) => setCurrentTab(tab)}
                                   className="mb-3"
                                   fill 
                                   justify
                              >
                                   <Tab eventKey="top-up-bank" title="Top up Bank">
                                        <TopUpBank/>
                                   </Tab>
                                   <Tab eventKey="upload-bukti-pembayaran" title="Upload Bukti Pembayaran">
                                        <UploadBuktiPembayaran/>
                                   </Tab>
                              </Tabs>
                         </Col>
                    </Row>
               </Container>
          </>
     )
}