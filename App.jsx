import './App.css';
import ProfileCard from './components/ProfileCard';

function App() {
  return (
    <div className="card-container">
      <ProfileCard name="Alex Rivera" bio="UI/UX Designer who loves minimalist art." />
      <ProfileCard name="Jordan Lee" bio="Backend Engineer & Weekend hiker." />
      <ProfileCard name="Taylor Swift" bio="I write songs and bake cookies." />
    </div>
  );
}

export default App;