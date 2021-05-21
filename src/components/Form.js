import React from 'react'
import axios from 'axios'
import {Form,Button} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import {addPost} from '../redux/configReducers'
import {useParams} from 'react-router-dom'
export const IsForm = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const posts = useSelector(store=>store.allPosts.posts)
    const [title,setTitle] = React.useState('')
    const [body,setBody] = React.useState('')
    const [showForm, setShowForm] = React.useState(false);
    const [titleF,setTitleF] = React.useState('')
    const [bodyF,setBodyF] = React.useState('')
  
  


 console.log(posts)
 const editPost = (e) =>{
   e.preventDefault()
  axios 
  .put(`https://jsonplaceholder.typicode.com/posts/${id}`,{
    titleF,bodyF
    
  })
  .then(function(result){
    console.log(result.data) 
})
}
    return (
        <div className='vw-100 vh-100'>
      <Form className='w-75' onSubmit={editPost} >
  <Form.Group controlId="formBasicEmail">
    <Form.Label  >Title</Form.Label>
    <Form.Control value={titleF} onChange={(event)=>setTitleF(event.target.value)} type="input" />
   
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Details</Form.Label>
    <Form.Control value={bodyF} onChange={(event)=>setBodyF(event.target.value)}  type="input"/>
  </Form.Group>
 
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
    )
}
