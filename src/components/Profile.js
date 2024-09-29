import React, { useState, useEffect } from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import "../styles/Profile.scss";

const Profile = () => {
  const { user, logout } = useKindeAuth();

  const [profilePicture, setProfilePicture] = useState(
    user?.profile_picture || "https://via.placeholder.com/150"
  );
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [bio, setBio] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [isEditingName, setIsEditingName] = useState(false);
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");

  const [friends, setFriends] = useState([
    { name: "John Doe", profilePic: "https://via.placeholder.com/50" },
    { name: "Jane Smith", profilePic: "https://via.placeholder.com/50" },
  ]);
  const [followers, setFollowers] = useState([
    { name: "Alex Johnson", profilePic: "https://via.placeholder.com/50" },
    { name: "Sara Lee", profilePic: "https://via.placeholder.com/50" },
  ]);

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePicture(imageUrl);
    }
  };

  const toggleEditName = () => {
    setIsEditingName((prev) => !prev);
  };

  const handleAddBlog = () => {
    if (blogTitle && blogContent) {
      const newBlog = { title: blogTitle, content: blogContent };
      setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
      setBlogTitle("");
      setBlogContent("");
    }
  };

  const handleRemoveBlog = (index) => {
    setBlogs((prevBlogs) => prevBlogs.filter((_, i) => i !== index));
  };

  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setEmail(user.email || "");
    }
  }, [user]);
  useEffect(() => {
    // Simulating fetching followers data from an API
    const fetchFollowers = async () => {
      const response = await fetch('/api/followers'); // Replace with your API endpoint
      const data = await response.json();
      setFollowers(data); // Update state with fetched data
    };
  
    fetchFollowers();
  }, []);
  

  return (
    <div className="profile-page">
      <div className="profile-main">
        <div className="profile-header">
          <label
            className="profile-picture-label"
            htmlFor="profile-picture-input"
          >
            <img
              src={profilePicture}
              alt={name || "User"}
              className="profile-picture"
            />
          </label>
          <input
            id="profile-picture-input"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleProfilePictureChange}
          />
          <div className="profile-details">
            {isEditingName ? (
              <input
                type="text"
                className="name-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={toggleEditName}
                onKeyDown={(e) => e.key === "Enter" && toggleEditName()}
              />
            ) : (
              <h1 onClick={toggleEditName} className="editable-name">
                {name || "User Name"} <span className="edit-icon">(Edit)</span>
              </h1>
            )}
            <p className="email-text">{email}</p>
            <textarea
              className="bio-input"
              placeholder="Tell us something about yourself..."
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              rows={3} // Set intial rows for better spacing
            />
          </div>
        </div>

        <div className="profile-blogs">
          <h2>My Blogs</h2>
          <div className="blog-input">
            <input
              type="text"
              placeholder="Blog Title"
              value={blogTitle}
              onChange={(e) => setBlogTitle(e.target.value)}
            />
            <textarea
              placeholder="Write your blog content here..."
              value={blogContent}
              onChange={(e) => setBlogContent(e.target.value)}
            />
            <button className="add-blog-button" onClick={handleAddBlog}>
              Add Blog
            </button>
          </div>

          <div className="blogs-list">
            {blogs.length > 0 ? (
              blogs.map((blog, index) => (
                <div key={index} className="blog-post">
                  <h3>{blog.title}</h3>
                  <p>{blog.content}</p>
                  <button
                    className="remove-blog-button"
                    onClick={() => handleRemoveBlog(index)}
                  >
                    Remove
                  </button>
                </div>
              ))
            ) : (
              <p>No blogs added yet.</p>
            )}
          </div>
        </div>
      </div>

      <div className="profile-sidebar">
        <button className="logout-button" onClick={logout}>
          <i className="fas fa-sign-out-alt"></i> Logout
        </button>
        <div className="profile-section">
          <h2>Friends</h2>
          <div className="friends-list">
            {friends.length > 0 ? (
              friends.map((friend, index) => (
                <div key={index} className="friend-item">
                  <img
                    src={friend.profilePic}
                    alt={friend.name}
                    className="friend-pic"
                  />
                  <span>{friend.name}</span>
                </div>
              ))
            ) : (
              <p>No friends yet.</p>
            )}
          </div>
        </div>

        <div className="profile-section">
          <h2>Followers</h2>
          <div className="followers-list">
            {followers.length > 0 ? (
              followers.map((follower, index) => (
                <div key={index} className="follower-item">
                  <img
                    src={follower.profilePic}
                    alt={follower.name}
                    className="follower-pic"
                  />
                  <span>{follower.name}</span>
                </div>
              ))
            ) : (
              <p>No followers yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
