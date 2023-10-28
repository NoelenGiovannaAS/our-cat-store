import { useContext } from 'react';
import { AiOutlineMenu, AiOutlineShoppingCart } from 'react-icons/ai';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { ModalContext } from '../../contexts/ModalContext';
import { Modal } from './sub-components/Modal';

const HeaderWrapper = styled.header`
  height: 90px;
  width: 100%;
  padding: 20px;
  background-color: ${props => props.theme.colors.secondary.main};
  display: flex;
  justify-content: flex-end;
`;

const Icons = styled.div`
  display: flex;
  gap: 10px;
  * {
    color: ${props => props.theme.colors.secondary.contrastText};
    cursor: pointer;
  }
`;

export const Header = () => {
  const { isOpen, handleModal } = useContext(ModalContext);

  return (
    <>
      <HeaderWrapper>
        <Icons>
          <Link to="/cart">
            <AiOutlineShoppingCart size="50" />
          </Link>
          <AiOutlineMenu size="50" onClick={() => handleModal()} />
        </Icons>
      </HeaderWrapper>
      {isOpen && <Modal />}
      <Outlet />
    </>
  );
};
