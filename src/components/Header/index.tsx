import styled, { DefaultTheme } from 'styled-components';
import { AiOutlineMenu, AiOutlineShoppingCart } from 'react-icons/ai';
import { Link, Outlet } from 'react-router-dom';
import { Modal } from '../Modal';
import { useEffect, useState } from 'react';

const HeaderWrapper = styled.header`
  height: 90px;
  width: 100%;
  padding: 20px;
  background-color: ${props => props.theme.colors.secondary.main};
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  * {
    color: ${(props) => props.theme.colors.secondary.contrastText};
    cursor: pointer;
  }
`;

export const Header = () => {
  const [open, setOpen] = useState(false)

  return(
  <>
    <HeaderWrapper>
      <Link to="/cart"><AiOutlineShoppingCart size="50" /></Link>
      <AiOutlineMenu size="50" onClick={() => setOpen(!open)}/>
        {open && <Modal />}
    </HeaderWrapper>
    <Outlet />
  </>
  );
}
