import {Container,Col,Form,Button,Row,Modal} from 'react-bootstrap'
import axios from 'axios'
import {useDispatch,useSelector} from 'react-redux'
import React from 'react'
import {getApiAction,addPost} from '../redux/configReducers'
import '../css/index.css'
import { Link } from "react-router-dom";

export const Home = () => {
  const posts = useSelector(store=>store.allPosts.posts)
  const dispatch = useDispatch()

    const [title,setTitle] = React.useState('')
    const [body,setBody] = React.useState('')
   

 console.log(posts)
  const add= (e) =>{
        e.preventDefault()

        axios 
        .post(`https://jsonplaceholder.typicode.com/posts`,{
          title,body
          
        })
        .then(response =>{
          dispatch(addPost(response.data))

          console.log(response.data)
        })
       
    }
    


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
 
    
    const deletePost = (id) =>{
      axios 
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
  
    }
    React.useEffect(()=>{
      dispatch(getApiAction())
     
      
    },[])
    console.log(posts)
    
    return <div> 
       
<Container><Row className='vw-100'>
  <Col  xs={10}  md={5} >
    <div class='shadow-lg p-3 mb-5 bg-body rounded mt-3 bg-light'>
      <h3>Create your post</h3>
      <Form onSubmit={add} className=' p-2' >
  <Form.Group controlId="formBasicEmail">
    
    <Form.Control className='w-75 mb-2'placeholder='Title' value={title} onChange={(event)=>setTitle(event.target.value)} type="input" />
   
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
   
    <Form.Control  placeholder='Details' value={body} onChange={(event)=>setBody(event.target.value)}  type="input"/>
  </Form.Group>
 
  <Button variant="light"  className='border border-secondary mt-3 ' type="submit">
    Submit
  </Button>
</Form></div>
            
        </Col>
      <Col xs={10}  md={5} >
        {posts.map((e,index)=>{
    return  <Col    className=' d-flex flex-column mt-4 d-flex  fw-bold  shadow p-3 mb-4 bg-body rounded' key={e.id}>
      <div className='p-2 mb-4'> {e.title} </div>
   
      <div className=' containButtons d-flex flex-row justify-content-around '> 
    <Link to={`/Form/${e.id}`}> 
    <Button  className='buttonSize' variant="primary"> <i className="d-none d-md-inline bi bi-pencil-square"></i> Edit</Button>

     </Link>
      <Button onClick={() =>{ handleShow(e.id)}} className='buttonSize' variant="success"><i class="d-none d-md-inline bi bi-box-arrow-in-up-left"></i> Details</Button>

      <Button  className='buttonSize' onClick={()=>{deletePost(e.id)}} variant="danger"> <i class="d-none d-md-inline bi bi-trash-fill"></i>Delete</Button>
         </div>
        
  </Col>
  })}
      </Col>
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