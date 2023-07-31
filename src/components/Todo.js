import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; // Replace 'react-bootstrap' with your actual Bootstrap library import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const Todo = ({text,updatetodo,deleteTodo}) => {
  return (
     <Container className='mt-3'>
        <Row className="bg-dark text-white mt-3 rounded p-2">
                <Col xs={6} sm={6} md={8} className="text-center">
                {text}
                </Col>
                <Col  xs={6} sm={6} md={4} className='text-center my-auto'>
                <FontAwesomeIcon className='btn text-light' icon={faEdit} onClick={updatetodo} />
                <FontAwesomeIcon className='btn text-light' icon={faTrash} onClick={deleteTodo} />
                </Col>
        </Row>
    </Container>
    
  )
}

export default Todo;