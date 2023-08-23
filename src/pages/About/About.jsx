import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About Novel Navigator</h2>
            <p className='fs-17'>Novel Navigator is your compass in the world of literature, simplifying the search for your next captivating read. Explore an extensive range of novels across genres, from timeless classics to contemporary gems. Receive personalized recommendations based on your preferences, and delve deeper with detailed insights into each book. Create a personalized reading list, connect with fellow book enthusiasts, and embark on a journey through stories that resonate with you. With Novel Navigator, your literary adventure is just a click away.</p>
            <p className='fs-17'>For more information feel free to contact: aniketsingh585@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
