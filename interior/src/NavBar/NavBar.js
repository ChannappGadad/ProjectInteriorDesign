import { Link } from 'react-router-dom';
import "../NavBar/NavBar.css";
import Images from '../Images/Images';
import React from 'react';

const NavBar = () => {
    return(
        <div className='navigationBar'>
            <ul className='navMenu'>
                <div className='Logo'>
                    <img src={Images.logo} alt='Logo' className='logoImage'/>
                    <a href='#' className='brand'>Interno</a>
                </div>
                <div className='listItems'>
                    <li className='navItem'>
                        <Link to='/' className="link">Home</Link>
                    </li>
                    <li className='navItem'>
                        <Link to='Pages/Pages' className="link">Pages</Link>
                    </li>
                    <li className='navItem'>
                        <Link to='Services/Services' className="link">Services</Link>
                    </li>
                    <li className='navItem'>
                        <Link to='Project/Project' className="link">Project</Link>
                    </li>
                    <li className='navItem'>
                        <Link to='Blog/Blog' className="link">Blog</Link>
                    </li>
                    <li className='navItem'>
                        <Link to='Contact/Contact' className="link">Contact</Link>
                    </li>
                    <li className='navItem'>
                         <i class="fa fa-search" aria-hidden="true"></i>
                    </li>
                </div>
                                                               
            </ul>
        </div>
    )
}

export default NavBar;