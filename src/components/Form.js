import React from 'react'
import axios from 'axios'
import {Form,Button} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import {addPost} from '../redux/configReducers'

export const IsForm = () => {
  const dispatch = useDispatch()
  const posts = useSelector(store=>store.allPosts.posts)
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
    return (
        <div>
            <Form onSubmit={add} >
  <Form.Group controlId="formBasicEmail">
    <Form.Label  >Title</Form.Label>
    <Form.Control value={title} onChange={(event)=>setTitle(event.target.value)} type="input" />
   
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Details</Form.Label>
    <Form.Control value={body} onChange={(event)=>setBody(event.target.value)}  type="input"/>
  </Form.Group>
 
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
    )
}
