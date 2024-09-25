import axios from 'axios'
import '../App.css';
import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Homepage() {
    const [postList,setPostList] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4000/posts').then((response) => {
      setPostList(response.data)
    })

  },[])

  let navigate = useNavigate()

  return (
    <div>
        
      {postList.map((value,key) => {
      return <div className='post' onClick={() => navigate(`/post/${value.id}`)}>
        <div className='title'>{value.title}</div>
        <div className='body'>{value.postText}</div>
        <div className='footer'>{value.username}</div>
         </div>
    })}
    </div>
  )
}

export default Homepage
