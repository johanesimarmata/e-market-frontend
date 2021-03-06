import React from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap'
import styles from './TopUpBank.module.css'
import axios from 'axios';
import { UserContext } from '../../../context/UserContext';

export const UploadBuktiPembayaran = () => {
     const [user, ] = React.useContext(UserContext)
     const [input, setInput] = React.useState({
          nominal: 0, 
          image: null
     })
     const imageInputRef = React.useRef()

     const handleChange = (event) => {
          let value = event.target.value
          let name = event.target.name
          setInput({...input, [name] : value})
     }

     const handleChangeFileInput = (event) => {
          let newProfilePict = event.target.files[0]
          setInput({
               ...input,
               image: newProfilePict
          })
     }

     const handleSubmit = () => {
          const fd = new FormData();
          fd.set("username", user.user.username)
          fd.append("image", input.image)
          fd.set("nominal", input.nominal)

          let config = {
               method: 'post',
               url: 'https://e-market-wallet.herokuapp.com/api/e-wallet/top-up/bukti-pembayaran',
               data: fd,
               headers: { 
                    'Authorization': `Bearer ${user.access_token}`
               }
          }

          axios(config).then((res) => {
               let clearInput = {
                    nominal: 0, 
                    image: null
               }
               setInput(clearInput)
               imageInputRef.current.value = ""
          }).catch(() => {
               alert('top up dengan bukti pembayaran gagal!')
          })
     }

     return(
          <>
               <Row className='my-4'>
                    <Col>
                         <Form>
                         {/*     <Form.Item label="Nominal">
                                   <InputNumber placeholder="Masukkan nominal..." type={'number'} value={input.nominal} onChange={handleChange}/>
                              </Form.Item>
                              <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>                             
                                   <Upload.Dragger name="files" maxCount={1} customRequest={handleFileUploadSuccess} onChange={handleChangeFileInput}>
                                        <p className="ant-upload-drag-icon">
                                             <UploadOutlined />
                                        </p>
                                        <p className="ant-upload-text">
                                             Klik atau arahkan file ke area ini untuk melakukan upload bukti pembayaran
                                        </p>
                                        <p className="ant-upload-hint">
                                             Proses verifikasi dapat membutuhkan waktu yang cukup lama
                                        </p>
                                   </Upload.Dragger>
                              </Form.Item> */}
                              <Form.Group className="mb-md-3">
                                   <Form.Label>Nominal</Form.Label>
                                   <Form.Control type="number" name='nominal' value={input.nominal} onChange={handleChange} placeholder="Masukkan nominal..."/>
                              </Form.Group>
                              <Form.Group className="mb-3">
                                   <Form.Label>Foto (max 1024 x 1024 pixel)</Form.Label>
                                   <Form.Control  size="lg" ref={imageInputRef} type="file" onChange={handleChangeFileInput} />
                              </Form.Group>
                         </Form>
                    </Col>
               </Row>
               <Row className='justify-content-center my-5 text-center'>
                    <Col>
                         <Button className={`${styles.btn} py-2`} onClick={handleSubmit}>Upload bukti sekarang</Button>
                    </Col>
               </Row>
          </>
     )
}