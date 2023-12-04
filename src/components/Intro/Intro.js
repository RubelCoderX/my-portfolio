import React from 'react';
import './Intro.css';
import bg from '../../assets/rubel .png';
import btnImg from '../../assets/hireme.png';
import {Link} from 'react-scroll';
const Intro = () => {
    return (
        <section id="intro">
            <div className="intro-content">
               <span className="hello">Hello</span>
               <span className="introText">I'm <span className="introName">Rubel</span><br />Full Stack Web Developer</span>
               <p className="introPara">I am a skilled web developer with experience in creating visually and user friendly website</p>
               <Link><button className="btn"><img src={btnImg} alt="Hire Me" /> Hire me</button></Link>
            </div>
            <img className="bg" src={bg} alt="profile" />
        </section>
    );
};

export default Intro;