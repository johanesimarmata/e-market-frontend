import React from 'react'
import {Card} from 'react-bootstrap'

export const Review = ({data}) => {
     return (
          <>   
               <Card border="secondary" className='my-3'>
                    <Card.Header>
                         <div className='d-flex flex-column'>
                              <strong><p style={{marginBottom: 0}}>{data.username}</p></strong>
                              <p style={{marginBottom: 0}}>{data.timestamp}</p>
                         </div>
                    </Card.Header>
                    <Card.Body>
                         <Card.Text>
                              {data.content}
                         </Card.Text>
                    </Card.Body>
               </Card>
          </>
     )
}