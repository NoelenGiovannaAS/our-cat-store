import styled from 'styled-components';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Outlet } from 'react-router-dom';

const HeaderWrapper = styled.header`
  height: 90px;
  width: 100%;
  padding: 20px;
  background-color: ${props => props.theme.colors.secondary.main};
  display: flex;
  justify-content: flex-end;
`;

const CartIcon = styled(AiOutlineShoppingCart)`
  color: ${(props) => props.theme.colors.secondary.contrastText};
`

export const Header = () => (
  <>
    <HeaderWrapper>
      <CartIcon size="50"/>
    </HeaderWrapper>
    <Outlet />
  </>
);
