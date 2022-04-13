import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
  :root {
    --header-bg-color: #FFE600;
    --body-bg-color: #EEEEEE;

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      min-height: 100%;
      background-color: var(--body-bg-color);
    }
  }
`;
