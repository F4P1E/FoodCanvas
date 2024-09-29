import React from 'react';
import GroupPanel from './GroupPanel';
import '../styles/PostFeed.scss'; // Add your styles for post feed

const PostFeed = () => {
  // Example posts array
  const posts = [
    {
      id: 1,
      content: 'This is the first post example.',
      author: 'User A',
    },
    {
      id: 2,
      content: 'Here is another interesting post.',
      author: 'User B',
    },
    {
      id: 3,
      content: 'Check out this cool recipe I found!',
      author: 'User C',
    },
  ];

  return (
    <div className="post-feed">
      <div className="sidebar">
        <div className="group-panel-container">
          <GroupPanel /> {/* Group panel on the left */}
        </div>
      </div>
      <div className="feed-content">
        <h1>Your Posts</h1>
        {posts.length > 0 ? (
          posts.map(post => (
            <div className="post" key={post.id}>
              <p><strong>{post.author}:</strong> {post.content}</p>
            </div>
          ))
        ) : (
          <p>No posts available.</p>
        )}
      </div>
    </div>
  );
};

export default PostFeed;
