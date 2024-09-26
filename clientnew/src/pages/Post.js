import React from 'react'
import { useParams} from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
function Post() {

    let {id} = useParams()

    const [post,setPost] = useState({})
    const [comments, setComments] = useState([])

    const [newComment,setNewComment] = useState('')

    useEffect(() => {
        axios.get(`http://localhost:4000/posts/byId/${id}`).then((response) => {
            setPost(response.data)
          })

          axios.get(`http://localhost:4000/comments/${id}`).then((response) => {
            setComments(response.data)
          })
    },[id])

    const addComment = () => {
      axios.post('http://localhost:4000/comments', {commentBody: newComment, postId: id}).then((response) => {
        const commentToAdd = {commentBody: newComment}
        setComments([...comments, commentToAdd])
        setNewComment('')
      })
    }

    const handleChange = (e) => {
      setNewComment(e.target.value)
    }
  return (
    <div className='postPage'>
      <div className='leftSide'>
        <div className='post' id='individual'>
        <div className='title'>{post.title}</div>
        <div className='body'>{post.postText}</div>
        <div className='footer'>{post.username}</div>
        </div>
      </div>
      <div className='rightSide'>
        <div className='addCommentContainer'>
          <input type='text' placeholder='addComment' onChange={handleChange} value={newComment}/>
          <button type='submit' onClick={addComment}>AddComments</button>
        </div>
        <div className='listOfComments'>
          {comments.map((comment,key) => {
            return <div className='comment'> {comment.commentBody}</div>
          })}
        </div>
        </div>      
        
    </div>
  )
}

export default Post
