import {Container,Col,Button,Row,Modal} from 'react-bootstrap'
import axios from 'axios'

import React from 'react'
export const Home = () => {
    const [posts,setPosts] = React.useState([])
    const [details,setDetails] = React.useState([])
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (id) => { 
      viewDetails(id)
      setShow(true)} 
  
    const viewDetails = (id) =>{
      axios 
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(function(result){
          setDetails(result.data) 
      })
      console.log(details)
    }
    React.useEffect(()=>{
      axios 
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(function(result){
          setPosts(result.data) 
      })
    },[])
    console.log(posts)
    
    return <div> 
<Container><Row className='vw-100'>
  {posts.map((e,index)=>{
    return  <Col   xs={10} sm={4} md={3} className='d-flex flex-column justify-content-between fw-bold m-3 p-3 rounded-3 border border-dark' key={e.id}>
      <div className='p-2'> {e.title} </div>
   
      <div className=' d-flex flex-row justify-content-around '> 
      <Button variant="primary">Edit</Button>
      <Button onClick={() =>{ handleShow(e.id)}} variant="success">Details</Button>

      <Button variant="danger">Delete</Button>
         </div>
        
  </Col>
  })}
  
  <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{details.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{details.body}</Modal.Body>
       
      </Modal>
  </Row>   
  
</Container>

</div>
   
    
}