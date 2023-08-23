import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Welcome to Novel Navigator</h2><br />
                <p className='header-text fs-18 fw-3'>Step into the captivating universe of literature with Novel Navigator. Let us be your compass through the vast realm of novels.</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header