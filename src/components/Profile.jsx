import { React } from 'react';
import '../assets/Stylesheets/Profile.css';
import { BsTelegram, BsGithub, BsLinkedin } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { RiInstagramFill } from 'react-icons/ri';

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
      <a href="https://github.com/PromzzyKoncepts" target="_blank" rel="noreferrer"><BsGithub /></a>
      <a href="https://www.linkedin.com/in/promiseokechukwu/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
      <a href="https://okechukwupromise638@gmail.com" target="_blank" rel="noreferrer"><MdEmail /></a>
      <a href="https://twitter.com/prOmzzy" target="_blank" rel="noreferrer"><AiFillTwitterCircle /></a>
      <a href="https://www.instagram.com/promzzy_real/" target="_blank" rel="noreferrer"><RiInstagramFill /></a>
      <a href="https://wa.link/6irqq9" target="_blank" rel="noreferrer"><IoLogoWhatsapp /></a>
      <a href="https://t.me/promiseokechukwu" target="_blank" rel="noreferrer"><BsTelegram /></a>
    </div>
  </div>
);
export default Profile;
