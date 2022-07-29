import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import firebase from '../firebase';


const PostDetails = () => {

  const [post, setPost] = useState({});
  const { postId } = useParams(); //to get the params from url

  useEffect(() => {

    //getting the post with postId from Firebase:
    firebase
      .firestore()
      .collection('posts')
      .doc(postId)
      .onSnapshot((snapshot) => {
        setPost(snapshot.data());
      })

  }, []);

  return (
    <div className='post-detail'>

      <h1>{post.title}</h1>
      <p> {post.content} </p>

    </div>
  )
}

export default PostDetails;