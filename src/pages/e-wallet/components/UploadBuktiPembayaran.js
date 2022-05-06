import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import styles from './TopUpBank.module.css'
import { Form, Upload } from 'antd'
import { UploadOutlined } from '@ant-design/icons';


export const UploadBuktiPembayaran = () => {

     const normFile = (e) => {
          console.log('Upload event:', e);
          if (Array.isArray(e)) {
            return e;
          }
          return e && e.fileList;
     };

     const handleFileUploadSuccess = ({file, onSuccess}) => {
          setTimeout(() => {
               onSuccess('ok')
          }, 0)
     }

     return(
          <>
               <Row className='my-4'>
                    <Col>
                         <Form>
                              <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>                             
                                   <Upload.Dragger name="files" maxCount={1} customRequest={handleFileUploadSuccess}>
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
                              </Form.Item>
                         </Form>
                    </Col>
               </Row>
               <Row className='justify-content-center my-5 text-center'>
                    <Col>
                         <Button className={`${styles.btn} py-2`}>Upload bukti sekarang</Button>
                    </Col>
               </Row>
          </>
     )
}