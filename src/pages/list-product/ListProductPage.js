import {Card, Button, Row, Col, Container } from 'react-bootstrap'
import React, {useEffect, useState} from 'react'
import axios from 'axios'

export const ListProductPage = () =>{

    const [daftarProduk, setDaftarProduk] = useState([])
    const [refetch, setRefetch] = useState(true)

    useEffect(() => {
        const fetchDataProduk  = async () => {
            let config = {
            url: 'https://market-system-service.herokuapp.com/api/market-product/',
            method: 'get',
            }
            axios(config).then((res) => {
                setDaftarProduk(res.data)
                setRefetch(false)
            }).catch(() =>{
                alert('Error when fetch produk')
            })
        }

        if(refetch){
            fetchDataProduk()
        }
    }, [daftarProduk, refetch])

    return(
        <Container>
            <h1 className='text-center my-5'>List Produk</h1>
            <Row>
            {daftarProduk.length != 0 ? daftarProduk.map(item =>(
                <Col>
                    <Card style={{ width: '15rem', height: '26rem' }} className="mb-3">
                    <Card.Img variant="top" src={item.gambar} style={{ height: '14rem' }} />
                    <Card.Body>
                        <Card.Text style={{ fontSize:'18px'}}>{item.nama}</Card.Text>
                        <Card.Text style={{ fontSize:'17px', fontWeight: 'bold' }}>
                        Rp.{item.harga}
                        </Card.Text>
                        <a href={"/product-details/"+item.id} ><Button variant="primary">Detail Produk</Button></a>
                    </Card.Body>
                    </Card>
                </Col>

            )) : <h1 className='text-center'>Belum ada Produk</h1>};
            </Row>
        </Container>
        )
}