import axios from 'axios'
import './App.css';
import { useEffect, useState} from 'react';
import Homepage from './pages/Homepage';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import CreatePost from './pages/CreatePost';
import Post from './pages/Post';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
 

   return  (<div className="App">
              <Router>
                <div className='navbar'>
                  <Link to='/createpost' > CreatePost</Link>
                  <Link to='/' > HomePAge</Link>
                  <Link to='/register' > Register</Link>
                  <Link to='/login' > Login</Link>
                </div>
                <Routes>
                  <Route path='/' element={<Homepage />} />
                  <Route path='/createpost' element={<CreatePost />} />
                  <Route path='/post/:id' element={<Post />} />
                  <Route path='/register' element={<Register />} />
                  <Route path='/login' element={<Login />} />
                </Routes>
              </Router>
            </div>
   )
  
}

export default App;
