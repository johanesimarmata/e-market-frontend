import axios from 'axios'
import React from 'react'
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap'
import { UserContext } from '../../context/UserContext'
import { TopUpBank } from './components/TopUpBank'
import { UploadBuktiPembayaran } from './components/UploadBuktiPembayaran'
import styles from './EWallet.module.css'

export const EWalletPage = () => {
     const [user, ] = React.useContext(UserContext)
     const [currentTab, setCurrentTab] = React.useState('top-up-bank')
     const [saldo, setSaldo] = React.useState('')
     const [refetch, setRefetch] = React.useState(true)

     React.useEffect(() => {
          const fetchEWallet = () => {
               let config = {
                    method: 'get',
                    url: `https://e-market-wallet.herokuapp.com/api/e-wallet/${user.username}/`,
               }
               axios(config).then((res) => {
                    setSaldo(res.data.data.saldo)
                    setRefetch(false)
               }).catch(() => {
                    alert('error when fetching e-wallet')
               })
          }

          if(refetch){
               fetchEWallet()
          }

     }, [saldo, refetch])

     const currencyFormat=(num)=> {
          return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(num);
     };

     const refetching = () => {
          setRefetch(true)
     }

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
                              <h3 className={styles.noMarginBottom}>{currencyFormat(saldo)}</h3>
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
                                        <TopUpBank refetchEWallet={refetching}/>
                                   </Tab>
                                   <Tab eventKey="upload-bukti-pembayaran" title="Upload Bukti Pembayaran">
                                        <UploadBuktiPembayaran refetchEWallet={refetching}/>
                                   </Tab>
                              </Tabs>
                         </Col>
                    </Row>
               </Container>
          </>
     )
}