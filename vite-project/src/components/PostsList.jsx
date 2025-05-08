import { useState } from 'react';

import Post from './Post';
import NewPost from './NewPost';
import classes from './PostsList.module.css';


function PostsList(){
    const [enteredBody, setCurrentEnteredBody] = useState('');
    const [enteredAuthor, setCurrentEnteredAuthor] = useState('');

    function bodyChangeHandler(event){
        setCurrentEnteredBody(event.target.value);
    }

    function authorChangeHandler(event){
        setCurrentEnteredAuthor(event.target.value);
    }


    return (
        <>
        <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler}/>
        <ul className={classes.posts}>
            <li><Post author={enteredAuthor} body={enteredBody}/></li>
            <li><Post author="Tin" body="Learning"/></li>
            <li><Post author="Student" body="Hello"/></li>
        </ul>
        </>

    );
}

export default PostsList;