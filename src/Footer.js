import React from 'react';
import { Link } from 'react-router-dom'
import {FaHome} from 'react-icons/fa'
import {RxResume} from 'react-icons/rx'
import {FaFacebook} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
    return (
        <div className='p-10 text-base-content max-w-[1250px] mx-auto'>
           <div className='flex gap-3 justify-between items-center'>
            <a href="https://talhatarique.netlify.app/"><FaHome size="2rem" color='white'/></a>
            <a href="https://www.facebook.com/talha.tarique.5"><FaFacebook size="2rem" color='white'/></a>
            <a href="https://drive.google.com/file/d/1w5MaZylF7luKSeOtf83VwqUjHOpnT4Ag/view?usp=share_link"><RxResume size="2rem" color='white'/></a>
            <a href="https://github.com/TalhaT298"><FaGithub size="2rem" color='white'/></a>
            <a href="https://www.linkedin.com/in/talha-tarique/"><BsLinkedin size="2rem" color='white'/></a>
            <a href="https://www.instagram.com/talha_tarique77/"><BsInstagram size="2rem" color='white'/></a>
            <a href="https://twitter.com/TalhaTarique1"><BsTwitter size="2rem" color='white'/></a>
           </div>
           <div>
           <p className='flex mt-8 justify-center items-center text-white'>©2023 All right reserved by Talha Tarique</p>
           </div>
        </div>
    );
};

export default Footer;