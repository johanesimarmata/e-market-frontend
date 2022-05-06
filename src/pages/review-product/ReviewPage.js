import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {Review} from './components/Review'
let dummyReviewData = [
     {
          id: 1,
          username: 'username',
          timestamp: '2022-10-12, 12:30',
          content: 'Lorem ipsum dolor sit amet'
     },
     {
          id: 2,
          username: 'username2',
          timestamp: '2022-10-12, 12:30',
          content: 'Lorem ipsum dolor sit amet'
     }
]

export const ReviewPage = () => {
     return(
          <>
               <Container>
                    <Row className='my-3'>
                         <Col>
                              <h2>Review Produk</h2>
                         </Col>
                    </Row>
                    {
                         dummyReviewData.map((review) => (
                              <Review data={review} key={review.id}/>
                         ))
                    }
               </Container>
          </>
     )
}