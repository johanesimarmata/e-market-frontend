import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './OrderList.module.css'

export const OrderListPage = () => {
     return(
      <React.Fragment>
        <Container className='py-5 d-flex justify-content-center'>
            <h1>Order History</h1>
        </Container>
        <Container className='py-3 d-flex flex-column gap-3'>
            <Container className={`${styles.boxColor} py-3 d-flex flex-column justify-content-md-start`}>
              <h3>Order 123</h3>
              <p className={'fs-6'}>28 April 2000</p>
              <p className={'fs-6'}>Item List:</p>
              <ul>
                <li>
                    <p>Topi x2</p>
                </li>
                <li>
                    <p>Topi x2</p>
                    
                </li>
                <li>
                    <p>Topi x2</p>
                </li>
              </ul>
              <p className={'fs-6 align-self-end'}>View Details</p>
            </Container>
            <Container className={`${styles.boxColor} py-3 d-flex flex-column justify-content-md-start`}>
              <h3>Order 123</h3>
              <p className={'fs-6'}>28 April 2000</p>
              <p className={'fs-6'}>Item List:</p>
              <ul className='fs-6'>
                <li>
                    <p>Topi x2</p>
                </li>
                <li>
                    <p>Topi x2</p>
                    
                </li>
                <li>
                    <p>Topi x2</p>
                </li>
              </ul>
              <p className={'fs-6 align-self-end'}>View Details</p>
            </Container>
        </Container>
      </React.Fragment>
     )
}