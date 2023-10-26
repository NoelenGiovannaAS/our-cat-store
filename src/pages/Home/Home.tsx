import styled from 'styled-components';
import { Categories } from './sub-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Home = () => {
  return (
    <Wrapper>
      <Categories />
    </Wrapper>
  );
};
