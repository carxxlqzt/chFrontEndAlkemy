import axios from "axios"

const initialDate={
    posts:[],
 
    
}
const GET_API ='GET_API'
const ADD_POST = 'ADD_POST'
const DELETE_POST='DELETE_POST'

export default function getPosts(state=initialDate,action){
    switch(action.type){
        case GET_API:
            return {...state,posts:action.payload}
            default:
                return state

    case ADD_POST:
        return{...state,posts:state.posts.concat(action.art)}
    case DELETE_POST:
        return {
            ...state,posts:state.posts.filter(elem =>elem.id!==action.post.id)
        }
    }
}

export const getApiAction = () => async (dispatch,getState)=>{
//    console.log(getState())
    try{
        const res= await axios.get(`https://jsonplaceholder.typicode.com/posts`)
        dispatch({
            type: GET_API,
            payload:res.data
        })
    }
    catch(error){
        console.log()
    }
}
export const addPost=(art) => async (dispatch) =>{
dispatch({
    type:ADD_POST,
    art
})
}
export const deletePost=(post) => async (dispatch) =>{
    dispatch({
        type:DELETE_POST,
        post
    })
    }
