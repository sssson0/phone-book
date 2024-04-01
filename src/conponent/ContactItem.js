import React from 'react';
import { Row,Col } from 'react-bootstrap';

const ContactItem = ({item}) => {
  return (
    <div>
      <Row className='contact-item'>
        <Col lg={1} > 
            <img width={50} height={48} 
                src='https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg'/>
        </Col>
        <Col lg={11} >
        <div className='ss'>
            {item.name}
        </div>
        <div className='ss'>
        {item.phoneNumber}
        </div>
        </Col>
      </Row>
    </div>
  );
}

export default ContactItem;
