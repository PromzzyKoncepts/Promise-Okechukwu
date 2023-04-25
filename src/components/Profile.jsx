import { React } from 'react';
import '../assets/Stylesheets/Profile.css';
import FollowMe from '../partials/follow';

const Profile = () => (
  <div className="main">
    <div className="body">
      <div className="content">
        <h2>Promise Okechukwu</h2>
        <h2>Promise Okechukwu</h2>
      </div>
      <h3 className="typing">
        <strong>FULL-STACK SOFTWARE DEVELOPER</strong>
        {' '}
        | Graphics Designer | Product Designer
        {' '}
      </h3>
      <FollowMe />
    </div>
  </div>
);
export default Profile;
