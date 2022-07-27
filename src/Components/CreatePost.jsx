import React, { useState } from 'react'


const CreatePost = () => {

    const [title, setTitle] = useState('');
    const [subtitle, setSubTitle] = useState('');
    const [content, setContent] = useState('');


    const handlesubmit = (e) => {
        e.preventDefault();

        // console.log(e.target.value);
        console.log('title', title);
        console.log('content', content);
    }

  return (
    <div className='create-post'>
        <h1>Create Post</h1>

        <form onSubmit={handlesubmit} >
            <div className='form-field'>
                <label>Title</label>
                <input value={title} onChange={(e) => {setTitle(e.target.value)}} ></input>
            </div>

            <div className='form-field'>
                <label>Sub Title</label>
                <input value={subtitle} onChange={(e) => {setSubTitle(e.target.value)}}></input>
            </div>

            <div className='form-field'>
                <label>Content</label>
                <textarea rows={10} value={content} onChange={(e) => {setContent(e.target.value)}}>

                </textarea>
            </div>

            <button className='create-post-btn'> Create </button>
        </form>

    </div>
  )
}

export default CreatePost;