import { IItem } from '@interfaces';
import ImageNotFound from 'assets/empty_image.png';
import Typography from 'components/typography';
import { useCartContext } from 'contexts/CartContext/Cart';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import styled from 'styled-components';
import { formatCurrency } from 'utils/formatCurrency';

const StyledItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${props => props.theme.colors.primary.main};
  border-radius: 10px;
  box-shadow: 3px 4px 5px 0px rgba(0, 0, 0, 0.3);
  padding: 15px;
  gap: 5px;
  width: 300px;
  h3,
  p {
    max-width: 30vh;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    &:hover {
      white-space: normal;
    }
  }
`;

const Image = styled.img`
  width: 90px;
  height: 90px;
`;

const CartButton = styled.button`
  width: 85px;
  height: 25px;
  border-radius: 6px;
`;

const QuantityItemsInput = styled.input`
  border: none;
  background-color: transparent;
  text-align: center;
  width: 45px;
`;

const ItemsButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  margin: 10px;
`;

const Icon = styled.button`
  border: none;
  background-color: transparent;
  color: ${props =>
    props.disabled ? 'grey' : props.theme.colors.primary.contrastText};
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
`;

export const Item = (item: IItem, cartPage: boolean) => {
  const { addItem, removeItem, cart } = useCartContext();
  const itemCart = cart.items.find(itemCart => itemCart.id === item.id);
  const quantity = itemCart?.quantity;

  return (
    <StyledItem key={item.id}>
      <Image src={item?.itemImage || ImageNotFound} />
      <Typography elementType="h3">{item.itemName}</Typography>
      <Typography>{item.description}</Typography>
      <Typography elementType="h4">{formatCurrency(item.price)}</Typography>

      <ItemsButtonsWrapper>
        <Icon onClick={() => addItem(item)}>
          <AiFillPlusCircle size="20" />
        </Icon>

        {quantity ?? 0}
        <Icon
          disabled={!quantity}
          onClick={() => removeItem(item.id, item.price)}
        >
          <AiFillMinusCircle size="20" />
        </Icon>
      </ItemsButtonsWrapper>
    </StyledItem>
  );
};
