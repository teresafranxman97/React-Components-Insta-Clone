import React from 'react';
import dummyData from '../../dummy-data';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;

  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      {posts.map((postData, index) => <Post key={index} post={postData} likePost={likePost}/>)}
      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};

export default Posts;


// key={postData.Id}
