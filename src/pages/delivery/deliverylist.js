import React, { useState, useEffect, useContext } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import styles from "./delivery.module.css"
import { UserContext } from '../../context/UserContext'
import axios from 'axios';

export const DeliveryListPage = () =>{   
    const [user] = useContext(UserContext)
    const [userDeliveries, setUserDeliveries] = useState([]);
    const getDeliveries = () => {
        axios.get('http://e-market-delivery.herokuapp.com/delivery/', {
            headers: {
                'Authorization': `Bearer ${user.access_token}`
            }
          })
        .then((response)=> 
        { 
        let allDeliveries = response.data
        var userDeliveries = []
        for(var i=0; i<allDeliveries.length; i++){
            if(response.data[i].username == user.user.username)
            userDeliveries.push(response.data[i])
        }
        setUserDeliveries(userDeliveries)
        })
    }
    useEffect(() => {
        getDeliveries();
      }, []);
    
    const deliveryList = [];
    for(let i=0; i<userDeliveries.length; i++){
        deliveryList.push(
            <Col>
                <Card style={{ width: '100%' }}>
                    <Card.Body>
                    <Card.Title>
                        <Row>
                            <Col sm={6} className='mx-0'>Delivery #{userDeliveries[i]['id']}</Col>
                            <Col sm={3} className={`${userDeliveries[i]['status']=="DONE"? styles.statusBoxDone: styles.statusBox} text-center`}>
                            {userDeliveries[i]['status']}</Col>
                        </Row>
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Order #{userDeliveries[i]['order_id']}</Card.Subtitle>
                    <p className={`${styles.cardBodyP}`}>Kurir : {userDeliveries[i]['courier']}</p>
                    <p className={`${styles.cardBodyP}`}>Alamat Pengiriman : {userDeliveries[i]['destination_address']}</p>
                    <p className={`${styles.cardBodyP}`}>Tanggal Pengiriman : {userDeliveries[i]['delivery_start']}</p>
                    {userDeliveries[i]['status']=="DONE"? 
                    <p className={`${styles.cardBodyP}`}>Tanggal Diterima : {userDeliveries[i]['delivery_finish']}</p>
                    : 
                    <p className={`${styles.cardBodyP}`}>Tanggal Diterima : Belum Sampai </p>
                    }
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
                {deliveryList}
        </Container>
    )
}