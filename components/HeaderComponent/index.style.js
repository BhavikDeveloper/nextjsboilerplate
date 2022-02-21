import styled, { css } from "styled-components";
import { mediaQueries } from "../../utils/mediaQuery";

export const HeaderComponentWrapper = styled.div`
  position: relative;
  display: block;
  width: 100%;
  min-height: 60px;
  height: 100%;
  z-index: 1000;
  ${(props) =>
    props.isColorChange &&
    css`
      background-color: red;
      ${mediaQueries("lg")`
       background-color: yellow;
      `}
    `}

  & > .react-bootstrap-nav {
    /* background-color: ${(props) =>
      props.theme.color.primaryColor} !important; */
    padding: 0px;
    min-height: 60px;

    .container-fluid {
      padding: 2px 60px;
      margin: 0;
      width: 100%;
      ${mediaQueries("lg")`
        padding:5px 30px;
      `}
      ${mediaQueries("md")`
        padding-left: 15px;
        padding-right: 15px;
      `}
    }
  }
`;
