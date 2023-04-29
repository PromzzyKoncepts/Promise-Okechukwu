import { BsTelegram, BsGithub, BsLinkedin } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { RiInstagramFill } from 'react-icons/ri';

const FollowMe = () => (
  <div className="follow-links">
    <a href="https://github.com/PromzzyKoncepts" target="_blank" rel="noreferrer"><BsGithub /></a>
    <a href="https://www.linkedin.com/in/promiseokechukwu/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
    <a href="mailto:okechukwupromise638@gmail.com" target="_blank" rel="noreferrer"><MdEmail /></a>
    <a href="https://twitter.com/prOmzzy" target="_blank" rel="noreferrer"><AiFillTwitterCircle /></a>
    <a href="https://www.instagram.com/promzzy_real/" target="_blank" rel="noreferrer"><RiInstagramFill /></a>
    <a href="https://wa.link/6irqq9" target="_blank" rel="noreferrer"><IoLogoWhatsapp /></a>
    <a href="https://t.me/promiseokechukwu" target="_blank" rel="noreferrer"><BsTelegram /></a>
  </div>
);
export default FollowMe;
