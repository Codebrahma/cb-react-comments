import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./components/globalStyles";
import { theme } from "./components/theme";
import AppComments from "./components/appComments";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles>
        <AppComments />
      </GlobalStyles>
    </ThemeProvider>
  );
}

export default App;
