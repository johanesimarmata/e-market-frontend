import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import styles from './Order.module.css'

export const OrderDetailPage = () => {
    const { idorder } = useParams();
    const [user] = useContext(UserContext)
    const [order, setOrder] = useState(null);

    React.useEffect(() => {
      const username = user.user.username;
      const config = {
        url: 'http://tk.order.getoboru.xyz/order/' + idorder,
        method: 'get',
        headers: {
            'Authorization': `Bearer ${user.access_token}`
        },  
      }
      axios(config).then((data) => {
        setOrder(data.data.data);
      }).catch((err) => {
        alert('Gagal mendapatkan data order')
        console.log(err);
      });
     }, []);

     return(
      <Container className='py-5 d-flex justify-content-center'>
            {
              order ? (
                <Container className={`${styles.boxColor} py-3 d-flex flex-column justify-content-md-start align-self-center`}>
                  <h3>Detail Order {order.id}</h3>
                  <p className={'fs-6'}>Metode Pengiriman: Go-send</p>
                  <p className={'fs-6'}>Status Pemesanan: Diterima</p>
                  <p className={'fs-4'}>Item List:</p>
                  <ul>
                    {
                      order?.orderItems?.map((item) => (
                        <li>
                          {item.name}
                          <ul>
                            <li>Quantity: {item.quantity}</li>
                            <li>Price: Rp{item.price}</li>
                          </ul>
                        </li>
                      ))
                    }
                  </ul>
                  <p className={'fs-3'}>Total Price: Rp{
                    order?.orderItems?.reduce((prev, cur) => prev + (cur.price * cur.quantity), 0) || 0
                  }</p>
                </Container>
              ) : (<h1>Order Kosong</h1>)
            }
            
      </Container>
     )
}