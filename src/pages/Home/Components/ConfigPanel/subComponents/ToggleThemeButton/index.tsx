import {  useContext} from "react"
import styled from "styled-components"
import { ThemeContext } from "../../../../../../contexts/ThemeContext"

const Switch = styled.div`
  position: relative;
  width: 60px;
  height: 28px;
  background: #b3b3b3;
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;
    &:before {
        content: "";
        position: absolute;
        width: 28px;
        height: 28px;
        border-radius: 35px;
        top: 50%;
        left: 4px;
        background: white;
        transform: translate(0, -50%);
    }
`

const Input = styled.input.attrs({type: 'checkbox'})`
    opacity: 0;
    position: absolute;
    display: none;
    &:checked + ${Switch}{
        background: green;
        &:before{
            transform: translate(32px, -50%);
        }
    }
`
const Label = styled.label`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const ToggleThemeButton = () => {
    const {toggleTheme, theme} = useContext(ThemeContext);

    return(
        <Label>
            <Input checked={theme === "dark"} onChange={toggleTheme} />
            <Switch />
        </Label>
    );
}