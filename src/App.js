import React from "react";
import AddComment from "./components/addComment";
import CommentsList from "./components/commentsList";

import styled, { ThemeProvider } from "styled-components";
import theme from "styled-theming";

import GlobalStyles from "./components/globalStyles";

const appTheme = theme("mode", {
  light: {
    primary: "#eb2f64",
    primaryLight: "#ff3366",
    primaryDark: "#ba265d",
    secondary: "#333",
    secondaryLight: "#faf9f9",
    secondaryDary: "#777"
  },
  dark: {}
});

function App() {
  return (
    <GlobalStyles>
      <AddComment />
      <CommentsList />
    </GlobalStyles>
  );
}

export default App;

// --color-primary: #eb2f64;
// --color-primary-light: #ff3366;
// --color-primary-dark: #ba265d;

// --color-grey-light-1: #faf9f9;
// --color-grey-light-2: #f4f2f2;
// --color-grey-light-3: #f0eeee;
// --color-grey-light-4: #ccc;

// --color-grey-dark-1: #333;
// --color-grey-dark-2: #777;
// --color-grey-dark-3: #999;

// --shadow-dark: 0 2rem 6rem rgba(0,0,0,.3);
// --shadow-light: 1px 1px 10px 1px #f4f2f2;
