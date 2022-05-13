import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import styles from "./delivery.module.css"

export const DeliveryListPage = () =>{
    const deliveryList = [];
    for(let i=3; i>0; i--){
        deliveryList.push(
            <Col>
                <Card style={{ width: '100%' }}>
                    <Card.Body>
                    <Card.Title>
                        <Row>
                            <Col sm={6} className='mx-0'>Delivery #{i+1}</Col>
                            <Col sm={3} className={`${styles.statusBox} text-center`}>Active</Col>
                        </Row>
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Order #{i+2}</Card.Subtitle>
                    <p className={`${styles.cardBodyP}`}>Kurir : GOJEK</p>
                    <p className={`${styles.cardBodyP}`}>Alamat Pengiriman : Jalan Pondok No.{i}</p>
                    <p className={`${styles.cardBodyP}`}>Tanggal Pengiriman : 12-05-2022</p>
                    <p className={`${styles.cardBodyP}`}>Tanggal Diterima : - </p>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
    return(
        <Container className= {`${styles.containerBox} px-4 pt-2 pb-4 my-5 mx-5`}>
            <Row>
                <Col><h2>Delivery List</h2></Col>
            </Row>
            <Row  className='mb-2'>
                {deliveryList}
            </Row>
            <Row xs={3} md={3} lg={3}>
                <Col>
                <Card style={{ width: '100%' }}>
                    <Card.Body>
                        <Card.Title>
                            <Row>
                                <Col sm={6} className='mx-0'>Delivery #1</Col>
                                <Col sm={3} className={`${styles.statusBoxDone} text-center`}>Done</Col>
                            </Row>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Order #1</Card.Subtitle>
                        <p className={`${styles.cardBodyP}`}>Kurir : GOJEK</p>
                        <p className={`${styles.cardBodyP}`}>Alamat Pengiriman : Universitas Indonesia </p>
                        <p className={`${styles.cardBodyP}`}>Tanggal Pengiriman : 12-05-2022</p>
                        <p className={`${styles.cardBodyP}`}>Tanggal Diterima : 13-05-2022 </p>
                        <Card.Link className='mt-5' href='/order/detail'>View Order Detail</Card.Link>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}