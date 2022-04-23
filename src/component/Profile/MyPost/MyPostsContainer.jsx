import { addPostActionCreator } from '../../../Redux/profilePageReducer';
import MyPosts from './MyPosts';
import { connect } from "react-redux";
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText));
        },
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(MyPosts);