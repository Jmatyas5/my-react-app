import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Instagram = () => {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    const fetchInstagramData = async () => {
      try {
        const response = await axios.get(
          `https://graph.instagram.com/v12.0/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=YOUR_ACCESS_TOKEN`
        );
        setMedia(response.data.data);
      } catch (error) {
        console.error("Error fetching Instagram data:", error);
      }
    };

    fetchInstagramData();
  }, []);

  return (
    <div>
      <h1>Your Instagram Feed</h1>
      <div className="media-container">
        {media.map((post) => (
          <div key={post.id} className="post">
            <img src={post.media_url} alt={post.caption} />
            <p>{post.caption}</p>
          </div>
        ))}
      </div>

      {/* Add navigation buttons */}
      <Link to="/">
        <button>Go to Homepage</button>
      </Link>
      <Link to="/gallery">
        <button>Go to Gallery</button>
      </Link>
    </div>
  );
};

export default Instagram;
