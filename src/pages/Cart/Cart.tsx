import { Item } from '@components';
import Typography from 'components/typography';
import { useCartContext } from 'contexts/CartContext/Cart';
import styled from 'styled-components';
import { formatCurrency } from 'utils/formatCurrency';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  flex-wrap: wrap;
  button {
    width: 100px;
  }
`;

const ProductsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Cart = () => {
  const { cart } = useCartContext();
  return (
    <Wrapper>
      <Typography elementType="h2">Itens selecionados:</Typography>
      <ProductsList>
        {cart.items.map(item => (
          <Item {...item} key={item.id} />
        ))}
      </ProductsList>
      <Typography elementType="h2">
        Total da compra: {formatCurrency(cart?.total || 0)}
      </Typography>
      <button>Comprar</button>
    </Wrapper>
  );
};
