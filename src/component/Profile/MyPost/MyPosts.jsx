import React from 'react';
import style from './MyPosts.module.css';
import Post from './post/Post';
import { Field, reduxForm } from 'redux-form'
import { requiredField, maxLengthCreator  } from '../../../utils/validators/validators';
import { Textarea } from '../../../Common/Preloader/FormsControls/FormsControl';

const maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {
    let postElement =
        props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} dispatch={props.dispatch} />)

    let addPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={`${style.item} ${style.active}`}>
            < AddPostReduxForm onSubmit={addPost} />
            <div className={style.posts}>
                {postElement}
            </div>
        </div>
    );
}

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={"newPostText"} placeholder='Enter your post' validate={[requiredField, maxLength10 ]} />
            <div>
                <button>add post</button>
            </div>
        </form>
    )
}

const AddPostReduxForm = reduxForm({ form: 'addNewPost' })(AddPostForm)

export default MyPosts;