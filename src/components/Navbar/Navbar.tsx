import React, { useState } from 'react';
import { NavBarContainer, NavIcnContainer, NavIconBtn, NavIconItem, NavIconTitle, NavSearchBar } from './Navbar.styled';
import {ReactComponent as CameraIcon} from './menu_cameraIcon.svg';
import {ReactComponent as HeartIcon} from './menu_heartIcon.svg';
import {ReactComponent as ThemeIcon} from './menu_themeIcon.svg';
import {ReactComponent as SearchIcon} from './menu_searchIcon.svg';
import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {
  const path = useLocation().pathname
  const [checked, setChecked] = useState(path === '/saved' ? 'saved': '/' ? 'photos':'themes')

  const iconButtons = [
    {sauce: <CameraIcon />, alt: 'Cam Icon', name: 'Photos', className: 'cls__icn_btn_photos', link: '/'},
    {sauce: <HeartIcon />, alt: 'Heart Icon', name: 'Saved', className: 'cls__icn_btn_heart', link: '/saved'},
    {sauce: <ThemeIcon />, alt: 'Theme Icon', name: 'Themes', className: 'cls__icn_btn_theme', link: '/themes'}
  ]

  const handleIconClick = (value: string) => {
    setChecked(value);
  };

  return (
    <NavBarContainer>
      <div className="searchBarContainer">
        <NavSearchBar type='text' placeholder='Search...'/>
        <div className='searchIcnContainer'>
          <SearchIcon className='searchIcn'/>
        </div>
      </div>
      <NavIcnContainer>
        {iconButtons.map(({sauce, alt, name, className, link}) => (
          <NavIconItem>
            <input 
              type='radio' 
              name='toggle_nav_pages' 
              value={name.toLowerCase()} 
              id={name.toLowerCase()} 
              checked={checked === name.toLowerCase() && true}
            />
            <Link to={link}>
              <NavIconBtn key={`icnBtn_${alt.replace(/\w/g, '')}`} className={className} onClick={() => handleIconClick(name.toLowerCase())}>
                  <div style={{ width: '28px', height: '25px'}}>
                    {sauce}
                  </div>
              </NavIconBtn>
            </Link>
            <NavIconTitle>{name}</NavIconTitle>
          </NavIconItem>
        ))
        }
      </NavIcnContainer>
    </NavBarContainer>
  )
}

export default Navbar