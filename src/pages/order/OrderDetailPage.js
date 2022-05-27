import axios from 'axios'
import React, { useContext, useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import styles from './Order.module.css'

export const OrderDetailPage = () => {
    const { idorder } = useParams();
    const [user] = useContext(UserContext)
    const [order, setOrder] = useState(null);
    const [orderDelivery, setOrderDelivery] = useState([]);

    const getDeliveries = () => {
      axios.get('http://e-market-delivery.herokuapp.com/delivery/')
      .then((response)=> 
      { console.log(response)
        let allDeliveries = response.data
        for(var i = 0; i<allDeliveries.length; i++){
          if(idorder == response.data[i].order_id){
            setOrderDelivery(response.data[i])
          }
        }
      })
    }
    console.log(orderDelivery)
    React.useEffect(() => {
      const config = {
        url: 'http://tk.order.getoboru.xyz/order/' + idorder,
        method: 'get',
        headers: {
            'Authorization': `Bearer ${user.access_token}`
        },  
      }
      axios(config).then((data) => {
        setOrder(data.data.data);
        console.log(data.data.data);
      }).catch((err) => {
        alert('Gagal mendapatkan data order')
        console.log(err);
      });
      getDeliveries();
     }, []);
     return(
      <Container className='py-5 d-flex justify-content-center'>
            {
              order ? (
                <Container className={`${styles.boxColor} py-3 d-flex flex-column justify-content-md-start align-self-center`}>
                  <h3>Detail Order {order.id}</h3>
                  <p className={'fs-6'}>Metode Pengiriman: {orderDelivery != [] ? orderDelivery['courier'] : "-" }</p>
                  <p className={'fs-6'}>Status Pemesanan:  {orderDelivery != [] ? orderDelivery['status'] : "-" }</p>
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
                    (order?.orderItems?.reduce((prev, cur) => prev + (cur.price * cur.quantity), 0) || 0) +
                    (orderDelivery != [] ? orderDelivery['delivery_cost'] : 0)
                  }</p>
                  {order.summary && <a href={order.summary} target='_blank' className={'fs-6'}>Download Summary</a>}
                </Container>
              ) : (<h1>Order Kosong</h1>)
            }
            
      </Container>
     )
}