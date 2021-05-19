import axios from 'axios'
export const getPosts =  () =>{
    axios 
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(function(result){
        return result.data
    })
}