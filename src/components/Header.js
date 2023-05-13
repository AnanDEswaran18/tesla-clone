import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt=""/>
      </a>
      <Menu>
        <p><a href="#">Model S</a></p>
        <p><a href="#">Model Y</a></p>
        <p><a href="#">Model 3</a></p>
        <p><a href="#">Model X</a></p>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CutsomMenu></CutsomMenu>
      </RightMenu> 
    </Container>
  )
}

export default Header

const Container = styled.div`
  position:fixed;
  padding:0 20px;
  min-height:60px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  top:0;
  left:0;
  right:0;
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