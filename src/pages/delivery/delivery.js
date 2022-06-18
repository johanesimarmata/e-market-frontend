import React, { useContext, useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { UserContext } from '../../context/UserContext'
import styles from "./delivery.module.css"
import axios from 'axios';

export const DeliveryConfirmationPage = () =>{
    let navigate = useNavigate()
    const { idorder } = useParams();
    const [user] = useContext(UserContext)
    const [option, setOption] = useState("0");
    const [courierName, setCourier] = useState("JNE REG");
    const [harga, setHarga] = useState(0);
    const [address, setAddress] = useState("");

    const handleOptionChange = (event) => {
        setOption(event.target.value);
        setCourier(daftarCourier[event.target.value].kode)
        setHarga(daftarCourier[event.target.value].harga)
      };

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
      };
 
  const handleSubmit = async (event) => {
    event.preventDefault()
    let data = {
        order_id: idorder,
        username : user.user.username,
        courier: courierName,
        delivery_cost: harga,
        destination_address: address
    }
    axios.post('http://e-market-delivery.herokuapp.com/delivery/', data, {
        headers: {
            'Authorization': `Bearer ${user.access_token}`
        }
      })
    .then(response => navigate((`/delivery-list`)))
    .catch(error => {
        console.error('There was an error!', error);
        alert("Cannot create delivery for this order")
        });
    }


    const daftarCourier = [
        {
            "nama": "JNE REGULER",
            "harga": 9000,
            "kode": "JNE REG"
        },
        {
            "nama": "JNE YES",
            "harga": 18000,
            "kode": "JNE YES"
        },
        {
            "nama": "SiCepat SiUntung",
            "harga": 8000,
            "kode": "SCSU"
        },

        {
            "nama": "SiCepat Same Day Delivery",
            "harga": 22000,
            "kode": "SCSD"
        }
    ]
    return(
        <Container className='py-4 px-5'>
            <Container className= {`${styles.containerBox} py-5 px-5`}>
            <Row>
                <Col><h2>Delivery</h2></Col>
            </Row>
            <Row className='pb-3'>
                <Col><h4>Order {idorder}</h4></Col>
            </Row>
            <Row className='pb-3'>
                <Col><h4>Pembeli : {user.user.username}</h4></Col>
            </Row>

            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Kurir</Form.Label>
                <Form.Select onChange={handleOptionChange}>
                    {daftarCourier.map((courier, index) => (
                    <option value={index}>{courier.nama}</option>
                 ))
                 }
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Alamat</Form.Label>
                <Form.Control type="text" placeholder="Masukkan alamat anda" onChange={handleAddressChange}/>
            </Form.Group>

            <Row>
                <Col><p style={{ textAlign: 'right', marginBottom: '0' }}>Harga Ongkir : {daftarCourier[parseInt(option)].harga}</p></Col>
            </Row>
            
            <button className="float-end" disabled={address.trim().length < 1 ? true:false}>Confirm</button>
            </Form>
            </Container>
        </Container>
    )
}

