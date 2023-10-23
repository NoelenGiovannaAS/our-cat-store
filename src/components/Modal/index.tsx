import styled from "styled-components";

const DarkBG = styled.div `
  background-color: rgba(0, 0, 0, 0.2);
  width: 100vw;
  height: 100vh;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`

const Panel = styled.div`
    background-color: ${(props)=> props.theme.colors.primary.main};
`

export const Modal = () => {
    return (
        <DarkBG>
            {console.log("COMPONENTE MODAL RENDEREZADO")}
            <Panel>Teste</Panel>
        </DarkBG>
    );
}