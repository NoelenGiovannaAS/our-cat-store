import { Item } from '@interfaces';
import styled from 'styled-components';
import { NotFound } from '../../pages/NotFound/NotFound';
const ItemsWrapper = styled.div``;

const StyledItem = styled.div``;

const Text = styled.h3``;

interface Props {
  items: Item[];
  categoryId: string | null;
}

export const Items = ({ items, categoryId }: Props) => {
  if (!categoryId) return <NotFound />;

  return (
    <ItemsWrapper>
      {items
        .filter(item => item.category === categoryId)
        .map((item: Item) => (
          <StyledItem key={item.id}>
            <img src={item.itemImage} alt={item.itemName} />
            <Text>{item.itemName}</Text>
          </StyledItem>
        ))}
    </ItemsWrapper>
  );
};
