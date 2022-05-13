import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import styles from './TopUpBank.module.css'
import axios from 'axios'

export const TopUpBank = ({refetchEWallet}) => {

     const [input, setInput] = React.useState({
          nominal: "", 
          bank: "",
          nama_kartu: "",
          nomor_kartu: "",
          expired_date:"",
          card_verification_code:"",
      })

     const handleChange = (event) => {
          let value = event.target.value
          let name = event.target.name
          setInput({...input, [name] : value})
     }
     
     const handleTopUpWithBank = () => {

          if(!input.nominal || !input.bank || !input.nama_kartu  || !input.nomor_kartu || 
               !input.expired_date || !input.card_verification_code){
                    alert('Mohon isi semua field input!')
                    return
          }

          if(!input.card_verification_code > 999){
               alert('Card Verification Code hanya 3 digit')
               return
          }

          let topUpData = {
               ...input,
               username: 'johanesimarmata'
          }

          let config = {
               method: 'post',
               url: 'https://e-market-wallet.herokuapp.com/api/e-wallet/top-up/bank',
               data: topUpData
          }

          axios(config).then((res) => {
               refetchEWallet()
               let clearInput = {
                    nominal: "", 
                    bank: "",
                    nama_kartu: "",
                    nomor_kartu: "",
                    expired_date:"",
                    card_verification_code:"",
               }
               setInput(clearInput)

          }).catch(() => {
               alert('top up dengan bank gagal!')
          })
     }

     return(
          <>
               <Row className='my-3'>
                    <Col sm={12} md={6}>
                         <Form.Group className="mb-3">
                              <Form.Label>Pilih bank yang ingin digunakan</Form.Label>
                              <Form.Select placeholder="Pilih bank" name='bank' value={input.bank} onChange={handleChange}>
                                   <option default>Pilih bank...</option>
                                   <option>Bank Mandiri</option>
                                   <option>Bank BCA</option>
                                   <option>Bank BRI</option>
                                   <option>Bank BNI</option>
                                   <option>Bank BTN</option>
                              </Form.Select>
                         </Form.Group>
                    </Col>
                    <Col sm={12} md={6}>
                         <Form.Group className="mb-md-3">
                              <Form.Label>Nama pemilik kartu</Form.Label>
                              <Form.Control type="text" name='nama_kartu' value={input.nama_kartu} onChange={handleChange} placeholder="Masukkan nama pemilik kartu..."/>
                         </Form.Group>
                    </Col>
               </Row>
               <Row className='my-3'>
                    <Col sm={12} md={6}>
                         <Form.Group className="mb-3">
                              <Form.Label>Nomor kartu</Form.Label>
                              <Form.Control type="number" name='nomor_kartu' value={input.nomor_kartu} onChange={handleChange} placeholder="Masukkan nomor kartu..."/>
                         </Form.Group>
                    </Col>
                    <Col sm={12} md={6}>
                         <Form.Group className="mb-md-3">
                              <Form.Label>Expired date</Form.Label>
                              <Form.Control type='month' name='expired_date' value={input.expired_date} onChange={handleChange} placeholder="Masukkan nomor kartu..."/>
                         </Form.Group>
                    </Col>
               </Row>
               <Row>
                    <Col sm={12} md={6}>
                         <Form.Group className="mb-md-3">
                              <Form.Label>Card Verification Code (CVC)</Form.Label>
                              <Form.Control type="number" name='card_verification_code' value={input.card_verification_code} onChange={handleChange} placeholder="Masukkan kode verifikasi kartu... (Hanya 3 digit)"/>
                         </Form.Group>
                    </Col>
                    <Col sm={12} md={6}>
                         <Form.Group className="mb-md-3">
                              <Form.Label>Nominal</Form.Label>
                              <Form.Control type="number" name='nominal' value={input.nominal} onChange={handleChange} placeholder="Masukkan nominal..."/>
                         </Form.Group>
                    </Col>
               </Row>
               <Row className='justify-content-center my-5 text-center'>
                    <Col>
                         <Button className={`${styles.btn} py-2`} onClick={handleTopUpWithBank}>Top up sekarang</Button>
                    </Col>
               </Row>
          </>
     )
}