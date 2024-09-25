import React from 'react'
import { useParams,useEffect} from 'react-router-dom'
import axios from 'axios'

function Post() {

    let {id} = useParams()

    // useEffect(() => {
    //     axios.get('http://localhost:4000/posts').then((response) => {
    //       })
    // },[])

  return (
    <div>
      {id}
    </div>
  )
}

export default Post
