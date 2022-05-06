import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import styles from './TopUpBank.module.css'
export const TopUpBank = () => {
     return(
          <>
               <Row className='my-3'>
                    <Col sm={12} md={6}>
                         <Form.Group className="mb-3">
                              <Form.Label>Pilih bank yang ingin digunakan</Form.Label>
                              <Form.Select placeholder="Pilih bank">
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
                              <Form.Control type="text" placeholder="Masukkan nama pemilik kartu..."/>
                         </Form.Group>
                    </Col>
               </Row>
               <Row className='my-3'>
                    <Col sm={12} md={6}>
                         <Form.Group className="mb-3">
                              <Form.Label>Nomor kartu</Form.Label>
                              <Form.Control type="number" placeholder="Masukkan nomor kartu..."/>
                         </Form.Group>
                    </Col>
                    <Col sm={12} md={6}>
                         <Form.Group className="mb-md-3">
                              <Form.Label>Expired date</Form.Label>
                              <Form.Control type='month' placeholder="Masukkan nomor kartu..."/>
                         </Form.Group>
                    </Col>
               </Row>
               <Row className='justify-content-center my-3'>
                    <Col sm={12} md={6}>
                         <Form.Group className="mb-md-3">
                              <Form.Label>Card Verification Code (CVC)</Form.Label>
                              <Form.Control type="number" placeholder="Masukkan kode verifikasi kartu..."/>
                         </Form.Group>
                    </Col>
               </Row>
               <Row className='justify-content-center my-5 text-center'>
                    <Col>
                         <Button className={`${styles.btn} py-2`}>Top up sekarang</Button>
                    </Col>
               </Row>
          </>
     )
}