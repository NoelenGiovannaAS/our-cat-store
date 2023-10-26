import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const CategoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 50px;
  flex-wrap: wrap;
  margin: 10%;
`;

const Category = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
  box-shadow: 3px 4px 5px 0px rgba(0, 0, 0, 0.38);
  border-radius: 50px;
  height: 200px;
  width: 200px;
  background-color: ${props => props.theme.colors.primary.main};
  font-size: ${props => props.theme.fontSize.normal};
  cursor: pointer;
`;

export const Categories = () => {
  const categories = [
    { id: 1, categoryName: 'Alimentação' },
    { id: 2, categoryName: 'Cuidados' },
    { id: 3, categoryName: 'Acessórios e Brinquedos' },
  ];
  const navigate = useNavigate();

  return (
    <CategoryWrapper>
      {categories.map(category => (
        <Category
          key={category.id}
          onClick={() =>
            navigate({
              pathname: '/category',
              search: `id=${category.id}`,
            })
          }
        >
          {category.categoryName}
        </Category>
      ))}
    </CategoryWrapper>
  );
};
