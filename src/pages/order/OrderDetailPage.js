import React from 'react'
import { Container } from 'react-bootstrap'
import styles from './Order.module.css'

export const OrderDetailPage = () => {
     return(
      <Container className='py-5 d-flex justify-content-center'>
            <Container className={`${styles.boxColor} py-3 d-flex flex-column justify-content-md-start align-self-center`}>
              <h3>Detail Order 123</h3>
              <p className={'fs-6'}>28 April 2000</p>
              <p className={'fs-6'}>Metode Pengiriman: Go-send</p>
              <p className={'fs-6'}>Status Pemesanan: Diterima</p>
              <p className={'fs-4'}>Item List:</p>
              <ul>
                <li>
                    Topi
                    <ul>
                      <li>Quantity: 1</li>
                      <li>Price: Rp200000</li>
                    </ul>
                </li>
                <li>
                    Kaca
                    <ul>
                      <li>Quantity: 1</li>
                      <li>Price: Rp200000</li>
                    </ul>
                </li>
              </ul>
              <p className={'fs-3'}>Total Price: 30000</p>
            </Container>
      </Container>
     )
}