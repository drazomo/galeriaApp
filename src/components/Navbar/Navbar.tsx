import React from 'react';
import { Link } from '../GeneralComponents/General.styled';
import { NavBarContainer, NavIcnContainer, NavIconBtn, NavIconItem, NavIconTitle, NavSearchBar } from './Navbar.styled';
import {ReactComponent as CameraIcon} from './menu_cameraIcon.svg';
import {ReactComponent as HeartIcon} from './menu_heartIcon.svg';
import {ReactComponent as ThemeIcon} from './menu_themeIcon.svg';
import {ReactComponent as SearchIcon} from './menu_searchIcon.svg';



const iconButtons = [
  {sauce: <CameraIcon />, alt: 'Camera Icon', name: 'Photos', className: 'cls__icn_btn_photos'},
  {sauce: <HeartIcon />, alt: 'Heart Icon', name: 'Saved', className: 'cls__icn_btn_heart'},
  {sauce: <ThemeIcon />, alt: 'Theme Icon', name: 'Theme', className: 'cls__icn_btn_theme'},
]

const Navbar = () => {
  return (
    <NavBarContainer>
      <div className="searchBarContainer">
        <NavSearchBar type={'text'} placeholder='Search...'/>
        <div className='searchIcnContainer'>
          <SearchIcon className='searchIcn'/>
        </div>
      </div>
      <NavIcnContainer>
        {iconButtons.map(({sauce, alt, name, className}) => (
          <NavIconItem>
            <NavIconBtn key={`icnBtn_${alt.replace(/\w/g, '')}`} className={className}>
              <Link>
                <div style={{ width: '28px', height: '25px'}}>
                  {sauce}
                </div>
              </Link>
            </NavIconBtn>
            <NavIconTitle>{name}</NavIconTitle>
          </NavIconItem>
        ))
        }
      </NavIcnContainer>
    </NavBarContainer>
  )
}

export default Navbar