import { useState } from 'react';
import '../App.css';

const ProfileCard = ({ name, bio }) => {
  const [likes, setLikes] = useState(0);

  // Requirement Logic
  const getMessage = () => {
    if (likes === 0) return "Be the first to like this profile";
    if (likes <= 4) return "This profile is getting some attention";
    if (likes <= 10) return "This profile is getting popular";
    return "This profile is a superstar";
  };

  return (
    <div className="profile-card">
      <div style={{ fontSize: '40px' }}>👤</div>
      <h2>{name}</h2>
      <p style={{ color: '#666', fontSize: '14px' }}>{bio}</p>
      
      <div className="message-fade" key={likes}>
        {getMessage()}
      </div>

      <h3 style={{ margin: '15px 0' }}>❤️ {likes}</h3>
      
      <button className="like-button" onClick={() => setLikes(likes + 1)}>
        Like Profile
      </button>
    </div>
  );
};

export default ProfileCard;