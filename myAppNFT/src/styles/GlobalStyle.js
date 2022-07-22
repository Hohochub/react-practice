const { createGlobalStyle } = require("styled-components");

const GlobalStyles = createGlobalStyle`
","::before, ::after {
    padding: 0;
    margin: 0;
}

h1, h2, h3, h4, h5, h6 {
    padding: 0;
    margin: 0;
}


a {
    color: inherit;
    text-decoration: none;
}
`

export default GlobalStyles;