import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import styles from "./delivery.module.css"

export const DeliveryConfirmationPage = () =>{
    return(
        <Container className='py-4 px-5'>
            <Container className= {`${styles.containerBox} py-5 px-5`}>
            <Row>
                <Col><h2>Delivery</h2></Col>
            </Row>
            <Row className='pb-3'>
                <Col><h4>Order #286</h4></Col>
            </Row>

            <Form.Group className="mb-3">
                <Form.Label>Kurir</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>Pilih kurir</option>
                    <option value="1">JNE</option>
                    <option value="2">SiCepat</option>
                    <option value="3">Gojek</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Alamat</Form.Label>
                <Form.Control type="text" placeholder="Masukkan alamat anda" />
            </Form.Group>

            <Row>
                <Col><p style={{ textAlign: 'right', marginBottom: '0' }}>Harga Ongkir : Rp 24.000</p></Col>
            </Row>
            <Row>
                <Col><p style={{ textAlign: 'right' }}>Total Harga  : Rp 524.000</p></Col>
            </Row>
            
            <Button className="float-end" variant="secondary">Confirm</Button>
            </Container>
        </Container>
    )
}

