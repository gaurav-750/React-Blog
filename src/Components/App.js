import React from 'react'

import Home from './Home';
import CreatePost from './CreatePost';
import PostDetails from './PostDetails';
import NavBar from './NavBar';

import {Routes, Route} from 'react-router-dom';


const App = () => {
  return (
    <div className='container'>

      <NavBar />
      
      <Routes>
        <Route exact path='/' element={<Home />} />

        <Route exact path='/post/create' element={<CreatePost />} />
        <Route exact path='/post/:postId' element={<PostDetails />} />
      </Routes>

    </div>
  )
}

export default App;
