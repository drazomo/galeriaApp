import React from 'react';
import { Link } from '../GeneralComponents/General.styled';
import { NavBarContainer, NavIcnContainer, NavIconBtn, NavSearchBar } from './Navbar.styled';
import {ReactComponent as CameraIcon} from './menu_cameraIcon.svg';
import {ReactComponent as HeartIcon} from './menu_heartIcon.svg';
import {ReactComponent as ThemeIcon} from './menu_themeIcon.svg';



const iconButtons = [
  {sauce: <CameraIcon />, alt: 'Camera Icon'},
  {sauce: <HeartIcon />, alt: 'Heart Icon'},
  {sauce: <ThemeIcon />, alt: 'Theme Icon'},
]

const Navbar = () => {
  return (
    <NavBarContainer>
      <NavSearchBar type={'text'}/>
      <NavIcnContainer>
        {iconButtons.map(({sauce, alt}) => (
            <NavIconBtn key={`icnBtn_${alt.replace(/\w/g, '')}`}>
              <Link>
                {sauce}
              </Link>
            </NavIconBtn>
        ))
        }
      </NavIcnContainer>
    </NavBarContainer>
  )
}

export default Navbar