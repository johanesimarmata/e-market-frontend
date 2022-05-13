import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import styles from "./delivery.module.css"

export const DeliveryListPage = () =>{
    return(
        <Container className= {`${styles.containerBox} px-3 pt-1 pb-5 my-5 mx-5`}>
            <Row>
                <Col><h2>Delivery List</h2></Col>
            </Row>
            <Row>
                <Col><h3>Active Deliveries</h3></Col>
            </Row>
        </Container>
    )
}