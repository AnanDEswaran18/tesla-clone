import React, {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars)
  return (
    
    <Wrap>
      <a>
        <img src="/images/logo.svg" alt=""/>
      </a>
      <Menu>
      {
        cars && cars.map((car,index)=>(
          <a key={index} href="#">{car}</a>
        ))
      }
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CutsomMenu onClick={()=>setBurgerStatus(true)}/>
      </RightMenu>
      <BurgarNav show={burgerStatus}>
        <CustomCloseWrapper><CustomClose onClick={()=>setBurgerStatus(false)}/></CustomCloseWrapper>
        {
          cars && cars.map((car, index) => (
            <li><a key={index} href="#">{car}</a></li>
          ))
        }
        <li><a href="#">Solar Roof</a></li>
        <li><a href="#">Solar Panels</a></li>
        <li><a href="#">Powerwall</a></li>
        <li><a href="#">Inventory</a></li>
        <li><a href="#">Trade-In</a></li>
        <li><a href="#">Utilities</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Support</a></li>
      </BurgarNav>
    </Wrap>
  )
}

export default Header

const Wrap = styled.div`
  position:fixed;
  padding:0 20px;
  min-height:60px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  top:0;
  left:0;
  right:0;
  z-index:1;
`

const Menu = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  flex:1;
  a{
    font-weight:600;
    text-transform:uppercase;
    padding:0 10px;
    flex-wrap:nowrap;
  }

  @media(max-width:800px){
    display:none;
  }
`

const RightMenu = styled.div`
  display:flex;
  align-items:center;
  a{
    font-weight:600;
    text-transform:uppercase;
    margin-right:10px;
  }
`
const CutsomMenu = styled(MenuIcon)`
  cursor:pointer;
`

const BurgarNav = styled.div`
  position:fixed;
  top:0;
  bottom:0;
  right:0;
  background-color:white;
  width:300px;
  z-index:16;
  list-style:none;
  padding:20px;
  text-align:start;
  transform:${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition:transform 0.5s;
  li{
    padding: 15px 0;
    border-bottom:1px solid rgba(0,0,0,2);
    a{
      font-weight:600;
    }
  }
`

const CustomClose = styled(CloseIcon)`
  cursor:pointer;
`

const CustomCloseWrapper = styled.div`
  display:felx;
  justify-content:flex-end;
`