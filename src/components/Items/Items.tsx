import { Item } from '@interfaces';
import {
  AiFillDelete,
  AiFillMinusCircle,
  AiFillPlusCircle,
} from 'react-icons/ai';
import styled from 'styled-components';
import ImageNotFound from '../../assets/empty_image.png';
import { NotFound } from '../../pages/NotFound/NotFound';
import { formatCurrency } from '../../utils/formatCurrency';
const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledItem = styled.div`
  display: flex;
  padding: 10px;
  //justify-content: center;
  // align-items: center;
  background-color: ${props => props.theme.colors.primary.main};
  border-radius: 10px;
  box-shadow: 3px 4px 5px 0px rgba(0, 0, 0, 0.3);
  gap: 10px;
`;

const Text = styled.h4``;

const Label = styled.h4``;

const DetailsTexts = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 2;
`;

const Image = styled.img`
  width: 98px;
  height: 98px;
`;

const ManipulateCartIcons = styled.div``;

const QuantityInCartField = styled.div`
  display: flex;
  gap: 10px;
  input {
    width: 2.5rem;
  }
`;

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
            <Image src={item?.itemImage || ImageNotFound} />
            <DetailsTexts>
              <Text>{item.itemName}</Text>
              <p>{item.description}</p>
              <Label>quantidade: </Label>
              <Text>{item.quantity}</Text>
            </DetailsTexts>

            <Text>{formatCurrency(item.price)}</Text>
            <ManipulateCartIcons>
              <QuantityInCartField>
                <AiFillMinusCircle />
                <input />
                <AiFillPlusCircle />
              </QuantityInCartField>

              <AiFillDelete />
            </ManipulateCartIcons>
          </StyledItem>
        ))}
    </ItemsWrapper>
  );
};
