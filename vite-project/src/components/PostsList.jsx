import Post from './Post';
import NewPost from './NewPost';
import classes from './PostsList.module.css';

function PostsList(){
    return (
        <>
        <NewPost />
        <ul className={classes.posts}>
            <li><Post author="Tin" body="Learning"/></li>
            <li><Post author="Student" body="Hello"/></li>
        </ul>
        </>

    );
}

export default PostsList;