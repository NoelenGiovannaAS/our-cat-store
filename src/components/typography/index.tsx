import styled, { css } from 'styled-components';
import { LightTheme as theme } from '../../styles/Theme';

interface Itypography {
  elementType?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  margin?: string;
  fontSize?: string;
  color?: keyof typeof theme.colors;
  textAlign?: string;
  children: React.ReactNode;
}

type ItypographyStyle = Omit<Itypography, 'text'>;

//attrs -> styled components que permite definir uma props padrão para esse elemento, sem ter que ficar passando sempre.
// neste caso, ele determina que sempre vai ter a props as= que define o tipo do elemento de acordo com o que é recebido atraves de elementType
//ex: as="a" define-se como archor
const StyledTypography = styled('p').attrs<ItypographyStyle>(
  ({ elementType }) => ({
    as: elementType,
  }),
)<ItypographyStyle>`
  ${({ color = 'primary' }) => css`
    color: ${props => props.theme?.colors?.[color].contrastText};
  `}
  font-size: ${props => props?.fontSize};
  text-align: ${props => props?.textAlign ?? 'initial'};
  margin: ${props => props?.margin ?? 0};
`;

const Typography = ({
  elementType,
  margin,
  fontSize,
  textAlign,
  children,
}: Itypography) => {
  return (
    <StyledTypography
      elementType={elementType}
      margin={margin}
      fontSize={fontSize}
      textAlign={textAlign}
    >
      {children}
    </StyledTypography>
  );
};

export default Typography;
