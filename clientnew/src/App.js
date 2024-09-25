import axios from 'axios'
import './App.css';
import { useEffect, useState} from 'react';
import Homepage from './pages/Homepage';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import CreatePost from './pages/CreatePost';
import Post from './pages/Post';
function App() {
 

   return  (<div className="App">
              <Router>
                <div className='navbar'>
                  <Link to='/createpost' > CreatePost</Link>
                  <Link to='/' > HomePAge</Link>
                </div>
                <Routes>
                  <Route path='/' element={<Homepage />} />
                  <Route path='/createpost' element={<CreatePost />} />
                  <Route path='/post/:id' element={<Post />} />
                </Routes>
              </Router>
            </div>
   )
  
}

export default App;
