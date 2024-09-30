import React, { useState } from 'react';
import { FaThumbsUp, FaHeart } from 'react-icons/fa'; // Import icons from react-icons
import GroupPanel from './GroupPanel';
import '../styles/PostFeed.scss';

const PostFeed = () => {
  // Example posts array with images and reactions
  const [posts, setPosts] = useState([
    {
      id: 1,
      content: 'Great Pizza!!!!!',
      author: 'Mike Oskmall',
      avatar: 'https://i.pinimg.com/564x/b0/4c/16/b04c1643d6fb3fa6903866fe5664dda8.jpg', // Placeholder avatar image
      image: 'https://i.pinimg.com/564x/b2/c1/84/b2c184991dfba0752e17656bc45409f0.jpg',
      likes: 0,
      hearts: 0,
    },
    {
      id: 2,
      content: 'Here is another interesting post.',
      author: 'User B',
      avatar: 'https://via.placeholder.com/40', // Placeholder avatar image
      image: 'https://i.pinimg.com/564x/d5/d4/bb/d5d4bb7e8a83e3cc20f3383e4ca3e5c7.jpg',
      likes: 0,
      hearts: 0,
    },
    {
      id: 3,
      content: 'Check out this cool recipe I found!',
      author: 'User C',
      avatar: 'https://via.placeholder.com/40', // Placeholder avatar image
      image:
        'https://insanelygoodrecipes.com/wp-content/uploads/2024/02/Homemade-Air-Fryer-Mozzarella-Sticks.jpg',
      likes: 0,
      hearts: 0,
    },
  ]);

  // Function to handle 'like' reaction
  const handleLike = (postId) => {
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  // Function to handle 'heart' reaction
  const handleHeart = (postId) => {
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, hearts: post.hearts + 1 } : post
      )
    );
  };

  return (
    <div className="post-feed">
      <div className="sidebar">
        <div className="group-panel-container">
          <GroupPanel />
        </div>
      </div>
      <div className="feed-content">
        <h1>Your Posts</h1>
        {posts.length > 0 ? (
          posts.map((post) => (
            <div className="post" key={post.id}>
              <div className="post-header">
                <img
                  src={post.avatar}
                  alt={`${post.author}'s avatar`}
                  className="post-avatar"
                />
                <p>
                  <strong>{post.author}:</strong> {post.content}
                </p>
              </div>
              {post.image && (
                <div className="post-image">
                  <img src={post.image} alt={`${post.author}'s post`} />
                </div>
              )}
              <div className="post-reactions">
                <button onClick={() => handleLike(post.id)}>
                  <FaThumbsUp /> Like ({post.likes})
                </button>
                <button onClick={() => handleHeart(post.id)}>
                  <FaHeart /> Heart ({post.hearts})
                </button>
              </div>
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
