import {Container,Col,Button,Row,Modal} from 'react-bootstrap'
import axios from 'axios'
import {useDispatch,useSelector} from 'react-redux'
import React from 'react'
import {getApiAction,deletePost} from '../redux/configReducers'
import '../css/index.css'
import {IsForm} from './Form'
export const Home = () => {
  const posts = useSelector(store=>store.allPosts.posts)
  const dispatch = useDispatch()
   
    const [details,setDetails] = React.useState([])
    
    const [show, setShow] = React.useState(false);
    const [showForm, setShowForm] = React.useState(false);

    const handleCloseF = () => setShowForm(false);
    const handleShowF = () => { 
      setShowForm(true)} 

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
      dispatch(getApiAction())
     
      
    },[])
    console.log(posts)
    
    return <div> 
      
      <Button className='m-2 bg-dark'  onClick={() =>{ handleShowF()}} > Create New Post </Button>
<Container><Row className='vw-100'>
  {posts.map((e,index)=>{
    return  <Col   xs={12}  className='w-75 d-flex flex-column mt-4 d-flex  fw-bold  shadow p-3 mb-4 bg-body rounded' key={e.id}>
      <div className='p-2 mb-4'> {e.title} </div>
   
      <div className=' containButtons d-flex flex-row justify-content-around '> 
      <Button   className='buttonSize' variant="primary"> <i className="d-none d-md-inline bi bi-pencil-square"></i> Edit</Button>
      <Button onClick={() =>{ handleShow(e.id)}} className='buttonSize' variant="success"><i class="d-none d-md-inline bi bi-box-arrow-in-up-left"></i> Details</Button>

      <Button  className='buttonSize' onClick={()=>{dispatch(deletePost(e))}} variant="danger"> <i class="d-none d-md-inline bi bi-trash-fill"></i>Delete</Button>
         </div>
        
  </Col>
  })}
  
  <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{details.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{details.body}</Modal.Body>
       
      </Modal>

      <Modal show={showForm} onHide={handleCloseF}>
       
        <Modal.Body>
          <IsForm/>
        </Modal.Body>
       
      </Modal>
  </Row>   
  
</Container>

</div>
   
    
}