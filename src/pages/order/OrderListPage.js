import axios from 'axios';
import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { UserContext } from '../../context/UserContext';
import styles from './Order.module.css'

export const OrderListPage = () => {
     const [user, ] = React.useContext(UserContext);
     const [orders, setOrders] = useState([]);
     React.useEffect(() => {
      const config = {
        url: 'http://tk.order.getoboru.xyz/orders',
        method: 'get',
        headers: {
            'Authorization': `Bearer ${user.access_token}`
        },  
      }
      axios(config).then((data) => {
        setOrders(data.data.data);
      }).catch((err) => {
        alert('Gagal mendapatkan data order')
        console.log(err);
      });
     }, []);
     return(
      <React.Fragment>
        <Container className='py-5 d-flex justify-content-center'>
            <h1>Order History</h1>
        </Container>
        <Container className='py-3 d-flex flex-column gap-3'>
            {
              orders.map((order) => (
                <Container className={`${styles.boxColor} py-3 d-flex flex-column justify-content-md-start`}>
                  <h3>Order {order.id}</h3>
                  <p className={'fs-6'}>Item List:</p>
                  <ul>
                    {order.orderItems?.map((item) => (
                      <li>
                        <p>{item.name} x{item.quantity}</p>
                      </li>
                    ))}
                  </ul>
                  <a 
                    className={'fs-6 align-self-end'}
                    href={'/order/detail/' + order.id}
                  >
                    View Details
                  </a>
                </Container>
              ))
            }
        </Container>
      </React.Fragment>
     )
}