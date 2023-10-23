import styled from 'styled-components';

const CategoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 50px;
  flex-wrap: wrap;
  margin: 10%
`;

const Category = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
  box-shadow: 3px 4px 5px 0px rgba(0, 0, 0, 0.38);
  border-radius: 50px 50px 50px 50px;
  height: 200px;
  width: 200px;
  background-color: ${(props) => props.theme.colors.primary.main};
  font-size: ${(props) => props.theme.fontSize.normal};
  cursor: pointer;
  `;

export const Categories = () => {
  const categories = ['Alimentação', 'Cuidados', 'Acessórios e Brinquedos'];
  const handleClick = () => {
    console.log("TESTE")
  }
  return (
    <CategoryWrapper>
      {categories.map((category) => (
        <Category key={category} onClick={handleClick}>{category}</Category>
      ))}
    </CategoryWrapper>
  );
};
