import { click } from '@testing-library/user-event/dist/click';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css'

function Navbar(){
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const [button, setButton] = useState(true);
    const showButton = () => {
        if(window.innerWidth <= 960){
        setButton(false);
    }
    else {
        setButton(true);
    }
    };

   useEffect(() =>{

    showButton()
   }, []);

     window.addEventListener('resize', showButton);


 return(
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
           <img src="images/petfriend3.png" />
        </Link>
        <div className='menu-icon' onClick={handleClick}> 
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}> 
            <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                </Link>

            </li>
            <li className='nav-item'>
                <Link to='/become' className='nav-links' onClick={closeMobileMenu}>
                    Become an approved PetFriend
                </Link>
                <li className='nav-item'>

                <Link to='PetFriendFind' className='nav-links' onClick={closeMobileMenu}>
                    Find Petfriends
                </Link>
                </li>
                
            </li>
            <li className='nav-item'>
                <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                    About
                </Link>
            </li>
        </ul>
        {button && <Button buttonStyle='btn--outline'>Sign up</Button>}
        </div>
    </nav>
 
    </>
 )
}

export default Navbar;