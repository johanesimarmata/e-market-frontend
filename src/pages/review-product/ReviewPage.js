import axios from 'axios'
import React from 'react'
import { Container, Row, Col, FormControl, Button, InputGroup } from 'react-bootstrap'
import { UserContext } from '../../context/UserContext'
import {Review} from './components/Review'

export const ReviewPage = ({idproduct}) => {
     const [user, ] = React.useContext(UserContext)
     const [data, setData] = React.useState([])
     const [input, setInput] = React.useState('')
     const [refetch, setRefetch] = React.useState(true)
     const [currentReviewId, setCurrentReviewId] = React.useState(null)

     React.useEffect(() => {
          const getReviewsData = () => {
               let config = {
                    method: 'get',
                    url: `https://e-market-product-review.herokuapp.com/api/reviews-by-id-product/${idproduct}`,
               }
               axios(config).then((response) => {
                    setData(response.data.data)
                    setRefetch(false)
               }).catch(() => {
                    alert('error when fetching reviews data')
               })
          }
          if(!data.length && refetch){
               getReviewsData()
          }
     }, [data])

     const createReview = () => {
          if(currentReviewId){
               let config = {
                    method: 'put',
                    url: `https://e-market-product-review.herokuapp.com/api/review-product/${currentReviewId}`,
                    data: {
                         content: input
                    },
                    headers: { 
                         'Authorization': `Bearer ${user.access_token}`
                    }
               }
               axios(config).then(() => {
                    setCurrentReviewId(null)
                    setData([])
                    setInput('')
                    setRefetch(true)
               }).catch(() => {
                    alert('review gagal diubah')
               })
          } else {
               let reviewData = {
                    product_id : idproduct,
                    reviewer_username: user.user.username,
                    reviewer_image: "https://assets-global.website-files.com/5a016d51240da900013d2ea2/5fc8e1f4bc8a02aecf06f035_eyeem-23716958-121079333-(1)%20(1).png",
                    content: input
               }
     
               let config = {
                    method: 'post',
                    url: 'https://e-market-product-review.herokuapp.com/api/review-product/',
                    data: reviewData,
                    headers: { 
                         'Authorization': `Bearer ${user.access_token}`
                    }
               }
     
               axios(config).then(() => {
                    setData([])
                    setInput('')
                    setRefetch(true)
               }).catch(() => {
                    alert('review gagal ditambahkan')
               })
          }
     }

     const editReview = (review) => {
          setCurrentReviewId(review.id)
          setInput(review.content)
     }

     const deleteReview = (review) => {
          let config = {
               method: 'delete',
               url: `https://e-market-product-review.herokuapp.com/api/review-product/${review.id}`,
               headers: { 
                    'Authorization': `Bearer ${user.access_token}`
               }
          }
          axios(config).then(() => {
               setData([])
               setInput('')
               setRefetch(true)
          }).catch(() => {
               alert('review gagal dihapus')
          })
     }

     const resetForm = () => {
          setCurrentReviewId(null)
          setInput('')
     }

     return(
          <>
               <Container className='py-3'>
                    <Row>
                         <Col>
                              <h2>Review Produk</h2>
                         </Col>
                    </Row>
                    <Row>
                         <InputGroup className="mb-3">
                              <FormControl
                                   placeholder="Masukkan review untuk produk ini..."
                                   aria-label="Masukkan review untuk produk ini..."
                                   aria-describedby="basic-addon2"
                                   value={input}
                                   onChange={(e) => setInput(e.target.value)}
                              />
                              <Button variant="outline-secondary" id="button-addon2" onClick={createReview}>
                                   {currentReviewId ? 'Edit Review' : 'Create Review'}
                              </Button>
                              {
                                   currentReviewId ? 
                                   <Button variant="outline-danger" id="button-addon2" onClick={resetForm}>
                                        Reset Form
                                   </Button> : null
                              }
                         </InputGroup>
                    </Row>
                    {
                         data.map((review) => (
                              <Review data={review} key={review.id} editHandler={() => editReview(review)} deleteHandler={() => deleteReview(review)}/>
                         ))
                    }
               </Container>
          </>
     )
}