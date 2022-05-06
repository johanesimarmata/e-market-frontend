import React from 'react'
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap'
import { TopUpBank } from './components/TopUpBank'
import { UploadBuktiPembayaran } from './components/UploadBuktiPembayaran'
import styles from './EWallet.module.css'

export const EWalletPage = () => {

     const [currentTab, setCurrentTab] = React.useState('top-up-bank')

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
                              <h3 className={styles.noMarginBottom}>Rp 12.000.000</h3>
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