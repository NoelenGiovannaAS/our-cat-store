import { Item } from '@components';
import { NotFound } from '@pages';
import Typography from 'components/typography';
import { itemsMock } from 'mock/items';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 70px;
  gap: 25px;
  text-align: center;
`;

const ProductsList = styled.div`
  display: flex;
  margin: 5%;
  gap: 25px;
  flex-wrap: wrap;
`;

export const ItemList = () => {
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get('id');
  const categoryName = searchParams.get('category');
  const items = itemsMock.filter(item => item.categoryId === categoryId) ?? '';

  if (!items) return <NotFound />;

  return (
    <Wrapper>
      <Typography elementType="h1">{categoryName}</Typography>
      <ProductsList>
        {items.map(item => (
          <Item {...item} key={item.id} />
        ))}
      </ProductsList>
    </Wrapper>
  );
};
