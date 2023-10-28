import { Item } from '@interfaces';
import { useState } from 'react';
import {
  AiFillMinusCircle,
  AiFillPlusCircle,
  AiOutlineShoppingCart,
} from 'react-icons/ai';
import styled from 'styled-components';
import ImageNotFound from '../../assets/empty_image.png';
import { NotFound } from '../../pages/NotFound/NotFound';
import { formatCurrency } from '../../utils/formatCurrency';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 16px;
  flex-wrap: wrap;
`;

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
  svg,
  button {
    cursor: pointer;
  }
`;

interface Props {
  items: Item[];
  categoryId: string | null;
}

export const Items = ({ items, categoryId }: Props) => {
  const [quantityInCart, setQuantityInCart] = useState(0);
  if (!categoryId) return <NotFound />;

  return (
    <Wrapper>
      {items
        .filter(item => item.category === categoryId)
        .map((item: Item) => (
          <StyledItem key={item.id}>
            <Image src={item?.itemImage || ImageNotFound} />
            <h3>{item.itemName}</h3>
            <p>{item.description}</p>
            <h4>{formatCurrency(item.price)}</h4>
            <ItemsButtonsWrapper>
              <AiFillPlusCircle
                size="20"
                onClick={() => setQuantityInCart(quantityInCart + 1)}
              />
              <QuantityItemsInput />
              <AiFillMinusCircle
                size="20"
                onClick={() => setQuantityInCart(quantityInCart - 1)}
              />
              <CartButton>
                <AiOutlineShoppingCart size="20" />
              </CartButton>
            </ItemsButtonsWrapper>
          </StyledItem>
        ))}
    </Wrapper>
  );
};
