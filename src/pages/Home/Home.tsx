import styled from "styled-components";
import { Categories } from "./Components/Categories/Categories";
import { ToggleThemeButton } from "./Components/ConfigPanel/subComponents/ToggleThemeButton";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
`

export const Home = () => {
  return (
    <Wrapper>
      <Categories />
      <ToggleThemeButton />
    </Wrapper>
    
  );
}