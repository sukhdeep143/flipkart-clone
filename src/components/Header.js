import React, { useState } from 'react'
import Styled, { styled } from 'styled-components'

function Header() {
  const [showMiniWindow, setShowMiniWindow] = useState(false);

  return (
    <Container>
      <img src='/images/flipkart.svg' alt="Flipkart Logo" />

      <InputContainer>
        <SearchIcon src="/images/search.svg" alt="Search Icon" />
        <Input type="text" placeholder="Search..." />
      </InputContainer>

      <LoginButton onMouseEnter={() => setShowMiniWindow(true)} onMouseLeave={() => setShowMiniWindow(false)}>
        <img src='/images/profile-login.svg' alt="Profile Login Icon" />
        Login
        {/* <DropdownArrow src='/images/dropdown.png' alt="Dropdown Arrow" /> */}
        {showMiniWindow && <MiniWindow>Login with Google</MiniWindow>}
      </LoginButton>

      <CartButton>
        <img src='/images/cart.svg' alt="Cart Icon" />
        Cart
      </CartButton>

      <ConnectWithFlipkart>
        <img src='/images/store.svg' alt="Store Icon" />
        Become a Seller
      </ConnectWithFlipkart>

      <More>
        <img src='/images/more.svg' />
        More
      </More>
    </Container>
  )
}

export default Header

const Container = styled.div`
  height: 70px;
  width: 100vw;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 50px;
`

const InputContainer = styled.div`
  display: flex;
  align-items: center;
`

const Input = styled.input`
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-left: 5px;
  padding-right: 137px;
`

const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`

const LoginButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px;
  padding-right: 30px;
  border: 2px;
  border-radius: 10px;
  font-size: 17px;
  transition: all 250ms;
  cursor: pointer;

  &:hover {
    background-color: #0E86D4;
    color: white;
  }
`

const CartButton = styled(LoginButton)`
`

const ConnectWithFlipkart = styled(LoginButton)`
`

const More = styled(LoginButton)`
  img{
    height: 20px;
  }
`

// const DropdownArrow = styled.img`
//   width: 10px;
//   height: 10px;
//   margin-left: 5px;
//   rotate: 100%;
// `

const MiniWindow = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);
  color: black;
`
