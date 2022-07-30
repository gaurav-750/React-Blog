import { useNavigate } from 'react-router-dom';

import firebase from '../firebase';
import useFormInput from '../hooks';


const CreatePost = () => {

    //using custom hook:
    const title = useFormInput('');
    const subtitle = useFormInput('');
    const content = useFormInput('');

    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();

        firebase
            .firestore()
            .collection('posts')
            .add({
                title : title.value,
                subTitle : subtitle.value,
                content : content.value,
                createdAt : new Date()
            })
            .then(() => {
                //clear the input fields:
                title.setthevalue('');
                subtitle.setthevalue('');
                content.setthevalue('');

                navigate('/');
            })
            .catch((err) => console.log('Error in adding post:', err))
    }

  return (
    <div className='create-post'>
        <h1>Create Post</h1>

        <form onSubmit={handlesubmit} >
            <div className='form-field'>
                <label>Title</label>
                <input {...title} ></input>
            </div>

            <div className='form-field'>
                <label>Sub Title</label>
                <input {...subtitle}></input>
            </div>

            <div className='form-field'>
                <label>Content</label>
                <textarea rows={10} {...content}>

                </textarea>
            </div>

            <button className='create-post-btn'> Create </button>
        </form>

    </div>
  )
}

export default CreatePost;