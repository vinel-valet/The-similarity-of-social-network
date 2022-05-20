import './MyPosts.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} key={p.id}/>)
    let newPostText = props.newPostText;

    let onAddPost = () => {
        if (newPostText) {
            props.addPost();
        }
    }

    let onNewPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text)
    }

    return (
        <div className='myPosts'>
            My Posts
            <div>
                <textarea value={newPostText}
                          onChange={onNewPostChange}/>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className='posts'>
                {postsElements}
            </div>
        </div>
    );
}
export default MyPosts;