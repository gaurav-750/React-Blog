import React, { useState } from 'react';
import { useEffect } from 'react';

import {Link} from 'react-router-dom';
import firebase from '../firebase';

const Home = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {

      firebase
        .firestore()
        .collection('posts')
        .onSnapshot((snapshot) => {
          const posts = snapshot.docs.map((doc) => {
            return doc.data();
          })

          // console.log('postsarr', posts);
          setPosts(posts);
        })

    }, []);

  return (
    <div className='home'>

      <h1>Tech Blog</h1>
      <div id='blog-by'> Gaurav J Somani </div>

      {posts.map((post, index) => {
        return(
        <div className='post' key={index}>

          <Link to={`/post/${post.id}`} >
            <h3> {post.title} </h3>
          </Link>

          <p> {post.subTitle} </p>
        </div>
        )
      })}

    </div>
  )
}

export default Home;