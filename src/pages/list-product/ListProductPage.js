import {Card, Button, Row, Col, Container } from 'react-bootstrap'
import React from 'react'

export const ListProductPage = () =>{
    
    const daftarProdukMock = [
        {
            "id": 2,
            "nama": "Asus X509JA-EJ019T Laptop / X509JA-EJ485T",
            "harga": 2000000,
            "deskripsi": "lorem ipsum"
        },
        {
            "id": 2,
            "nama": "Asus X509JA-EJ019T Laptop / X509JA-EJ485T",
            "harga": 2000000,
            "deskripsi": "lorem ipsum"
        },
        {
            "id": 2,
            "nama": "Asus X509JA-EJ019T Laptop / X509JA-EJ485T",
            "harga": 2000000,
            "deskripsi": "lorem ipsum"
        },

        {
            "id": 2,
            "nama": "Asus X509JA-EJ019T Laptop / X509JA-EJ485T",
            "harga": 2000000,
            "deskripsi": "lorem ipsum"
        },
        {
            "id": 2,
            "nama": "Asus X509JA-EJ019T Laptop / X509JA-EJ485T",
            "harga": 2000000,
            "deskripsi": "lorem ipsum"
        },
        {
            "id": 2,
            "nama": "Asus X509JA-EJ019T Laptop / X509JA-EJ485T",
            "harga": 2000000,
            "deskripsi": "lorem ipsum"
        }
    ]

    console.log(daftarProdukMock)

    return(
        <Container>
            <h1 className='text-center my-5'>List Produk</h1>
            <Row>
            {daftarProdukMock.map(item =>(
                <Col>
                    <Card style={{ width: '15rem' }} className="mb-3">
                    <Card.Img variant="top" src="https://dlcdnwebimgs.asus.com/gain/44d9521d-f730-411e-97ae-45d3c33f9565/" />
                    <Card.Body>
                        <Card.Text style={{ fontSize:'18px'}}>{item.nama}</Card.Text>
                        <Card.Text style={{ fontSize:'17px', fontWeight: 'bold' }}>
                        Rp.{item.harga}
                        </Card.Text>
                        <a href={"/product-details/"+item.id} ><Button variant="primary">Detail Produk</Button></a>
                    </Card.Body>
                    </Card>
                </Col>

            ))};
            </Row>
        
        </Container>
        )
        
    
}