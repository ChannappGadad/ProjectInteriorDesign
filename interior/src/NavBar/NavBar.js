import { Link } from 'react-router-dom';
import "../NavBar/NavBar.css";

const NavBar = () => {
    return(
        <div>
            <ul className='navMenu'>
                <div>
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
                </div>
                                                               
            </ul>
        </div>
    )
}

export default NavBar;