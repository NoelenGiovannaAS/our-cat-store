import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { Items } from '../../components';
import { itemsMock } from '../../mock/items';

const ProductsListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 70px;
  gap: 25px;
`;

export const ItemList = () => {
  const [searchParams] = useSearchParams();

  return (
    <ProductsListWrapper>
      <h1>{searchParams.get('name')}</h1>
      <Items items={itemsMock} categoryId={searchParams.get('id')} />
    </ProductsListWrapper>
  );
};
