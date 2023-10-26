import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { Items } from '../../components';
import { itemsMock } from '../../mock/items';
const ProductsListWrapper = styled.div`
  background-color: blue;
`;

export const ItemList = () => {
  const [searchParams] = useSearchParams();

  const category = searchParams.get('id');
  return (
    <ProductsListWrapper>
      <Items items={itemsMock} categoryId={category} />
    </ProductsListWrapper>
  );
};
