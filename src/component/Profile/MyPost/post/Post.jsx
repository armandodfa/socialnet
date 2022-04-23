import React from 'react';
import style from './post.module.css';

const Post = (props) => {
    return (
        <div className={style.item}>
            <img src={props.photo != null ? props.profile.photos.large : 'https://cdn1.iconfinder.com/data/icons/diversity-avatars-volume-01-circles/64/matrix-neo-man-white-512.png'} ></img>
            <div className={style.post}>{props.message} </div>
            <div>
                <button>like</button>{props.likesCount}
            </div>
        </div>
    );
}

export default Post;