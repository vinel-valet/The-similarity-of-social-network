import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {useDispatch, useSelector} from "react-redux";

const MyPostsContainer = () => {

    let dispatch = useDispatch();
    let state = useSelector((state) => state.profilePage);

    let addPost = () => dispatch(addPostActionCreator());
    let onNewPostChange = (text) => dispatch(updateNewPostTextActionCreator(text));

    return (
        <MyPosts updateNewPostText={onNewPostChange}
                 addPost={addPost}
                 posts={state.posts}
                 newPostText={state.newPostText}
        />
    )
}
export default MyPostsContainer;